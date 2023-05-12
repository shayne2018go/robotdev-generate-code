import { CompilePageCtx } from '../compilePages';

export const getNodeTag = (tagId: string, ctx: CompilePageCtx) => {
  return ctx.global.componentsStore.getCmpt(tagId).key;
};

export const getNodePropKeyById = (nodeId: string, propId: string, ctx: CompilePageCtx) => {
  const tagId = ctx.scope.page.nodesStore.getNode(nodeId).tagId;
  return ctx.global.componentsStore.getProp(tagId, propId).key || ctx.global.propsStore.getProp(propId).key;
};

export const getNodePropKeyByTagId = (tagId: string, propId: string, ctx: CompilePageCtx) => {
  return ctx.global.componentsStore.getProp(tagId, propId)?.key || ctx.global.propsStore.getProp(propId).key;
};

export const getNodePropValueVariable = (nodeId: string, propId: string, ctx: CompilePageCtx) => {
  // TODO: 三种情况 （1， 节点局部变量；2， 全局变量； 3，函数调用）
  const nodeVarname = ctx.scope.page.nodesVarNames[nodeId]?.varName;
  const propVarname = ctx.scope.page.nodesVarNames[nodeId].propMembers[propId]?.varName;
  return `${ctx.global.nodesVarRootName}.${nodeVarname}.${propVarname}`;
};

export const getNodeEventKeyByTagId = (tagId: string, eventId: string, ctx: CompilePageCtx) => {
  return ctx.global.componentsStore.getEmit(tagId, eventId)?.key || ctx.global.eventsStore.getEvent(eventId).key;
};

export const getNodeEventValueVariable = (nodeId: string, eventId: string, ctx: CompilePageCtx) => {
  const nodeVarname = ctx.scope.page.nodesVarNames[nodeId]?.varName;
  const eventVarname = ctx.scope.page.nodesVarNames[nodeId].eventMembers[eventId]?.varName;
  return `${ctx.global.nodesVarRootName}.${nodeVarname}.${eventVarname}`;
};
