import typeHelper from '@/compile/shared/tools/type-helper';
import valueHelper from '@/compile/shared/tools/value-helper';
import * as g from '@/compile/tokens/markup/vue-template/generate-schema';
import { GenerateVueTemplateTypes } from '@/compile/tokens/markup/vue-template/types';
import { CompileCurrentCtx } from '../compilePages';
import { VOID_ELEMENT, VirtualTag } from '../const/config';
import { BindParseCtx } from '../shared/bind-parse/types';
import { TreeNode } from '../shared/store/nodes';
import {
  getNodeEachExpression,
  getNodeEventKeyByTagId,
  getNodeEventValue,
  getNodePropKeyById,
  getNodePropTableSplitProps,
  getNodePropValueExpression,
  getNodeTag,
} from '../shared/template-helper';

type CompileTemplateCtx<T extends CodeSchema.Page | CodeSchema.Component> = CompileCurrentCtx;

function compileTemplate<T extends CodeSchema.Page | CodeSchema.Component>(
  current: T,
  compileCtx: CompileCurrentCtx
): { token: string } {
  const compileTemplateCtx = Object.assign({}, compileCtx) as CompileTemplateCtx<T>;

  const ast = createTemplateAst(compileCtx.scope.current.nodesStore.treeNodes, compileTemplateCtx);

  const token = g.generate([ast]);

  return { token };
}

function createTemplateAst<T extends CodeSchema.Page | CodeSchema.Component>(
  nodes: TreeNode[],
  compileCtx: CompileTemplateCtx<T>
) {
  return g.node('template', [], parsingChildren(nodes, compileCtx));
}

// const WHITE_TAG = ['each', 'cond', 'slot', 'tpl'];

function parsingChildren<T extends CodeSchema.Page | CodeSchema.Component>(
  nodes: TreeNode[],
  compileCtx: CompileTemplateCtx<T>
): GenerateVueTemplateTypes.NodeElement[] {
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

function parsingNode<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: CompileTemplateCtx<T>
): ParsingNodeReturn {
  const tag = getNodeTag(node.data.tagId, compileCtx);

  const bindParseCtx: BindParseCtx = {
    global: compileCtx.global,
    scope: {
      current: compileCtx.scope.current,
      node: compileCtx.scope.current.nodesStore.getNode(node.id)!,
    },
  };

  switch (tag) {
    case VirtualTag.EACH:
      return parsingNodeEach(node, bindParseCtx);
    case VirtualTag.COND:
      return parsingNodeCond(node, bindParseCtx);
    case VirtualTag.SLOT:
      return parsingNodeSlot(node, bindParseCtx);
    case VirtualTag.TPL:
      return parsingNodeTpl(node, bindParseCtx);
    case VirtualTag.TEXT:
      return parsingNodeText(node, bindParseCtx);
    default:
      return parsingNodeNormal(node, bindParseCtx);
  }
}

// 循环 <template v-for="xx in xx"></template>
function parsingNodeEach<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: BindParseCtx
): ParsingNodeReturn {
  const { id: nodeId, tagId, props, key } = node.data;

  const eachData = props?.find((p) => getNodePropKeyById(nodeId, p.propId, compileCtx) === 'data');

  if (!eachData) {
    // 过滤掉无属性的template标签
    return node.children?.length ? parsingChildren(node.children || [], compileCtx) : [];
  }

  const eachExpression = getNodeEachExpression(nodeId, eachData, compileCtx);

  return g.node('template', [g.directive('for', eachExpression)], parsingChildren(node.children || [], compileCtx));
}

// 条件 <template v-if="xx"></template>
function parsingNodeCond<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: BindParseCtx
): ParsingNodeReturn {
  const { id: nodeId, tagId, props, key } = node.data;

  const ifData = props?.find((p) => getNodePropKeyById(nodeId, p.propId, compileCtx) === 'value');

  if (!ifData) {
    // 过滤掉无属性的template标签
    return node.children?.length ? parsingChildren(node.children || [], compileCtx) : [];
  }

  const ifVariable = getNodePropValueExpression(nodeId, ifData, compileCtx);

  return g.node('template', [g.directive('if', ifVariable)], parsingChildren(node.children || [], compileCtx));
}

// 条件 <slot name="xx" :xx="xx"></slot>
function parsingNodeSlot<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: BindParseCtx
): ParsingNodeReturn {
  const { tagId } = node.data;
  return g.node('slot', [], parsingChildren(node.children || [], compileCtx));
}

// template <template #slotname="xx"> </template>
function parsingNodeTpl<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: BindParseCtx
): ParsingNodeReturn {
  const { tagId, props } = node.data;
  if (!props && node.children?.length) {
    // 过滤掉无属性的template标签
    return parsingChildren(node.children || [], compileCtx);
  }
  return g.node('template', [], parsingChildren(node.children || [], compileCtx));
}

// text 文本
function parsingNodeText<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: BindParseCtx
): GenerateVueTemplateTypes.InsertText | null {
  const { id: nodeId, tagId, props } = node.data;

  const textData = props?.find((p) => getNodePropKeyById(nodeId, p.propId, compileCtx) === 'text');

  if (!textData) {
    // 过滤掉没有值的text标签
    return null;
  }

  const valueExpression = getNodePropValueExpression(nodeId, textData, compileCtx);
  if (!valueExpression) {
    throw new Error(`can not find variable "${textData.propId}"`);
  }
  return g.insertText(valueExpression);
}

function parsingNodeNormal<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: BindParseCtx
): ParsingNodeReturn {
  const { tagId, id: nodeId } = node.data;
  const tagName = getNodeTag(tagId, compileCtx);

  const props = [
    ...parsingNodeProps(node, compileCtx),
    ...(node.data.events || []).map((p) =>
      g.evt(getNodeEventKeyByTagId(nodeId, p.eventId, compileCtx), getNodeEventValue(nodeId, p.eventId, compileCtx))
    ),
  ];

  const children = parsingChildren(node.children || [], compileCtx);
  const isVoidElement = VOID_ELEMENT.includes(tagName);

  return g.node(tagName, props, children, isVoidElement);
}

function parsingNodeProps(node: TreeNode, compileCtx: BindParseCtx): GenerateVueTemplateTypes.Prop[] {
  const { props = [], id: nodeId } = node.data;
  const propsAst = [] as GenerateVueTemplateTypes.Prop[];
  props?.forEach((p) => {
    const prop_protocol = compileCtx.scope.current.nodesStore.getNodePropDefine(nodeId, p.propId);
    const key = getNodePropKeyById(nodeId, p.propId, compileCtx)
    // 判断是否为table类型 拆分为两个属性
    if (typeHelper.hasTable(prop_protocol?.data.types) && valueHelper.isTable(p.value)) {
      const tableSplitProps = getNodePropTableSplitProps(nodeId, p, compileCtx);
      if (tableSplitProps) {
        tableSplitProps.forEach((tsp) => {
          const propAst = g.prop(tsp.key, tsp.value, true);
          propsAst.push(propAst);
        });
      }
    } else {
      const propAst = g.prop(
        key,
        getNodePropValueExpression(nodeId, p, compileCtx),
        true
      );
      propsAst.push(propAst);
    }
  });

  return propsAst;
}

export default compileTemplate;
