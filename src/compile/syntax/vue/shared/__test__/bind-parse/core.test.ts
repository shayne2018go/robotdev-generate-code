import { describe } from 'vitest';
import { buildGlobalCtx, parsingVueCompileOptions } from '../../../compileVue';
import codeSchema from '@/__test__/__fixture__/CodeSchema';

describe('core', () => {
  const vueCompileOptions = parsingVueCompileOptions(codeSchema);

  const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);
});
