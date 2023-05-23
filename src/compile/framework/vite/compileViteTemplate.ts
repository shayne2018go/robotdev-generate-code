import { ViteTemplate } from './compileVite';
import { resolve, dirname, readFileSync } from '@/utils/node';

import { fileURLToPath } from 'url';
import glob from 'glob';
import { Compile } from '@/types/compile/token';
import { CompileConfig } from '@/compile/config/parseCompileConfig';
import createToken from '@/compile/config/createToken';

const renameFiles: Record<string, string | undefined> = {
  _gitignore: '.gitignore',
};
const __dirname = dirname(fileURLToPath(import.meta.url));

function compileViteTemplate(temp: ViteTemplate, compileConfig?: CompileConfig): { tokens: Compile.Token[] } {
  const templatesRoot = resolve(__dirname, './templates', `template-${temp}`);

  const paths = glob.sync('**', { cwd: templatesRoot, nodir: true });
  const tokens = [] as any[];

  paths.forEach((path) => {
    const content = readFileSync(resolve(templatesRoot, path)).toString();

    const targetPath = renameFiles[path] ?? path;

    tokens.push(createToken(targetPath, content));
  });

  return { tokens };
}

export default compileViteTemplate;
