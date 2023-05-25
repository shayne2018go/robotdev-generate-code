import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { compilerFactory } from '@/compile';
import { generate } from '@/generate';
import { resolve } from 'path';
import { optimize } from '..';
import build from '@/deploy/build';
import fse from 'fs-extra';

describe('generate-code', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it('all', async () => {
    // 项目目录位置
    const path = resolve(__dirname, '/codes/123');
    const { compiler } = compilerFactory(codeSchema);

    const tokens = compiler();

    const optimizeTokens = optimize(tokens);

    const { projectPath } = generate(optimizeTokens, path);

    // 产生项目 -> 打包 -> 部署 -> 解压缩 安装 依赖

    // await build(projectPath);

    // const isExist = fse.existsSync(projectPath);

    const isBuild = fse.pathExistsSync(resolve(projectPath, 'dist'));

    jest.runAllTimers();

    // expect(isExist).toBeTruthy();
  });
});
