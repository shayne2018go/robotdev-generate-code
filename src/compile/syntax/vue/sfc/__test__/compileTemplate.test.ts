import { describe, expect, it } from 'vitest';
import compileTemplate from '../compileTemplate';
import { parsingVueCompileOptions, buildGlobalCtx } from '../../compileVue';
import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { CompileCurrentCtx, parsingCurrent } from '../../compilePages';
import templateToken from './__fixture__/template-tokens.json';
import templateEachIfoken from './__fixture__/template-each-if-tokens.json';

describe('compileTemplate', () => {
  // 解析相关依赖协议
  const vueCompileOptions = parsingVueCompileOptions(codeSchema);

  // 构建全局上下文
  const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);

  it('tempalte 变量 事件', () => {
    const page = codeSchema.pages[3];

    const parsingPageResult = parsingCurrent(page, vueGlobalCtx);

    const currentPageCompileOptions: CompileCurrentCtx = {
      global: vueGlobalCtx,
      scope: {
        current: parsingPageResult,
      },
    };

    const { token } = compileTemplate(page, currentPageCompileOptions);
    debugger;

    expect(token).toMatchSnapshot();
    expect(token).toEqual(templateToken);
  });

  it('tempalte 循环 判断', () => {
    const page = codeSchema.pages[0];

    const parsingPageResult = parsingCurrent(page, vueGlobalCtx);

    const currentPageCompileOptions: CompileCurrentCtx = {
      global: vueGlobalCtx,
      scope: {
        current: parsingPageResult,
      },
    };

    const { token } = compileTemplate(page, currentPageCompileOptions);
    debugger;

    expect(token).toMatchSnapshot();
    expect(token).toEqual(templateEachIfoken);
  });
});
