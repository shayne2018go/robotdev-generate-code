import createToken from '@/compile/config/createToken';
import { Compile } from '@/types/compile/token';
import { VueCompileOptions, VueGlobalCtx } from './compileVue';
import { PAGE_DIR } from './const/config';
import { compileScript, compileStyle, compileTemplate } from './sfc';
import { genVarName } from './shared/helper';
import { nodesDataStore } from './shared/store/nodes';
import { propertiesDataStore } from './shared/store/properties';

export type CompilePageOptions = Required<VueCompileOptions> & ParsingPageResult;
export type CompilePageCtx = {
  global: VueGlobalCtx;
  scope: {
    page: ParsingPageResult;
  };
};

interface ParsingPageResult {
  page: CodeSchema.Page;
  nodesStore: ReturnType<typeof nodesDataStore>;
  variablesStore: ReturnType<typeof propertiesDataStore>;
  importComponents: GlobalContext.Component[];
  importFunctions: GlobalContext.Function[];
}

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
  const parsingPageResult = parsingPage(page, ctx);

  const currentPageCompileOptions: CompilePageCtx = {
    global: ctx,
    scope: {
      page: parsingPageResult,
    },
  };

  const { token: templateToken } = compileTemplate(page, currentPageCompileOptions);
  const { token: scriptToken } = compileScript(page, currentPageCompileOptions);
  const { token: styleToken } = compileStyle(page, currentPageCompileOptions);

  const token = templateToken + scriptToken + styleToken;

  return { token };
}

export function parsingPage(page: CodeSchema.Page, ctx: VueGlobalCtx): ParsingPageResult {
  // 1，当前页面的依赖 （组件、行为）
  // 组件依赖

  // const actionMap = getNodesActionDependencies()

  // 2，当前页面节点的依赖（属性，事件）

  const importComponents: GlobalContext.Component[] = [];
  const importFunctions: GlobalContext.Function[] = [];
  const nodesStore = nodesDataStore(page.nodes, ctx);

  const variablesStore = propertiesDataStore(page.variables || []);

  return {
    page,
    nodesStore,
    variablesStore,
    importComponents,
    importFunctions,
  };
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
