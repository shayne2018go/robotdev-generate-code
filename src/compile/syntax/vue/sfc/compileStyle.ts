import { ICodeSchema } from '@/types/ICodeSchema';
import { Compile } from '@/types/compile/token';
import { ICS_Page } from '@/types/page';
import { CompilePageCtx, CompilePageOptions } from '../compilePages';

function compileStyle(page: ICS_Page, compileCtx: CompilePageCtx): { token: string } {
  const token = '';

  return { token };
}

export default compileStyle;
