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
  getNodeSlotKeyById,
  getNodeSlotProps,
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
      debugger;
      return parsingNodeSlot(node, bindParseCtx);
    case VirtualTag.TPL:
      return parsingNodeTpl(node, bindParseCtx);
    case VirtualTag.TEXT:
      return parsingNodeText(node, bindParseCtx);
    default:
      return parsingNodeNormal(node, bindParseCtx);
  }
}

function isIgnoreTemplate(
  children: GenerateVueTemplateTypes.NodeElement[]
): children is GenerateVueTemplateTypes.Node[] {
  if (children.length !== 1) {
    return false;
  }
  const childNodeAst = children[0];

  if (childNodeAst._node_ !== 'node') {
    return false;
  }

  const hasForIndex = childNodeAst.propArr.findIndex((prop) => prop.key === 'for');
  if (hasForIndex > -1) {
    return false;
  }
  const hasIfIndex = childNodeAst.propArr.findIndex((prop) => prop.key === 'if');
  if (hasIfIndex > -1) {
    return false;
  }
  return true;
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
  const childrenAst = parsingChildren(node.children || [], compileCtx);

  if (isIgnoreTemplate(childrenAst)) {
    const nodeAst = childrenAst[0];
    nodeAst.propArr.push(g.directive('for', eachExpression));
    return nodeAst;
  }
  // if (childrenAst.length === 1) {
  //   // 当children只有一个元素 且不具备for循环 则省略
  //   const nodeAst = childrenAst[0];
  //   if (nodeAst._node_ === 'node') {
  //     // 看当前子元素是否有绑定v-if (v-if 和v-for不能同时存在)
  //     const hasIfIndex = nodeAst.propArr.findIndex((prop) => prop.key === 'if');
  //     if (hasIfIndex > -1) {
  //       // 如果有绑定v-if 则:
  //       const nodeChildrenAst = nodeAst.childNodeArr;
  //       // 删除子元素原本的v-if
  //       const propAst = nodeAst.propArr.splice(hasIfIndex, 1)[0];
  //       // 给子元素增加一个template标签
  //       nodeAst.childNodeArr = [g.node('template', [propAst], nodeChildrenAst)];
  //     } else {
  //       nodeAst.propArr.push(g.directive('for', eachExpression));
  //     }
  //   }
  //   return nodeAst;
  // }

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

  const trueChildren = node.children.filter((child) => {
    const slotId = child.data.id.split('#')[1];
    if (slotId) {
      return getNodeSlotKeyById(nodeId, slotId, compileCtx) === 'true';
    }
    return false;
  });

  const falseChildren = node.children.filter((child) => {
    const slotId = child.data.id.split('#')[1];
    if (slotId) {
      return getNodeSlotKeyById(nodeId, slotId, compileCtx) === 'false';
    }
    return false;
  });

  return [
    g.node('template', [g.directive('if', ifVariable)], parsingChildren(trueChildren || [], compileCtx)),
    g.node('template', [g.directive('else')], parsingChildren(falseChildren || [], compileCtx)),
  ];
}

// 条件 <slot name="xx" :xx="xx"></slot>
function parsingNodeSlot<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: BindParseCtx
): ParsingNodeReturn {
  const { tagId, id: nodeId, slotId } = node.data;

  if (!slotId) {
    return g.node('slot', [], parsingChildren(node.children || [], compileCtx));
  }
  debugger;

  const slot_protocol = compileCtx.scope.current.slotsStore.find(slotId);
  const props = [...parsingSlotProps(node, compileCtx), g.prop('name', slot_protocol?.data.key)];

  return g.node('slot', props, parsingChildren(node.children || [], compileCtx));
}

// template <template #slotname="xx"> </template>
function parsingNodeTpl<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: BindParseCtx
): ParsingNodeReturn {
  const { tagId, props } = node.data;

  // 过滤 插槽
  if (isIgnoreSlot(node, compileCtx)) {
    // 过滤掉无属性的template标签
    return parsingChildren(node.children || [], compileCtx);
  }
  const [nodeId, slotId] = node.data.id.split('#');

  const slot_protocol = compileCtx.scope.current.nodesStore.getNodeSlotDefine(nodeId, slotId);

  if (!slot_protocol) {
    return parsingChildren(node.children || [], compileCtx);
  }

  const { properties = [] } = slot_protocol.data || {};

  if (!properties.length && slot_protocol.data.key === 'default') {
    return g.node('template', [], parsingChildren(node.children || [], compileCtx));
  }

  const slotProps = getNodeSlotProps(nodeId, slotId, compileCtx);
  const propsAst = [g.prop(`#${slot_protocol.data.key}`, slotProps)];

  return g.node('template', propsAst, parsingChildren(node.children || [], compileCtx));
}

function isIgnoreSlot(node: TreeNode, compileCtx: BindParseCtx) {
  if (!node.children?.length) {
    return true;
  }
  // 如果是条件的 （true/false） 插槽
  const [nodeId, slotId] = node.data.id.split('#');
  const parentNode = compileCtx.scope.current.nodesStore.getNode(nodeId);
  if (!parentNode) {
    return true;
  }
  const node_protocol = compileCtx.global.componentsStore.getCmpt(parentNode?.tagId);
  if (node_protocol?.key === 'cond') {
    debugger;
    return true;
  }
}

// text 文本
function parsingNodeText<T extends CodeSchema.Page | CodeSchema.Component>(
  node: TreeNode,
  compileCtx: BindParseCtx
): ParsingNodeReturn | null {
  const { id: nodeId, tagId } = node.data;

  const textData = node.data?.props?.find((p) => getNodePropKeyById(nodeId, p.propId, compileCtx) === 'text');

  if (!textData) {
    // 过滤掉没有值的text标签
    return null;
  }

  const valueExpression = getNodePropValueExpression(nodeId, textData, compileCtx);
  if (!valueExpression) {
    throw new Error(`can not find variable "${textData.propId}"`);
  }

  const tagName = getNodeTag(tagId, compileCtx);

  const props = [...parsingNodeProps(node, compileCtx).filter((item) => item.key !== 'text')];

  const isVoidElement = VOID_ELEMENT.includes(tagName);

  return g.node(tagName, props, [g.insertText(valueExpression)], isVoidElement);
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
    const key = getNodePropKeyById(nodeId, p.propId, compileCtx);
    if (!key) {
      return;
    }
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
      const propAst = g.prop(key, getNodePropValueExpression(nodeId, p, compileCtx), true);
      propsAst.push(propAst);
    }
  });

  return propsAst;
}

// <slot name="icon" :src="sss.src">
function parsingSlotProps(node: TreeNode, compileCtx: BindParseCtx): GenerateVueTemplateTypes.Prop[] {
  const { props = [], id: nodeId, slotId } = node.data;

  if (!slotId) {
    return [];
  }
  const propsAst = [] as GenerateVueTemplateTypes.Prop[];

  // const slot_protocol = compileCtx.scope.current.nodesStore.getNodeSlotDefine(nodeId, slotId);
  const slot_protocol = compileCtx.scope.current.slotsStore.find(slotId);

  // A - B

  props?.forEach((p) => {
    const key = slot_protocol?.members.properties?.find(p.propId)?.data.key;
    if (!key) {
      return;
    }
    // 判断是否为table类型 拆分为两个属性
    const propAst = g.prop(key, getNodePropValueExpression(nodeId, p, compileCtx), true);
    propsAst.push(propAst);
  });

  return propsAst;
}

export default compileTemplate;
