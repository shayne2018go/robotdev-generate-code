import { describe, expect, it } from 'vitest';
import { compileVue } from '../vue';
import codeSchema from '@/__test__/__fixture__/CodeSchema';

describe('compile syntax', () => {
  it('compileVue', () => {
    const { tokens } = compileVue(codeSchema);

    debugger;
    expect(tokens).toMatchSnapshot();
  });
});
