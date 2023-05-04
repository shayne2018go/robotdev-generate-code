import { defaultProjectName, defaultRootPath } from '@/const/generatePath';
import { Compile } from '@/types/compile/token';
import fileUtils from '@/utils/fileUtils';
import { resolve } from '@/utils/node';

interface GenerateResult {
  projectPath: string;
}

function generate(tokens: Compile.Token[], projectName?: string): GenerateResult;
function generate(tokens: Compile.Token[], projectName: string = defaultProjectName) {
  const projectPath = resolve(defaultRootPath, projectName);
  tokens.forEach((t) => {
    const finalPath = resolve(projectPath, t.path);
    // const finalPath = resolve('/home/dreawer/workspace', `/${defaultPath}`, t.path);
    fileUtils.create(finalPath, t.token);
  });

  return { projectPath };
}

export default generate;
