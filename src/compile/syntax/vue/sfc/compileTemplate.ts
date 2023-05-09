import { Compile } from '@/types/compile/token';
import { INode } from '@/types/view';
import { CompilePageCtx, CompilePageOptions } from '../compilePages';
import { ICS_Page } from '@/types/page';

const WHITE_TAG = ['each', 'cond', 'slot', 'tpl'];

// interface CompileTemplateOptions {}

function compileTemplate(page: ICS_Page, compileCtx: CompilePageCtx): { token: string } {
  // listToTree
  // tag props events children
  const token = '';

  return { token };
}

function getTag(tagId: string): string {
  return '';
}

export default compileTemplate;
