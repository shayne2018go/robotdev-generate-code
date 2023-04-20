import { ICodeSchema } from '@/types/ICodeSchema';
import { compileFramework } from './framework';
import { compileSyntax } from './syntax';

function compilerFactory(codeSchema: ICodeSchema) {
  // 编译框架
  const frameworkTokens = compileFramework(codeSchema);
  // 编译语法文件
  const syntaxTokens = compileSyntax(codeSchema);

  const compiler = () => {
    return frameworkTokens.concat(syntaxTokens);
  };

  return {
    compiler,
  };
}

export default compilerFactory;
