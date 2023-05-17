import { describe, expect, it } from 'vitest';
import { buildGlobalCtx, parsingVueCompileOptions } from '../../../compileVue';
import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { CompileCurrentCtx, parsingCurrent } from '../../../compilePages';
import { BindParseCtx, BindRdData } from '../../bind-parse/types';
import { genVarName } from '../../helper';
import { bindToAst } from '../../bind-parse/core';
import generate from '@babel/generator';

describe('core', () => {
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
  describe('bindToAst', () => {
    const bindParseCtx: BindParseCtx = Object.assign(currentPageCompileOptions, {
      scope: {
        ...currentPageCompileOptions.scope,
        ...{
          actions: {
            genVarName: genVarName(),
            map: {},
          },
        },
      },
      helper: {
        uniqueVarname: genVarName(),
      },
    });
    it('getVar', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('Y576');
      const ast = bindToAst(bindParseCtx.scope.node?.props?.[0].value! as BindRdData, bindParseCtx);
      expect(generate(ast!).code).toEqual('variables?.xunhuancols');
    });
    it('getApiData', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('F104');
      const ast = bindToAst(bindParseCtx.scope.node?.props?.[0].value! as BindRdData, bindParseCtx);
      expect(generate(ast!).code).toEqual('apiState?.chaxunsuoyouyonghu?.data?.yonghushuzu');
    });
    it('getParam', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('F104');
      const ast = bindToAst(bindParseCtx.scope.node?.props?.[1].value! as BindRdData, bindParseCtx);
      expect(generate(ast!).code).toEqual('router?.query?.id');
    });
    it('getEventData', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('F104');
      bindParseCtx.scope.event = bindParseCtx.scope.node?.events?.[0];
      const ast = bindToAst(
        (bindParseCtx.scope.node?.events?.[0].actions?.[0].args?.actions as CodeSchema.Action[])[0].args
          .value! as BindRdData,
        bindParseCtx
      );
      expect(generate(ast!).code).toEqual('event_event?.target?.value');
    });
    it('getSlotData', () => {});
    it('getEachData', () => {});
    it('getCmptPropData', () => {});
    it('getArguments', () => {});
  });
});
