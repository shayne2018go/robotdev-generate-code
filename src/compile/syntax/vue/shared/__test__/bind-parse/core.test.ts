import { buildGlobalCtx, parsingVueCompileOptions } from '../../../compileVue';
import codeSchema from '../mock/CodeSchema';
import { CompileCurrentCtx, parsingCurrent } from '../../../compilePages';
import { ActionAst, ActionsAst, BindParseCtx, BindRdData } from '../../bind-parse/types';
import { genVarName } from '../../helper';
import { actionToAst, bindToAst, defaultAst, literalToAst, toAstMethods } from '../../bind-parse/core';
import generate from '@babel/generator';
import * as t from '@babel/types';

const customGenerate = (ast: t.Node) => {
  return generate(ast, { minified: true, jsescOption: { minimal: true } });
};

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
  });
  describe('defaultAst', () => {
    it('text ', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'text' }]);
      expect(customGenerate(ast!).code).toEqual('""');
    });
    it('richText', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'richText' }]);
      expect(customGenerate(ast!).code).toEqual('""');
    });
    it('password', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'password' }]);
      expect(customGenerate(ast!).code).toEqual('""');
    });
    it('email', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'email' }]);
      expect(customGenerate(ast!).code).toEqual('""');
    });
    it('mobilePhone', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'mobilePhone' }]);
      expect(customGenerate(ast!).code).toEqual('""');
    });
    it('telephone', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'telephone' }]);
      expect(customGenerate(ast!).code).toEqual('""');
    });
    it('fax', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'fax' }]);
      expect(customGenerate(ast!).code).toEqual('""');
    });
    it('number', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'number' }]);
      expect(customGenerate(ast!).code).toEqual('NaN');
    });
    it('whether', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'whether' }]);
      expect(customGenerate(ast!).code).toEqual('null');
    });
    it('module', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'module' }]);
      expect(customGenerate(ast!).code).toEqual('{}');
    });
    it('array', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'array' }]);
      expect(customGenerate(ast!).code).toEqual('[]');
    });
    it('url', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'url' }]);
      expect(customGenerate(ast!).code).toEqual('""');
    });
    it('option', () => {
      const ast = defaultAst(bindParseCtx, [{ type: 'option' }]);
      expect(customGenerate(ast!).code).toEqual('""');
    });
  });
  describe('bindToAst', () => {
    it('getVar', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('Y576');
      const ast = bindToAst(bindParseCtx.scope.node?.props?.[0].value! as BindRdData, bindParseCtx);
      expect(customGenerate(ast!).code).toEqual('variables?.xunhuancols');
    });
    it('getApiData', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('F104');
      const ast = bindToAst(bindParseCtx.scope.node?.props?.[0].value! as BindRdData, bindParseCtx);
      expect(customGenerate(ast!).code).toEqual('apiState?.chaxunsuoyouyonghu?.data?.yonghushuzu');
    });
    it('getParam', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('X741');
      const ast = bindToAst(bindParseCtx.scope.node?.props?.[1].value! as BindRdData, bindParseCtx);
      expect(customGenerate(ast!).code).toEqual('router?.query?.id');
    });
    it('getEventData', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('F104');
      bindParseCtx.scope.event = bindParseCtx.scope.node?.events?.[0];
      const ast = bindToAst(
        (bindParseCtx.scope.node?.events?.[0].actions?.[0].args?.actions as CodeSchema.Action[])[0].args
          .value! as BindRdData,
        bindParseCtx
      );
      expect(customGenerate(ast!).code).toEqual('event_event?.target?.value');
    });
    it('getSlotData', () => {
      throw new Error('无mock数据');
    });
    it('getEachData', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('Y459');
      bindParseCtx.scope.prop = bindParseCtx.scope.node?.props?.[0];
      const ast = bindToAst(bindParseCtx.scope.node?.props?.[0].value! as BindRdData, bindParseCtx);
      expect(customGenerate(ast!).code).toEqual('each_3_item?.yonghuming');
    });
    it('getCmptPropData', () => {
      throw new Error('无mock数据');
    });
    it('getArguments', () => {
      throw new Error('无mock数据');
    });
  });
  describe('toAstMethods', () => {
    it('toAstMethods.fx', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('A908');
      bindParseCtx.scope.prop = bindParseCtx.scope.node?.props?.[0];
      const ast = toAstMethods.fx(bindParseCtx.scope.node?.props?.[0].value! as BindRdData, bindParseCtx);
      expect(customGenerate(ast!).code).toEqual('Fx.gt(each_3_item?.yonghunianling,10)');
    });
    it('toAstMethods.tableData', () => {
      // 解析相关依赖协议
      const vueCompileOptions = parsingVueCompileOptions(codeSchema);

      // 构建全局上下文
      const vueGlobalCtx = buildGlobalCtx(vueCompileOptions);

      const page = codeSchema.pages[4];

      const parsingPageResult = parsingCurrent(page, vueGlobalCtx);

      const currentPageCompileOptions: CompileCurrentCtx = {
        global: vueGlobalCtx,
        scope: {
          current: parsingPageResult,
        },
      };
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
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('D157');
      bindParseCtx.scope.prop = bindParseCtx.scope.node?.props?.[0];
      const tableProp = toAstMethods.tableData(
        bindParseCtx.scope.node?.props?.[0].value! as CodeSchema.DataValue_TableData,
        bindParseCtx
      );
      const ast = t.objectExpression([
        t.objectProperty(t.identifier(tableProp.columns.key), tableProp.columns.value),
        t.objectProperty(t.identifier(tableProp.dataSource.key), tableProp.dataSource.value as ActionAst),
      ]);
      expect(customGenerate(ast!).code).toEqual(
        '{columns:[{dataIndex:"ID",title:"ID"},{dataIndex:"yonghuming",title:"用户名"},{dataIndex:"yonghunianling",title:"用户年龄"}],tableDataKey:apiState?.chaxunsuoyouyonghu?.data?.yonghushuzu}'
      );
    });
  });
  describe('actionToAst', () => {
    it('setVar', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('F104');
      bindParseCtx.scope.event = bindParseCtx.scope.node?.events?.[0];
      const ast = actionToAst(
        (bindParseCtx.scope.node?.events?.[0].actions?.[0].args.actions as CodeSchema.Action_SetVar[])[0],
        bindParseCtx
      );
      expect(customGenerate(ast as ActionAst).code).toEqual('variables.xueshengmingcheng=event_event?.target?.value');
    });
    it('setApiData', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('F104');
      bindParseCtx.scope.event = bindParseCtx.scope.node?.events?.[0];
      const ast = actionToAst(
        (bindParseCtx.scope.node?.events?.[0].actions?.[0].args.actions as CodeSchema.Action_SetApiData[])[1],
        bindParseCtx
      );
      expect(customGenerate(ast as ActionAst).code).toEqual(
        'apiState.chaxunxueshengbanji.data.banjixinxi.banjimingcheng="hxy_banjimingcheng"'
      );
    });
    it('open', () => {
      const ast = actionToAst(
        (bindParseCtx.scope.current.data.lifeCycle?.[0].actions?.[0].args?.success as CodeSchema.Action_Open[])?.[0],
        bindParseCtx
      );
      expect(customGenerate(ast as ActionAst).code).toEqual('open("in","blank","404")');
    });
    it('set', () => {
      bindParseCtx.scope.node = bindParseCtx.scope.current.nodesStore.getNode('F104');
      bindParseCtx.scope.event = bindParseCtx.scope.node?.events?.[0];
      const ast = actionToAst(bindParseCtx.scope.node?.events?.[0].actions?.[0] as CodeSchema.Action_Set, bindParseCtx);
      expect(customGenerate(t.program((ast as ActionsAst).map((ele) => t.expressionStatement(ele)))).code).toEqual(
        'variables.xueshengmingcheng=event_event?.target?.value;apiState.chaxunxueshengbanji.data.banjixinxi.banjimingcheng="hxy_banjimingcheng";'
      );
    });
    it('api', () => {
      const ast = actionToAst(
        bindParseCtx.scope.current.data.lifeCycle[0].actions[0] as CodeSchema.Action_Api,
        bindParseCtx
      );
      expect(customGenerate(ast as ActionAst).code).toEqual(
        'chaxunsuoyouyonghu("hxy").then(res=>{apiState.chaxunsuoyouyonghu=res;open("in","blank","404")}).catch(error=>{})'
      );
    });
    it('when', () => {
      throw new Error('未处理');
    });

    it('callAction', () => {
      throw new Error('未处理');
    });
  });
  describe('literalToAst', () => {
    it('text', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'text',
            value: 'text文本',
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('"text文本"');
    });
    it('richText', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'richText',
            value: 'richText富文本',
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('"richText富文本"');
    });
    it('password', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'password',
            value: '123hxy',
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('"123hxy"');
    });
    it('email', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'email',
            value: '1@163.com',
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('"1@163.com"');
    });
    it('mobilePhone', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'mobilePhone',
            value: '123',
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('"123"');
    });
    it('telephone', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'telephone',
            value: '123',
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('"123"');
    });
    it('fax', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'fax',
            value: 'fax穿传真',
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('"fax穿传真"');
    });
    it('number', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'number',
            value: 123,
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('123');
    });
    it('whether', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'whether',
            value: true,
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('true');
    });
    it('module', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'module',
            value: [
              {
                key: 'name',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'a',
                  },
                },
              },
            ],
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx,
        [
          {
            type: 'text',
          },
        ]
      );
      expect(customGenerate(ast).code).toEqual('{name:"a"}');
    });
    it('array', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'text',
            value: [
              {
                type: 'data',
                mode: 'custom',
                args: {
                  type: 'text',
                  value: 'a',
                },
              },
              {
                type: 'data',
                mode: 'custom',
                args: {
                  type: 'text',
                  value: 'b',
                },
              },
              {
                type: 'data',
                mode: 'custom',
                args: {
                  type: 'text',
                  value: 'c',
                },
              },
              {
                type: 'data',
                mode: 'custom',
                args: {
                  type: 'text',
                  value: 'd',
                },
              },
            ],
            multiple: true,
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('["a","b","c","d"]');
    });
    it('url', () => {
      throw new Error('无mock数据');
    });
    it('option', () => {
      const ast = literalToAst(
        {
          type: 'data',
          mode: 'custom',
          args: {
            type: 'option',
            value: 'primary',
          },
        } as CodeSchema.DataValue_Custom,
        bindParseCtx
      );
      expect(customGenerate(ast).code).toEqual('"primary"');
    });
  });
});
