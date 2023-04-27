import { ViteTemplate } from './compileVite';
import { resolve, dirname, readFileSync } from '@/utils/node';

import { fileURLToPath } from 'url';
import { globbySync } from 'globby';
import { Compile } from '@/types/compile/token';
import { CompileConfig } from '@/compile/config/parseCompileConfig';

function compileViteTemplate(temp: ViteTemplate, compileConfig?: CompileConfig): { tokens: Compile.Token[] } {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const templatesRoot = resolve(__dirname, './templates', `template-${temp}`);

  const paths = globbySync('**', { cwd: templatesRoot });

  const tokens = [] as any[];

  paths.forEach((path) => {
    const content = readFileSync(resolve(templatesRoot, path)).toString();

    tokens.push({ path, token: content });
  });

  return { tokens };
}

export default compileViteTemplate;
