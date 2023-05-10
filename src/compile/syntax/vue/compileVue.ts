import compileApis, { parsingApis } from './compileApis';
import compileComponents from './compileComponents';
import compileFunctions from './compileFunctions';
import compilePages from './compilePages';
import compileRouter, { VueRoute, parsingRouter } from './compileRouter';
import { BUILT_IN_PACKAGES, COMPONENT_DIR } from './const/config';
import { actionsDataStore } from './shared/store/actions';
import { apisDataStore } from './shared/store/apis';
import { componentsDataStore } from './shared/store/components';
import { functionsDataStore } from './shared/store/functions';
import { eventsDataStore } from './shared/store/events';
import { propsDataStore } from './shared/store/props';

export interface VueCompileOptions {
  routes: VueRoute[]; // 路由相关
  components: VueTypes.Component[]; // 组件相关
  functions: VueTypes.Function[]; // 函数相关
  apis: VueTypes.Api[]; // API相关
  actions: VueTypes.Action[]; // 行为相关
  events: VueTypes.Event[]; // 事件相关
  props: VueTypes.Property[]; // 属性相关
}

export interface VueGlobalCtx {
  componentsStore: ReturnType<typeof componentsDataStore>;
  functionsStore: ReturnType<typeof functionsDataStore>;
  actionsStore: ReturnType<typeof actionsDataStore>;
  apisStore: ReturnType<typeof apisDataStore>;
  eventsStore: ReturnType<typeof eventsDataStore>;
  propsStore: ReturnType<typeof propsDataStore>;
}
function compileVue(codeSchema: CodeSchema.Project) {
  const vueCompileOptions = parsingVueCompileOptions(codeSchema);

  const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);

  // 编译路由
  const { tokens: routerTokens } = compileRouter(codeSchema, vueCompileOptions.routes);

  // 编译函数
  const { tokens: functionTokens } = compileFunctions(codeSchema, vueCompileOptions.functions);

  // 编译API
  const { tokens: apiTokens } = compileApis(codeSchema, vueCompileOptions.apis);

  // 编译组件
  const { tokens: componentTokens } = compileComponents(codeSchema, vueCompileOptions);

  // 编译页面
  const { tokens: pageTokens } = compilePages(codeSchema, vueGlobalCtx);

  // 汇总
  const tokens = routerTokens.concat(apiTokens).concat(functionTokens).concat(componentTokens).concat(pageTokens);

  return { tokens };
}

/**
 * 解析相关的依赖（路由，api，组件(插槽)，行为，函数，事件，属性）
 * @param codeSchema
 * @returns
 */
export function parsingVueCompileOptions(codeSchema: CodeSchema.Project): VueCompileOptions {
  const { routes } = parsingRouter(codeSchema);

  const { apis } = parsingApis(codeSchema);

  const { components, actions, functions, events, props } = codeSchema.dependencies.reduce(
    (pre, cur) => {
      pre.components = pre.components.concat(parsingDependenciesComponents(cur));
      pre.actions = pre.actions.concat(parsingDependenciesActions(cur));
      pre.functions = pre.functions.concat(parsingDependenciesFunctions(cur));
      pre.events = pre.events.concat(parsingDependenciesEvents(cur));
      pre.props = pre.props.concat(parsingDependenciesProps(cur));

      return pre;
    },
    {
      components: [] as VueTypes.Component[],
      actions: [] as VueTypes.Action[],
      functions: [] as VueTypes.Function[],
      events: [] as VueTypes.Event[],
      props: [] as VueTypes.Property[],
    }
  );

  return { routes, functions, apis, components, actions, events, props };
}

/**
 * 状态管理相关依赖
 * @param VueCompileOptions
 * @returns
 */
export function buildGlobalCtx(VueCompileOptions: VueCompileOptions): VueGlobalCtx {
  const componentsStore = componentsDataStore(VueCompileOptions.components);
  const functionsStore = functionsDataStore(VueCompileOptions.functions);
  const actionsStore = actionsDataStore(VueCompileOptions.actions);
  const apisStore = apisDataStore(VueCompileOptions.apis);
  const eventsStore = eventsDataStore(VueCompileOptions.events);
  const propsStore = propsDataStore(VueCompileOptions.props);

  return {
    componentsStore,
    functionsStore,
    actionsStore,
    apisStore,
    eventsStore,
    propsStore,
  };
}

function parsingDependenciesComponents(cur: CodeSchema.Dependency): VueTypes.Component[] {
  const components = [] as VueTypes.Component[];
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

function parsingDependenciesActions(cur: CodeSchema.Dependency): VueTypes.Action[] {
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

function parsingDependenciesFunctions(cur: CodeSchema.Dependency): VueTypes.Function[] {
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

function parsingDependenciesEvents(cur: CodeSchema.Dependency): VueTypes.Event[] {
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

function parsingDependenciesProps(cur: CodeSchema.Dependency): VueTypes.Property[] {
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

export default compileVue;
