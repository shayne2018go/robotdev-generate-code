import * as g from '@/compile/tokens/markup/vue-template/generate-schema';
import { CompilePageCtx } from '../compilePages';
import { VirtualTag } from '../const/config';
import { TreeNode } from '../shared/store/nodes';
import {
  getNodeEventKeyByTagId,
  getNodeEventValueVariable,
  getNodePropKeyByTagId,
  getNodePropValueVariable,
  getNodeTag,
} from '../shared/template-helper';

function compileTemplate(page: CodeSchema.Page, compileCtx: CompilePageCtx): { token: string } {
  // tag props events children

  const ast = createTemplateAst(compileCtx.scope.page.nodesStore.treeNodes, compileCtx);

  const token = g.generate([ast]);

  return { token };
}

function createTemplateAst(nodes: TreeNode[], compileCtx: CompilePageCtx) {
  return g.node('template', [], parsingChildren(nodes, compileCtx));
}

// const WHITE_TAG = ['each', 'cond', 'slot', 'tpl'];

function parsingChildren(nodes: TreeNode[], compileCtx: CompilePageCtx): GenerateVueTemplateTypes.Node[] {
  let children = [] as GenerateVueTemplateTypes.Node[];

  nodes.forEach((node) => {
    const nodeAst = parsingNode(node, compileCtx);
    if (Array.isArray(nodeAst)) {
      children = children.concat(nodeAst);
    } else {
      children.push(nodeAst);
    }
  });

  return children;
}

type ParsingNodeReturn = GenerateVueTemplateTypes.Node | GenerateVueTemplateTypes.Node[];

function parsingNode(node: TreeNode, compileCtx: CompilePageCtx): ParsingNodeReturn {
  const tag = getNodeTag(node.data.tagId, compileCtx);
  switch (tag) {
    case VirtualTag.EACH:
      return parsingNodeEach(node, compileCtx);
    case VirtualTag.COND:
      return parsingNodeCond(node, compileCtx);
    case VirtualTag.SLOT:
      return parsingNodeSlot(node, compileCtx);
    case VirtualTag.TPL:
      return parsingNodeTpl(node, compileCtx);
    default:
      return parsingNodeNormal(node, compileCtx);
  }
}

function parsingNodeEach(node: TreeNode, compileCtx: CompilePageCtx): ParsingNodeReturn {
  const { tagId, props } = node.data;
  const eachData = props?.find((p) => getNodePropKeyByTagId(tagId, p.propId, compileCtx) === 'data');
  return g.node(
    'template',
    [], // eachData ? [g.directive('for', createEachExpression(node, getPropValue(tagId, eachData.propId)))] : [],
    parsingChildren(node.children || [], compileCtx)
  );
}

function createEachExpression(node: TreeNode, identiferText: string) {
  const prefix = node.data.id || 'each';
  return `(${prefix}_item, ${prefix}_index) in ${identiferText}`;
}

function parsingNodeCond(node: TreeNode, compileCtx: CompilePageCtx): ParsingNodeReturn {
  const { tagId } = node.data;
  return g.node('template', [g.directive('if')], parsingChildren(node.children || [], compileCtx));
}

function parsingNodeSlot(node: TreeNode, compileCtx: CompilePageCtx): ParsingNodeReturn {
  const { tagId } = node.data;
  return g.node('slot', [], parsingChildren(node.children || [], compileCtx));
}

function parsingNodeTpl(node: TreeNode, compileCtx: CompilePageCtx): ParsingNodeReturn {
  const { tagId, props } = node.data;
  if (!props && node.children?.length) {
    // 过滤掉无属性的template标签
    return parsingChildren(node.children || [], compileCtx);
  }
  return g.node('template', [], parsingChildren(node.children || [], compileCtx));
}

function parsingNodeNormal(node: TreeNode, compileCtx: CompilePageCtx): ParsingNodeReturn {
  const { tagId, id: nodeId } = node.data;
  const tagName = getNodeTag(tagId, compileCtx);

  const props = [
    ...(node.data.props || []).map((p) =>
      g.prop(
        getNodePropKeyByTagId(tagId, p.propId, compileCtx),
        getNodePropValueVariable(nodeId, p.propId, compileCtx),
        true
      )
    ),
    ...(node.data.events || []).map((p) =>
      g.evt(
        getNodeEventKeyByTagId(tagId, p.eventId, compileCtx),
        getNodeEventValueVariable(nodeId, p.eventId, compileCtx)
      )
    ),
  ];

  const children = parsingChildren(node.children || [], compileCtx);
  return g.node(tagName, props, children);
}

export default compileTemplate;
