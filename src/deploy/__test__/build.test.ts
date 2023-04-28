import { defaultProjectName, defaultRootPath } from '@/const/generatePath';
import { resolve } from '@/utils/node';
import { describe, it } from 'vitest';
import build from '../build';

describe('build', () => {
  it('install dependencies', () => {
    const path = resolve(defaultRootPath, defaultProjectName);
    build(path);
  });
});
