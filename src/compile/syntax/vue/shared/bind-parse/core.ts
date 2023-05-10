import { IdentifierValueArgs } from '@/types/code-schema/Identifier';
import { DBWSchema } from '@/types/DBWSchema';
import { isRdData, literalToRdData_Custom, rdDataIsBind, rdDataisCustom } from './shared/helper';
import * as t from '@babel/types';
import {
  ArrayExpression,
  ArrowFunctionExpression,
  BinaryExpression,
  BooleanLiteral,
  CallExpression,
  DecimalLiteral,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  StringLiteral,
} from '@babel/types';
import { CompilePageCtx } from '../../compilePages';
import { searchModulePathKeys } from '../searchPath';
import { ICS_Event, IEvent } from '@/types/event';

type BindAst =
  | NullLiteral
  | ArrayExpression
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | ObjectExpression
  | DecimalLiteral
  | CallExpression;

type BindRdData =
  | DBWSchema.RdData_GetVar
  | DBWSchema.RdData_GetApiData
  | DBWSchema.RdData_GetParam
  | DBWSchema.RdData_GetEventData
  | DBWSchema.RdData_GetSlotData
  | DBWSchema.RdData_GetEachData
  | DBWSchema.RdData_GetModelData
  | DBWSchema.RdData_GetCmptPropData
  | DBWSchema.RdData_TableData;

type LiteralAst =
  | ArrayExpression
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | ObjectExpression
  | DecimalLiteral
  | CallExpression;

/** helper  start*/

// TODO:helper范围内的代码后面要抽出去

export const isSlot = (tagId: string, ctx: CompilePageCtx) => {
  return ctx.componentsStore.getCmpt(tagId).key === 'slot';
};

export const isEach = (tagId: string, ctx: CompilePageCtx) => {
  return ctx.componentsStore.getCmpt(tagId).key === 'each';
};

