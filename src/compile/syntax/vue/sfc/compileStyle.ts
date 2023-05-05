import { ICodeSchema } from '@/types/ICodeSchema';
import { Compile } from '@/types/compile/token';
import { ICS_Page } from '@/types/page';
import { CompilePageOptions } from '../compilePages';

function compileStyle(page: ICS_Page, compileOptions: CompilePageOptions): { token: string } {
  const token = '';

  return { token };
}

export default compileStyle;
