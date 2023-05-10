import { localSqlStore } from '../local-map';
import { INode, INodeEvent, INodeProps, } from '@/types/view';

export interface ViewNode {
  id: string;
  parentId?: string | null;
  tagId: string;
  packageId?: string | null; // 来源，如果定义了来源，则必须定义sourceId，refId指向sourceId中的资源id。如果未定义来源，则refId指向当前项目的组件id
  props?: INode['props'] | null;
  events?: INode['events'] | null;
  slots?: Array<ViewNodeSlot>;
}

// react特殊处理：识别tagId指向的tag是否为“slot”，如果是，就是一个插槽定义节点

export interface ViewNodeSlot {
  id: string;
  parentId: ViewNode['id'];
  slotId: string;
  props?: INode['props'] | null;
  nodes?: Array<ViewNode>;
}

export const nodesDataStore = (nodes: INode, itemCallback: (item: INode, index: number) => void) => {
  const store = localSqlStore<INode, 'id', []>({ primaryKey: 'id' });
  const propsStore = localSqlStore<INodeProps, 'propId', []>;
  const eventsStore = localSqlStore<INodeEvent, 'eventId', []>;
  const cache: {
    [nodeId: string]: {
      propsStore: ReturnType<typeof propsStore>;
      eventsStore: ReturnType<typeof eventsStore>;
    };
  } = {};
  type TreeNode = {
    id: INode['id'];
    parentId: string | null;
    data: INode;
    children: TreeNode[];
    isUndefined?: true;
  };

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

  const parents = (nodeId: INode['id'], filter: (item: TreeNode) => boolean, push?: boolean) => {
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
      return store.queries();
    },
    getNode(nodeId: INode['id']) {
      return store.query(nodeId);
    },
    getNodeProp(nodeId: INode['id'], propId: INodeProps['propId']) {
      return cache[nodeId]?.propsStore.query(propId);
    },
    getNodeEvent(nodeId: INode['id'], eventId: INodeEvent['eventId']) {
      return cache[nodeId]?.eventsStore.query(eventId);
    },
  };
};
