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

export type TreeNode = {
  id: CodeSchema.ComponentNode['id'];
  parentId: string | null;
  data: CodeSchema.ComponentNode;
  children: TreeNode[];
  isUndefined?: true;
};

export const nodesDataStore = (
  nodes: CodeSchema.ComponentNode[],
  itemCallback: (item: CodeSchema.ComponentNode, index: number) => void
) => {
  const store = localSqlStore<CodeSchema.ComponentNode, 'id', []>({ primaryKey: 'id' });
  const propsStore = localSqlStore<CodeSchema.Property, 'propId', []>;
  const eventsStore = localSqlStore<CodeSchema.Event, 'eventId', []>;
  const cache: {
    [nodeId: string]: {
      propsStore: ReturnType<typeof propsStore>;
      eventsStore: ReturnType<typeof eventsStore>;
    };
  } = {};

  const tree: {
    [nodeId: string]: TreeNode;
  } = {};

  const treeNodes: TreeNode[] = [];

  if (nodes) {
    store.created(nodes, (node, index) => {
      itemCallback(node, index);
      cache[node.id] = {
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
    getNode(nodeId: CodeSchema.ComponentNode['id']) {
      return store.query(nodeId);
    },
    getNodeProp(nodeId: CodeSchema.ComponentNode['id'], propId: CodeSchema.Property['propId']) {
      return cache[nodeId]?.propsStore.query(propId);
    },
    getNodeEvent(nodeId: CodeSchema.ComponentNode['id'], eventId: CodeSchema.Event['eventId']) {
      return cache[nodeId]?.eventsStore.query(eventId);
    },
  };
};
