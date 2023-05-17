import { Compile } from '@/types/compile/token';
import { VueGlobalCtx } from './compileVue';
import { dirname, fileURLToPath, readFileSync, resolve } from '@/utils/node';
import { globbySync } from 'globby';
import createToken from '@/compile/config/createToken';

const __dirname = dirname(fileURLToPath(import.meta.url));

const templatesRoot = resolve(__dirname, './templates', `system`);

function compileSystem(): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  const paths = globbySync('**', { cwd: templatesRoot });

  paths.forEach((path) => {
    const content = readFileSync(resolve(templatesRoot, path)).toString();

    tokens.push(createToken(path, content));
  });

  debugger;
  return { tokens };
}

export default compileSystem;
