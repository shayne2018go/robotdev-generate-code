import compilerFactory from '@/compile/compilerFactory';
import { resolve } from 'path';
import { describe, expect, it } from 'vitest';
import codeSchema from '@/__test__/__fixture__/CodeSchema';

describe('compilerFactory', () => {
  it('compile', () => {
    const { compiler } = compilerFactory(codeSchema);

    const tokens = compiler();

    expect(tokens).toMatchSnapshot();
  });
});
