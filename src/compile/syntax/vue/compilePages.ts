import createToken from '@/compile/config/createToken';
import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Directory } from '@/types/directory';
import { ICS_Page } from '@/types/page';
import { INode } from '@/types/view';
import { VueCompileOptions } from './compileVue';
import { compileScript, compileStyle, compileTemplate } from './sfc';
import { getNodesComponentDependencies } from './shared/helper';
import { VueTypes } from './types/vue';

export type CompilePageOptions = Required<VueCompileOptions> & ParsingPageResult;

interface ParsingPageResult {
  nodeMap?: Map<string, INode>;
  componentMap?: Map<string, VueTypes.Component>;
  functionMap?: Map<string, VueTypes.Function>;
}

function compilePages(codeSchema: ICodeSchema, compileOptions: VueCompileOptions): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  const { directories = [] } = codeSchema;

  codeSchema.pages.forEach((page) => {
    // 1 编译页面代码字符串（token）
    const { token } = compilePage(page, compileOptions);
    // 2 编译页面地址 ps： 根据directories
    const filePath = getPageFilePath(page, directories);

    tokens.push(createToken(filePath, token));
  });

  return { tokens };
}

function compilePage(page: ICS_Page, compileOptions: VueCompileOptions) {
  const parsingPageResult = parsingPage(page, compileOptions);

  const currentPageCompileOptions: CompilePageOptions = Object.assign({}, compileOptions, parsingPageResult);

  const { token: templateToken } = compileTemplate(page, currentPageCompileOptions);
  const { token: scriptToken } = compileScript(page, currentPageCompileOptions);
  const { token: styleToken } = compileStyle(page, currentPageCompileOptions);

  const token = templateToken + scriptToken + styleToken;

  return { token };
}

function parsingPage(page: ICS_Page, compileOptions: CompilePageOptions): ParsingPageResult {
  // 1，当前页面的依赖 （组件、行为）
  // 组件依赖
  const componentMap = getNodesComponentDependencies(page.nodes, compileOptions.components);

  // const actionMap = getNodesActionDependencies()

  debugger;
  // 2，当前页面节点的依赖（属性，事件）
  const nodeMap = new Map<string, any>();

  page.nodes.forEach((node) => {
    nodeMap.set(node.id, node);
  });

  return { nodeMap, componentMap };
}

function getPageFilePath(page: ICS_Page, directories: ICS_Directory[]): string {
  // TODO: 获取页面地址 如 'src/page/home.vue'
  return '';
}

export default compilePages;
