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
import { genVarName } from '../shared/helper';

interface CompileTemplateCtx extends CompilePageCtx {
  helper: {
    uniqueVarname: (varname: string) => string; // 去重名
  };
}

function compileTemplate(page: CodeSchema.Page, compileCtx: CompilePageCtx): { token: string } {
  // 变量名称去重
  const uniqueVarname = genVarName();

  const compileTemplateCtx = Object.assign({}, compileCtx, { helper: { uniqueVarname } }) as CompileTemplateCtx;

  const ast = createTemplateAst(compileCtx.scope.page.nodesStore.treeNodes, compileTemplateCtx);

  const token = g.generate([ast]);

  return { token };
}

function createTemplateAst(nodes: TreeNode[], compileCtx: CompileTemplateCtx) {
  return g.node('template', [], parsingChildren(nodes, compileCtx));
}

// const WHITE_TAG = ['each', 'cond', 'slot', 'tpl'];

function parsingChildren(nodes: TreeNode[], compileCtx: CompileTemplateCtx): GenerateVueTemplateTypes.NodeElement[] {
  let children = [] as Array<GenerateVueTemplateTypes.NodeElement>;

  nodes.forEach((node) => {
    const nodeAst = parsingNode(node, compileCtx);
    if (Array.isArray(nodeAst)) {
      children = children.concat(nodeAst);
    } else if (nodeAst === null) {
    } else {
      children.push(nodeAst);
    }
  });

  return children;
}

type ParsingNodeReturn = GenerateVueTemplateTypes.NodeElement | GenerateVueTemplateTypes.NodeElement[] | null;

function parsingNode(node: TreeNode, compileCtx: CompileTemplateCtx): ParsingNodeReturn {
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
    case VirtualTag.TEXT:
      return parsingNodeText(node, compileCtx);
    default:
      return parsingNodeNormal(node, compileCtx);
  }
}

// 循环 <template v-for="xx in xx"></template>
function parsingNodeEach(node: TreeNode, compileCtx: CompileTemplateCtx): ParsingNodeReturn {
  const { id: nodeId, tagId, props, key } = node.data;

  const eachData = props?.find((p) => getNodePropKeyByTagId(tagId, p.propId, compileCtx) === 'data');

  if (!eachData) {
    // 过滤掉无属性的template标签
    return node.children?.length ? parsingChildren(node.children || [], compileCtx) : [];
  }

  const eachVariable = getNodePropValueVariable(nodeId, eachData.propId, compileCtx);
  const eachPrefix = compileCtx.helper.uniqueVarname(key || 'each');

  return g.node(
    'template',
    [g.directive('for', createEachExpression(eachPrefix, eachVariable))],
    parsingChildren(node.children || [], compileCtx)
  );
}

function createEachExpression(prefix: string, identiferText: string) {
  return `(${prefix}_item, ${prefix}_index) in ${identiferText}`;
}

// 条件 <template v-if="xx"></template>
function parsingNodeCond(node: TreeNode, compileCtx: CompileTemplateCtx): ParsingNodeReturn {
  const { id: nodeId, tagId, props, key } = node.data;

  debugger;
  const ifData = props?.find((p) => getNodePropKeyByTagId(tagId, p.propId, compileCtx) === 'value');

  if (!ifData) {
    // 过滤掉无属性的template标签
    return node.children?.length ? parsingChildren(node.children || [], compileCtx) : [];
  }

  const ifVariable = getNodePropValueVariable(nodeId, ifData.propId, compileCtx);

  return g.node('template', [g.directive('if', ifVariable)], parsingChildren(node.children || [], compileCtx));
}

// 条件 <slot name="xx" :xx="xx"></slot>
function parsingNodeSlot(node: TreeNode, compileCtx: CompileTemplateCtx): ParsingNodeReturn {
  const { tagId } = node.data;
  return g.node('slot', [], parsingChildren(node.children || [], compileCtx));
}

// template <template #slotname="xx"> </template>
function parsingNodeTpl(node: TreeNode, compileCtx: CompileTemplateCtx): ParsingNodeReturn {
  const { tagId, props } = node.data;
  if (!props && node.children?.length) {
    // 过滤掉无属性的template标签
    return parsingChildren(node.children || [], compileCtx);
  }
  return g.node('template', [], parsingChildren(node.children || [], compileCtx));
}

// text 文本
function parsingNodeText(node: TreeNode, compileCtx: CompileTemplateCtx): GenerateVueTemplateTypes.InsertText | null {
  const { id: nodeId, tagId, props } = node.data;

  const textData = props?.find((p) => getNodePropKeyByTagId(tagId, p.propId, compileCtx) === 'text');

  if (!textData) {
    // 过滤掉没有值的text标签
    return null;
  }

  const eachVariable = getNodePropValueVariable(nodeId, textData.propId, compileCtx);
  // return g.node('template', [], parsingChildren(node.children || [], compileCtx));
  return g.insertText(eachVariable);
}

function parsingNodeNormal(node: TreeNode, compileCtx: CompileTemplateCtx): ParsingNodeReturn {
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
