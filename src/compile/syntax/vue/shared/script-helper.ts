import { CompilePageCtx } from '../compilePages';

export const getVariableVarName = (variableId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.page.variablesStore.findId(variableId)?.varName;
};

export const getNodeTagVarName = (nodeId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.page.nodesStore.find(nodeId)?.varName;
};

export const getNodePropKeyByNodeId = (nodeId: string, propId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.page.nodesStore.getNodePropVarName(nodeId, propId) || ctx.global.propsStore.getProp(propId)?.key;
};

export const getNodeEventKeyByNodeId = (nodeId: string, eventId: string, ctx: CompilePageCtx): string | undefined => {
  return (
    ctx.scope.page.nodesStore.getNodeEventVarName(nodeId, eventId) || ctx.global.eventsStore.getEvent(eventId)?.key
  );
};
