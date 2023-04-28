import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';

function compilePages(codeSchema: ICodeSchema): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  return { tokens };
}

export default compilePages;
