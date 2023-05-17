import { Compile } from '@/types/compile/token';
import { VueGlobalCtx } from './compileVue';

function compileFunctions(codeSchema: CodeSchema.Project, vueGlobalCtx: VueGlobalCtx): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  return { tokens };
}

export default compileFunctions;
