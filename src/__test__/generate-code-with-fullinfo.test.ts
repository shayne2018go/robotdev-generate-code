import data from '@/__test__/__fixture__/ethan-test.json';
import { compilerFactory } from '@/compile';
import { generate } from '@/generate';
import { DBSchema } from '@/types';
import * as Fxc from '@robotdev/fx-code';
import fse from 'fs-extra';
import { resolve } from 'path';
import { optimize, translate } from '..';

describe('generate-code-fullinfo', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it('all', async () => {
    const codeSchema = await translate(data as DBSchema.Project, {
      async translateFn(name: string) {
        const regex = new RegExp(/\s*[-|\/|\(|\)|\（|\）]\s*/, 'gi');
        name = name.replace(regex, '');

        const text = Fxc.toPinyin(name).replace(/\s/g, '');
        return text;
      },
    });

    // 项目目录位置
    const path = resolve(__dirname, `/codes/${codeSchema.key}-${codeSchema.id}`);

    if (fse.existsSync(path)) {
      fse.removeSync(path);
    }

    const { compiler } = compilerFactory(codeSchema);

    const tokens = compiler();

    const optimizeTokens = optimize(tokens);

    const { projectPath } = generate(optimizeTokens, path);

    // 产生项目 -> 打包 -> 部署 -> 解压缩 安装 依赖

    // await build(projectPath);

    // const isExist = fse.existsSync(projectPath);

    // const isBuild = fse.pathExistsSync(resolve(projectPath, 'dist'));

    jest.runAllTimers();

    // expect(isExist).toBeTruthy();
  });
});
