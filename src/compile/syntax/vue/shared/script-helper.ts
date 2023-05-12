import { CompilePageCtx } from '../compilePages';

export const getVariableVarName = (variableId: string, ctx: CompilePageCtx): string => {
  return ctx.scope.page.variablesNames[variableId]?.varName;
};

export const getNodeTagVarName = (nodeId: string, ctx: CompilePageCtx): string=> {
  return ctx.scope.page.nodesVarNames[nodeId]?.varName;
};

export const getNodePropKeyByNodeId = (nodeId: string, propId: string, ctx: CompilePageCtx): string => {
  return ctx.scope.page.nodesVarNames[nodeId]?.propMembers[propId]?.varName || ctx.global.propsStore.getProp(propId)?.key;
};

export const getNodeEventKeyByNodeId = (nodeId: string, eventId: string, ctx: CompilePageCtx): string => {
  return ctx.scope.page.nodesVarNames[nodeId]?.eventMembers[eventId]?.varName || ctx.global.eventsStore.getEvent(eventId)?.key;
};

