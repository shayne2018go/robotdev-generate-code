import { INode } from '@/types/view';
import { DBSchema } from '@/types';
import { VueTypes } from '../types/vue';
import { BUILT_IN_PACKAGES } from '../const/config';

/**
 * 获取节点中的组件依赖
 * @param nodes
 * @param componentsDependencies
 * @returns
 */
function getNodesComponentDependencies(
  nodes: INode[],
  componentsDependencies: VueTypes.Component[]
): Map<string, VueTypes.Component> {
  const outerNodes = getOuterNodes(nodes);
  const currentPageComponentDependencies = componentsDependencies.filter((cd) =>
    outerNodes.map((on) => on.tagId).includes(cd.id)
  );
  const map = new Map<string, VueTypes.Component>();
  currentPageComponentDependencies.forEach((cpcd) => {
    map.set(cpcd.id, cpcd);
  });
  return map;
}

function getOuterNodes(nodes: Array<INode>) {
  const outerNodes = nodes.filter((node) => {
    return node.packageId && !BUILT_IN_PACKAGES.includes(node.packageId);
  });
  return outerNodes;
}

/**
 * 获取行为中的行为依赖
 * @param actions
 */
function getActionDependencies(actions: DBSchema.Action[]) {}

export { getNodesComponentDependencies, getActionDependencies };
