import {
  isRdData,
  literalToRdData_Custom,
  rdActionIsSys,
  rdDataIsBind,
  rdDataisCustom,
  rdDataIsTable,
} from './shared/helper';
import * as t from '@babel/types';
import {
  ArrayExpression,
  ArrowFunctionExpression,
  BinaryExpression,
  BooleanLiteral,
  CallExpression,
  DecimalLiteral,
  Expression,
  ExpressionStatement,
  MemberExpression,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  ObjectProperty,
  StringLiteral,
  Identifier,
} from '@babel/types';
import { CompilePageCtx } from '../../compilePages';
import { searchModulePathKeys } from '../searchPath';
import { tools } from '@/utils/tools';
import { getNodeEventKeyByNodeId, getNodePropKeyByNodeId } from '../script-helper';
import { genVarName } from '../helper';

type ActionAst = CallExpression | BinaryExpression;
type BindAst =
  | MemberExpression
  | ArrayExpression
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | ObjectExpression
  | DecimalLiteral
  | CallExpression
  | NullLiteral
  | Identifier;

type BindRdData =
  | CodeSchema.DataValue_GetVar
  | CodeSchema.DataValue_GetApiData
  | CodeSchema.DataValue_GetParam
  | CodeSchema.DataValue_GetEventData
  | CodeSchema.DataValue_GetSlotData
  | CodeSchema.DataValue_GetEachData
  | CodeSchema.DataValue_GetArguments
  // | CodeSchema.DataValue_GetModelData
  | CodeSchema.DataValue_GetCmptPropData
  | CodeSchema.DataValue_TableData;

type LiteralAst =
  | ArrayExpression
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | ObjectExpression
  | DecimalLiteral
  | CallExpression;

type BindParseCtx = {
  global: CompilePageCtx['global'];
  scope: CompilePageCtx['scope'] & {
    node: CodeSchema.ComponentNode;
    prop?: CodeSchema.Property;
    event?: CodeSchema.Event;
    actions: {
      genVarName: ReturnType<typeof genVarName>
      map: {
        [id: CodeSchema.Action['id']]: {
          data: CodeSchema.Action;
          protocol: CodeSchema.Action_Protocol;
          varName: string
          parametersVarNames:{
            [id: CodeSchema.Action_Protocol['parameters'][number]['id']]: {
              protocol: CodeSchema.Action_Protocol['parameters'][number];
              varName: string
              memberVarNames: {
                [id: CodeSchema.Property_Protocol['id']]: {
                  protocol: CodeSchema.Property_Protocol;
                  varName: string
                }
              }
            }
          },
        };
      };
    },
  };
};

/** helper  start*/

// TODO:helper范围内的代码后面要抽出去

export const isSlot = (tagId: string, ctx: BindParseCtx) => {
  return ctx.global.componentsStore.getCmpt(tagId).key === 'slot';
};

export const isEach = (tagId: string, ctx: BindParseCtx) => {
  return ctx.global.componentsStore.getCmpt(tagId).key === 'each';
};

export const isEachOrSlot = (tagId: string, ctx: BindParseCtx) => {
  return (
    ctx.global.componentsStore.getCmpt(tagId).key === 'slot' || ctx.global.componentsStore.getCmpt(tagId).key === 'each'
  );
};

export const isAstType = (ref: ReturnRef): ref is { type: 'ast'; value: ActionAst | BindAst | undefined } => {
  return ref.type === 'ast';
};

export const isTableType = (ref: ReturnRef): ref is { type: 'table'; value: TableProps | undefined } => {
  return ref.type === 'table';
};

// 拼接循环节点的item变量名
export const getEachItemVarName = (eachVarName: string) => `${eachVarName}_item`;
// 拼接循环节点的index变量名
export const getEachIndexVarName = (eachVarName: string) => `${eachVarName}_index`;
// 拼接插槽节点的作用域插槽变量
export const getSlotVarName = (slotVarName: string) => `${slotVarName}_slot`;
// 拼接事件入参变量
export const getEventArgVarName = (argName: string) => `event_${argName}`;

