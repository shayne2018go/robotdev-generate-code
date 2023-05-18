import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { describe, expect, it } from 'vitest';
import compileRouter from '../compileRouter';
import compileVue, { buildGlobalCtx, parsingVueCompileOptions } from '../compileVue';
import vueRouterTokens from './fixture/vue-router-tokens.json';
import compileApis, { compileRequestInstance } from '../compileApis';
import apiTokens from './fixture/api-tokens.json';
import axiosTokens from './fixture/axios-tokens.json';
import vueTokens from './fixture/vue-tokens.json';

describe('compile vue', () => {
  // 解析相关依赖协议
  const vueCompileOptions = parsingVueCompileOptions(codeSchema);

  // 构建全局上下文
  const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);

  it('compileVue', () => {
    const { tokens } = compileVue(codeSchema);
    debugger;

    expect(tokens).toMatchObject(vueTokens);
  });

  it('compileRouter', () => {
    const { tokens } = compileRouter(codeSchema, vueGlobalCtx);

    debugger;
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(vueRouterTokens);
  });

  it('compileApis', () => {
    const { tokens: api } = compileApis(codeSchema, vueGlobalCtx);
    const { tokens: axios } = compileRequestInstance({});
    debugger;
    expect(api).toMatchSnapshot();
    expect(axios).toMatchSnapshot();
    expect(api).toMatchObject(apiTokens);
    expect(axios).toMatchObject(axiosTokens);
  });
});
