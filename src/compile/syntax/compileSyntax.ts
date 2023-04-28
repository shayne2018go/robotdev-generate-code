import { ICodeSchema } from '@/types/ICodeSchema';
import { compileVue } from './vue';
import { Compile } from '@/types/compile/token';

function compileSyntax(codeSchema: ICodeSchema): Compile.Token[] {
  if (true) {
    // 判断语法
    return compileVue(codeSchema);
  }
  return [];
}

export default compileSyntax;
