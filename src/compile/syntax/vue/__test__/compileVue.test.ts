import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { describe, expect, it } from 'vitest';
import compileRouter, { parsingRouter } from '../compileRouter';
import vueRouterTokens from './fixture/vue-router-tokens.json';
import compileVue from '../compileVue';
import compileFunctions from '../compileFunctions';

describe('compile vue', () => {
  it('compileVue', () => {
    const { tokens } = compileVue(codeSchema);
  });

  it('compileRouter', () => {
    const { routes } = parsingRouter(codeSchema);

    const { tokens } = compileRouter(codeSchema, routes);

    debugger;
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(vueRouterTokens);
  });
});
