import { readFileSync, resolve } from '@/utils/node';
import { ViteTemplate } from './compileVite';

import createToken from '@/compile/config/createToken';
import { CompileConfig } from '@/compile/config/parseCompileConfig';
import { Compile } from '@/types/compile/token';
import glob from 'tiny-glob/sync';

const renameFiles: Record<string, string | undefined> = {
  _gitignore: '.gitignore',
};

function compileViteTemplate(temp: ViteTemplate, compileConfig?: CompileConfig): { tokens: Compile.Token[] } {
  const templatesRoot = resolve(__dirname, './templates', `template-${temp}`);

  const paths = glob('**', { cwd: templatesRoot, filesOnly: true });
  const tokens = [] as any[];

  paths.forEach((path) => {
    const content = readFileSync(resolve(templatesRoot, path)).toString();

    const targetPath = renameFiles[path] ?? path;

    tokens.push(createToken(targetPath, content));
  });

  return { tokens };
}

export default compileViteTemplate;
