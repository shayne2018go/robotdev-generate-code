import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { VueTypes } from './types/vue';

function compileApis(codeSchema: ICodeSchema): { tokens: Compile.Token[]; apis: VueTypes.Api[] } {
  const tokens = [] as Compile.Token[];

  const apis = [] as VueTypes.Api[];
  return { tokens, apis };
}