// 得到节点的上下文节点
export const nodeCtx = (nodeId: string, ctx: BindParseCtx) => {
  const parents = ctx.scope.page.nodesStore.parents(nodeId, (node) => isEachOrSlot(node.data.tagId, ctx));
  return parents.map((item) => ctx.scope.page.nodesVarNames[item.id]);
};

/** helper end*/

const defaultAst = (ctx: BindParseCtx, types?: CodeSchema.PropertyType_Protocol[]) => {
  if (!types?.[0]) {
    return t.nullLiteral();
  }
  switch (types[0].type) {
    case 'text':
    case 'richText':
    case 'password':
    case 'email':
    case 'mobilePhone':
    case 'telephone':
    case 'fax': {
      return t.stringLiteral('');
    }
    case 'number': {
      return t.numericLiteral(NaN);
    }
    case 'whether': {
      return t.nullLiteral();
    }
    case 'module': {
      return t.objectExpression([]);
    }
    case 'array': {
      return t.arrayExpression([]);
    }
    case 'url': {
      return t.stringLiteral('');
    }
    case 'option': {
      return t.stringLiteral('');
    }
  }
  return;
};

const toAstMethods = {
  getVar: (data: CodeSchema.DataValue_GetVar, ctx: BindParseCtx): MemberExpression => {
    const types = ctx.scope.page.variablesStore.get(data.args.id).types;
    if (!types) {
      throw new Error('getVar的id的types获取失败');
    }
    const rootName = ctx.global.variablesRootName; // 变量外层的变量名
    const varName = ctx.scope.page.variablesNames[data.args.id].varName; // 变量名
    const paths = searchModulePathKeys(types, data.args.path || []); // 路径中的每个属性名
    const memberExpr = (paths: string[]): MemberExpression => {
      const [varStr, ...memberPaths] = paths;
      if (memberPaths.length !== 1) {
        return t.memberExpression(memberExpr(memberPaths), t.identifier(varStr));
      } else {
        return t.memberExpression(t.identifier(varStr), t.identifier(memberPaths[0]));
      }
    };
    return memberExpr([...paths.reverse(), rootName, varName]);
  },
  getApiData: (data: CodeSchema.DataValue_GetApiData, ctx: BindParseCtx): MemberExpression => {
    const [dataName, bodyId, ...argPaths] = data.args.path || [];
    const rootName = ctx.global.apiVarRootName; // 变量外层的变量名
    const varName = ctx.global.apisStore.getApi(data.args.id).key; // 变量名 这里去api映射的varName
    const types = bodyId ? ctx.global.apisStore.getApiBody(data.args.id, bodyId) : [];
    const paths = searchModulePathKeys(types, argPaths); // 路径中的每个属性名
    const memberExpr = (paths: string[]): MemberExpression => {
      const [varStr, ...memberPaths] = paths;
      if (memberPaths.length !== 1) {
        return t.memberExpression(memberExpr(memberPaths), t.identifier(varStr));
      } else {
        return t.memberExpression(t.identifier(varStr), t.identifier(memberPaths[0]));
      }
    };
    return memberExpr([...paths.reverse(), dataName, varName, rootName]);
  },
  getParam: (data: CodeSchema.DataValue_GetParam, ctx: BindParseCtx): MemberExpression => {
    // 页面路由参数 router.query.xxx
    if (!data.args.id) {
      throw new Error('getParam的data.args.id失败');
    }
    let query = ctx.global.pagesStore.getQuery(ctx.scope.page.page.id, data.args.id);
    if (!query) {
      throw new Error('getEventData的query失败');
    }
    const varName = query.key; // 变量外层的变量名
    const paths = searchModulePathKeys(query.types, data.args.path || []); // 路径中的每个属性名
    const memberExpr = (paths: string[]): MemberExpression => {
      const [varStr, ...memberPaths] = paths;
      if (memberPaths.length !== 1) {
        return t.memberExpression(memberExpr(memberPaths), t.identifier(varStr));
      } else {
        return t.memberExpression(t.identifier(varStr), t.identifier(memberPaths[0]));
      }
    };
    return memberExpr([...paths.reverse(), varName, 'query', 'router']);
  },
  getEventData: (data: CodeSchema.DataValue_GetEventData, ctx: BindParseCtx): MemberExpression | Identifier => {
    // 事件参数 @click="(evt,prop) => {const temp = `${evt.target}`;const temp1 = `${prop}`}"
    if (!data.args.id) {
      throw new Error('getEventData的data.args.id失败');
    }
    // 通过参数id拿到key和types
    let param = getParam(data.args.id);
    const varName = param.key; // 变量外层的变量名
    const types = param.types || []; // 变量外层的变量名
    const paths = searchModulePathKeys(types, data.args.path || []); // 路径中的每个属性名
    if (paths.length === 0) {
      return t.identifier(varName);
    }
    const memberExpr = (paths: string[]): MemberExpression => {
      const [varStr, ...memberPaths] = paths;
      if (memberPaths.length !== 1) {
        return t.memberExpression(memberExpr(memberPaths), t.identifier(varStr));
      } else {
        return t.memberExpression(t.identifier(varStr), t.identifier(memberPaths[0]));
      }
    };
    return memberExpr([...paths.reverse(), varName]);
  },
  getSlotData: (data: CodeSchema.DataValue_GetSlotData, ctx: BindParseCtx): CallExpression => {
    // TODO: 待定
  },
  getEachData: (data: CodeSchema.DataValue_GetEachData, ctx: BindParseCtx): CallExpression => {
    // TODO: 待定
    // if (!types) {
    //   throw new Error('getVar的id的types获取失败');
    // }
    // const varName = ctx.scope.page.nodesVarNames[data.args.id]; // 变量名
    // const key = data.args.path[0]
    // const path = data.args.path?.slice(1) || []
    // return t.memberExpression(id);
  },
  getCmptPropData: (data: CodeSchema.DataValue_GetCmptPropData, ctx: BindParseCtx): CallExpression => {},
  getArguments: (data: CodeSchema.DataValue_GetArguments, ctx: BindParseCtx): CallExpression => {},
  tableData: (data: CodeSchema.DataValue_TableData, ctx: BindParseCtx): CallExpression => {},
  fx: (data: CodeSchema.DataValue, ctx: BindParseCtx): CallExpression => {},
  set: (data: CodeSchema.Action, ctx: BindParseCtx): CallExpression => {},
  setVar: (data: CodeSchema.Action_SetVar, ctx: BindParseCtx): CallExpression => {},
  setApiData: (data: CodeSchema.Action, ctx: BindParseCtx): CallExpression => {},
  api: (data: CodeSchema.Action, ctx: BindParseCtx): CallExpression => {},
  open: (data: CodeSchema.Action, ctx: BindParseCtx): CallExpression => {},
  callAction: (data: CodeSchema.Action, ctx: BindParseCtx): CallExpression => {},
};

