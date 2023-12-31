import { compileVue } from './vue';
import { Compile } from '@/types/compile/token';
import { CompileConfig } from '../config/parseCompileConfig';

function compileSyntax(codeSchema: CodeSchema.Project, compileConfig?: CompileConfig): Compile.Token[] {
  // if (!compileConfig?.syntax) {
  //   return compileVue(codeSchema);
  // }
  const { tokens } = compileVue(codeSchema);
  return tokens;
}

export default compileSyntax;
