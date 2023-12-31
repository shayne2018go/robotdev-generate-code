import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { CompileCurrentCtx, parsingCurrent } from '../../compilePages';
import { buildGlobalCtx, parsingVueCompileOptions } from '../../compileVue';
import compileScript from '../compileScript';
import scriptToken from './__fixture__/script-tokens.json';
import scriptToken2 from './__fixture__/script-tokens-2.json';

describe('compileScript', () => {
  // 解析相关依赖协议
  const vueCompileOptions = parsingVueCompileOptions(codeSchema);

  // 构建全局上下文
  const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);

  const page = codeSchema.pages[3];

  const parsingPageResult = parsingCurrent(page, vueGlobalCtx);

  const currentPageCompileOptions: CompileCurrentCtx = {
    global: vueGlobalCtx,
    scope: {
      current: parsingPageResult,
    },
  };

  it('script 变量 事件', () => {
    const { token } = compileScript(page, currentPageCompileOptions);
    debugger;
    expect(token).toMatchSnapshot();
    expect(token).toEqual(scriptToken);
  });

  it('script 循环 判断 组件', () => {
    const page = codeSchema.pages[0];

    const parsingPageResult = parsingCurrent(page, vueGlobalCtx);

    const currentPageCompileOptions: CompileCurrentCtx = {
      global: vueGlobalCtx,
      scope: {
        current: parsingPageResult,
      },
    };

    const { token } = compileScript(page, currentPageCompileOptions);
    debugger;

    expect(token).toMatchSnapshot();
    expect(token).toEqual(scriptToken2);
  });
});
