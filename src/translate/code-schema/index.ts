import { DBWSchema } from '@/types';
import preprocessApis from './apis';
import preprocessComponents from './components';
import { preprocessDependencies } from './dependencies';
import preprocessPages from './pages';
import preprocessDirectories from './directory';

function preprocess(dbwSchema: DBWSchema.Project): CodeSchema.Project {
  /**
   *  解析依赖
   *
   * dependencies: 依赖描述
   * idDependenciesIndexs: 依赖关系
   */
  const { dependencies, dependenciesBuilder } = preprocessDependencies(
    dbwSchema.dependencies,
    dbwSchema.dependenciesPackages
  );

  /**
   * 解析目录
   */
  const { directoryBuilder } = preprocessDirectories(dbwSchema);

  /**
   * 解析在线组件
   */
  const { components } = preprocessComponents(dependenciesBuilder);
  /**
   * 解析页面
   */
  const { pages } = preprocessPages(dbwSchema, dependenciesBuilder);
  /**
   * 解析函数
   */

  // const {} = preprocessFunctions(dbwSchema,dependenciesBuilder)

  /**
   * 解析api
   */
  const { apis } = preprocessApis(dbwSchema, directoryBuilder);

  return {
    id: dbwSchema.id,
    key: dbwSchema.key,
    meta: {
      title: dbwSchema.name,
      describe: dbwSchema.desc,
      keyword: '',
    },
    dependencies,
    components,
    pages: pages,
    functions: [],
    apis: apis,
    directories: directoryBuilder.directories,
  };
}

export default preprocess;
