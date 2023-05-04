import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { describe, expect, it } from 'vitest';
import compileRouter from '../compileRouter';
import vueRouterTokens from './fixture/vue-router-tokens.json';

describe('compile vue', () => {
  it('compileRouter', () => {
    const { tokens } = compileRouter(codeSchema);

    debugger;
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(vueRouterTokens);
  });
});
