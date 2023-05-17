import compileApis, { parsingApis } from './compileApis';
import compileComponents from './compileComponents';
import compileFunctions from './compileFunctions';
import compilePages from './compilePages';
import compileRouter from './compileRouter';
import compileSystem from './compileSystem';
import { BUILT_IN_PACKAGES, COMPONENT_DIR, PAGE_DIR } from './const/config';
import { getPathByDirectories } from './shared/directory-helper';
import {
  actionsDataStore,
  apisDataStore,
  componentsDataStore,
  eventsDataStore,
  functionsDataStore,
  pagesDataStore,
  propsDataStore,
} from './shared/store';
import { slotsDataStore } from './shared/store/globalSlots';

export interface VueCompileOptions {
  pages: GlobalContext.Page[]; // 路由相关
  components: GlobalContext.Component[]; // 组件相关
  functions: GlobalContext.Function[]; // 函数相关
  apis: GlobalContext.Api[]; // API相关
  actions: GlobalContext.Action[]; // 行为相关
  events: GlobalContext.Event[]; // 事件相关
  props: GlobalContext.Property[]; // 属性相关
  slots: GlobalContext.Slot[]; // 属性相关
}

export interface VueGlobalCtx {
  pagesStore: ReturnType<typeof pagesDataStore>;
  componentsStore: ReturnType<typeof componentsDataStore>;
  functionsStore: ReturnType<typeof functionsDataStore>;
  actionsStore: ReturnType<typeof actionsDataStore>;
  apisStore: ReturnType<typeof apisDataStore>;
  eventsStore: ReturnType<typeof eventsDataStore>;
  propsStore: ReturnType<typeof propsDataStore>;
  slotsStore: ReturnType<typeof slotsDataStore>;
  variablesRootName: string;
  apiVarRootName: string;
  nodesVarRootName: string;
  nodePropFunctionCtxParamName: string;
}
function compileVue(codeSchema: CodeSchema.Project) {
  // 解析相关依赖协议
  const vueCompileOptions = parsingVueCompileOptions(codeSchema);

  // 构建全局上下文
  const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);

  // 编译路由
  const { tokens: routerTokens } = compileRouter(codeSchema, vueGlobalCtx);

  // 编译函数
  const { tokens: functionTokens } = compileFunctions(codeSchema, vueGlobalCtx);

  // 编译API
  const { tokens: apiTokens } = compileApis(codeSchema, vueGlobalCtx);

  // 编译组件
  const { tokens: componentTokens } = compileComponents(codeSchema, vueGlobalCtx);

  // 编译页面
  const { tokens: pageTokens } = compilePages(codeSchema, vueGlobalCtx);

  // 编译内部文件（open 函数）
  const { tokens: sysTokens } = compileSystem();

  // 汇总
  const tokens = routerTokens
    .concat(apiTokens)
    .concat(functionTokens)
    .concat(componentTokens)
    .concat(pageTokens)
    .concat(sysTokens);

  return { tokens };
}

/**
 * 解析相关的依赖（路由，api，组件(插槽)，行为，函数，事件，属性）
 * @param codeSchema
 * @returns
 */
export function parsingVueCompileOptions(codeSchema: CodeSchema.Project): VueCompileOptions {
  const { pages } = parsingPages(codeSchema);

  const { apis } = parsingApis(codeSchema);

  const { components, actions, functions, events, props, slots } = codeSchema.dependencies.reduce(
    (pre, cur) => {
      pre.components = pre.components.concat(parsingDependenciesComponents(cur));
      pre.actions = pre.actions.concat(parsingDependenciesActions(cur));
      pre.functions = pre.functions.concat(parsingDependenciesFunctions(cur));
      pre.events = pre.events.concat(parsingDependenciesEvents(cur));
      pre.props = pre.props.concat(parsingDependenciesProps(cur));
      pre.slots = pre.slots.concat(parsingDependenciesSlots(cur));

      return pre;
    },
    {
      components: [] as GlobalContext.Component[],
      actions: [] as GlobalContext.Action[],
      functions: [] as GlobalContext.Function[],
      events: [] as GlobalContext.Event[],
      props: [] as GlobalContext.Property[],
      slots: [] as GlobalContext.Slot[],
    }
  );

  return { pages, functions, apis, components, actions, events, props, slots };
}

/**
 * 状态管理相关依赖
 * @param VueCompileOptions
 * @returns
 */
