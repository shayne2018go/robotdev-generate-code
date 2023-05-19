import { CompileCurrentCtx } from '../compilePages';
import { VirtualTag } from '../const/config';
import { valueToAst } from './bind-parse/core';
import { getPathPropertieKeys } from './bind-parse/shared/getPathProperties';
import {
  getEachIndexVarName,
  getEachItemVarName,
  getSlotVarName,
  isRdData,
  nodeCtx,
  rdActionIsSys,
  rdDataIsBind,
  rdDataIsTable,
  rdDataisCustom,
  isAction,
} from './bind-parse/shared/helper';
import { BindParseCtx } from './bind-parse/types';
import { NodeMapItem } from './store/nodes';
import * as t from '@babel/types';

export const getNodeTag = <T extends CodeSchema.Page | CodeSchema.Component>(tagId: string, ctx: CompileCurrentCtx) => {
  const node_protocol = ctx.global.componentsStore.getCmpt(tagId);
  if (!node_protocol) {
    throw new Error(`Cannot find tagId: ${tagId}`);
  }
  return node_protocol.key;
};

export const getNodePropKeyById = <T extends CodeSchema.Page | CodeSchema.Component>(
  nodeId: string,
  propId: string,
  ctx: CompileCurrentCtx
) => {
  const prop_protocol = ctx.scope.current.nodesStore.getNodePropDefine(nodeId, propId);
  if (!prop_protocol) {
    throw new Error(`Cannot find tagId: ${nodeId}`);
  }
  return prop_protocol.data.key;
};

export const getNodePropKeyByTagId = <T extends CodeSchema.Page | CodeSchema.Component>(
  tagId: string,
  propId: string,
  ctx: CompileCurrentCtx
) => {
  const prop_protocol = ctx.global.componentsStore.getProp(tagId, propId);

  return prop_protocol?.data.key;
};

export const getNodePropValueVariable = <T extends CodeSchema.Page | CodeSchema.Component>(
  nodeId: string,
  value: CodeSchema.Property,
  ctx: BindParseCtx
) => {
  const node = ctx.scope.current.nodesStore.find(nodeId);
  if (!node) {
    return;
  }

  // const paths = getPathPropertieKeys(ctx,value.value) // nodeState.A001.propVar.b

  if (isRdData(value.value) && rdDataIsBind(value.value)) {
    if (['getEachData', 'getSlotData'].includes(value.value.mode)) {
      const ast = valueToAst(value.value, ctx);

      return ast.value as t.MemberExpression;
    }
  }

  const { propId } = value;
  const nodeVarName = ctx.scope.current.nodesStore.getNodeVarName(nodeId);
  const propVarName = ctx.scope.current.nodesStore.getNodePropVarName(nodeId, propId);
  if (!nodeVarName || !propVarName) {
    return;
  }
  return t.memberExpression(
    t.memberExpression(t.identifier(ctx.global.nodesVarRootName), t.identifier(nodeVarName)),
    t.identifier(propVarName)
  );
};

export const getNodePropValueVariableCall = <T extends CodeSchema.Page | CodeSchema.Component>(
  nodeId: string,
  value: CodeSchema.Property,
  ctx: BindParseCtx
) => {
  const node = ctx.scope.current.nodesStore.find(nodeId);
  if (!node) {
    return;
  }
  const { propId } = value;
  const nodeVarName = ctx.scope.current.nodesStore.getNodeVarName(nodeId);
  const propVarName = ctx.scope.current.nodesStore.getNodePropVarName(nodeId, propId);
  if (!nodeVarName || !propVarName) {
    return;
  }

  const scopeData = getScopeData(node, ctx);

  return t.callExpression(
    t.memberExpression(
      t.memberExpression(t.identifier(ctx.global.nodesVarRootName), t.identifier(nodeVarName)),
      t.identifier(propVarName)
    ),
    [
      t.objectExpression(
        scopeData.map((varText: string) => t.objectProperty(t.identifier(varText), t.identifier(varText)))
      ),
    ]
  );
};

