import { DBWSchema } from '@/types';
import { ICS_Component } from '@/types/component';
import { ICS_Dependencies } from '@/types/dependencies';
import { isAction, isComponent } from '../utils/is';
import {
  preprocessComponentEmits,
  preprocessComponentLifeCycle,
  preprocessComponentProps,
  preprocessComponentSlots,
  preprocessComponentVariables,
  preprocessNodes,
} from './components';
import { packagesWhiteList } from './const/whiteList';
import { ICS_Function } from '@/types/function';
import { preprocessDeclare } from './shared/declare';

export interface DependenciesBuilder {
  dependencies: ICS_Dependencies[];
  packagesWhiteList: { package: string; id: string }[];
  idDependenciesIndexs: Record<string, string[]>;
  tagDependenciesIndexs: Record<string, DBWSchema.Dependencies>;
}

interface PreprocessDependenciesResult {
  dependencies: Array<ICS_Dependencies>;
  dependenciesBuilder: DependenciesBuilder;
}

function preprocessDependencies(
  dependencies: DBWSchema.Dependencies[],
  dependenciesPackages: DBWSchema.DependenciesPackages[]
): PreprocessDependenciesResult {
  // tag 索引对象
  const tagDependenciesIndexs = {} as Record<string, DBWSchema.Dependencies>;
  dependencies.forEach((dp) => {
    tagDependenciesIndexs[dp.tag] = dp;
  });

  // id 依赖对象
  const idDependenciesIndexs = {} as Record<string, string[]>;

  function preprocessDependenciesComponent(componentDependencies: DBWSchema.Component): ICS_Component {
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

  function preprocessDependenciesFunction(functionDependencies: DBWSchema.Action): ICS_Function {
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

  const dependenciesResult = dependenciesPackages.map((dp) => {
    const currentPackageDependencies = dependencies.filter((d) => {
      if (d.projectId) {
        return d.projectId === dp.projectId;
      }
      if (d.productId) {
        return d.productId === dp.productId;
      }
    });

    const currentComponents = currentPackageDependencies.filter(isComponent).map(preprocessDependenciesComponent);
    const currentActions = currentPackageDependencies.filter(isAction).map(preprocessDependenciesFunction);

    return {
      id: dp.productId || dp.projectId,
      projectId: dp.projectId,
      name: dp.name,
      key: dp.key,
      version: dp.version,
      components: currentComponents,
      functions: currentActions,
    };
  });

  const dependenciesBuilder = {
    dependencies: dependenciesResult,
    idDependenciesIndexs,
    packagesWhiteList,
    tagDependenciesIndexs,
  };

  return { dependencies: dependenciesResult, dependenciesBuilder };
}

export { preprocessDependencies };