export function buildGlobalCtx(VueCompileOptions: VueCompileOptions): VueGlobalCtx {
  const functionsStore = functionsDataStore(VueCompileOptions.functions);
  const actionsStore = actionsDataStore(VueCompileOptions.actions);
  const apisStore = apisDataStore(VueCompileOptions.apis);
  const componentsStore = componentsDataStore(VueCompileOptions.components);
  const pagesStore = pagesDataStore(VueCompileOptions.pages);
  const eventsStore = eventsDataStore(VueCompileOptions.events);
  const propsStore = propsDataStore(VueCompileOptions.props);
  const slotsStore = slotsDataStore(VueCompileOptions.slots);

  return {
    componentsStore,
    functionsStore,
    actionsStore,
    apisStore,
    pagesStore,
    eventsStore,
    propsStore,
    slotsStore,
    apiVarRootName: 'apiState',
    variablesRootName: 'variables',
    nodesVarRootName: 'nodesState',
    nodePropFunctionCtxParamName: 'ctx',
  };
}

// function parsingSystem(codeSchema: CodeSchema.Project)

function parsingPages(codeSchema: CodeSchema.Project): { pages: GlobalContext.Page[] } {
  const { directories = [], pages } = codeSchema;

  const _pages =
    pages.map((page) => {
      const pagePath = getPathByDirectories(directories, page.id);

      const routerPath = `/${pagePath.map((p) => p.key).join('/')}`;
      const routerName = pagePath[pagePath.length - 1].key;

      // 文件的绝对路径
      const filePath = `${PAGE_DIR}${routerPath}.vue`;

      return {
        id: page.id,
        routerName,
        routerPath,
        source: {
          filePath,
        },
        protocol: page,
      } as GlobalContext.Page;
    }) || [];

  return { pages: _pages };
}

function parsingDependenciesComponents(cur: CodeSchema.Dependency): GlobalContext.Component[] {
  const components = [] as GlobalContext.Component[];
  if (BUILT_IN_PACKAGES.includes(cur.projectId)) {
    cur.components?.forEach((cmpt) => {
      components.push({
        id: cmpt.id,
        key: cmpt.key,
        protocol: cmpt,
      });
    });
  } else {
    // 在线组件
    cur.components?.forEach((cmpt) => {
      components.push({
        id: cmpt.id,
        key: cmpt.key,
        source: {
          filePath: `${COMPONENT_DIR}/${cmpt.key}.vue`,
          exportName: 'default',
        },
        protocol: cmpt,
      });
    });
  }
  cur.elements?.forEach((cmpt) => {
    components.push({
      id: cmpt.id,
      key: cmpt.key,
      protocol: cmpt,
    });
  });
  return components;
}

function parsingDependenciesActions(cur: CodeSchema.Dependency): GlobalContext.Action[] {
  const actions =
    cur.actions?.map((act) => {
      const exportName = act.key.split('.')[0];

      const source = cur.key
        ? {
            packageName: cur.key, // 包路径
            exportName,
          }
        : undefined;

      return {
        id: act.id, // 行为id
        key: act.key, // 行为名称
        source,
        protocol: act, // 协议
      };
    }) || [];
  return actions;
}

function parsingDependenciesFunctions(cur: CodeSchema.Dependency): GlobalContext.Function[] {
  const functions =
    cur.functions?.map((func) => {
      const exportName = func.key.split('.')[0];

      const source = cur.key
        ? {
            packageName: cur.key, // 包路径
            exportName,
          }
        : undefined;

      return {
        id: func.id, // 行为id
        key: func.key, // 行为名称
        source,
        protocol: func, // 协议
      };
    }) || [];
  return functions;
}

function parsingDependenciesEvents(cur: CodeSchema.Dependency): GlobalContext.Event[] {
  const events =
    cur.events?.map((evt) => {
      const exportName = evt.key.split('.')[0];

      const source = cur.key
        ? {
            packageName: cur.key, // 包路径
            exportName,
          }
        : undefined;

      return {
        id: evt.id, // 行为id
        key: evt.key, // 行为名称
        source,
        protocol: evt, // 协议
      };
    }) || [];
  return events;
}

function parsingDependenciesProps(cur: CodeSchema.Dependency): GlobalContext.Property[] {
  const props =
    cur.props?.map((pro) => {
      const exportName = pro.key.split('.')[0];

      const source = cur.key
        ? {
            packageName: cur.key, // 包路径
            exportName,
          }
        : undefined;

      return {
        id: pro.id, // 行为id
        key: pro.key, // 行为名称
        source,
        protocol: pro, // 协议
      };
    }) || [];
  return props;
}

function parsingDependenciesSlots(cur: CodeSchema.Dependency): GlobalContext.Slot[] {
  const slots =
    cur.slots?.map((pro) => {
      const exportName = pro.key.split('.')[0];

      const source = cur.key
        ? {
            packageName: cur.key, // 包路径
            exportName,
          }
        : undefined;

      return {
        id: pro.id, // 行为id
        key: pro.key, // 行为名称
        source,
        protocol: pro, // 协议
      };
    }) || [];
  return slots;
}

export default compileVue;
