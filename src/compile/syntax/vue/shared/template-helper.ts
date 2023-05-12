import { CompilePageCtx } from '../compilePages';

export const getNodeTag = (tagId: string, ctx: CompilePageCtx) => {
  const node_protocol = ctx.global.componentsStore.getCmpt(tagId);
  if (!node_protocol) {
    throw new Error(`Cannot find tagId: ${tagId}`);
  }
  return node_protocol.key;
};

export const getNodePropKeyById = (nodeId: string, propId: string, ctx: CompilePageCtx) => {
  const node_protocol = ctx.scope.page.nodesStore.getNode(nodeId);
  if (!node_protocol) {
    throw new Error(`Cannot find nodeId: ${nodeId}`);
  }
  const tagId = node_protocol.tagId;
  const prop_protocol = ctx.global.componentsStore.getProp(tagId, propId);
  if (!prop_protocol) {
    throw new Error(`Cannot find tagId: ${tagId}`);
  }
  return prop_protocol.data.key || ctx.global.propsStore.getProp(propId).key;
};

export const getNodePropKeyByTagId = (tagId: string, propId: string, ctx: CompilePageCtx) => {
  const prop_protocol = ctx.global.componentsStore.getProp(tagId, propId);
  if (!prop_protocol) {
    throw new Error(`Cannot find tagId: ${tagId}`);
  }

  return prop_protocol.data.key || ctx.global.propsStore.getProp(propId).key;
};

export const getNodePropValueVariable = (nodeId: string, propId: string, ctx: CompilePageCtx) => {
  // TODO: 三种情况 （1， 节点局部变量；2， 全局变量； 3，函数调用）
  const node = ctx.scope.page.nodesStore.find(nodeId);
  if (!node) {
    return;
  }
  const nodeVarName = ctx.scope.page.nodesStore.getNodeVarName(nodeId);
  const propVarName = ctx.scope.page.nodesStore.getNodePropVarName(nodeId, propId);
  return `${ctx.global.nodesVarRootName}.${nodeVarName}.${propVarName}`;
};

export const getNodeEventKeyByTagId = (tagId: string, eventId: string, ctx: CompilePageCtx) => {
  const event_protocol = ctx.global.componentsStore.getEmit(tagId, eventId);
  if (!event_protocol) {
    throw new Error(`Cannot find event by tagId: ${tagId}`);
  }

  return event_protocol.data.key || ctx.global.eventsStore.getEvent(eventId).key;
};

export const getNodeEventValueVariable = (nodeId: string, eventId: string, ctx: CompilePageCtx) => {
  const nodeVarName = ctx.scope.page.nodesStore.getNodeVarName(nodeId); // 节点变量名
  const eventDefine = ctx.scope.page.nodesStore.getNodeEventDefine(nodeId, eventId); // 事件定义
  const eventVarName = eventDefine?.varName; // 事件名
  const parameters = eventDefine?.data.parameters; // 形参
  const parametersStore = eventDefine?.members.parameters; // 形参状态管理，取变量名：parametersStore?.find('aasd')?.varName

  return `${ctx.global.nodesVarRootName}.${nodeVarName}.${eventVarName}`;
};
