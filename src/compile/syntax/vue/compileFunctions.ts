import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { VueTypes } from './types/vue';

function compileFunctions(codeSchema: ICodeSchema, functions: VueTypes.Function[]): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  return { tokens };
}

export default compileFunctions;