const bindToAst = (data: BindRdData, ctx: BindParseCtx): BindAst | undefined => {
  switch (data.mode) {
    case 'getVar': {
      return toAstMethods.getVar(data, ctx);
    }
    case 'getApiData': {
      return toAstMethods.getApiData(data, ctx);
    }
    case 'getParam': {
      return toAstMethods.getParam(data, ctx);
    }
    case 'getEventData': {
      return toAstMethods.getEventData(data, ctx);
    }
    case 'getSlotData': {
      return toAstMethods.getSlotData(data, ctx);
    }
    case 'getEachData': {
      return toAstMethods.getEachData(data, ctx);
    }
    // case 'getModelData': {
    //   return toAstMethods.getModelData(data, ctx);
    // }
    case 'getCmptPropData': {
      return toAstMethods.getCmptPropData(data, ctx);
    }
    case 'getArguments': {
      return toAstMethods.getArguments(data, ctx);
    }
  }
  return;
};

export const actionToAst = (data: CodeSchema.Action, ctx: BindParseCtx): ActionAst | undefined => {
  switch (data.mode) {
    case 'setVar':
      return toAstMethods.setVar(data as CodeSchema.Action_SetVar, ctx);

    case 'setApiData': {
      return toAstMethods.setApiData(data, ctx);
    }
    case 'open': {
      return toAstMethods.open(data, ctx);
    }
    case 'set': {
      return toAstMethods.set(data, ctx);
    }
    case 'api': {
      return toAstMethods.api(data, ctx);
    }
    default: {
      return toAstMethods.callAction(data, ctx);
    }
  }
};

