/**
 * getTag(id: string) {
      return compileCtx.componentsStore.getCmpt(id).key;
    },
    getPropKey(tagId: string, propId: string) {
      return compileCtx.componentsStore.getProp(tagId, propId).key || compileCtx.propsStore.getProp(propId).key;
    },
    getPropValue(tagId: string, propId: string) {
      return '';
    },
    getEventKey(tagId: string, eventId: string) {
      return '';
    },
    getEventValue(tagId: string, eventId: string) {
      return '';
    },
    getEachData(tagId: string) {
      const cmpt = compileCtx.componentsStore.getCmpt(tagId);
      return `(${cmpt.key}_item, ${cmpt.key}_index) in `;
    },
    getValue() {
      return '';
    },
 */

import { CompilePageCtx } from '../compilePages';

export const getNodeTag = (tagId: string, ctx: CompilePageCtx) => {
  return ctx.componentsStore.getCmpt(tagId).key;
};

export const getNodePropKeyById = (nodeId: string, propId: string, ctx: CompilePageCtx) => {
  const tagId = ctx.nodesStore.getNode(nodeId).tagId;
  return ctx.componentsStore.getProp(tagId, propId).key || ctx.propsStore.getProp(propId).key;
};

export const getNodePropKeyByTagId = (tagId: string, propId: string, ctx: CompilePageCtx) => {
  return ctx.componentsStore.getProp(tagId, propId)?.key || ctx.propsStore.getProp(propId).key;
};

export const getNodePropValueVariable = (nodeId: string, propId: string, ctx: CompilePageCtx) => {
  const nodeVarname = ctx.nodesVarNames[nodeId]?.varName;
  const propVarname = ctx.nodesVarNames[nodeId].propMembers[propId]?.varName;
  return `${ctx.nodesVarRootName}.${nodeVarname}.${propVarname}`;
};

export const getNodeEventKeyByTagId = (tagId: string, eventId: string, ctx: CompilePageCtx) => {
  return ctx.componentsStore.getEmit(tagId, eventId)?.key || ctx.eventsStore.getEvent(eventId).key;
};

export const getNodeEventValueVariable = (nodeId: string, eventId: string, ctx: CompilePageCtx) => {
  const nodeVarname = ctx.nodesVarNames[nodeId]?.varName;
  const eventVarname = ctx.nodesVarNames[nodeId].eventMembers[eventId]?.varName;
  return `${ctx.nodesVarRootName}.${nodeVarname}.${eventVarname}`;
};