export const isEachOrSlot = (tagId: string, ctx: CompilePageCtx) => {
  return ctx.componentsStore.getCmpt(tagId).key === 'slot' || ctx.componentsStore.getCmpt(tagId).key === 'each';
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
export const nodeCtx = (nodeId: string, ctx: CompilePageCtx) => {
  const parents = ctx.nodesStore.parents(nodeId, (node) => isEachOrSlot(node.data.tagId, ctx));
  return parents.map((item) => ctx.nodesVarNames[item.id]);
};

/** helper end*/

const defaultAst = (ctx: CompilePageCtx, types?: DBWSchema.RdDefinePropType[]) => {
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
  getVar: (data: DBWSchema.RdData_GetVar, ctx: CompilePageCtx): t.MemberExpression => {
    const types = ctx.variablesStore.get(data.args.id).types;
    if (!types) {
      throw new Error('getVar的id的types获取失败');
    }
    const rootName = ctx.variablesRootName; // 变量外层的变量名
    const varName = ctx.variablesNames[data.args.id].varName; // 变量名
    const paths = searchModulePathKeys(types, data.args.path || []); // 路径中的每个属性名
    const memberExpr = (paths: string[]): t.MemberExpression => {
      const [varStr, ...memberPaths] = paths;
      if (memberPaths.length !== 1) {
        return t.memberExpression(memberExpr(memberPaths), t.identifier(varStr));
      } else {
        return t.memberExpression(t.identifier(varStr), t.identifier(memberPaths[0]));
      }
    };
    return memberExpr([...paths.reverse(), rootName, varName]);
  },
  getApiData: (data: DBWSchema.RdData_GetApiData, ctx: CompilePageCtx): t.MemberExpression => {
    const protocol = ctx.apisStore.getApi(data.args.id).protocol;
    const types = protocol.response.body?.[0].types || [];
    const rootName = ctx.apiVarRootName; // 变量外层的变量名
    const varName = protocol.key; // 变量名
    const [dataName, ...argPaths] = data.args.path || [];
    const paths = searchModulePathKeys(types, argPaths || []); // 路径中的每个属性名
    const memberExpr = (paths: string[]): t.MemberExpression => {
      const [varStr, ...memberPaths] = paths;
      if (memberPaths.length !== 1) {
        return t.memberExpression(memberExpr(memberPaths), t.identifier(varStr));
      } else {
        return t.memberExpression(t.identifier(varStr), t.identifier(memberPaths[0]));
      }
    };
    return memberExpr([...paths.reverse(), dataName, varName, rootName]);
  },
  getParam: (data: DBWSchema.RdData_GetParam): CallExpression => {},
  getEventData: (data: DBWSchema.RdData_GetEventData): CallExpression => {},
  getSlotData: (data: DBWSchema.RdData_GetSlotData): CallExpression => {},
  getEachData: (data: DBWSchema.RdData_GetEachData, ctx: CompilePageCtx): CallExpression => {
    // const types = ctx.nodesStore;
    // if (!types) {
    //   throw new Error('getVar的id的types获取失败');
    // }
    // const varName = ctx.nodesVarNames[data.args.id]; // 变量名
    // const key = data.args.path[0]
    // const path = data.args.path?.slice(1) || []
    // return t.memberExpression(id);
  },
  getCmptPropData: (data: DBWSchema.RdData_GetCmptPropData, ctx: CompilePageCtx): CallExpression => {},
  tableData: (data: DBWSchema.RdAction, ctx: CompilePageCtx): CallExpression => {},
  fx: (data: DBWSchema.RdData, ctx: CompilePageCtx): CallExpression => {},
  set: (data: DBWSchema.RdAction, ctx: CompilePageCtx): CallExpression => {},
  setVar: (data: DBWSchema.RdAction, ctx: CompilePageCtx): CallExpression => {},
  setApiData: (data: DBWSchema.RdAction, ctx: CompilePageCtx): CallExpression => {},
  api: (data: DBWSchema.RdAction, ctx: CompilePageCtx): CallExpression => {},
  open: (data: DBWSchema.RdAction, ctx: CompilePageCtx): CallExpression => {},
  callAction: (data: DBWSchema.RdAction, ctx: CompilePageCtx): CallExpression => {},
};

const bindToAst = (data: BindRdData, ctx: CompilePageCtx) => {
  switch (data.mode) {
    case 'getVar': {
      return methods.getVar(data, ctx);
    }
    case 'getApiData': {
      return methods.getApiData(data);
    }
    case 'getParam': {
      return methods.getParam(data);
    }
    case 'getEventData': {
      return methods.getEventData(data);
    }
    case 'getSlotData': {
      return methods.getSlotData(data);
    }
    case 'getEachData': {
      return methods.getEachData(data);
    }
    case 'getModelData': {
      return methods.getModelData(data);
    }
    case 'getCmptPropData': {
      return methods.getCmptPropData(data);
    }
    case 'tableData': {
      return methods.tableData(data);
    }
  }
};
const literalToAst = (
  data: DBWSchema.RdData_Custom,
  ctx: CompilePageCtx,
  types?: DBWSchema.RdDefinePropType[]
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

      return t.objectExpression(
        data.args.value.map((item) => t.objectProperty(t.identifier(item.key), methods.unknown(item.value)))
      );
    }
    case 'array': {
      if (!Array.isArray(data.args.value)) {
        throw new Error('不是数组');
      }

      return t.arrayExpression(data.args.value.map((item) => methods.unknown(item)));
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
const valueToAst = (data: IdentifierValueArgs, ctx: CompilePageCtx, types?: DBWSchema.RdDefinePropType[]): BindAst => {
  if (!isRdData(data)) {
    return literalToAst(literalToRdData_Custom(data), ctx, types);
  }
  if (rdDataisCustom(data)) {
    return literalToAst(data, ctx, types);
  } else if (rdDataIsBind(data)) {
    return bindToAst(data, ctx);
  }
  return toAstMethods.fx(data, ctx);
};

export const actionToAst = (action: DBWSchema.RdAction, ctx: CompilePageCtx): CallExpression | BinaryExpression => {};

export const nodePropValueAst = (nodeId: string, propId: string, ctx: CompilePageCtx): BindAst | undefined => {
  const node = ctx.nodesStore.getNode(nodeId);
  const prop = ctx.nodesStore.getNodeProp(nodeId, propId);
  const define = ctx.componentsStore.getProp(node.tagId, propId);
  if (!prop.value) {
    return defaultAst(ctx, define.types);
  }
  return valueToAst(prop.value, ctx, define.types);
};

export const nodeEventValueAst = (
  nodeId: string,
  eventId: string,
  ctx: CompilePageCtx
): ArrowFunctionExpression | undefined => {
  const node = ctx.nodesStore.getNode(nodeId);
  const event = ctx.nodesStore.getNodeEvent(nodeId, eventId);
  const define = ctx.componentsStore.getEmit(node.tagId, eventId);
  if (!event.actions) {
    return;
  }
  const parems =
    define.parameters?.map((item) => {
      return t.identifier(getEventArgVarName(item.key));
    }) || [];
  parems.push(t.identifier(getEventArgVarName('ctx')));

  const body = t.blockStatement(
    event.actions.map((item) => {
      return t.expressionStatement(actionToAst(item, ctx));
    })
  );

  return t.arrowFunctionExpression(parems, body);
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