export const getNodePropValueExpression = <T extends CodeSchema.Page | CodeSchema.Component>(
  nodeId: string,
  value: CodeSchema.Property,
  ctx: BindParseCtx
): t.MemberExpression | t.CallExpression | undefined => {
  // 变量 或 函数调用
  const node = ctx.scope.current.nodesStore.find(nodeId);
  if (!node) {
    return;
  }
  if (!value.value) {
    return;
  }
  if (isScriptVariable(value.value)) {
    return getNodePropValueVariable(nodeId, value, ctx);
  } else if (isScriptVariableCall(value.value)) {
    return getNodePropValueVariableCall(nodeId, value, ctx);
  } else {
    return;
  }
};

export const getNodeEventKeyByTagId = <T extends CodeSchema.Page | CodeSchema.Component>(
  nodeId: string,
  eventId: string,
  ctx: BindParseCtx
) => {
  const event_protocol = ctx.scope.current.nodesStore.getNodeEventDefine(nodeId, eventId);
  if (!event_protocol) {
    throw new Error(`Cannot find event_protocol nodeId: ${nodeId}`);
  }
  return event_protocol?.data.key;
};

export const getNodeEventValue = <T extends CodeSchema.Page | CodeSchema.Component>(
  nodeId: string,
  eventId: string,
  ctx: BindParseCtx
) => {
  const node = ctx.scope.current.nodesStore.find(nodeId);
  if (!node) {
    return;
  }

  const nodeVarName = ctx.scope.current.nodesStore.getNodeVarName(nodeId); // 节点变量名
  const eventDefine = ctx.scope.current.nodesStore.getNodeEventDefine(nodeId, eventId); // 事件定义
  const eventVarName = eventDefine?.varName; // 事件名
  const parameters = eventDefine?.data.parameters || []; // 形参
  const parametersStore = eventDefine?.members.parameters; // 形参状态管理，取变量名：parametersStore?.find('aasd')?.varName

  if (!nodeVarName || !eventVarName) {
    return;
  }
  const scopeData = getScopeData(node, ctx);

  const eventParameters = scopeData.length
    ? [
        t.spreadElement(t.identifier('args')),
        t.objectExpression(
          scopeData.map((varText: string) => t.objectProperty(t.identifier(varText), t.identifier(varText)))
        ),
      ]
    : [t.spreadElement(t.identifier('args'))];

  return t.arrowFunctionExpression(
    [t.restElement(t.identifier('args'))],
    t.blockStatement([
      t.expressionStatement(
        t.callExpression(
          t.memberExpression(
            t.memberExpression(t.identifier(ctx.global.nodesVarRootName), t.identifier(nodeVarName)),
            t.identifier(eventVarName)
          ),
          eventParameters
        )
      ),
    ])
  );
};

// 判断当前值 是变量还是函数调用
export const isScriptVariable = (value: CodeSchema.DataValueArgument | CodeSchema.ActionArgument) => {
  return isRdData(value) && nodePropValueType(value)?.type !== 'function';
};
export const isScriptVariableCall = (value: CodeSchema.DataValueArgument | CodeSchema.ActionArgument) => {
  return !isScriptVariable(value);
};

interface nodePropValueTypeRes {
  // error：数据错误
  // directCompilation: template直接编译getData，script跳过
  // literal：字面量，template直接编译字面量，script跳过
  // literalVar：将属性变量当作字面量，template使用script的变量，script生成变量
  // computed：将属性变量当作计算属性，template使用script的变量，script生成computed计算属性变量
  // function：将属性变量当作函数，入参为object，元素为父辈的所有局部变量，script生成函数接受变量
  // split：拆分成多个属性
  type: 'error' | 'directCompilation' | 'literal' | 'literalVar' | 'computed' | 'function' | 'split';
}
export const nodePropValueType = (value: CodeSchema.DataValueArgument) => {
  const res: nodePropValueTypeRes = {
    type: 'error',
  };
  if (isRdData(value)) {
    if (rdDataisCustom(value)) {
      res.type = 'literalVar'; // 未来根据是否包含双引号决定是否为literal
    } else if (rdDataIsBind(value)) {
      // TODO 理论上，所有的绑定都应该直接编译，但目前先只管 循环和插槽
      if (['getEachData', 'getSlotData'].includes(value.mode)) {
        res.type = 'directCompilation';
      } else {
        res.type = 'computed';
      }
    } else if (rdDataIsTable(value)) {
      res.type = 'split';
    } else {
      res.type = 'function';
    }
  } else if (isAction(value)) {
    res.type = 'error';
    return res;
  } else {
    res.type = 'literalVar'; // 未来根据是否包含双引号决定是否为literal
  }
  return res;
};

