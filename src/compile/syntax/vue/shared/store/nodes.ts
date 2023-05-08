import { ICS_Page } from '@/types/page';
import { localSqlStore } from '../local-map';

export interface ViewNode {
  id: string;
  parentId?: string | null;
  tagId: string;
  packageId?: string | null; // 来源，如果定义了来源，则必须定义sourceId，refId指向sourceId中的资源id。如果未定义来源，则refId指向当前项目的组件id
  props?: ICS_Page['nodes'][number]['props'] | null;
  events?: ICS_Page['nodes'][number]['events'] | null;
  slots?: Array<ViewNodeSlot>;
}

// react特殊处理：识别tagId指向的tag是否为“slot”，如果是，就是一个插槽定义节点

export interface ViewNodeSlot {
  id: string;
  parentId: ViewNode['id'];
  slotId: string;
  props?: ICS_Page['nodes'][number]['props'] | null;
  nodes?: Array<ViewNode>;
}

export const nodesDataStore = (
  nodes: ICS_Page['nodes'],
  itemCallback: (item: ICS_Page['nodes'][number], index: number) => void
) => {
  const store = localSqlStore<ICS_Page['nodes'][number], 'id', []>({ primaryKey: 'id' });

  type TreeNode = {
    id: ICS_Page['nodes'][number]['id'];
    parentId: string | null;
    data: ICS_Page['nodes'][number];
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
      const treeNode: TreeNode = {
        id: node.id,
        parentId: node.parentId || null,
        data: node,
        children: [],
      };
      tree[node.id] = treeNode;

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
        treeNodes.push(treeNode);
      }
    });
  }

  const parents = (nodeId: ICS_Page['nodes'][number]['id'], filter: (item: TreeNode) => boolean, push?: boolean) => {
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
    getNode(nodeId: ICS_Page['nodes'][number]['id']) {
      return store.query(nodeId);
    },
  };
};
