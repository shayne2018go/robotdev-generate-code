import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { VueTypes } from './types/vue';

function compileFunctions(codeSchema: ICodeSchema): { tokens: Compile.Token[]; functions: VueTypes.Function[] } {
  const tokens = [] as Compile.Token[];

  const functions = parsingFunctions(codeSchema);

  return { tokens, functions };
}

function parsingFunctions(codeSchema: ICodeSchema): VueTypes.Function[] {
  const functions = [] as VueTypes.Function[];

  return functions;
}

export { parsingFunctions };

export default compileFunctions;