export const actionsToAst = (eventId: string, ctx: CompilePageCtx): ExpressionStatement[] => {
  return []
};

const literalToAst = (
  data: CodeSchema.DataValue_Custom,
  ctx: BindParseCtx,
  types?: CodeSchema.PropertyType_Protocol[]
): LiteralAst => {
  switch (data.args.type) {
    case 'text':
    case 'richText':
    case 'password':
    case 'email':
    case 'mobilePhone':
    case 'telephone':
    case 'fax': {
      if (typeof data.args.value !== 'string') {
        throw new Error('不是文本');
      }
      return t.stringLiteral(data.args.value);
    }
    case 'number': {
      if (typeof data.args.value !== 'number') {
        throw new Error('不是数字');
      }
      if (Math.round(data.args.value) !== data.args.value) {
        return t.decimalLiteral(data.args.value.toString());
      }
      return t.numericLiteral(data.args.value);
    }
    case 'whether': {
      if (typeof data.args.value !== 'boolean') {
        throw new Error('不是布尔');
      }
      return t.booleanLiteral(data.args.value);
    }
    case 'module': {
      if (!Array.isArray(data.args.value)) {
        throw new Error('不是module数组');
      }
      const kv: ObjectProperty[] = [];
      data.args.value.forEach((item) => {
        const ast = valueToAst(item.value, ctx, types);
        if (!ast.value || ast.type === 'table') {
          return;
        }
        kv.push(t.objectProperty(t.identifier(item.key), ast.value as BindAst));
      });
      return t.objectExpression(kv);
    }
    case 'array': {
      if (!Array.isArray(data.args.value)) {
        throw new Error('不是数组');
      }

      const array: Expression[] = [];
      data.args.value.forEach((item) => {
        const ast = valueToAst(item.value, ctx, types);
        if (!ast.value || ast.type === 'table') {
          return;
        }
        array.push(ast.value as BindAst);
      });
      return t.arrayExpression(array);
    }
    case 'url': {
      // TODO:分外部和内部链接
    }
    case 'option': {
      if (typeof data.args.value !== 'string') {
        throw new Error('option的值必须是文本(id)');
      }
      return t.stringLiteral(data.args.value);
      // TODO:本期直接使用value,后续要改成引用id, 通过下面的代码处理

      // const type = types?.find((item) => item.type === 'option');
      // if (!type) {
      //   throw new Error('option未定义');
      // }
      // const optionItem = type.rules?.items?.find((item) => item.id === data.args.value);
      // if (typeof optionItem?.value !== 'string') {
      //   throw new Error('option的项没有对应的值数据');
      // }
      // return t.stringLiteral(optionItem?.value);
    }
  }
  throw new Error('rdData_custom中的类型"' + data.args.type + '"不支持编译');
};

type TableProps = {
  _table_: true;
  columns: {
    key: string;
    value: ArrayExpression;
  };
  dataSource: {
    key: string;
    value: ArrayExpression;
  };
};

