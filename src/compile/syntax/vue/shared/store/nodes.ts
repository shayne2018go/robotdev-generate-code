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

const propsStore = localSqlStore<CodeSchema.Property, 'propId', []>;
const eventsStore = localSqlStore<CodeSchema.Event, 'eventId', []>;

interface NodeMapItem {
  data: CodeSchema.ComponentNode;
  component: ReturnType<VueGlobalCtx['componentsStore']['find']>;
  varName: string;
  propsStore: ReturnType<typeof propsStore>;
  eventsStore: ReturnType<typeof eventsStore>;
}

export const nodesDataStore = (nodes: CodeSchema.ComponentNode[], ctx: VueGlobalCtx) => {
  type TreeNode = {
    id: CodeSchema.ComponentNode['id'];
    parentId: string | null;
    data: CodeSchema.ComponentNode;
    children: TreeNode[];
    isUndefined?: true;
  };

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
      if (['tpl'].includes(cmpt.data.key)) {
        return;
      }
      const key = tools.string.lineToHump(cmpt.data.key);
      nodesMap[node.id] = {
        data: node,
        component: cmpt,
        varName: genVarNameHanlder(key),
        propsStore: propsStore({ primaryKey: 'propId' }).created(node.props || []),
        eventsStore: eventsStore({ primaryKey: 'eventId' }).created(node.events || []),
      };
      if (!tree[node.id]) {
        const treeNode: TreeNode = {
          id: node.id,
          parentId: node.parentId || null,
          data: node,
          children: [],
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

  const parents = (nodeId: CodeSchema.ComponentNode['id'], filter: (item: TreeNode) => boolean, push?: boolean) => {
    const parentId = tree[nodeId].parentId;
    if (!parentId) {
      return [];
    }
    const list: TreeNode[] = [];
    let parent = tree[parentId];
    while (parent) {
      if (parent.isUndefined) {
        break;
      }
      if (filter(parent)) {
        if (push) {
          list.push(parent);
        } else {
          list.unshift(parent);
        }
        const parentId = parent.parentId;
        if (!parentId) {
          break;
        }
        parent = tree[parentId];
      }
    }
    return list;
  };

  return {
    treeNodes,
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
    getNodeVarName(nodeId: CodeSchema.ComponentNode['id']): NodeMapItem | undefined {
      return nodesMap[nodeId];
    },
  };
};
