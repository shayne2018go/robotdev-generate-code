// interface Vit

import { Compile } from '@/types/compile/token';
import { Tech } from '@/types/tech';

function compileVitePlugins(tokens: Compile.Token[], plugins: Tech.Plugin[]) {
  const packageJsonToken = tokens.find((t) => t.path === 'package.json');

  return tokens;
}

export default compileVitePlugins;
