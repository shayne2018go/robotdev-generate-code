import { Compile } from '@/types/compile/token';

function compileFunctions(codeSchema: CodeSchema.Project, functions: VueTypes.Function[]): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  return { tokens };
}

export default compileFunctions;
