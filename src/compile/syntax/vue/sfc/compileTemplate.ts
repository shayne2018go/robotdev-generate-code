import { Compile } from '@/types/compile/token';
import { INode } from '@/types/view';
import { CompilePageOptions } from '../compilePages';
import { ICS_Page } from '@/types/page';

const WHITE_TAG = ['each', 'cond', 'slot', 'tpl'];

// interface CompileTemplateOptions {}

function compileTemplate(page: ICS_Page, compileOptions: CompilePageOptions): { token: string } {
  const token = '';

  return { token };
}

export default compileTemplate;
