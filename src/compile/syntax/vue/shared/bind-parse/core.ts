import { tools } from '@/utils/tools';
import * as t from '@babel/types';
import {
  ArrowFunctionExpression,
  AssignmentExpression,
  CallExpression,
  Expression,
  ExpressionStatement,
  Identifier,
  MemberExpression,
  OptionalMemberExpression,
  ObjectProperty,
  ArrayExpression,
  IfStatement,
  ObjectPattern,
} from '@babel/types';
import { CompileCurrentCtx } from '../../compilePages';
import { VueVariable } from '../../sfc/compileScript';
import { genVarName } from '../helper';
import { getNodeEventKeyByNodeId, getNodePropKeyByNodeId } from '../script-helper';
import { searchModulePathKeys } from '../searchPath';
import { getPathPropertieKeys, getPathProperties } from './shared/getPathProperties';
import {
  actionCheck,
  astIsExpression,
  getEventArgVarName,
  getMemberExpr,
  getOptMemberExpr,
  isRdData,
  literalToRdData_Custom,
  nodeCtx,
  rdActionIsSys,
  rdDataIsBind,
  rdDataisCustom,
  rdDataIsTable,
} from './shared/helper';
import { ActionAst, ActionsAst, BindAst, BindParseCtx, BindRdData, LiteralAst, ReturnRef, SplitProps } from './types';
import { getScopeData, nodePropValueType } from '../template-helper';
import { getConnectorOperator } from '../../const/config';

/** helper  start*/

// ev.target.focus()

// TODO:helper范围内的代码后面要抽出去

/** helper end*/

