import { CompilePageCtx } from '../compilePages';
import { VirtualTag } from '../const/config';

export const getVariableVarName = (variableId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.current.variablesStore.findId(variableId)?.varName;
};

export const getNodeTagVarName = (nodeId: string, ctx: CompilePageCtx): string | undefined => {
  const node = ctx.scope.current.nodesStore.find(nodeId);
  const tag = node?.data.tagId && ctx.global.componentsStore.getCmpt(node?.data.tagId)?.key;
  if (tag === VirtualTag.EACH) {
    return undefined;
  } else if (tag === VirtualTag.SLOT) {
    return undefined;
  }
  return node?.varName;
};

export const getNodePropKeyByNodeId = (nodeId: string, propId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.current.nodesStore.getNodePropDefine(nodeId, propId)?.varName;
};

export const getNodeEventKeyByNodeId = (nodeId: string, eventId: string, ctx: CompilePageCtx): string | undefined => {
  return ctx.scope.current.nodesStore.getNodeEventDefine(nodeId, eventId)?.varName;
};
