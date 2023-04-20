import compilerFactory from '@/compile/compilerFactory';
import { resolve } from 'path';
import { describe, expect, it } from 'vitest';

describe('compilerFactory', () => {
  const root = resolve(__dirname, '../../../../generate-code-test');

  it('compile', () => {
    // const { compiler } = compilerFactory({});

    // const tokens = compiler();

    // expect(tokens).toMatchSnapshot();
    console.log(123);
  });
});
