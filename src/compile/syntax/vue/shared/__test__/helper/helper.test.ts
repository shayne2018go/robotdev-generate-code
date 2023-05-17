import { describe, expect, it } from 'vitest';
import { parsingVueCompileOptions, buildGlobalCtx } from '../../../compileVue';
import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { CompileCurrentCtx, parsingCurrent } from '../../../compilePages';
import {
  getNodeEventKeyByNodeId,
  getNodePropKeyByNodeId,
  getNodeTagVarName,
  getVariableVarName,
} from '../../script-helper';

describe('compileScript', () => {
  describe('script-helper', () => {
    // 解析相关依赖协议
    const vueCompileOptions = parsingVueCompileOptions(codeSchema);

    // 构建全局上下文
    const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);

    const page = codeSchema.pages[0];

    const parsingPageResult = parsingCurrent(page, vueGlobalCtx);

    const currentPageCompileOptions: CompileCurrentCtx = {
      global: vueGlobalCtx,
      scope: {
        current: parsingPageResult,
      },
    };

    it('getVariableVarName', () => {
      const str = getVariableVarName('6447262e0b661be9e0b91ac1', currentPageCompileOptions);
      expect(str).toEqual('xueshengmingcheng');
    });
    it('getNodeTagVarName', () => {
      const str = getNodeTagVarName('D767', currentPageCompileOptions);
      const str1 = getNodeTagVarName('Y576', currentPageCompileOptions);
      expect(str).toEqual('each');
      expect(str1).toEqual('each_2');
    });
  });
  describe('script-helper1', () => {
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
    it('getNodePropKeyByNodeId', () => {
      const key = getNodePropKeyByNodeId('N735', '641a7052cf44f6204642b875', currentPageCompileOptions);
      expect(key).toEqual('value');
    });
    it('getNodeEventKeyByNodeId', () => {
      const key = getNodeEventKeyByNodeId('N735', '641a7052cf44f6204642b87b', currentPageCompileOptions);
      expect(key).toEqual('change');
    });
  });
});
