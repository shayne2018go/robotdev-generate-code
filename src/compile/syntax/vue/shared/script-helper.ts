import { CompilePageCtx } from '../compilePages';

export const getVariableVarName = (variableId: string, ctx: CompilePageCtx) => {
  return ctx.variablesNames[variableId].varName;
};

export const getNodeTagVarName = (nodeId: string, ctx: CompilePageCtx) => {
  return ctx.nodesVarNames[nodeId].varName;
};

export const getNodePropKeyByNodeId = (nodeId: string, propId: string, ctx: CompilePageCtx): string => {
  return ctx.nodesVarNames[nodeId].propMembers[propId].varName || ctx.propsStore.getProp(propId).key;
};

export const getNodeEventKeyByNodeId = (nodeId: string, eventId: string, ctx: CompilePageCtx): string => {
  return ctx.nodesVarNames[nodeId].eventMembers[eventId].varName || ctx.eventsStore.getEvent(eventId).key;
};

