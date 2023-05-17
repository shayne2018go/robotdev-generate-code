import { DBWSchema } from '@/types';
import { isAction, isComponent, isElement, isEvent, isFunction, isProp, isSlot } from '../utils/is';
import {
  preprocessComponentEmits,
  preprocessComponentLifeCycle,
  preprocessComponentProps,
  preprocessComponentSlots,
  preprocessComponentVariables,
  preprocessNodes,
} from './components';
import { preprocessDeclare } from './shared/declare';
import {
  isElement as isMockDataElement,
  isAction as isMockDataAction,
  isEvent as isMockDataEvent,
  isProp as isMockDataProp,
  isSlot as isMockDataSlot,
  system,
} from '@dreawer/robotdev-view-editor-mock-data';
import { BUILT_IN_PACKAGES } from '@/compile/syntax/vue/const/config';

export interface DependenciesBuilder {
  dependencies: CodeSchema.Dependency[];
  packagesWhiteList: string[];
  idDependenciesIndexs: Record<string, string[]>;
  tagDependenciesIndexs: Record<string, DBWSchema.Dependencies>;
}

interface PreprocessDependenciesResult {
  dependencies: Array<CodeSchema.Dependency>;
  dependenciesBuilder: DependenciesBuilder;
}

function preprocessDependencies(
  dependencies: DBWSchema.Dependencies[],
  dependenciesPackages: DBWSchema.DependenciesPackages[]
): PreprocessDependenciesResult {
  // component的 tag 索引对象
  const tagDependenciesIndexs = {} as Record<string, DBWSchema.Dependencies>;

  // component的 id 依赖对象
  const idDependenciesIndexs = {} as Record<string, string[]>;

  // 加入内置的依赖（mock-data）
  const { dependencies: _dependencies, dependenciesPackages: _dependenciesPackages } = preprocessSystemDependencies(
    dependencies,
    dependenciesPackages
  );

  _dependencies.forEach((dp) => {
    if (isComponent(dp) || isElement(dp)) {
      tagDependenciesIndexs[dp.tag] = dp;
    }
  });

  const dependenciesResult = _dependenciesPackages.map((dp) => {
    const currentPackageDependencies = _dependencies.filter((d) => {
      if (d.projectId) {
        return d.projectId === dp.projectId;
      }
      if (d.productId) {
        return d.productId === dp.productId;
      }
    });

    const curComponents = [] as CodeSchema.Component[],
      curElements = [] as CodeSchema.Element_Protocol[],
      curFunctions = [] as CodeSchema.Function_Protocol[],
      curActions = [] as CodeSchema.Action_Protocol[],
      curEvents = [] as CodeSchema.Event_Protocol[],
      curSlots = [] as CodeSchema.Slot_Protocol[],
      curProps = [] as CodeSchema.Property_Protocol[];

    currentPackageDependencies.forEach((dep) => {
      if (isComponent(dep)) {
        curComponents.push(preprocessDependenciesComponent(dep, tagDependenciesIndexs, idDependenciesIndexs));
      } else if (isElement(dep)) {
        curElements.push(preprocessDependenciesComponent(dep, tagDependenciesIndexs, idDependenciesIndexs));
      } else if (isFunction(dep)) {
        curFunctions.push(preprocessDependenciesFunction(dep));
      } else if (isAction(dep)) {
        curActions.push(preprocessDependenciesFunction(dep));
      } else if (isEvent(dep)) {
        curEvents.push(preprocessDependenciesEvent(dep));
      } else if (isSlot(dep)) {
        curSlots.push(preprocessDependenciesSlot(dep));
      } else if (isProp(dep)) {
        curProps.push(preprocessDependenciesProp(dep));
      }
    });

    //TODO: ant design
    let packageKey = dp.key;

    switch (dp.projectId) {
      case '000000000000000000000010':
        packageKey = 'ant-design-vue';
        break;
      case '6405a27e2d9335b17497fd8f':
        packageKey = '@robotdev/fx-common';
        break;
      default:
        break;
    }

    return {
      id: dp.productId || dp.projectId,
      projectId: dp.projectId,
      name: dp.name,
      key: packageKey,
      version: dp.version || 'latest',
      subType: dp.subType,
      components: curComponents,
      elements: curElements,
      functions: curFunctions,
      actions: curActions,
      events: curEvents,
      slots: curSlots,
      props: curProps,
      apis: [],
    } as CodeSchema.Dependency;
  });

  const dependenciesBuilder = {
    dependencies: dependenciesResult,
    idDependenciesIndexs,
    packagesWhiteList: BUILT_IN_PACKAGES,
    tagDependenciesIndexs,
  };

  return { dependencies: dependenciesResult, dependenciesBuilder };
}