// 获取当前上下文的数据对象（eachData, slotData）
export const getScopeData = <T extends CodeSchema.Page | CodeSchema.Component>(
  node: NodeMapItem,
  ctx: BindParseCtx
): string[] => {
  // TODO: 获取所有父节点
  const parentNodes = nodeCtx(node.data.id, ctx);
  if (!parentNodes.length) {
    return [];
  }
  const data = [] as string[];
  parentNodes.forEach((pNode) => {
    const tag = getNodeTag(pNode.data.tagId, ctx);
    if (tag === VirtualTag.EACH) {
      data.push(`${getEachItemVarName(pNode.varName)}`);
      data.push(`${getEachIndexVarName(pNode.varName)}`);
    } else if (tag === VirtualTag.SLOT) {
      data.push(`${getSlotVarName(pNode.varName)}`);
    }
  });
  return data;
};

// each
export function getNodeEachExpression<T extends CodeSchema.Page | CodeSchema.Component>(
  nodeId: string,
  value: CodeSchema.Property,
  ctx: BindParseCtx
): t.BinaryExpression {
  const nodeMapItem = ctx.scope.current.nodesStore.find(nodeId);
  if (!nodeMapItem) {
    throw new Error(`nodeMapItem ${nodeMapItem} is not parsing`);
  }

  const valueExpression = getNodePropValueExpression(nodeId, value, ctx);
  if (!valueExpression) {
    throw new Error(`getNodeEachExpression is undefined`);
  }

  return t.binaryExpression(
    'in',
    t.sequenceExpression([
      t.identifier(getEachItemVarName(nodeMapItem.varName)),
      t.identifier(getEachIndexVarName(nodeMapItem.varName)),
    ]),
    valueExpression
  );
}

// table
export function getNodePropTableSplitProps(
  nodeId: string,
  value: CodeSchema.Property,
  ctx: BindParseCtx
): { key: string; value: t.MemberExpression }[] | undefined {
  const tableSplitProps: { key: string; value: t.MemberExpression }[] = [];
  const define = ctx.scope.current.nodesStore.getNodePropDefine(nodeId, value.propId);

  if (!define) {
    throw new Error('prop的define 获取失败');
  }
  const tableDefine = define?.data?.types.find((item) => item.type === 'table');
  if (!tableDefine) {
    throw new Error('tableDefine not found');
  }
  const tableConfig = tableDefine.rules?.tableConfig;
  const tableDataKey = tableDefine.rules?.tableDataKey;
  const tableColumnsKey = define?.data.key || define?.varName;
  if (!tableConfig) {
    throw new Error('tableConfig not found');
  }
  if (!tableDataKey) {
    throw new Error('tableDataKey not found');
  }

  const nodeVarName = ctx.scope.current.nodesStore.getNodeVarName(nodeId);
  if (!nodeVarName) {
    return;
  }

  tableSplitProps.push({
    key: tableDataKey,
    value: t.memberExpression(
      t.memberExpression(t.identifier(ctx.global.nodesVarRootName), t.identifier(nodeVarName)),
      t.identifier(tableDataKey)
    ),
  });

  tableSplitProps.push({
    key: tableColumnsKey,
    value: t.memberExpression(
      t.memberExpression(t.identifier(ctx.global.nodesVarRootName), t.identifier(nodeVarName)),
      t.identifier(tableColumnsKey)
    ),
  });
  return tableSplitProps;
}
