import { Compile } from '@/types/compile/token';
import { Tech } from '@/types/tech';
import fileUtils from '@/utils/fileUtils';
import { __dirname, resolve } from '@/utils/node';

function generate(tokens: Compile.Token[], rootPath?: string): void;
function generate(tokens: Compile.Token[], rootPath?: string) {
  tokens.forEach((t) => {
    const finalPath = resolve(__dirname, '../../../code-test', t.path);
    fileUtils.create(finalPath, t.token);
  });
}

export default generate;
