import { ICodeSchema } from '@/types/ICodeSchema';
import compilePages from './compilePages';
import compileRouter, { VueRoute } from './compileRouter';
import compileComponents, { VueComponent } from './compileComponents';
import compileFunctions, { VueFunction } from './compileFunctions';

export interface VueCompileOptions {
  routes: VueRoute[]; // 路由相关
  components: VueComponent[]; // 组件相关
  functions: VueFunction[]; // 函数相关
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
  } as VueCompileOptions;

  const { tokens: routerTokens, routes } = compileRouter(codeSchema);
  vueCompileOptions['routes'] = routes;

  const { tokens: functionTokens, functions } = compileFunctions(codeSchema);
  vueCompileOptions['functions'] = functions;

  const { tokens: componentTokens, components } = compileComponents(codeSchema, vueCompileOptions);
  vueCompileOptions['components'] = components;

  const { tokens: pageTokens } = compilePages(codeSchema, vueCompileOptions);

  const tokens = routerTokens.concat(componentTokens).concat(functionTokens).concat(pageTokens);

  return { tokens };
}

export default compileVue;
