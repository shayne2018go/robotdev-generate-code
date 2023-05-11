import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { describe, expect, it } from 'vitest';
import compileRouter from '../compileRouter';
import compileVue, { buildGlobalCtx, parsingVueCompileOptions } from '../compileVue';
import vueRouterTokens from './fixture/vue-router-tokens.json';

describe('compile vue', () => {
  // 解析相关依赖协议
  const vueCompileOptions = parsingVueCompileOptions(codeSchema);

  // 构建全局上下文
  const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);

  it('compileVue', () => {
    const { tokens } = compileVue(codeSchema);
  });

  it('compileRouter', () => {
    debugger;
    const { tokens } = compileRouter(codeSchema, vueGlobalCtx);

    debugger;
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(vueRouterTokens);
  });
});
