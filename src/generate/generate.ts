import { defaultRootPath, defaultProjectName } from '@/const/generatePath';
import { Compile } from '@/types/compile/token';
import fileUtils from '@/utils/fileUtils';
import { fileURLToPath, resolve, dirname } from '@/utils/node';

function generate(tokens: Compile.Token[], projectName?: string): void;
function generate(tokens: Compile.Token[], projectName: string = defaultProjectName) {
  tokens.forEach((t) => {
    const finalPath = resolve(defaultRootPath, projectName, t.path);
    // const finalPath = resolve('/home/dreawer/workspace', `/${defaultPath}`, t.path);
    console.log(finalPath);
    debugger;
    fileUtils.create(finalPath, t.token);
  });
}

export default generate;
