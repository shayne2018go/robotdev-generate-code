import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { describe, expect, it } from 'vitest';
import compileRouter from '../compileRouter';
import vueRouterTokens from './fixture/vue-router-tokens.json';
import compileVue from '../compileVue';
import compileFunctions, { parsingFunctions } from '../compileFunctions';

describe('compile vue', () => {
  it('compileVue', () => {
    const { tokens } = compileVue(codeSchema);
  });

  it('compileRouter', () => {
    const { tokens } = compileRouter(codeSchema);

    debugger;
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(vueRouterTokens);
  });

  it('compileFunctions', () => {
    const { tokens } = compileFunctions(codeSchema);

    debugger;
    expect(tokens).toMatchSnapshot();
  });
  it('parsingFunctions', () => {
    const functions = parsingFunctions(codeSchema);

    debugger;
    expect(functions).toMatchSnapshot();
  });
});
