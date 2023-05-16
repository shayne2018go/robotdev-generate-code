import { CompilePageCtx } from '../compilePages';

export const getVariableVarName = (variableId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.current.variablesStore.findId(variableId)?.varName;
};

export const getNodeTagVarName = (nodeId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.current.nodesStore.find(nodeId)?.varName;
};

export const getNodePropKeyByNodeId = (nodeId: string, propId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.current.nodesStore.getNodePropDefine(nodeId, propId)?.varName;
};

export const getNodeEventKeyByNodeId = (nodeId: string, eventId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.current.nodesStore.getNodeEventDefine(nodeId, eventId)?.varName;
};