export const isTableAst = (data: any): data is TableProps => {
  return (
    tools.dataType.isObject(data) &&
    data._table_ === true &&
    tools.object.has(data, 'columns') &&
    tools.object.has(data, 'dataSource')
  );
};

const tableDataToAst = (
  data: CodeSchema.DataValue_TableData,
  ctx: BindParseCtx,
  types?: CodeSchema.PropertyType_Protocol[]
): TableProps => {
  const res: TableProps = {
    _table_: true,
    columns: {
      key: '',
      value: t.arrayExpression(),
    },
    dataSource: {
      key: '',
      value: t.arrayExpression(),
    },
  };
  return res;
};

type ReturnRef = {
  type: 'table' | 'ast';
  value?: ActionAst | BindAst | TableProps | undefined;
};

const valueToAst = (
  data: CodeSchema.DataValueArgument | CodeSchema.Action,
  ctx: BindParseCtx,
  types?: CodeSchema.PropertyType_Protocol[]
): ReturnRef => {
  const res: {
    type: 'table' | 'ast';
    value?: ActionAst | BindAst | TableProps | undefined;
  } = {
    type: 'ast',
  };
  if (rdActionIsSys(data)) {
    res.value = actionToAst(data, ctx);
  } else if (!isRdData(data)) {
    res.value = literalToAst(literalToRdData_Custom(data), ctx, types);
  } else if (rdDataisCustom(data)) {
    res.value = literalToAst(data, ctx, types);
  } else if (rdDataIsBind(data)) {
    res.value = bindToAst(data, ctx);
  } else if (rdDataIsTable(data)) {
    res.type = 'table';
    res.value = tableDataToAst(data, ctx);
    return res;
  } else {
    res.value = toAstMethods.fx(data, ctx);
  }
  return res;
};

export const nodePropsAst = (nodeId: string, ctx: CompilePageCtx): ObjectProperty[] => {
  const propProps: ObjectProperty[] = [];
  const eventProps: ObjectProperty[] = [];
  const node = ctx.scope.page.nodesStore.getNode(nodeId);
  const bindParseCtx: BindParseCtx = Object.assign({}, ctx, {
    scope: {
      node: node,
      actions: {
        genVarName: genVarName(),
        map: {}
      }
    }
  })
  if (!node.props?.length && !node.events?.length) {
    return [];
  }
  if (node.props?.length) {
    node.props.forEach((prop) => {
      const res = nodePropValueAst(node.id, prop.propId, bindParseCtx);
      if (res) {
        if (isAstType(res)) {
          const ast = res.value;
          if (ast) {
            propProps.push(t.objectProperty(t.identifier(getNodePropKeyByNodeId(node.id, prop.propId, ctx)), ast));
          }
        } else if (isTableType(res)) {
          const tableProp = res.value;
          if (tableProp) {
            propProps.push(
              t.objectProperty(
                t.identifier(getNodePropKeyByNodeId(node.id, prop.propId, ctx)),
                t.objectExpression([
                  t.objectProperty(t.identifier(tableProp.columns.key), tableProp.columns.value),
                  t.objectProperty(t.identifier(tableProp.dataSource.key), tableProp.dataSource.value),
                ])
              )
            );
          }
        } else {
        }
      }
    });
  }
  if (node.events?.length) {
    node.events.forEach((event) => {
      const ast = nodeEventValueAst(node.id, event.eventId, bindParseCtx);
      if (ast) {
        propProps.push(t.objectProperty(t.identifier(getNodeEventKeyByNodeId(node.id, event.eventId, ctx)), ast));
      }
    });
  }

  return propProps.concat(eventProps);
};

