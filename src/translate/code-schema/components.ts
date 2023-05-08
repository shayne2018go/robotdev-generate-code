import {
  ICS_Component,
  I_Component_Emit,
  I_Component_Props,
  I_Component_Slot,
  I_Component_Variable,
  I_component_LifeCycle,
} from '@/types/component';
import { DBWSchema } from '@/types';
import { INode } from '@/types/view';
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
  }, [] as ICS_Component[]);

  return { components };
}

function preprocessComponentProps(props?: DBWSchema.RdComponentDefineProp[]): I_Component_Props[] {
  return props ? props.map(preprocessDeclare) : [];
}

function preprocessComponentEmits(emits?: DBWSchema.RdComponentDefineEvent[]): I_Component_Emit[] {
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

function preprocessComponentSlots(slots?: DBWSchema.RdComponentDefineSlot[]): I_Component_Slot[] {
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

function preprocessComponentLifeCycle(lifeCycles?: DBWSchema.RdEvent[]): I_component_LifeCycle[] {
  return lifeCycles
    ? lifeCycles.map((lifeCycle) => {
        return {
          eventId: lifeCycle.eventId,
          actions: lifeCycle.actions || [],
        };
      })
    : [];
}

function preprocessComponentVariables(variables?: DBWSchema.RdDecl[]): I_Component_Variable[] {
  return variables ? variables.map(preprocessDeclare) : [];
}

function preprocessNodes(
  rdNodes?: DBWSchema.RdNode[],
  tagIndexs?: Record<string, DBWSchema.Dependencies>
): { nodes: INode[]; dependenciesIds: string[] } {
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
