import createToken from '@/compile/config/createToken';
import { Compile } from '@/types/compile/token';
import { VueGlobalCtx } from './compileVue';
import { PAGE_DIR } from './const/config';
import { compileScript, compileStyle, compileTemplate } from './sfc';
import { componentEmitsDataStore, componentSlotsDataStore } from './shared/store';
import { nodesDataStore } from './shared/store/nodes';
import { propertiesDataStore } from './shared/store/properties';

export type CompilePageCtx = {
  global: VueGlobalCtx;
  scope: {
    current: ParsingCurrentResult<CodeSchema.Page>;
  };
};

interface ParsingCurrentResult<T extends CodeSchema.Component | CodeSchema.Page> {
  data: T;
  nodesStore: ReturnType<typeof nodesDataStore>;
  variablesStore: ReturnType<typeof propertiesDataStore>;
  lifeCyclesStore: ReturnType<typeof componentEmitsDataStore>;
  slotsStore: ReturnType<typeof componentSlotsDataStore>;
  emitsStore: ReturnType<typeof componentEmitsDataStore>;
  propsStore: ReturnType<typeof propertiesDataStore>;
  importComponents: GlobalContext.Component[];
  importFunctions: GlobalContext.Function[];
}

// interface ParsingPageResult {
//   page: CodeSchema.Page;
//   nodesStore: ReturnType<typeof nodesDataStore>;
//   variablesStore: ReturnType<typeof propertiesDataStore>;
//   importComponents: GlobalContext.Component[];
//   importFunctions: GlobalContext.Function[];
// }

// var

function compilePages(codeSchema: CodeSchema.Project, vueGlobalCtx: VueGlobalCtx): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  const { directories = [] } = codeSchema;

  codeSchema.pages.forEach((page) => {
    // 1 编译页面代码字符串（token）
    const { token } = compilePage(page, vueGlobalCtx);
    // 2 编译页面地址 ps： 根据directories
    const filePath = getPageFilePath(page, directories);

    tokens.push(createToken(filePath, token));
  });

  return { tokens };
}

function compilePage(page: CodeSchema.Page, ctx: VueGlobalCtx) {
  const parsingComponentResult = parsingCurrent(page, ctx);

  const currentPageCompileOptions: CompilePageCtx = {
    global: ctx,
    scope: {
      current: parsingComponentResult,
    },
  };

  const { token: templateToken } = compileTemplate(page, currentPageCompileOptions);
  const { token: scriptToken } = compileScript(page, currentPageCompileOptions);
  const { token: styleToken } = compileStyle(page, currentPageCompileOptions);

  const token = templateToken + scriptToken + styleToken;

  return { token };
}

export function parsingCurrent<T extends CodeSchema.Component | CodeSchema.Page>(
  data: T,
  ctx: VueGlobalCtx
): ParsingCurrentResult<T> {
  const importComponents: GlobalContext.Component[] = [];
  const importFunctions: GlobalContext.Function[] = [];
  const nodesStore = nodesDataStore(data.nodes, ctx);
  const variablesStore = propertiesDataStore(data.variables || []);
  const lifeCyclesStore = ctx.eventsStore;
  const result = {
    data,
    nodesStore,
    variablesStore,
    lifeCyclesStore,
    importComponents,
    importFunctions,
  } as ParsingCurrentResult<T>;

  if (isComponent(data)) {
    const emitsStore = componentEmitsDataStore(data.emits || []);
    const slotsStore = componentSlotsDataStore(data.slots || []);
    const propsStore = propertiesDataStore(data.props || []);
    result['emitsStore'] = emitsStore;
    result['slotsStore'] = slotsStore;
    result['propsStore'] = propsStore;
  }

  return result;
}

function isPage(data: Record<string, any>): data is CodeSchema.Page {
  return data.meta || data.route;
}

function isComponent(data: Record<string, any>): data is CodeSchema.Component {
  return !data.meta && data.route;
}

function getPageFilePath(page: CodeSchema.Page, directories: CodeSchema.Directory[]): string {
  const dirPath: CodeSchema.Directory[] = [];

  let curId: string | null = page.id;

  while (curId) {
    const current = directories.find((d) => d.id === curId);
    if (current) {
      dirPath.unshift(current);
      curId = current.parentId;
    } else {
      break;
    }
  }

  // vue-router 的path
  const path = `/${dirPath.map((p) => p.key).join('/')}`;

  // 文件的绝对路径
  const filePath = `${PAGE_DIR}${path}.vue`;

  return filePath;
}

export default compilePages;
