import { DBSchema } from '@/types';
import { BUILT_IN_PACKAGES } from '../const/config';

// 出现次数统计工具
export const occurrenceNumber = () => {
  const cache: { [key: string]: number } = {};

  return (varName: string) => {
    if (typeof cache[varName] !== 'number') {
      cache[varName] = 0;
    } else {
      cache[varName]++;
    }
    return cache[varName];
  };
};

export const genVarName = (hasLine?: boolean) => {
  const occurrenceNumberHandler = occurrenceNumber();
  return (varName: string) => {
    const number = occurrenceNumberHandler(varName);
    return varName + (number && number > 0 ? `${hasLine === false ? '' : '_'}${number + 1}` : '');
  };
};

export function outerNode(node: CodeSchema.ComponentNode) {
  return node.packageId && !BUILT_IN_PACKAGES.includes(node.packageId);
}

/**
 * 获取节点中的组件依赖
 * @param nodes
 * @param componentsDependencies
 * @returns
 */
function getNodesComponentDependencies(
  nodes: CodeSchema.ComponentNode[],
  componentsDependencies: GlobalContext.Component[]
): Map<string, GlobalContext.Component> {
  const outerNodes = getOuterNodes(nodes);
  const currentPageComponentDependencies = componentsDependencies.filter((cd) =>
    outerNodes.map((on) => on.tagId).includes(cd.id)
  );
  const map = new Map<string, GlobalContext.Component>();
  currentPageComponentDependencies.forEach((cpcd) => {
    map.set(cpcd.id, cpcd);
  });
  return map;
}

function getOuterNodes(nodes: Array<CodeSchema.ComponentNode>) {
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
