import { Compile } from '@/types/compile/token';
import { INode } from '@/types/view';
import { CompilePageCtx, CompilePageOptions } from '../compilePages';
import { ICS_Page } from '@/types/page';
import { TreeNode } from '../shared/store/nodes';
import * as g from '@/compile/tokens/markup/vue-template/generate-schema';
import { VirtualTag } from '../const/config';

function compileTemplate(page: ICS_Page, compileCtx: CompilePageCtx): { token: string } {
  const { nodesStore, components, props } = compileCtx;
  // tag props events children

  const ast = createTemplateAst(nodesStore.treeNodes, {
    getTag(id: string) {
      return components.getCmpt(id).key;
    },
    getPropKey(tagId: string, propId: string) {
      return components.getProp(tagId, propId).key || props.getProp(propId).key;
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
      const cmpt = components.getCmpt(tagId);
      return `(${cmpt.key}_item, ${cmpt.key}_index) in `;
    },
    getValue() {
      return '';
    },
  });

  const token = g.generate([ast]);

  return { token };
}

interface ParsingNodesOptions {
  getTag: (id: string) => string;
  getPropKey: (tagId: string, propId: string) => string;
  getPropValue: (tagId: string, propId: string) => string;
  getEventKey: (tagId: string, eventId: string) => string;
  getEventValue: (tagId: string, eventId: string) => string;
  getEachData: (tagId: string) => string;
  getValue: (tagId: string) => string;
}

function compileHelper(compileCtx: CompilePageCtx) {}

function createTemplateAst(nodes: TreeNode[], options: ParsingNodesOptions) {
  return g.node(
    'template',
    [],
    nodes.map((node) => parsingNode(node, options))
  );
}

// const WHITE_TAG = ['each', 'cond', 'slot', 'tpl'];

function parsingNode(node: TreeNode, options: ParsingNodesOptions): GenerateVueTemplateTypes.Node {
  const { getTag, getPropKey, getPropValue, getEventKey, getEventValue } = options;
  const tag = getTag(node.data.tagId);
  switch (tag) {
    case VirtualTag.EACH:
      return parsingNodeEach(node, options);
    case VirtualTag.COND:
      return parsingNodeCond(node, options);
    case VirtualTag.SLOT:
      return parsingNodeSlot(node, options);
    case VirtualTag.TPL:
      return parsingNodeTpl(node, options);
    default:
      return parsingNodeNormal(node, options);
  }
}

function parsingNodeEach(node: TreeNode, options: ParsingNodesOptions): GenerateVueTemplateTypes.Node {
  const { getTag, getPropKey, getPropValue, getEventKey, getEventValue } = options;
  const { tagId } = node.data;
  return g.node(
    'template',
    [g.directive('for')],
    (node.children || []).map((node) => parsingNode(node, options))
  );
}
function parsingNodeCond(node: TreeNode, options: ParsingNodesOptions): GenerateVueTemplateTypes.Node {
  const { getTag, getPropKey, getPropValue, getEventKey, getEventValue } = options;
  const { tagId } = node.data;
  return g.node(
    'template',
    [g.directive('if')],
    (node.children || []).map((node) => parsingNode(node, options))
  );
}
function parsingNodeSlot(node: TreeNode, options: ParsingNodesOptions): GenerateVueTemplateTypes.Node {
  const { getTag, getPropKey, getPropValue, getEventKey, getEventValue } = options;
  const { tagId } = node.data;
  return g.node(
    'slot',
    [],
    (node.children || []).map((node) => parsingNode(node, options))
  );
}
function parsingNodeTpl(node: TreeNode, options: ParsingNodesOptions): GenerateVueTemplateTypes.Node {
  const { getTag, getPropKey, getPropValue, getEventKey, getEventValue } = options;
  const { tagId } = node.data;
  return g.node(
    'template',
    [
      ...(node.data.props || []).map((p) => g.prop(getPropKey(tagId, p.propId), getPropValue(tagId, p.propId))),
      ...(node.data.events || []).map((p) => g.evt(getEventKey(tagId, p.eventId), getEventValue(tagId, p.eventId))),
    ],
    (node.children || []).map((node) => parsingNode(node, options))
  );
}
function parsingNodeNormal(node: TreeNode, options: ParsingNodesOptions): GenerateVueTemplateTypes.Node {
  const { getTag, getPropKey, getPropValue, getEventKey, getEventValue } = options;
  const { tagId } = node.data;
  return g.node(
    getTag(tagId),
    [
      ...(node.data.props || []).map((p) => g.prop(getPropKey(tagId, p.propId), getPropValue(tagId, p.propId))),
      ...(node.data.events || []).map((p) => g.evt(getEventKey(tagId, p.eventId), getEventValue(tagId, p.eventId))),
    ],
    (node.children || []).map((node) => parsingNode(node, options))
  );
}

export default compileTemplate;
