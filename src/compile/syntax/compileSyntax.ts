import { ICodeSchema } from '@/types/ICodeSchema';
import { compileVue } from './vue';

function compileSyntax(codeSchema: ICodeSchema) {
  if (true) {
    // 判断语法
    return compileVue(codeSchema);
  }
  return [];
}

export default compileSyntax;
