import { DBWSchema } from '@/types';
import { preprocessDeclare } from './shared/declare';
import { DependenciesBuilder } from './dependencies';

function preprocessComponents(dependenciesBuilder: DependenciesBuilder) {
  const { dependencies, packagesWhiteList } = dependenciesBuilder;

  const localPackages = dependencies.filter((dep) => {
    const isWhite = packagesWhiteList.includes(dep.projectId);
    return !isWhite;
  });

  const components = localPackages.reduce((pre, cur) => {
    return pre.concat(cur.components || []);
  }, [] as CodeSchema.Component[]);

  return { components };
}

function preprocessComponentProps(props?: DBWSchema.RdComponentDefineProp[]): CodeSchema.ComponentProp[] {
  return props ? props.map(preprocessDeclare) : [];
}

function preprocessComponentEmits(emits?: DBWSchema.RdComponentDefineEvent[]): CodeSchema.ComponentEmit[] {
  return emits
    ? emits.map((emit) => {
        return {
          id: emit.id,
          key: emit.key!,
          name: emit.name!,
          desc: emit.desc,
          parameters: emit.parameters || [],
        };
      })
    : [];
}

function preprocessComponentSlots(slots?: DBWSchema.RdComponentDefineSlot[]): CodeSchema.ComponentSlot[] {
  return slots
    ? slots.map((slot) => {
        return {
          id: slot.id,
          key: slot.key!,
          name: slot.name!,
          desc: slot.desc,
          properties: slot.parameters || [],
        };
      })
    : [];
}

function preprocessComponentLifeCycle(lifeCycles?: DBWSchema.RdEvent[]): CodeSchema.ComponentLifeCycle[] {
  return lifeCycles
    ? lifeCycles.map((lifeCycle) => {
        return {
          eventId: lifeCycle.eventId,
          actions: lifeCycle.actions || [],
        };
      })
    : [];
}

function preprocessComponentVariables(variables?: DBWSchema.RdDecl[]): CodeSchema.ComponentVariable[] {
  return variables ? variables.map(preprocessDeclare) : [];
}

function preprocessNodes(
  rdNodes?: DBWSchema.RdNode[],
  tagIndexs?: Record<string, DBWSchema.Dependencies>
): { nodes: CodeSchema.ComponentNode[]; dependenciesIds: string[] } {
  // 收集节点里的依赖
  const dependenciesIds = [] as string[];

  const nodes = rdNodes
    ? rdNodes.map((rdNode: DBWSchema.RdNode) => {
        const hasTagId = tagIndexs?.[rdNode.tag]?.id;
        if (hasTagId) {
          dependenciesIds.push(hasTagId);
        } else {
          if (!['tpl', 'slot', 'text'].includes(rdNode.tag)) {
            console.warn(rdNode);
          }
        }

        const tag = hasTagId || rdNode.tag;
        const packageId = tagIndexs?.[rdNode.tag]?.productId || tagIndexs?.[rdNode.tag]?.projectId;

        return {
          id: rdNode.id,
          preId: rdNode.preId,
          nextId: rdNode.nextId,
          parentId: rdNode.parentId,
          slotId: rdNode.slotId,

          tagId: tag,
          packageId: packageId,

          props: rdNode.data?.props,
          events: rdNode.data?.events,
        };
      })
    : [];
  return { nodes, dependenciesIds };
}

export {
  preprocessComponentProps,
  preprocessComponentEmits,
  preprocessComponentSlots,
  preprocessComponentVariables,
  preprocessComponentLifeCycle,
  preprocessNodes,
};
export default preprocessComponents;