export const nodePropValueAst = (nodeId: string, propId: string, ctx: BindParseCtx): ReturnRef => {
  const node = ctx.scope.page.nodesStore.getNode(nodeId);
  let prop = ctx.scope.page.nodesStore.getNodeProp(nodeId, propId);
  const define = ctx.global.componentsStore.getProp(node.tagId, propId);
  if (!prop.value) {
    return {
      type: 'ast',
      value: defaultAst(ctx, define.types),
    };
  }
  ctx.scope.prop = prop;
  const res = valueToAst(prop.value, ctx, define.types);
  return res;
};

export const nodeEventValueAst = (
  nodeId: string,
  eventId: string,
  ctx: BindParseCtx
): ArrowFunctionExpression | undefined => {
  const node = ctx.scope.page.nodesStore.getNode(nodeId);
  const event = ctx.scope.page.nodesStore.getNodeEvent(nodeId, eventId);
  const define = ctx.global.componentsStore.getEmit(node.tagId, eventId);
  ctx.scope.event = event;
  if (!event.actions) {
    return;
  }
  const parems =
    define.parameters?.map((item) => {
      return t.identifier(getEventArgVarName(item.key));
    }) || [];
  parems.push(t.identifier(getEventArgVarName('ctx')));

  const body: ExpressionStatement[] = [];
  event.actions.forEach((item) => {
    const action = actionToAst(item, ctx);
    if (!action) {
      return;
    }
    body.push(t.expressionStatement(action));
  });

  return t.arrowFunctionExpression(parems, t.blockStatement(body));
};

/*
<box title="nodesState.box.title">
  <template #default="box_slot">
    <template v-for="(each_item, each_index) in nodesState.each.data"> <!-- 匿名节点 -->
      <template v-for="(each2_item, each2_index) in each_item"> <!-- 匿名节点 -->
        <template v-for="(box2_item, box2_index) in add(textjoin(textjoin(textjoin_textjoin2_textjoin3_arg1,"asdasd")))"> <!-- 具名节点(盒子) -->
          <template v-for="(box3_item, box3_index) in xxxxxx"> <!-- 具名节点(盒子) -->
            <box title="vars.title">
              <template #default="box4_slot">
                <articleForm @click="(...args) => articleForm.onClick(...args, {
                  box_slot
                  each_item,
                  each2_item,
                  box3_item,
                  each_index,
                  each2_index,
                  box3_index,
                  each_each2_index,
                  slot_box3,
                  box_slot4
                })" />
              </template>
            </box>
          </template>
        </template>
        <box title="vars.title">
          <template #default="box5_slot">
            <articleForm @click="(...args) => articleForm.onClick(...args, {
              box_slot
              each_item,
              each_index,
            })" />
          </template>
        </box>
      </template>
    </template>
  </template>
</box>

const apis = reactive({
  xxx: {},
  yyy: {},
})
const vars = reactive({
  title: '标题',
  articleData: {},
  articleData2: {}
  xxxx: []
})
const nodesState = reactive({
  each: {
    data: xxxx
  },
  each2: {
    data: xxxx
  },
  box: {
    title: vars.title
  },
  box2: {
    data: (data) => data
  },
  box3: {
    title: (data) => data
  },
  articleForm: {
    onSubmit(formData, ctx) {
      // 提前创建变量名映射表
      xx = asdasd()

      const a = xx('a') //a 
      const b = xx('a') //a2
      const b = xx('a') //a3
      remote_xxxxx('xxxx/xxxxx', {
        title: ctx.each_item.title
        a: formData.a,
        b: formData.b,
      }, (remote_xxxxx_res: any, data) => {
        apis.xxx = remote_xxxxx_res

        remote_xxxxx('yyyyy/yyyyyyy', {
          title: ctx.box_slot.title
          a: formData.a,
          b: formData.b,
        }, (remote_xxxxx_remote_xxxxx_res: any) => {
          apis.yyy = remote_xxxxx_res
          
          vars.articleData = remote_xxxxx_res.data
          vars.articleData2 = remote_xxxxx2_res.data
        })
      })
    },
  }
})

*/
