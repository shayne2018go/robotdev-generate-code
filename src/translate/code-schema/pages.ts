import { DBWSchema } from '@/types';
import { ICS_Page } from '@/types/page';
import { preprocessComponentLifeCycle, preprocessComponentVariables, preprocessNodes } from './components';
import { DependenciesBuilder } from './dependencies';
import { preprocessDeclare } from './shared/declare';

/**
 * 对页面预处理
 * 收集页面中使用的 组件 行为 函数 API 依赖
 */
function preprocessPages(
  dbwSchema: DBWSchema.Project,
  dependenciesBuilder: DependenciesBuilder
): { pages: ICS_Page[] } {
  const { data } = dbwSchema;

  const { tagDependenciesIndexs } = dependenciesBuilder;

  function preprocessPage(pagemeta: DBWSchema.Page): ICS_Page {
    const componentLifeCycle = preprocessComponentLifeCycle(pagemeta.events);

    const componentVariables = preprocessComponentVariables(pagemeta.decl);

    const { nodes } = preprocessNodes(pagemeta.nodes, tagDependenciesIndexs);

    return {
      id: pagemeta.originId,
      mate: {
        title: {
          type: 'data',
          mode: 'custom',
          args: {
            value: pagemeta.name,
          },
        },
      },
      route: {
        query: pagemeta.params.map(preprocessDeclare),
      },
      nodes: nodes,
      variables: componentVariables,
      lifeCycle: componentLifeCycle,
      functions: [],
    } as ICS_Page;
  }

  const pages = data.map(preprocessPage);
  return { pages };
}

export default preprocessPages;
