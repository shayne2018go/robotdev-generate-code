import { parsingVueCompileOptions, buildGlobalCtx } from '../../../compileVue';
import codeSchema from '../mock/CodeSchema';
import { CompileCurrentCtx, parsingCurrent } from '../../../compilePages';
import {
  getNodeEventKeyByNodeId,
  getNodePropKeyByNodeId,
  getNodeTagVarName,
  getVariableVarName,
} from '../../script-helper';
import { genVarName } from '../../helper';
import { getPathByDirectories } from '../../directory-helper';
import { searchModulePath, searchModulePathKeys } from '../../searchPath';
import * as t from '@babel/types';
import generate from '@babel/generator';
import { getMemberExpr, getOptMemberExpr } from '../../bind-parse/shared/helper';

const customGenerate = (ast: t.Node) => {
  return generate(ast, { minified: true, jsescOption: { minimal: true } });
};

describe('helper', () => {
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

  describe('directory-helper', () => {
    it('getPathByDirectories', () => {
      const directory = getPathByDirectories(codeSchema.directories || [], codeSchema.pages[3].id);
      expect(directory).toEqual([
        {
          id: '645c3f0ce94e7d605e79d538',
          isDirectory: true,
          key: 'renyuan',
          name: '人员',
          parentId: null,
          resourceType: undefined,
        },
        {
          id: '644653eb9c229310c169da00',
          isDirectory: false,
          key: 'renyuanluruye',
          name: '人员录入页',
          parentId: '645c3f0ce94e7d605e79d538',
          resourceType: 'page',
        },
      ]);
    });
  });

  describe('helper', () => {
    it('genVarName', () => {
      const getVarName = genVarName();
      expect(getVarName('a')).toEqual('a');
      expect(getVarName('a')).toEqual('a_2');
      expect(getVarName('a')).toEqual('a_3');
    });
  });

  describe('searchPath', () => {
    it('searchModulePath', () => {
      const protocols = searchModulePath(
        codeSchema.apis.filter((ele) => ele.id === '645c463fe94e7d605e79d693')[0]?.response?.body?.[0].types!,
        ['645c46bea257c532a6541869', '645c46c7a257c532a654186a']
      );
      expect(protocols).toEqual([
        {
          id: '645c46bea257c532a6541869',
          key: 'dizhi',
          name: '地址',
          types: [
            {
              rules: {
                properties: [
                  {
                    id: '645c46c7a257c532a654186a',
                    key: 'guojia',
                    name: '国家',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                  },
                  {
                    id: '645c46cda257c532a654186b',
                    key: 'shengfen',
                    name: '省份',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                  },
                  {
                    id: '645c46d2a257c532a654186c',
                    key: 'shiqu',
                    name: '市区',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                  },
                  {
                    id: '645c46d7a257c532a654186d',
                    key: 'xiangxidizhi',
                    name: '详细地址',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                  },
                  {
                    id: '645c472ea257c532a654186f',
                    key: 'id',
                    name: 'id',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
              type: 'module',
            },
          ],
        },
        {
          id: '645c46c7a257c532a654186a',
          key: 'guojia',
          name: '国家',
          types: [
            {
              type: 'text',
            },
          ],
        },
      ]);
    });
    it('searchModulePathKeys', () => {
      const protocols = searchModulePathKeys(
        codeSchema.apis.filter((ele) => ele.id === '645c463fe94e7d605e79d693')[0]?.response?.body?.[0].types!,
        ['645c46bea257c532a6541869', '645c46c7a257c532a654186a']
      );
      expect(protocols).toEqual(['dizhi', 'guojia']);
    });
  });

  describe('shared helper', () => {
    it('getMemberExpr', () => {
      const ast = getMemberExpr(['a', 'b', 'c']);
      expect(customGenerate(ast).code).toEqual('a.b.c');
    });
    it('getOptMemberExpr', () => {
      const ast = getOptMemberExpr(['a', 'b', 'c']);
      expect(customGenerate(ast).code).toEqual('a?.b?.c');
    });
  });
});
