import codeSchema from '@/__test__/__fixture__/CodeSchema';
import compilerFactory from '@/compile/compilerFactory';
import { describe, expect, it } from 'vitest';

describe('compilerFactory', () => {
  it('compile', () => {
    const { compiler } = compilerFactory(codeSchema);

    const tokens = compiler();

    debugger;
    expect(tokens).toMatchSnapshot();
  });
});