function preprocessSystemDependencies(
  dependencies: DBWSchema.Dependencies[],
  dependenciesPackages: DBWSchema.DependenciesPackages[]
): {
  dependencies: DBWSchema.Dependencies[];
  dependenciesPackages: DBWSchema.DependenciesPackages[];
} {
  // pc

  const frontPackage = system.packages.find((p) => p.id === '6455c49bc56f0402c3fd3436');

  if (frontPackage?.resources?.length) {
    const system: DBWSchema.Dependencies[] = frontPackage.resources
      .map((item) => {
        if (item.id === '641a95e7cd3c6b0921a79f2b') {
          // debugger;
        }
        if (isMockDataElement(item)) {
          return {
            id: item.id!,
            tag: item.tag!,
            key: item.tag!,
            projectId: item.project!,
            name: item.name!,
            type: item.type,
            spec: item.spec,
          };
        } else if (isMockDataAction(item)) {
          return {
            id: item.id!,
            tag: item.tag!,
            key: item.tag!,
            projectId: item.project!,
            name: item.name!,
            type: item.type,
            func: item.func,
          };
        } else if (isMockDataEvent(item)) {
          return {
            id: item.id!,
            tag: item.key!,
            key: item.key!,
            projectId: item.project!,
            name: item.name!,
            type: item.type,
            parameters: item.parameters,
          };
        } else if (isMockDataProp(item)) {
          return {
            id: item.id!,
            key: item.key!,
            projectId: item.project!,
            name: item.name!,
            type: item.type,
            types: item.types,
          };
        } else if (isMockDataSlot(item)) {
          return {
            id: item.id!,
            key: item.key!,
            projectId: item.project!,
            name: item.name!,
            type: item.type,
            isHide: item.isHide,
          };
        } else {
          console.error(`connot found type: ${item}`);
          return null;
        }
      })
      .filter((item) => item !== null) as DBWSchema.Dependencies[];
    dependencies = dependencies.concat(system);

    dependenciesPackages = dependenciesPackages.concat([
      {
        projectId: frontPackage?.id,
        name: frontPackage?.name,
      },
    ]);
  }

  return { dependencies, dependenciesPackages };
}

function preprocessDependenciesComponent<T extends DBWSchema.Component | DBWSchema.Element>(
  componentDependencies: T,
  tagDependenciesIndexs: Record<string, DBWSchema.Dependencies>,
  idDependenciesIndexs: Record<string, string[]>
): T extends DBWSchema.Component ? CodeSchema.Component : CodeSchema.Element_Protocol {
  const componentProps = preprocessComponentProps(componentDependencies.spec?.props);
  const componentEmits = preprocessComponentEmits(componentDependencies.spec?.events);
  const componentSlots = preprocessComponentSlots(componentDependencies.spec?.slots);

  const componentLifeCycle = preprocessComponentLifeCycle(componentDependencies.events);

  const componentVariables = preprocessComponentVariables(componentDependencies.decl);

  const { nodes, dependenciesIds } = preprocessNodes(componentDependencies.nodes, tagDependenciesIndexs);

  idDependenciesIndexs[componentDependencies.id] = dependenciesIds;

  return {
    id: componentDependencies.id,
    name: componentDependencies.name,
    key: componentDependencies.tag,
    props: componentProps,
    emits: componentEmits,
    slots: componentSlots,
    lifeCycle: componentLifeCycle,
    functions: [],
    variables: componentVariables,
    nodes: nodes,
  };
}

function preprocessDependenciesFunction<T extends DBWSchema.Function | DBWSchema.Action>(
  functionDependencies: T
): T extends DBWSchema.Function ? CodeSchema.Function_Protocol : CodeSchema.Action_Protocol {
  const parameters = functionDependencies.func?.parameters?.map(preprocessDeclare) || [];
  const outTypes = functionDependencies.func?.output?.types || [];
  return {
    id: functionDependencies.id,
    name: functionDependencies.name,
    key: functionDependencies.key,
    parameters,
    outTypes,
  };
}
function preprocessDependenciesEvent(emitDependencies: DBWSchema.Emit): CodeSchema.Event_Protocol {
  // const parameters = functionDependencies.func?.parameters?.map(preprocessDeclare) || [];
  // const outTypes = functionDependencies.func?.output?.types || [];
  return {
    id: emitDependencies.id,
    name: emitDependencies.name!,
    key: emitDependencies.key!,
    parameters: emitDependencies.parameters || [],
  };
}

function preprocessDependenciesSlot<T extends DBWSchema.Slot>(slotDependencies: T): CodeSchema.Slot_Protocol {
  return {
    id: slotDependencies.id,
    name: slotDependencies.name!,
    key: slotDependencies.key!,
    isHide: slotDependencies.isHide!,
    properties: slotDependencies.parameters || [],
  };
}

function preprocessDependenciesProp(propDependencies: DBWSchema.Prop): CodeSchema.Property_Protocol {
  return {
    id: propDependencies.id,
    key: propDependencies.key,
    name: propDependencies.name,
    types: propDependencies.types,
  };
}

export { preprocessDependencies };
