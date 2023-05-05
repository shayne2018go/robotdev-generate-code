import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Page } from '@/types/page';
import { compileScript, compileStyle, compileTemplate } from './sfc';
import { RequiredPicke1, VueComponent } from './compileComponents';
import { VueCompileOptions } from './compileVue';
import { ICS_Directory } from '@/types/directory';
import createToken from '@/compile/config/createToken';
import { IdentifierValue } from '@/types/code-schema/Identifier';
import { INode } from '@/types/view';
import { VueFunction } from './compileFunctions';

export type CompilePageOptions = Required<VueCompileOptions> & ParsingPageResult;

interface ParsingPageResult {
  nodeMap?: Map<string, INode>;
  componentMap?: Map<string, VueComponent>;
  functionMap?: Map<string, VueFunction>;
}

function compilePages(codeSchema: ICodeSchema, compileOptions: CompilePageOptions): { tokens: Compile.Token[] } {
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

function compilePage(page: ICS_Page, compileOptions: CompilePageOptions) {
  const { nodeMap } = parsingPage(page, compileOptions);

  compileOptions.nodeMap = nodeMap;

  const { token: templateToken } = compileTemplate(page, compileOptions);
  const { token: scriptToken } = compileScript(page, compileOptions);
  const { token: styleToken } = compileStyle(page, compileOptions);

  const token = templateToken + scriptToken + styleToken;

  return { token };
}

function parsingPage(page: ICS_Page, compileOptions: CompilePageOptions): ParsingPageResult {
  // 1，当前页面的依赖 （组件、行为）
  //TODO:
  // 2，当前页面节点的依赖（属性，事件）
  const nodeMap = new Map<string, any>();

  page.nodes.forEach((node) => {
    nodeMap.set(node.id, node);
  });

  return { nodeMap };
}

function getPageFilePath(page: ICS_Page, directories: ICS_Directory[]): string {
  // TODO: 获取页面地址 如 'src/page/home.vue'
  return '';
}

export default compilePages;
