import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Page } from '@/types/page';
import { compileTemplate } from './sfc';

function compilePages(codeSchema: ICodeSchema): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  return { tokens };
}

function compilePage(page: ICS_Page) {
  const templateTokens = compileTemplate(page.nodes);
}

export default compilePages;
