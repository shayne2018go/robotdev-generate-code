import { tools } from '@/utils/tools';
import { VueGlobalCtx } from '../../compileVue';
import { genVarName } from '../helper';
import { localSqlStore } from '../local-map';

export interface ViewNode {
  id: string;
  parentId?: string | null;
  tagId: string;
  packageId?: string | null; // 来源，如果定义了来源，则必须定义sourceId，refId指向sourceId中的资源id。如果未定义来源，则refId指向当前项目的组件id
  props?: CodeSchema.ComponentNode['props'] | null;
  events?: CodeSchema.ComponentNode['events'] | null;
  slots?: Array<ViewNodeSlot>;
}

// react特殊处理：识别tagId指向的tag是否为“slot”，如果是，就是一个插槽定义节点

export interface ViewNodeSlot {
  id: string;
  parentId: ViewNode['id'];
  slotId: string;
  props?: CodeSchema.ComponentNode['props'] | null;
  nodes?: Array<ViewNode>;
}

//ctx.getNodePropDefine(nodeId,propId

const propsStore = localSqlStore;
const eventsStore = localSqlStore;

export interface NodeMapItem {
  data: CodeSchema.ComponentNode;
  component: ReturnType<VueGlobalCtx['componentsStore']['find']>;
  varName: string;
  propsStore: ReturnType<typeof propsStore<CodeSchema.Property, 'propId', []>>;
  eventsStore: ReturnType<typeof eventsStore<CodeSchema.Event, 'eventId', []>>;
}

export type TreeNode = {
  id: CodeSchema.ComponentNode['id'];
  parentId: string | null;
  data: CodeSchema.ComponentNode;
  children: TreeNode[];
  isUndefined?: true;
  store?: NodeMapItem;
};

export const nodesDataStore = (nodes: CodeSchema.ComponentNode[], ctx: VueGlobalCtx) => {
  const tree: {
    [nodeId: string]: TreeNode;
  } = {};

  const treeNodes: TreeNode[] = [];

  const nodesMap: {
    [nodeId: string]: NodeMapItem;
  } = {};
  const genVarNameHanlder = genVarName();

  if (nodes) {
    nodes.forEach((node) => {
      const cmpt = ctx.componentsStore.find(node.tagId);
      if (!cmpt) {
        throw new Error('tagId不存在');
      }
      const key = tools.string.lineToHump(cmpt.data.key);
      nodesMap[node.id] = {
        data: node,
        component: cmpt,
        varName: genVarNameHanlder(key),
        propsStore: propsStore<CodeSchema.Property, 'propId', []>({ primaryKey: 'propId' }).created(node.props || []),
        eventsStore: eventsStore<CodeSchema.Event, 'eventId', []>({ primaryKey: 'eventId' }).created(node.events || []),
      };
      if (!tree[node.id]) {
        const treeNode: TreeNode = {
          id: node.id,
          parentId: node.parentId || null,
          data: node,
          children: [],
          store: nodesMap[node.id],
        };
        tree[node.id] = treeNode;
      } else {
        tree[node.id].parentId = node.parentId || null;
        tree[node.id].data = node;
        delete tree[node.id].isUndefined;
      }

      if (node.parentId) {
        if (!tree[node.parentId]) {
          tree[node.parentId] = {
            id: node.parentId,
            parentId: null,
            data: null as any,
            children: [],
            isUndefined: true,
          };
        }
        tree[node.parentId].children.push(tree[node.id]);
      }

      if (!node.parentId) {
        treeNodes.push(tree[node.id]);
      }
    });
  }

  const parents = (nodeId: CodeSchema.ComponentNode['id'], filter?: (item: TreeNode) => boolean, push?: boolean) => {
    const parentId = nodesMap[nodeId].data.parentId;
    if (!parentId) {
      return [];
    }
    const list: TreeNode[] = [];
    let parent = nodesMap[parentId];
    while (parent) {
      const treeNode = tree[parent.data.id];
      if (treeNode.isUndefined) {
        break;
      }
      if (filter?.(treeNode)) {
        if (push) {
          list.push(treeNode);
        } else {
          list.unshift(treeNode);
        }
      }
      const parentId = treeNode.parentId;
      if (!parentId) {
        break;
      }
      parent = nodesMap[parentId];
    }
    return list;
  };

  const parentOne = (nodeId: CodeSchema.ComponentNode['id'], filter: (item: TreeNode) => boolean) => {
    const parentId = nodesMap[nodeId].data.parentId;
    if (!parentId) {
      return;
    }
    let parent = nodesMap[parentId];
    while (parent) {
      const treeNode = tree[parent.data.id];
      if (treeNode.isUndefined) {
        break;
      }
      if (filter(treeNode)) {
        return parent;
      }
      const parentId = treeNode.parentId;
      if (!parentId) {
        break;
      }
      parent = nodesMap[parentId];
    }
    return;
  };

  const methods = {
    treeNodes,
    parentOne,
    parents,
    nodes() {
      return nodes;
    },
    find(nodeId: CodeSchema.ComponentNode['id']): NodeMapItem | undefined {
      return nodesMap[nodeId];
    },
    getNode(nodeId: CodeSchema.ComponentNode['id']): CodeSchema.ComponentNode | undefined {
      return nodesMap[nodeId]?.data;
    },
    getNodeProp(
      nodeId: CodeSchema.ComponentNode['id'],
      propId: CodeSchema.Property['propId']
    ): CodeSchema.Property | undefined {
      return nodesMap[nodeId]?.propsStore?.query(propId);
    },
    getNodeEvent(
      nodeId: CodeSchema.ComponentNode['id'],
      eventId: CodeSchema.Event['eventId']
    ): CodeSchema.Event | undefined {
      return nodesMap[nodeId]?.eventsStore?.query(eventId);
    },
    getNodeVarName(nodeId: CodeSchema.ComponentNode['id']) {
      return nodesMap[nodeId].varName || undefined;
    },
    getNodePropDefine(nodeId: CodeSchema.ComponentNode['id'], propId: CodeSchema.Property['propId']) {
      let nodeInfo = nodesMap[nodeId];
      let define = nodeInfo?.component?.members?.propsStore.findId(propId) || ctx.propsStore?.findId(propId);
      return define;
    },
    getNodeEventDefine(nodeId: CodeSchema.ComponentNode['id'], eventId: CodeSchema.Event['eventId']) {
      let define = nodesMap[nodeId]?.component?.members?.emitsStore.findId(eventId) || ctx.eventsStore?.findId(eventId);
      return define;
    },
    getNodeSlotDefine(nodeId: CodeSchema.ComponentNode['id'], slotId: Required<CodeSchema.ComponentNode>['slotId']) {
      let define = nodesMap[nodeId]?.component?.members?.slotsStore.findId(slotId) || ctx.slotsStore?.findId(slotId);
      return define;
    },
    getNodePropVarName(nodeId: CodeSchema.ComponentNode['id'], propId: CodeSchema.Property['propId']) {
      return methods.getNodePropDefine(nodeId, propId)?.varName;
    },
    getNodeEventVarName(nodeId: CodeSchema.ComponentNode['id'], eventId: CodeSchema.Event['eventId']) {
      return methods.getNodeEventDefine(nodeId, eventId)?.varName;
    },
  };
  return methods;
};
