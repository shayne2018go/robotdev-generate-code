import { Compile } from '@/types/compile/token';
import { VueGlobalCtx } from './compileVue';
import { dirname, fileURLToPath, readFileSync, resolve } from '@/utils/node';
import glob from 'tiny-glob/sync';
import createToken from '@/compile/config/createToken';

const templatesRoot = resolve(__dirname, './templates', `system`);

function compileSystem(): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  const paths = glob('**', { cwd: templatesRoot, filesOnly: true });

  paths.forEach((path) => {
    const content = readFileSync(resolve(templatesRoot, path)).toString();

    tokens.push(createToken(path, content));
  });

  return { tokens };
}

export default compileSystem;
