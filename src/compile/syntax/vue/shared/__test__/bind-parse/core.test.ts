import { describe } from 'vitest';
import { parsingVueCompileOptions } from '../../../compileVue';
import codeSchema from '@/__test__/__fixture__/CodeSchema';

describe('core', () => {
  const vueCompileOptions = parsingVueCompileOptions(codeSchema);
});
