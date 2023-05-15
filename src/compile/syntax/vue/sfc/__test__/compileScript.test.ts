import { describe, expect, it } from 'vitest';
import compileScript from '../compileScript';
import { parsingVueCompileOptions, buildGlobalCtx } from '../../compileVue';
import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { CompilePageCtx, parsingPage } from '../../compilePages';
import scriptToken from './__fixture__/script-tokens.vue';

describe('compileScript', () => {
  // 解析相关依赖协议
  const vueCompileOptions = parsingVueCompileOptions(codeSchema);

  // 构建全局上下文
  const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);

  const page = codeSchema.pages[3];

  const parsingPageResult = parsingPage(page, vueGlobalCtx);

  const currentPageCompileOptions: CompilePageCtx = {
    global: vueGlobalCtx,
    scope: {
      page: parsingPageResult,
    },
  };

  it('script', () => {
    const { token } = compileScript(page, currentPageCompileOptions);
    expect(token).toMatchSnapshot();
    expect(token).toEqual(scriptToken);
  });
});
