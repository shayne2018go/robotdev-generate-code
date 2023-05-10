import { compileFramework } from './framework';
import { compileSyntax } from './syntax';
import parseCompileConfig from './config/parseCompileConfig';

function compilerFactory(codeSchema: CodeSchema.Project) {
  const compileConfig = parseCompileConfig(codeSchema);

  // 编译框架
  const frameworkTokens = compileFramework(codeSchema, compileConfig);
  // 编译语法文件
  const syntaxTokens = compileSyntax(codeSchema, compileConfig);

  const compiler = () => {
    return frameworkTokens.concat(syntaxTokens);
  };

  return {
    compiler,
  };
}

export default compilerFactory;
