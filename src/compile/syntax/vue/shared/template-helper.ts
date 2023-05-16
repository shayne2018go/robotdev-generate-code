import { CompilePageCtx } from '../compilePages';
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
} from './bind-parse/shared/helper';
import { BindParseCtx } from './bind-parse/types';
import { NodeMapItem } from './store/nodes';
import * as t from '@babel/types';

export const getNodeTag = (tagId: string, ctx: CompilePageCtx) => {
  const node_protocol = ctx.global.componentsStore.getCmpt(tagId);
  if (!node_protocol) {
    throw new Error(`Cannot find tagId: ${tagId}`);
  }
  return node_protocol.key;
};

export const getNodePropKeyById = (nodeId: string, propId: string, ctx: CompilePageCtx) => {
  const prop_protocol = ctx.scope.current.nodesStore.getNodePropDefine(nodeId, propId);
  if (!prop_protocol) {
    throw new Error(`Cannot find tagId: ${nodeId}`);
  }
  return prop_protocol.data.key;
};

export const getNodePropKeyByTagId = (tagId: string, propId: string, ctx: CompilePageCtx) => {
  const prop_protocol = ctx.global.componentsStore.getProp(tagId, propId);

  return prop_protocol?.data.key;
};

export const getNodePropValueVariable = (nodeId: string, value: CodeSchema.Property, ctx: BindParseCtx) => {
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

export const getNodePropValueVariableCall = (nodeId: string, value: CodeSchema.Property, ctx: BindParseCtx) => {
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

export const getNodePropValueExpression = (nodeId: string, value: CodeSchema.Property, ctx: BindParseCtx) => {
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
  }
};

export const getNodeEventKeyByTagId = (nodeId: string, eventId: string, ctx: BindParseCtx) => {
  const event_protocol = ctx.scope.current.nodesStore.getNodeEventDefine(nodeId, eventId);
  if (!event_protocol) {
    throw new Error(`Cannot find event_protocol nodeId: ${nodeId}`);
  }
  return event_protocol?.data.key;
};

export const getNodeEventValue = (nodeId: string, eventId: string, ctx: BindParseCtx) => {
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
  return isRdData(value) && (rdDataisCustom(value) || rdDataIsBind(value) || rdDataIsTable(value));
};

export const isScriptVariableCall = (value: CodeSchema.DataValueArgument | CodeSchema.ActionArgument) => {
  return !isScriptVariable(value);
};

// 获取当前上下文的数据对象（eachData, slotData）
export const getScopeData = (node: NodeMapItem, ctx: BindParseCtx): string[] => {
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
    } else if (tag === VirtualTag.SLOT) {
      data.push(`${getSlotVarName(pNode.varName)}`);
    }
  });
  return data;
};

// each
export function getNodeEachExpression(
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
