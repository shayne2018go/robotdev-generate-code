import createToken from '@/compile/config/createToken';
import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Directory } from '@/types/directory';
import { ICS_Page } from '@/types/page';
import { tools } from '@/utils/tools';
import { VueCompileOptions, VueGlobalCtx } from './compileVue';
import { PAGE_DIR } from './const/config';
import { compileScript, compileStyle, compileTemplate } from './sfc';
import { genVarName, outerNode } from './shared/helper';
import { nodesDataStore } from './shared/store/nodes';
import { propertiesDataStore } from './shared/store/properties';
import { VueTypes } from './types/vue';

export type CompilePageOptions = Required<VueCompileOptions> & ParsingPageResult;
export type CompilePageCtx = Required<VueGlobalCtx> & ParsingPageResult;

interface ParsingPageResult {
  variablesRootName: string;
  apiVarRootName: string;
  nodesVarRootName: string;
  nodesVarNames: {
    [nodeId: string]: {
      varName: string;
      propMembers: {
        [propId: string]: {
          varName: string;
        };
      };
      eventMembers: {
        [eventId: string]: {
          varName: string;
        };
      };
    };
  };
  nodesStore: ReturnType<typeof nodesDataStore>;
  variablesStore: ReturnType<typeof propertiesDataStore>;
  variablesNames: {
    [id: string]: {
      varName: string;
    };
  };
  importComponents: VueTypes.Component[];
  importFunctions: VueTypes.Function[];
}

function compilePages(codeSchema: ICodeSchema, vueGlobalCtx: VueGlobalCtx): { tokens: Compile.Token[] } {
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

function compilePage(page: ICS_Page, ctx: VueGlobalCtx) {
  const parsingPageResult = parsingPage(page, ctx);

  const currentPageCompileOptions: CompilePageCtx = Object.assign({}, ctx, parsingPageResult);

  const { token: templateToken } = compileTemplate(page, currentPageCompileOptions);
  const { token: scriptToken } = compileScript(page, currentPageCompileOptions);
  const { token: styleToken } = compileStyle(page, currentPageCompileOptions);

  const token = templateToken + scriptToken + styleToken;

  return { token };
}

function parsingPage(page: ICS_Page, ctx: VueGlobalCtx): ParsingPageResult {
  // 1，当前页面的依赖 （组件、行为）
  // 组件依赖

  // const actionMap = getNodesActionDependencies()

  // 2，当前页面节点的依赖（属性，事件）

  const importComponents: VueTypes.Component[] = [];
  const importFunctions: VueTypes.Function[] = [];
  const nodesVarNames: ParsingPageResult['nodesVarNames'] = {};
  const genNodeVarNameHandler = genVarName();
  const nodesStore = nodesDataStore(page.nodes, (node) => {
    const cmpt = ctx.componentsStore.getCmpt(node.tagId);
    if (['slot', 'tpl'].includes(cmpt.key)) {
      return;
    }
    const key = tools.string.lineToHump(cmpt.key);
    nodesVarNames[node.id] = {
      varName: genNodeVarNameHandler(key),
      propMembers: {},
      eventMembers: {},
    };

    const genPropVarNameHandler = genVarName();
    cmpt.protocol.props.forEach((item) => {
      const propOption = ctx.componentsStore.getProp(node.tagId, item.id);
      nodesVarNames[node.id].propMembers[item.id] = {
        varName: genPropVarNameHandler(propOption.key),
      };
    });

    const genEmitVarNameHandler = genVarName();
    cmpt.protocol.emits.forEach((item) => {
      const emitOption = ctx.componentsStore.getEmit(node.tagId, item.id);
      nodesVarNames[node.id].eventMembers[item.id] = {
        varName: genEmitVarNameHandler(emitOption.key),
      };
    });

    if (outerNode(node)) {
      importComponents.push(cmpt);
    }
  });

  const genVariablesNameHandler = genVarName();
  const variablesNames: ParsingPageResult['variablesNames'] = {};
  const variablesStore = propertiesDataStore(page.variables || [], (item) => {
    variablesNames[item.id] = {
      varName: genVariablesNameHandler(item.key),
    };
  });

  return {
    variablesRootName: 'variables',
    apiVarRootName: 'apiState',
    nodesVarRootName: 'nodesState',
    nodesStore,
    importComponents,
    nodesVarNames,
    importFunctions,
    variablesNames,
    variablesStore,
  };
}

function getPageFilePath(page: ICS_Page, directories: ICS_Directory[]): string {
  const dirPath: ICS_Directory[] = [];

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
