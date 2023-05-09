import createToken from '@/compile/config/createToken';
import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Directory } from '@/types/directory';
import { ICS_Page } from '@/types/page';
import { VueCompileCtx, VueCompileOptions } from './compileVue';
import { PAGE_DIR } from './const/config';
import { compileScript, compileStyle, compileTemplate } from './sfc';
import { genVarName, outerNode } from './shared/helper';
import { actionsDataStore } from './shared/store/actions';
import { apisDataStore } from './shared/store/apis';
import { componentsDataStore } from './shared/store/components';
import { functionsDataStore } from './shared/store/functions';
import { nodesDataStore } from './shared/store/nodes';
import { VueTypes } from './types/vue';
import { eventsDataStore } from './shared/store/events';
import { propsDataStore } from './shared/store/props';

export type CompilePageOptions = Required<VueCompileOptions> & ParsingPageResult;
export type CompilePageCtx = Required<VueCompileCtx> & ParsingPageResult;

interface ParsingPageResult {
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
  variablesNames: {
    [id: string]: {
      varName: string;
    };
  };
  importComponents: VueTypes.Component[];
  importFunctions: VueTypes.Function[];
}

function compilePages(codeSchema: ICodeSchema, compileOptions: VueCompileOptions): { tokens: Compile.Token[] } {
  const componentsStore = componentsDataStore(compileOptions.components);
  const functionsStore = functionsDataStore(compileOptions.functions);
  const actionsStore = actionsDataStore(compileOptions.actions);
  const apisStore = apisDataStore(compileOptions.apis);
  const eventsStore = eventsDataStore(compileOptions.events);
  const propsStore = propsDataStore(compileOptions.props);

  const tokens = [] as Compile.Token[];

  const { directories = [] } = codeSchema;

  codeSchema.pages.forEach((page) => {
    // 1 编译页面代码字符串（token）
    const { token } = compilePage(page, {
      components: componentsStore,
      functions: functionsStore,
      actions: actionsStore,
      apis: apisStore,
      events: eventsStore,
      props: propsStore,
    });
    // 2 编译页面地址 ps： 根据directories
    const filePath = getPageFilePath(page, directories);

    tokens.push(createToken(filePath, token));
  });

  return { tokens };
}

function compilePage(page: ICS_Page, ctx: VueCompileCtx) {
  const parsingPageResult = parsingPage(page, ctx);

  const currentPageCompileOptions: CompilePageCtx = Object.assign({}, ctx, parsingPageResult);

  const { token: templateToken } = compileTemplate(page, currentPageCompileOptions);
  const { token: scriptToken } = compileScript(page, currentPageCompileOptions);
  const { token: styleToken } = compileStyle(page, currentPageCompileOptions);

  const token = templateToken + scriptToken + styleToken;

  return { token };
}

function parsingPage(page: ICS_Page, ctx: VueCompileCtx): ParsingPageResult {
  // 1，当前页面的依赖 （组件、行为）
  // 组件依赖

  // const actionMap = getNodesActionDependencies()

  // 2，当前页面节点的依赖（属性，事件）

  const importComponents: VueTypes.Component[] = [];
  const importFunctions: VueTypes.Function[] = [];
  const nodesVarNames: ParsingPageResult['nodesVarNames'] = {};

  const genNodeVarNameHandler = genVarName();
  const nodesStore = nodesDataStore(page.nodes, (node) => {
    const cmpt = ctx.components.getCmpt(node.tagId);
    nodesVarNames[node.id] = {
      varName: genNodeVarNameHandler(cmpt.key),
      propMembers: {},
      eventMembers: {},
    };

    const genPropVarNameHandler = genVarName();
    cmpt.protocol.props.forEach((item) => {
      const propOption = ctx.components.getProp(node.tagId, item.id);
      nodesVarNames[node.id].propMembers[item.id] = {
        varName: genPropVarNameHandler(propOption.key),
      };
    });

    const genEmitVarNameHandler = genVarName();
    cmpt.protocol.emits.forEach((item) => {
      const emitOption = ctx.components.getEmit(node.tagId, item.id);
      nodesVarNames[node.id].eventMembers[item.id] = {
        varName: genEmitVarNameHandler(emitOption.key),
      };
    });

    if (outerNode(node)) {
      importComponents.push(cmpt);
    }
  });

  const variablesNames: ParsingPageResult['variablesNames'] = {};
  const genVariablesNameHandler = genVarName();
  page.variables?.forEach((item) => {
    variablesNames[item.id] = {
      varName: genVariablesNameHandler(item.key),
    };
  });

  return {
    nodesStore,
    importComponents,
    nodesVarNames,
    importFunctions,
    variablesNames,
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
