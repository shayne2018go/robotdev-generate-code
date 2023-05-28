import createToken from '@/compile/config/createToken';
import { Compile } from '@/types/compile/token';
import { VueGlobalCtx } from './compileVue';
import { BUILT_IN_IMPORTED_PACKAGE, PAGE_DIR } from './const/config';
import { compileScript, compileStyle, compileTemplate } from './sfc';
import { componentEmitsDataStore, componentSlotsDataStore } from './shared/store';
import { nodesDataStore } from './shared/store/nodes';
import { propertiesDataStore } from './shared/store/properties';

export type CompileCurrentCtx = {
  global: VueGlobalCtx;
  scope: {
    current: ParsingCurrentResult;
  };
};

export interface ParsingCurrentResult {
  data: CodeSchema.Component | CodeSchema.Page;
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
    const filePath = getPageFilePath(page, vueGlobalCtx);

    tokens.push(createToken(filePath, token));
  });

  return { tokens };
}

function compilePage(page: CodeSchema.Page, ctx: VueGlobalCtx) {
  const parsingComponentResult = parsingCurrent(page, ctx);

  const currentPageCompileOptions: CompileCurrentCtx = {
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
): ParsingCurrentResult {
  const importComponents: GlobalContext.Component[] = parsingCurrentImportedComponents(data, ctx);

  const buitinImportedFunctions: GlobalContext.PartialPick<GlobalContext.Function, 'protocol'>[] =
    ctx.functionsStore.findAll().filter((func) => {
      return func.source?.packageName && BUILT_IN_IMPORTED_PACKAGE.includes(func.source?.packageName);
    }) || [];

  const importFunctions: GlobalContext.PartialPick<GlobalContext.Function, 'protocol'>[] = [
    {
      id: 'open', // 函数id
      key: 'open', // 函数名称
      source: {
        filePath: 'src/system/action.ts', // 本地路径
        exportName: 'open', // 导出名 (不能为空 默认default )
      },
    } as GlobalContext.PartialPick<GlobalContext.Function, 'protocol'>,
    {
      id: 'queryImage', // 函数id
      key: 'queryImage', // 函数名称
      source: {
        filePath: 'src/system/action.ts', // 本地路径
        exportName: 'queryImage', // 导出名 (不能为空 默认default )
      },
    } as GlobalContext.PartialPick<GlobalContext.Function, 'protocol'>,
    {
      id: 'assignment', // 函数id
      key: 'assignment', // 函数名称
      source: {
        filePath: 'src/system/action.ts', // 本地路径
        exportName: 'assignment', // 导出名 (不能为空 默认default )
      },
    } as GlobalContext.PartialPick<GlobalContext.Function, 'protocol'>,
  ].concat(buitinImportedFunctions);

  const nodesStore = nodesDataStore(data.nodes, ctx);
  const emitsStore = componentEmitsDataStore(isComponent(data) ? data.emits : []);
  const slotsStore = componentSlotsDataStore(isComponent(data) ? data.slots : []);
  const propsStore = propertiesDataStore(isComponent(data) ? data.props : []);
  const variablesStore = propertiesDataStore(data.variables || []);
  const lifeCyclesStore = ctx.eventsStore;

  const result = {
    data,
    nodesStore,
    variablesStore,
    lifeCyclesStore,
    importComponents,
    importFunctions,
    emitsStore,
    slotsStore,
    propsStore,
  } as ParsingCurrentResult;

  return result;
}

function isPage(data: Record<string, any>): data is CodeSchema.Page {
  return data.meta || data.route;
}

function isComponent(data: Record<string, any>): data is CodeSchema.Component {
  return !data.meta && !data.route;
}

function getPageFilePath(page: CodeSchema.Page, vueGlobalCtx: VueGlobalCtx): string {
  // const dirPath: CodeSchema.Directory[] = [];

  // let curId: string | null = page.id;

  // while (curId) {
  //   const current = directories.find((d) => d.id === curId);
  //   if (current) {
  //     dirPath.unshift(current);
  //     curId = current.parentId;
  //   } else {
  //     break;
  //   }
  // }

  // // vue-router 的path
  // const path = `/${dirPath.map((p) => p.key).join('/')}`;

  // // 文件的绝对路径
  // const filePath = `${PAGE_DIR}${path}.vue`;
  const page_protocol = vueGlobalCtx.pagesStore.getPage(page.id);
  if (!page_protocol) {
    throw new Error(`Page ${page.id} is not found`);
  }
  const filePath = page_protocol.source?.filePath || `${PAGE_DIR}/${page_protocol.key}.vue`;

  return filePath;
}

function parsingCurrentImportedComponents<T extends CodeSchema.Component | CodeSchema.Page>(
  data: T,
  ctx: VueGlobalCtx
): GlobalContext.Component[] {
  const importedComponents = [] as GlobalContext.Component[];

  data.nodes.forEach((node) => {
    const isExist = ctx.componentsStore.getCmpt(node.tagId);

    if (isExist && isExist.source?.filePath) {
      importedComponents.push(isExist);
    }
  });
  return importedComponents;
}

export default compilePages;
