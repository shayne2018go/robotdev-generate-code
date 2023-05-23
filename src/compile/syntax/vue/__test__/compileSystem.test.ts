import codeSchema from '@/__test__/__fixture__/CodeSchema';
import compileRouter from '../compileRouter';
import compileVue, { buildGlobalCtx, parsingVueCompileOptions } from '../compileVue';
import vueRouterTokens from './fixture/vue-router-tokens.json';
import compileApis, { compileRequestInstance } from '../compileApis';
import apiTokens from './fixture/api-tokens.json';
import axiosTokens from './fixture/axios-tokens.json';
import compileSystem from '../compileSystem';

describe('compileSystem', () => {
  it('compileSystem', () => {
    const { tokens } = compileSystem();
  });
});
