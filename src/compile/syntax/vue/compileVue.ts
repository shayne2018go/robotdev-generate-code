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
  const vueCompileOptions = {
    routes: [],
    functions: [],
    components: [],
  } as VueCompileOptions;

  const { tokens: routerTokens, routes } = compileRouter(codeSchema);
  vueCompileOptions['routes'] = routes;

  const { tokens: functionTokens, functions } = compileFunctions(codeSchema);
  vueCompileOptions['functions'] = functions;

  const { tokens: componentTokens, components } = compileComponents(codeSchema, vueCompileOptions);
  vueCompileOptions['components'] = components;

  const { tokens: pageTokens } = compilePages(codeSchema);

  const tokens = routerTokens.concat(componentTokens).concat(functionTokens).concat(pageTokens);

  return { tokens };
}

export default compileVue;
