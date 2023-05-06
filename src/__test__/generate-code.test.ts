import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { compilerFactory } from '@/compile';
import { generate } from '@/generate';
import build from '@/deploy/build';
import fse from 'fs-extra';
import { resolve } from '@/utils/node';

describe('generate-code', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  it('all', async () => {
    const { compiler } = compilerFactory(codeSchema);

    const tokens = compiler();

    debugger;
    const { projectPath } = generate(tokens);

    await build(projectPath);

    const isExist = fse.existsSync(projectPath);

    const isBuild = fse.pathExistsSync(resolve(projectPath, 'dist'));

    vi.runAllTimers();

    expect(isExist).toBeTruthy();
    expect(isBuild).toBeTruthy();
  });
});
