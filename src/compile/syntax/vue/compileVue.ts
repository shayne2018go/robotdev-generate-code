import { ICodeSchema } from '@/types/ICodeSchema';
import compilePages from './compilePages';
import compileRouter, { VueRoute } from './compileRouter';
import compileComponents from './compileComponents';
import compileFunctions from './compileFunctions';
import { VueTypes } from './types/vue';
import compileApis from './compileApis';

export interface VueCompileOptions {
  routes: VueRoute[]; // 路由相关
  components: VueTypes.Component[]; // 组件相关
  functions: VueTypes.Function[]; // 函数相关
  actions: VueTypes.Action[]; // 函数相关
  apis: VueTypes.Api[]; // 函数相关
}

function compileVue(codeSchema: ICodeSchema) {
  /**
   * 1 内置行为协议
   * 2 原生事件协议
   * 3 内置函数协议
   */
  const vueCompileOptions = {
    routes: [],
    components: [],
    functions: [],
    actions: [],
    apis: [],
  } as VueCompileOptions;

  debugger;
  // 编译路由
  const { tokens: routerTokens, routes } = compileRouter(codeSchema);
  vueCompileOptions['routes'] = routes;

  // 编译函数
  const { tokens: functionTokens, functions } = compileFunctions(codeSchema);
  vueCompileOptions['functions'] = functions;

  // 编译API
  const { tokens: apiTokens, apis } = compileApis(codeSchema);
  vueCompileOptions['apis'] = apis;

  // 编译组件
  const { tokens: componentTokens, components } = compileComponents(codeSchema, vueCompileOptions);
  vueCompileOptions['components'] = components;

  const { tokens: pageTokens } = compilePages(codeSchema, vueCompileOptions);

  const tokens = routerTokens.concat(apiTokens).concat(functionTokens).concat(componentTokens).concat(pageTokens);

  return { tokens };
}

export default compileVue;