export const defaultAst = <T extends CodeSchema.Page | CodeSchema.Component>(
  ctx: BindParseCtx,
  types?: CodeSchema.PropertyType_Protocol[],
  typeDefault?: boolean
) => {
  if (!types?.[0]) {
    return t.nullLiteral();
  }
  if (types?.[0].default !== undefined && typeDefault) {
    return valueToAst(ctx, types?.[0]?.default, types)?.value as Exclude<
      ReturnRef['value'],
      SplitProps | ActionsAst | IfStatement
    >;
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
    case 'number':
    case 'amount': {
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
    case 'date':
    case 'time':
    case 'datetime': {
      return t.stringLiteral('');
    }
    case 'url': {
      return t.stringLiteral('');
    }
    case 'option': {
      return t.stringLiteral('');
    }
    case 'image':
    case 'video':
    case 'file': {
      return t.stringLiteral('');
    }
    case 'icon': {
      return t.objectExpression([]);
    }

    case 'stylecolor':
    case 'stylesize':
    case 'stylespace':
    case 'stylesizewh': {
      return t.identifier('undefined');
    }
    case 'action':
    case 'function': {
      return t.identifier('undefined');
    }
  }
  return;
};

const assignmentMethodAst = (ctx: BindParseCtx, rootPath: string[], path: (string | number)[], value: BindAst) => {
  const pathAst = literalToAst(ctx, literalToRdData_Custom(path));
  if (!t.isArrayExpression(pathAst)) {
    return;
  }
  return t.callExpression(t.identifier(ctx.global.assignmentMethodName), [getMemberExpr(rootPath), pathAst, value]);
};

const assignmentAst = (ctx: BindParseCtx, rootPath: string[], path: string[] | undefined, value: BindAst) => {
  if (!path?.length) {
    // 如果没有额外path，直接生成正常的赋值表达式
    return t.assignmentExpression('=', getMemberExpr(rootPath), value);
  }
  // 否则生成赋值方法调用的表达式
  return assignmentMethodAst(ctx, rootPath, path, value);
};

export const toAstMethods = {
  getVar: (data: CodeSchema.DataValue_GetVar, ctx: BindParseCtx): OptionalMemberExpression | Identifier | undefined => {
    // api响应数据 apiState.api函数名.data?.响应body?.响应body属性
    if (!data.args?.id) {
      throw new Error('getApiData的data.args.id失败');
    }
    const pathPropertieKeys = getPathPropertieKeys(ctx, data);
    if (!pathPropertieKeys?.length) {
      return;
    }
    const rootName = ctx.global.variablesRootName; // 变量外层的变量名
    return getOptMemberExpr([rootName, ...pathPropertieKeys]);
  },
  getApiData: (
    data: CodeSchema.DataValue_GetApiData,
    ctx: BindParseCtx
  ): OptionalMemberExpression | Identifier | undefined => {
    // api响应数据 apiState.api函数名.data?.响应body?.响应body属性
    if (!data.args?.id) {
      throw new Error('getApiData的data.args.id失败');
    }
    const pathPropertieKeys = getPathPropertieKeys(ctx, data);
    if (!pathPropertieKeys?.length) {
      return;
    }
    const rootName = ctx.global.apiVarRootName; // 变量外层的变量名
    return getOptMemberExpr([rootName, ...pathPropertieKeys]);
  },
  getParam: (
    data: CodeSchema.DataValue_GetParam,
    ctx: BindParseCtx
  ): OptionalMemberExpression | Identifier | undefined => {
    // 页面路由参数 router.query.xxx
    if (!data.args?.id) {
      throw new Error('getApiData的data.args.id失败');
    }
    const pathPropertieKeys = getPathPropertieKeys(ctx, data);
    if (!pathPropertieKeys?.length) {
      return;
    }
    return getOptMemberExpr([VueVariable.router, 'query', ...pathPropertieKeys]);
  },
  getEventData: (data: CodeSchema.DataValue_GetEventData, ctx: BindParseCtx): OptionalMemberExpression | Identifier => {
    // 事件参数 @click="(evt,prop) => {const temp = `${evt.target}`;const temp1 = `${prop}`}"
    if (!ctx.scope.node?.id) {
      throw new Error('getEventData的ctx.scope.node?.id获取失败');
    }
    if (!ctx.scope.event?.eventId) {
      throw new Error('getEventData的ctx.scope.event?.eventId获取失败');
    }
    if (!data.args?.id) {
      throw new Error('getEventData的data.args.id失败');
    }
    // 通过参数id拿到varName和types
    const eventDefine = ctx.scope.current.nodesStore.getNodeEventDefine(ctx.scope.node?.id, ctx.scope.event?.eventId);
    let eventParam = eventDefine?.members.parameters?.findId(data.args.id);
    if (!eventParam) {
      throw new Error('getEventData的eventParam失败');
    }
    let varName = eventParam.varName; // 变量外层的变量名
    if (!varName) {
      throw new Error('getEventData的varName失败');
    }
    varName = getEventArgVarName(varName);
    const pathArr = searchModulePathKeys(eventParam.data.types, data.args.path || []); // 路径中的每个属性名
    if (pathArr.length === 0) {
      return t.identifier(varName);
    }
    return getOptMemberExpr([varName, ...pathArr]);
  },
  getSlotData: (
    data: CodeSchema.DataValue_GetSlotData,
    ctx: BindParseCtx
  ): OptionalMemberExpression | Identifier | undefined => {
    if (!data.args?.id) {
      return;
    }
    const pathPropertieKeys = getPathPropertieKeys(ctx, data);
    if (!pathPropertieKeys?.length) {
      return;
    }
    return getOptMemberExpr(pathPropertieKeys);
  },
  getEachData: (
    data: CodeSchema.DataValue_GetEachData,
    ctx: BindParseCtx
  ): OptionalMemberExpression | Identifier | undefined => {
    if (!data.args?.id) {
      return;
    }
    const pathPropertieKeys = getPathPropertieKeys(ctx, data);
    if (!pathPropertieKeys?.length) {
      return;
    }
    return getOptMemberExpr(pathPropertieKeys);
  },
  getCmptPropData: (
    data: CodeSchema.DataValue_GetCmptPropData,
    ctx: BindParseCtx
  ): OptionalMemberExpression | Identifier | undefined => {
    const pathPropertieKeys = getPathPropertieKeys(ctx, data);
    if (!pathPropertieKeys?.length) {
      return;
      throw new Error(`Cannot find getCmptPropData path ${data}`);
    }
    return getOptMemberExpr(['props', ...pathPropertieKeys]);
  },
  getArguments: (data: CodeSchema.DataValue_GetArguments, ctx: BindParseCtx): OptionalMemberExpression | Identifier => {
    // const { id, path } = data.args;
    // const argVarname = ctx.scope.actions?.map[id].parametersVarNames[argId].varName;
    const pathPropertieKeys = getPathPropertieKeys(ctx, data);
    if (!pathPropertieKeys?.length) {
      throw new Error(`Cannot find getArguments path ${data}`);
    }
    return getOptMemberExpr(pathPropertieKeys);
  },
  tableData: (data: CodeSchema.DataValue_TableData, ctx: BindParseCtx): SplitProps => {
    return tableDataToAst(data, ctx);
  },
  fx: (data: CodeSchema.DataValue, ctx: BindParseCtx): CallExpression | undefined => {
    if (!data.modeId) {
      return;
    }
    const fxDefine = ctx.global.functionsStore.getFunction(data.modeId);
    if (!fxDefine || !fxDefine.source?.exportNamespace) {
      return;
    }
    const argsExprs: Expression[] = [];
    fxDefine.protocol.parameters.forEach((param) => {
      const paramId = param.id;
      if (!data.args[paramId]) {
        return;
      }
      const ast = valueToAst(ctx, data.args[paramId])?.value;
      if (!ast) {
        return;
      }
      argsExprs.push(ast as BindAst | ActionAst | LiteralAst);
    });

    return t.callExpression(
      t.memberExpression(t.identifier(fxDefine.source?.exportNamespace), t.identifier(fxDefine.key)),
      argsExprs
    );
  },
  set: (data: CodeSchema.Action_Set, ctx: BindParseCtx): (AssignmentExpression | CallExpression)[] => {
    const { actions = [] } = data.args;
    const res: (AssignmentExpression | CallExpression)[] = [];
    actions.forEach((act) => {
      if (act.mode === 'setVar') {
        const ast = toAstMethods.setVar(act, ctx);
        if (!ast) {
          return;
        }
        res.push(ast);
      } else if (act.mode === 'setApiData') {
        const ast = toAstMethods.setApiData(act, ctx);
        if (!ast) {
          return;
        }
        res.push(ast);
      } else {
        throw new Error(`Invalid action`);
      }
    });
    return res;
  },
  setVar: (data: CodeSchema.Action_SetVar, ctx: BindParseCtx): AssignmentExpression | CallExpression | undefined => {
    // 变量赋值 variables.变量名?.变量属性 = value
    if (!data.args?.id) {
      throw new Error('setVar函数的data.args.id失败');
    }
    const variable = ctx.scope.current.variablesStore.findId(data.args.id as string);
    if (!variable) {
      throw new Error('setVar的variable获取失败');
    }
    let paths: string[] = [];
    const rootName = ctx.global.variablesRootName; // 变量外层的变量名
    const varName = variable.varName; // 变量名
    if (!varName) {
      throw new Error('setVar的variable.varName获取失败');
    }
    const ast = valueToAst(ctx, data.args.value as CodeSchema.DataValueArgument);
    if (ast.type !== 'ast') {
      throw new Error('setVar的valueToAst调用返回type不正常');
    }
    if (!astIsExpression(ast.value)) {
      throw new Error('setVar的valueToAst调用返回value不正常');
    }
    const rootPath = [rootName, varName];
    return assignmentAst(
      ctx,
      rootPath,
      data.args.path?.length ? searchModulePathKeys(variable.data.types, data.args.path) : undefined,
      ast.value
    );
  },
  setApiData: (
    data: CodeSchema.Action_SetApiData,
    ctx: BindParseCtx
  ): AssignmentExpression | CallExpression | undefined => {
    // api数据赋值
    if (!data.args?.id) {
      throw new Error('getApiData的data.args.id失败');
    }
    const pathPropertieKeys = getPathPropertieKeys(ctx, data);
    if (!pathPropertieKeys?.length) {
      throw new Error('setApiData函数的path缺少');
    }
    const [apiKey, sysKey, businessKey, ...dataPath] = pathPropertieKeys || [];
    const rootPath = [ctx.global.apiVarRootName, apiKey];
    const ast = valueToAst(ctx, data.args.value as CodeSchema.DataValueArgument);
    if (ast.type !== 'ast') {
      throw new Error('setVar的valueToAst调用返回type不正常');
    }
    if (!astIsExpression(ast.value)) {
      throw new Error('setVar的valueToAst调用返回value不正常');
    }
    return assignmentAst(ctx, rootPath, [apiKey, sysKey, businessKey, ...dataPath], ast.value);
  },
  api: (data: CodeSchema.Action_Api, ctx: BindParseCtx): CallExpression => {
    // 执行api
    if (!data.args?.id) {
      throw new Error('api函数的data.args.id失败');
    }
    // if (data.args.id === '6476298bcaecfd31d8f202e4') {
    //   debugger;
    // }
    const api = ctx.global.apisStore.getApi(data.args.id as string)?.data;
    if (!api) {
      throw new Error('api函数的api失败');
    }
    let paramsExprs: Expression[] = [];
    let successExprStatements: t.Statement[] = [];
    let failExprStatements: t.Statement[] = [];
    if (data.args.params) {
      const ast = valueToAst(ctx, data.args.params, [
        { type: 'module', rules: { properties: api.protocol.request.body } },
      ]);
      if (t.isExpression(ast.value as t.Expression)) {
        paramsExprs.push(ast.value as t.Expression);
      }
    }
    if (data.args.success) {
      const asts = actionsToAst(data.args.success, ctx);
      successExprStatements = asts;
    }
    if (data.args.fail) {
      const asts = actionsToAst(data.args.fail, ctx);
      failExprStatements = asts;
    }
    return t.callExpression(
      t.memberExpression(
        t.callExpression(
          t.memberExpression(t.callExpression(t.identifier(api.key), paramsExprs), t.identifier('then')),
          [
            t.arrowFunctionExpression(
              [t.identifier('res')],
              t.blockStatement([
                t.expressionStatement(
                  t.assignmentExpression('=', getMemberExpr([ctx.global.apiVarRootName, api.key]), t.identifier('res'))
                ),
                ...successExprStatements,
              ])
            ),
          ]
        ),
        t.identifier('catch')
      ),
      [t.arrowFunctionExpression([t.identifier('error')], t.blockStatement(failExprStatements))]
    );
  },
  open: (data: CodeSchema.Action_Open, ctx: BindParseCtx): CallExpression => {
    // 跳转
    const mode = data.args.mode;
    if (mode === 'in') {
      if (!data.args.page) {
        throw new Error('open函数的data.args.page失败');
      }
      const page = ctx.global.pagesStore.getPage(data.args.page);
      if (!page) {
        throw new Error('open函数的page失败');
      }

      let paramAsts: t.Expression[] = [
        t.identifier('router'),
        t.stringLiteral(data.args.mode),
        t.stringLiteral(data.args.target),
        t.stringLiteral(page.routerName!),
      ];
      if (data.args.query) {
        const ast = valueToAst(ctx, data.args.query, [
          { type: 'module', rules: { properties: page.protocol.route.query } },
        ]);
        paramAsts.push(ast.value as t.Expression);
      }
      return t.callExpression(t.identifier('open'), paramAsts);
    } else if (mode === 'out') {
      if (!data.args.url) {
        throw new Error('open函数的data.args.url失败');
      }
      return t.callExpression(t.identifier('open'), [
        t.identifier('router'),
        t.stringLiteral(data.args.mode),
        t.stringLiteral(data.args.target),
        t.stringLiteral(data.args.url),
      ]);
    } else {
      throw new Error('open函数的mode类型错误');
    }
  },
  when: (data: CodeSchema.Action_When, ctx: BindParseCtx): t.IfStatement | undefined => {
    const { rd_if, rd_else } = data.args;
    return createIfStatment(rd_if, rd_else, ctx);
  },
  callAction: (data: CodeSchema.Action, ctx: BindParseCtx): undefined => {
    //TODO: 放到处理uniapp编译时一起处理
    return;
    // const { modeId, args } = data;
    // if (!modeId) {
    //   debugger;
    //   throw new Error(`cannot find modeId ${data.id}`);
    // }
    // const action_protocol = ctx.global.actionsStore.getAction(modeId);
  },
};

function createIfStatment(
  rd_ifs: {
    condition: CodeSchema.Action_When_Expression;
    actions: CodeSchema.Action[];
  }[],
  rd_else: { actions: CodeSchema.Action[] },
  ctx: BindParseCtx
): t.IfStatement | undefined {
  const currentIf = rd_ifs[0];
  const alternateIfs = rd_ifs.length > 1 ? rd_ifs.slice(1) : [];

  const test = createIfTest(currentIf.condition, ctx);
  if (!test) {
    return;
  }

  const alternate = alternateIfs.length
    ? createIfStatment(alternateIfs, rd_else, ctx)
    : createIfAlternate(rd_else.actions, ctx);
  return t.ifStatement(test, createIfConsequent(currentIf.actions, ctx), alternate);
}

function createIfTest(
  exp: CodeSchema.Action_When_Expression,
  ctx: BindParseCtx
): t.LogicalExpression | t.CallExpression | undefined {
  if (exp.mode === 'expression') {
    const { operation = 'and' as CodeSchema.Connectors.AND, expression = [] } = exp.args;
    if (expression.length > 1) {
      const left = createIfTest({ mode: 'expression', args: { operation, expression: expression.slice(0, -1) } }, ctx);
      const right = createIfTest({ mode: 'expression', args: { operation, expression: expression.slice(-1) } }, ctx);
      if (!left || !right) {
        return;
      }
      return t.logicalExpression(getConnectorOperator(operation), left, right);
    } else if (expression.length === 1) {
      return createIfTest(expression[0], ctx);
    } else {
      return;
    }
  } else {
    // 这里直接采用函数取代比较符
    const { mode, args } = exp as CodeSchema.Action_When_ExpressionSimpleBase;
    const { value: leftAst } = valueToAst(ctx, args.left);
    if (!leftAst || !mode) {
      // return;
      throw new Error(`createIfTest 中 left: ${args.left} 或 mode: ${mode}不能为空`);
    }
    const argsAst = [leftAst] as t.Expression[];

    if (args.right) {
      const { value: rightAst } = valueToAst(ctx, args.right);
      if (rightAst) argsAst.push(rightAst as t.Expression);
    }

    return t.callExpression(t.memberExpression(t.identifier('Fx'), t.identifier(mode)), argsAst);
  }
}

function createIfConsequent(actions: CodeSchema.Action[], ctx: BindParseCtx): t.Statement {
  return t.blockStatement([]);
}
function createIfAlternate(actions: CodeSchema.Action[], ctx: BindParseCtx): t.Statement {
  const body = actionsToAst(actions, ctx) as t.Statement[];
  return t.blockStatement(body);
}

export const bindToAst = (data: BindRdData, ctx: BindParseCtx): BindAst | undefined => {
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

export const actionToAst = (
  data: CodeSchema.Action,
  ctx: BindParseCtx
): ActionAst | ActionsAst | t.IfStatement | undefined => {
  /**
   * 这里操作ctx.scope.actions
   */
  if (actionCheck.isSetVar(data)) {
    return toAstMethods.setVar(data, ctx);
  } else if (actionCheck.isSetApiData(data)) {
    return toAstMethods.setApiData(data, ctx);
  } else if (actionCheck.isOpen(data)) {
    return toAstMethods.open(data, ctx);
  } else if (actionCheck.isSet(data)) {
    return toAstMethods.set(data, ctx);
  } else if (actionCheck.isApi(data)) {
    return toAstMethods.api(data, ctx);
  } else if (actionCheck.isWhen(data)) {
    return toAstMethods.when(data, ctx);
  } else {
    return toAstMethods.callAction(data, ctx);
  }
};

export const actionsToAst = <T extends CodeSchema.Page | CodeSchema.Component>(
  actions: CodeSchema.Action[],
  ctx: CompileCurrentCtx
): (ExpressionStatement | t.IfStatement)[] => {
  const statements: (ExpressionStatement | t.IfStatement)[] = [];
  const bindParseCtx: BindParseCtx = Object.assign(ctx, {
    scope: {
      ...ctx.scope,
      ...{
        actions: {
          genVarName: genVarName(),
          map: {},
        },
      },
    },
  });
  if (actions && actions.length) {
    actions.forEach((action) => {
      if (action) {
        const ast = actionToAst(action, bindParseCtx);
        if (ast) {
          if (!Array.isArray(ast)) {
            statements.push(t.isIfStatement(ast) ? ast : t.expressionStatement(ast));
          } else {
            ast.forEach((ele) => {
              if (ele) {
                statements.push(t.expressionStatement(ele));
              }
            });
          }
        }
      }
    });
  }
  return statements;
};

export const literalToAst = (
  ctx: BindParseCtx,
  data: CodeSchema.DataValue_Custom,
  types?: CodeSchema.PropertyType_Protocol[]
): LiteralAst => {
  if (data?.args?.multiple === true) {
    data = {
      ...data,
      args: {
        ...data.args,
        type: 'array',
      },
    };
  }

  switch (data.args.type) {
    case 'text':
    case 'richText':
    case 'password':
    case 'email':
    case 'mobilePhone':
    case 'telephone':
    case 'fax': {
      if (typeof data.args.value !== 'string') {
        debugger;
        throw new Error('不是文本');
      }
      return t.stringLiteral(data.args.value);
    }
    case 'number':
    case 'amount': {
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

      if (types) {
        const properties =
          types?.find((item) => item.type === 'module' && item.multiple !== true)?.rules?.properties || [];
        const map: Record<string, (typeof properties)[number]> = {};
        properties.forEach((item) => {
          // map[item.id] = item;
          const propValue = data.args.value.find((v) => v.propId === item.id);
          if (propValue) {
            const ast = valueToAst(ctx, propValue.value, item.types);
            if (!ast?.value || ast.type === 'split') {
              return;
            }
            kv.push(t.objectProperty(t.identifier(item.key), ast.value as BindAst));
          }
        });
      } else {
        data.args.value.forEach((item) => {
          const ast = valueToAst(ctx, item.value);
          if (!ast?.value || ast.type === 'split') {
            return;
          }
          // TODO item.propId不应该拿来编译，暂时先这么处理，明天再分析解决方案
          kv.push(t.objectProperty(t.identifier(item.key || item.propId), ast.value as BindAst));
        });
      }

      // data.args.value.forEach((item) => {
      //   const ast = valueToAst(ctx, item.value, map[item.propId]?.types);
      //   if (!ast?.value || ast.type === 'split') {
      //     return;
      //   }
      //   // TODO item.propId不应该拿来编译，暂时先这么处理，明天再分析解决方案
      //   kv.push(t.objectProperty(t.identifier(map[item.propId]?.key || item.propId || item.key), ast.value as BindAst));
      // });
      return t.objectExpression(kv);
    }
    case 'array': {
      if (!Array.isArray(data.args.value)) {
        throw new Error('不是数组');
      }

      const array: Expression[] = [];
      data.args.value.forEach((item) => {
        const ast = valueToAst(
          ctx,
          item?.value || item,
          types?.map((item) => ({ ...item, multiple: false }))
        );
        if (!ast?.value || ast.type === 'split') {
          return;
        }
        array.push(ast.value as BindAst);
      });
      return t.arrayExpression(array);
    }
    case 'url': {
      if (!tools.dataType.isObject(data.args.value)) {
        throw new Error('icon的值必须是object');
      }
      const mode = data.args?.value?.mode;
      if (mode === 'in') {
        if (!data.args?.value?.page) {
          return t.stringLiteral('');
        }
        const page = ctx.global.pagesStore.getPage(data.args?.value?.page);
        if (!page) {
          throw new Error('url的page失败');
        }
        return t.stringLiteral(page.routerName!);
      } else if (mode === 'out') {
        if (!data.args?.value?.url) {
          return t.stringLiteral('');
        }
        return t.stringLiteral(data.args?.value?.url || '');
      } else {
        throw new Error('url的mode类型错误');
      }
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
    case 'icon': {
      if (!tools.dataType.isObject(data.args.value)) {
        throw new Error('icon的值必须是object');
      }
      return literalToAst(ctx, literalToRdData_Custom(data.args.value));
    }

    case 'date':
    case 'time':
    case 'datetime': {
      if (typeof data.args.value !== 'string') {
        throw new Error('不是文本');
      }
      return t.stringLiteral(data.args.value);
    }

    case 'image':
    case 'video':
    case 'file': {
      if (typeof data.args.value !== 'string') {
        throw new Error('不是文本');
      }
      return t.stringLiteral(data.args.value);
    }

    case 'stylecolor':
    case 'stylesize':
    case 'stylespace':
    case 'stylesizewh': {
      if (typeof data.args.value !== 'string') {
        throw new Error('不是文本');
      }
      return t.stringLiteral(data.args.value);
    }
    case 'action':
    case 'function': {
      if (typeof data.args.value !== 'string') {
        throw new Error('不是文本');
      }
      return t.stringLiteral(data.args.value);
    }
  }
  throw new Error('rdData_custom中的类型"' + data.args.type + '"不支持编译');
};

export const isSplitAst = (data: any): data is SplitProps => {
  return (
    Array.isArray(data) &&
    data.every((item) => tools.dataType.isObject(item) && typeof item.key === 'string' && t.isExpression(item.value))
  );
};

const tableDataToAst = (
  data: CodeSchema.DataValue_TableData,
  ctx: BindParseCtx,
  types?: CodeSchema.PropertyType_Protocol[]
): SplitProps => {
  if (!data.args.data) {
    throw new Error('data.args.data is undefined');
  }
  const bindDataPathProperties = getPathProperties(ctx, data.args.data);
  if (!bindDataPathProperties) {
    throw new Error('bindDataPathProperties生成');
  }
  const last = bindDataPathProperties[bindDataPathProperties.length - 1];
  const dataSource = valueToAst(ctx, data.args.data);

  if (!dataSource) {
    throw new Error('tableDataToAst value is null');
  }
  if (t.isIfStatement(dataSource?.value as t.IfStatement)) {
    throw new Error('tableDataToAst value is not tableData');
  }

  if (!ctx.scope.node) {
    throw new Error('ctx.scope.node is undefined');
  }
  if (!ctx.scope.prop) {
    throw new Error('ctx.scope.prop is undefined');
  }
  const define = ctx.scope.current.nodesStore.getNodePropDefine(ctx.scope.node?.id, ctx.scope.prop?.propId);

  if (!define) {
    throw new Error('prop的define 获取失败');
  }
  const tableDefine = define?.data?.types.find((item) => item.type === 'table');
  if (!tableDefine) {
    throw new Error('tableDefine not found');
  }
  const tableConfig = tableDefine.rules?.tableConfig;
  const tableDataKey = tableDefine.rules?.tableDataKey;
  if (!tableConfig) {
    throw new Error('tableConfig not found');
  }
  if (!tableDataKey) {
    throw new Error('tableDataKey not found');
  }

  const tableConfigObj: { [key: string]: any } = {};
  tableConfig.forEach((item: any) => {
    tableConfigObj[item.id] = item;
  });
  const propertiesObj: { [key: string]: any } = {};
  last.types
    .find((item) => item.type === 'module')
    ?.rules?.properties?.forEach((item: any) => {
      propertiesObj[item.id] = item;
    });
  const keyFieldName = data.args.keyFieldName;
  if (!keyFieldName) {
    throw new Error('data.args.keyFieldName not found');
  }
  const columns = data.args.columns
    .filter((item) => {
      return data.args.showColumns.includes(item[keyFieldName]);
    })
    .map((item) => {
      const obj: any = {};
      Object.entries(item).forEach(([key, value]) => {
        if (key === keyFieldName) {
          obj[key] = propertiesObj[value]?.key;
        } else if (key === data.args.titleFieldName) {
          obj[key] = value;
        } else {
          if (tableConfigObj[key]?.key) {
            obj[tableConfigObj[key]?.key] = value;
          }
        }
      });
      return obj;
    });
  // columns 直接是一个字面量的数组

  const res: SplitProps = [
    {
      key: define?.data.key || define?.varName,
      value: literalToAst(ctx, literalToRdData_Custom(columns)) as ArrayExpression,
    },
    {
      key: tableDataKey,
      value: dataSource.value as Exclude<
        typeof dataSource.value,
        SplitProps | AssignmentExpression | ActionsAst | t.IfStatement
      >,
    },
  ];
  return res;
};

export const valueToAst = (
  ctx: BindParseCtx,
  data: CodeSchema.DataValueArgument | CodeSchema.ActionArgument | undefined | null,
  types?: CodeSchema.PropertyType_Protocol[],
  typeDefault?: boolean
): ReturnRef => {
  const res: {
    type: 'split' | 'ast' | 'error';
    value?: ActionAst | ActionsAst | t.IfStatement | BindAst | SplitProps | undefined;
  } = {
    type: 'ast',
  };

  if (data == null) {
    if (types) {
      res.value = defaultAst(ctx, types, typeDefault);
    }
  } else if (rdActionIsSys(data)) {
    res.value = actionToAst(data, ctx);
  } else if (!isRdData(data)) {
    res.value = literalToAst(ctx, literalToRdData_Custom(data, types), types);
  } else if (rdDataisCustom(data)) {
    res.value = literalToAst(ctx, data, types);
  } else if (rdDataIsBind(data)) {
    res.value = bindToAst(data, ctx);
  } else if (rdDataIsTable(data)) {
    res.type = 'split';
    res.value = toAstMethods.tableData(data, ctx);
  } else {
    res.value = toAstMethods.fx(data, ctx);
  }

  if (!res.value) {
    res.type = 'error';
  }
  return res;
};

export const nodePropAst = (bindParseCtx: BindParseCtx, prop: CodeSchema.Property) => {
  const node = bindParseCtx.scope.node;
  if (!node) {
    return;
  }
  const varName = getNodePropKeyByNodeId(node.id, prop.propId, bindParseCtx);
  if (!varName) {
    return;
  }
  const res = nodePropValueAst(node.id, prop.propId, bindParseCtx);
  if (!res || !res.value) {
    return;
  }
  if (!prop.value) {
    return;
  }
  const ast = res.value as ActionAst | BindAst;
  const valueType = nodePropValueType(bindParseCtx, prop)?.type;
  if (!valueType) {
    return;
  }
  if (['directCompilation', 'literal'].includes(valueType)) {
    return;
  } else if (valueType === 'literalVar') {
    return t.objectProperty(t.identifier(varName), ast);
  } else if (valueType === 'computed') {
    return t.objectProperty(
      t.identifier(varName),
      t.callExpression(t.identifier('computed'), [
        t.arrowFunctionExpression(
          [],
          t.blockStatement([
            t.tryStatement(
              t.blockStatement([t.returnStatement(ast)]),
              t.catchClause(t.identifier('e'), t.blockStatement([]))
            ),
          ])
        ),
      ])
    );
  } else if (valueType === 'function') {
    const nodeMapItem = bindParseCtx.scope.current.nodesStore.find(node.id);
    if (!nodeMapItem) {
      return;
    }
    const scopeData = getScopeData(nodeMapItem, bindParseCtx);
    const args = scopeData?.length
      ? [
          t.objectPattern(
            scopeData.map((varText: string) =>
              t.objectProperty(t.identifier(varText), t.identifier(varText), undefined, true)
            )
          ),
        ]
      : [];
    return t.objectProperty(
      t.identifier(varName),
      t.arrowFunctionExpression(
        args,
        t.blockStatement([
          t.tryStatement(
            t.blockStatement([t.returnStatement(ast)]),
            t.catchClause(t.identifier('e'), t.blockStatement([]))
          ),
        ])
      )
    );
  } else if (valueType === 'split') {
    const splitProps = res.value as SplitProps;
    return splitProps.map((item) => {
      return t.objectProperty(t.identifier(item.key), item.value || t.nullLiteral());
    });
  } else if (valueType === 'error') {
    throw new Error('数据类型错误');
  } else {
    throw new Error('type类型未知');
  }
};

export const nodePropsAst = <T extends CodeSchema.Page | CodeSchema.Component>(
  nodeId: string,
  ctx: CompileCurrentCtx
): ObjectProperty[] => {
  const propProps: ObjectProperty[] = [];
  const node = ctx.scope.current.nodesStore.getNode(nodeId);
  if (!node) {
    throw new Error('节点不存在');
  }
  const bindParseCtx: BindParseCtx = Object.assign(ctx, {
    scope: {
      ...ctx.scope,
      ...{
        node: node,
        actions: {
          genVarName: genVarName(),
          map: {},
        },
      },
    },
  });
  if (!node.props?.length && !node.events?.length) {
    return [];
  }
  if (node.props?.length) {
    node.props.forEach((prop) => {
      const propAst = nodePropAst(bindParseCtx, prop);
      if (!propAst) {
        const varName = getNodePropKeyByNodeId(node.id, prop.propId, bindParseCtx);
        if (!varName) {
          return;
        }
        return propProps.push(t.objectProperty(t.identifier(varName), t.identifier('undefined')));
      }
      if (Array.isArray(propAst)) {
        propProps.push(...propAst);
      } else {
        propProps.push(propAst);
      }
    });
  }
  if (node.events?.length) {
    node.events.forEach((event) => {
      const ast = nodeEventValueAst(node.id, event.eventId, bindParseCtx);
      if (!ast) {
        return;
      }
      const varName = getNodeEventKeyByNodeId(node.id, event.eventId, ctx);
      if (!varName) {
        return;
      }
      propProps.push(t.objectProperty(t.identifier(varName), ast));
    });
  }

  return propProps;
};

export const nodePropValueAst = (nodeId: string, propId: string, ctx: BindParseCtx): ReturnRef | undefined => {
  const node = ctx.scope.current.nodesStore.getNode(nodeId);
  if (!node) {
    return;
  }
  let prop = ctx.scope.current.nodesStore.getNodeProp(nodeId, propId);
  if (!prop) {
    return;
  }
  // const define =  ctx.scope.current.nodesStore.getNodePropDefine(nodeId,propId);
  const define = ctx.scope.current.nodesStore.getNodePropDefine(node.id, propId);
  if (!define) {
    return;
  }

  ctx.scope.prop = prop;

  let value = prop.value;
  if (define.varName === 'class' || define.varName === 'style') {
    if (value) {
      if (prop.dynamic) {
        const textValue = valueToAst(ctx, value, define.data.types);
        const dynamicValue = valueToAst(ctx, prop.dynamic, define.data.types);
        if (t.isExpression(textValue.value as t.Expression) && t.isExpression(dynamicValue?.value as t.Expression)) {
          return {
            type: 'ast',
            value: t.binaryExpression('+', textValue?.value as t.Expression, dynamicValue?.value as t.Expression),
          };
        } else if (textValue.value) {
          return textValue;
        }
        return dynamicValue;
      }
    } else {
      value = prop.dynamic;
    }
  }

  return valueToAst(ctx, value, define.data.types);
};

export const nodeEventValueAst = (
  nodeId: string,
  eventId: string,
  ctx: BindParseCtx
): ArrowFunctionExpression | undefined => {
  const node = ctx.scope.current.nodesStore.find(nodeId);
  if (!node) {
    return;
  }
  const event = ctx.scope.current.nodesStore.getNodeEvent(nodeId, eventId);
  if (!event?.actions) {
    return;
  }
  const define = ctx.scope.current.nodesStore.getNodeEventDefine(nodeId, eventId);
  if (!define) {
    return;
  }
  if (!event.actions) {
    return;
  }
  ctx.scope.event = event;
  const parems: (Identifier | ObjectPattern)[] =
    define.data.parameters?.map((item) => {
      return t.identifier(getEventArgVarName(item.key));
    }) || [];

  // parems.push(t.identifier(getEventArgVarName('ctx')));

  const scopeData = getScopeData(node, ctx);

  if (scopeData?.length) {
    parems.push(
      t.objectPattern(
        scopeData.map((varText: string) =>
          t.objectProperty(t.identifier(varText), t.identifier(varText), undefined, true)
        )
      )
    );
  }

  const body: t.Statement[] = [];
  event.actions.forEach((item) => {
    const ast = actionToAst(item, ctx);
    if (!ast) {
      return;
    }
    if (!Array.isArray(ast)) {
      if (t.isIfStatement(ast)) {
        body.push(ast);
      } else {
        //TODO
        body.push(t.expressionStatement(ast));
      }
    } else {
      ast.forEach((ele) => {
        if (ele) {
          body.push(t.expressionStatement(ele));
        }
      });
    }
  });

  return t.arrowFunctionExpression(parems, t.blockStatement(body));
};

/*
<box title="nodesState.box.title">
  <template #default="box_slot">
    <template v-for="(each_item, each_index) in nodesState.each.data"> <!-- 匿名节点 -->
      <template v-for="(each2_item, each2_index) in each_item"> <!-- 匿名节点 -->
        <template v-for="(box2_item, box2_index) in nodesState.each.data({
                  box_slot
                  each_item,
                })"> <!-- 具名节点(盒子) -->
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
