import { CompilePageCtx } from '../compilePages';

export const getVariableVarName = (variableId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.current.variablesStore.findId(variableId)?.varName;
  return ctx.scope.current.variablesStore.findId(variableId)?.varName;
};

export const getNodeTagVarName = (nodeId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.current.nodesStore.find(nodeId)?.varName;
  return ctx.scope.current.nodesStore.find(nodeId)?.varName;
};

export const getNodePropKeyByNodeId = (nodeId: string, propId: string, ctx: CompilePageCtx): string | undefined => {
  const node_protocol = ctx.scope.current.nodesStore.getNode(nodeId);
  if (!node_protocol) {
    throw new Error(`Cannot find nodeId: ${nodeId}`);
  }
  const tagId = node_protocol.tagId;
  return ctx.global.componentsStore.getProp(tagId, propId)?.varName;
};

export const getNodeEventKeyByNodeId = (nodeId: string, eventId: string, ctx: CompilePageCtx): string | undefined => {
  const node_protocol = ctx.scope.current.nodesStore.getNode(nodeId);
  if (!node_protocol) {
    throw new Error(`Cannot find nodeId: ${nodeId}`);
  }
  const tagId = node_protocol.tagId;
  return ctx.global.componentsStore.getEmit(tagId, eventId)?.varName;
};
