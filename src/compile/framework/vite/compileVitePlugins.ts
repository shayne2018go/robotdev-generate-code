// interface Vit

import { Compile } from '@/types/compile/token';

function compileVitePlugins(tokens: Compile.Token[], plugins: CodeSchema.TechnologyStack.Plugin[]) {
  const packageJsonToken = tokens.find((t) => t.path === 'package.json');

  return tokens;
}

export default compileVitePlugins;
