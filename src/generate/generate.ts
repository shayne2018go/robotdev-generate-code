import { defaultProjectName, defaultRootPath } from '@/const/generatePath';
import { Compile } from '@/types/compile/token';
import fileUtils from '@/utils/fileUtils';
import { resolve } from '@/utils/node';

interface GenerateResult {
  projectPath: string;
}

function generate(tokens: Compile.Token[], projectPath?: string): GenerateResult;
function generate(tokens: Compile.Token[], projectPath?: string) {
  const finallyProjectPath = projectPath || resolve(defaultRootPath, defaultProjectName);
  tokens.forEach((t) => {
    const finalPath = resolve(finallyProjectPath, t.path);
    fileUtils.create(finalPath, t.token);
  });

  return { projectPath: finallyProjectPath };
}

export default generate;
