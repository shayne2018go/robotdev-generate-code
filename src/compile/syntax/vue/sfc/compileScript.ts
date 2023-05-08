import generate from '@babel/generator';
import * as t from '@babel/types';
import { ICS_Page } from '@/types/page';
import { Identifier } from '@/types/code-schema/Identifier';
import { I_component_LifeCycle } from '@/types/component';
import { CompilePageOptions } from '../compilePages';
import { ICS_Function } from '@/types/function';
import { relative } from '@/utils/node';
import { VueTypes } from '../types/vue';

const events = {
  '641a95e7cd3c6b0921a79f2b': {
    key: 'loading',
  },
};
const apis = {
  '644731b09c229310c169e3fb': {
    key: 'chaxunsuoyouyonghu',
  },
};

// console.log(
//   compileScript(
//     {
//       id: '6447315b9c229310c169e36c',
//       mate: {
//         title: {
//           type: 'data',
//           mode: 'custom',
//           args: {
//             value: '人员列表',
//           },
//         },
//       },
//       route: {
//         query: [],
//       },
//       nodes: [
//         {
//           id: 'D157',
//           preId: null,
//           nextId: 'M687',
//           parentId: null,
//           tagId: '613ecb25af722dc29c7fc3d1',
//           packageId: '6352061254bb9b1c84ce3570',
//           props: [
//             {
//               propId: '641a7053cf44f6204642ba34',
//               value: {
//                 id: '',
//                 type: 'data',
//                 modeId: '',
//                 mode: 'tableData',
//                 args: {
//                   data: {
//                     type: 'data',
//                     mode: 'getApiData',
//                     args: {
//                       id: '644731b09c229310c169e3fb',
//                       path: ['data', '64473279425c9a11a9a475af'],
//                     },
//                   },
//                   showColumns: ['64473284425c9a11a9a475b0', '6447328c425c9a11a9a475b1', '64473291425c9a11a9a475b2'],
//                   columns: [
//                     {
//                       dataIndex: '64473284425c9a11a9a475b0',
//                       title: 'ID',
//                     },
//                     {
//                       dataIndex: '6447328c425c9a11a9a475b1',
//                       title: '用户名',
//                     },
//                     {
//                       dataIndex: '64473291425c9a11a9a475b2',
//                       title: '用户年龄',
//                     },
//                   ],
//                   tableDataKey: 'dataSource',
//                   keyFieldName: 'dataIndex',
//                   titleFieldName: 'title',
//                 },
//               },
//             },
//           ],
//           events: undefined,
//         },
//         {
//           id: 'M687',
//           preId: 'D157',
//           nextId: 'L885',
//           parentId: null,
//           tagId: '62c68d5d27d4bddfa72888fb',
//           packageId: '6358fb8554bb9b1c84ce47a2',
//           props: undefined,
//           events: undefined,
//         },
//         {
//           id: 'L885',
//           preId: 'M687',
//           nextId: 'L123',
//           parentId: null,
//           tagId: '62c68d5d27d4bddfa72888fb',
//           packageId: '6358fb8554bb9b1c84ce47a2',
//           props: undefined,
//           events: undefined,
//         },
//         {
//           id: 'L123',
//           preId: 'L885',
//           nextId: null,
//           parentId: null,
//           tagId: '613ecb25af722dc29c7fc387',
//           packageId: '6352061254bb9b1c84ce3570',
//           props: undefined,
//           events: undefined,
//         },
//       ],
//       variables: [
//         {
//           id: '6447262e0b661be9e0b91ac1',
//           name: '学生名称',
//           key: 'xueshengmingcheng',
//           desc: undefined,
//           types: [
//             {
//               type: 'text',
//             },
//           ],
//           extendPlatform: undefined,
//         },
//         {
//           id: '644726370b661be9e0b91ac2',
//           name: '学生年龄',
//           key: 'xueshengnianling',
//           desc: undefined,
//           types: [
//             {
//               type: 'number',
//             },
//           ],
//           extendPlatform: undefined,
//         },
//       ],
//       lifeCycle: [
//         {
//           eventId: '641a95e7cd3c6b0921a79f2b', // onMounted
//           actions: [
//             {
//               id: '64473c5323bb5dfddd8bdd31',
//               modeId: '6401884318eda303abe11c40',
//               mode: 'api',
//               name: '执行业务',
//               type: 'action',
//               args: {
//                 id: '644731b09c229310c169e3fb',
//               },
//             },
//           ],
//         },
//       ],
//       functions: [
//         {
//           id: '644650559c229310c169d806',
//           name: '成功信息',
//           key: 'chenggongxinxi',
//           parameters: [
//             {
//               id: '6446507be73896f72bc0c174',
//               name: '消息内容',
//               key: 'content',
//               desc: '',
//               types: [
//                 {
//                   type: 'text',
//                 },
//               ],
//               extendPlatform: true,
//             },
//             {
//               id: '6446507be73896f72bc0c175',
//               name: '持续时间',
//               key: 'duration',
//               desc: '',
//               types: [
//                 {
//                   type: 'number',
//                 },
//               ],
//               extendPlatform: true,
//             },
//             {
//               id: '6446507be73896f72bc0c176',
//               name: '关闭回调',
//               key: 'onClose',
//               desc: '',
//               types: [
//                 {
//                   type: 'action',
//                 },
//               ],
//               extendPlatform: true,
//             },
//           ],
//           outTypes: [
//             {
//               type: 'text',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       routes: [], // 路由相关
//       components: [], // 组件相关
//       functions: [], // 函数相关
//       componentMap: new Map().set('1', {
//         id: 'string',
//         tag: 'text',
//         source: {
//           filePath: 'src/components/text',
//           exportName: 'text',
//         },
//         protocol: {
//           id: '62c68d5d27d4bddfa72888fb',
//           name: '文本',
//           key: 'text',
//           props: [
//             {
//               id: '641a7052cf44f6204642b61f',
//               name: '文本内容',
//               key: 'text',
//               desc: undefined,
//               types: [
//                 {
//                   type: 'text',
//                   ui: {
//                     props: [
//                       {
//                         value: 10,
//                         propId: 'rows',
//                       },
//                     ],
//                     tag: 'textarea',
//                   },
//                 },
//               ],
//               extendPlatform: undefined,
//             },
//           ],
//           emits: [],
//           slots: [],
//           lifeCycle: [],
//           functions: [],
//           variables: [],
//           nodes: [],
//         },
//       }).set('2', {
//         id: 'string',
//         tag: 'button',
//         source: {
//           packageName: 'antd',
//           exportName: 'button',
//         },
//         protocol: {
//           id: '62c68d5d27d4bddfa72888fb',
//           name: '文本',
//           key: 'text',
//           props: [
//             {
//               id: '641a7052cf44f6204642b61f',
//               name: '文本内容',
//               key: 'text',
//               desc: undefined,
//               types: [
//                 {
//                   type: 'text',
//                   ui: {
//                     props: [
//                       {
//                         value: 10,
//                         propId: 'rows',
//                       },
//                     ],
//                     tag: 'textarea',
//                   },
//                 },
//               ],
//               extendPlatform: undefined,
//             },
//           ],
//           emits: [],
//           slots: [],
//           lifeCycle: [],
//           functions: [],
//           variables: [],
//           nodes: [],
//         },
//       }).set('3', {
//         id: 'string',
//         tag: 'radio',
//         source: {
//           packageName: 'antd',
//           exportName: 'radio',
//         },
//         protocol: {
//           id: '62c68d5d27d4bddfa72888fb',
//           name: '文本',
//           key: 'text',
//           props: [
//             {
//               id: '641a7052cf44f6204642b61f',
//               name: '文本内容',
//               key: 'text',
//               desc: undefined,
//               types: [
//                 {
//                   type: 'text',
//                   ui: {
//                     props: [
//                       {
//                         value: 10,
//                         propId: 'rows',
//                       },
//                     ],
//                     tag: 'textarea',
//                   },
//                 },
//               ],
//               extendPlatform: undefined,
//             },
//           ],
//           emits: [],
//           slots: [],
//           lifeCycle: [],
//           functions: [],
//           variables: [],
//           nodes: [],
//         },
//       }),
//       functionMap: new Map().set('1', {
//         id: 'string',
//         tag: 'text',
//         source: {
//           filePath: 'src/functions/number',
//           exportName: 'shifouweizhengshu',
//         },
//         protocol: {
//           id: '64093e12583491a5ebecd88f',
//           name: '是否为整数',
//           key: 'shifouweizhengshu',
//           parameters: [
//             {
//               id: '641a7054cf44f6204642c2bb',
//               name: '数字值',
//               key: 'value',
//               desc: '要判断的数字值',
//               types: [
//                 {
//                   type: 'number',
//                 },
//               ],
//               extendPlatform: true,
//             },
//           ],
//           outTypes: [
//             {
//               type: 'whether',
//             },
//           ],
//         },
//       }),
//     }
//   ).token
// );

function compileScript(page: ICS_Page, compileOptions: CompilePageOptions): { token: string } {
  const { variables, lifeCycle, functions } = page;
  // @ts-ignore
  const { routes, componentMap, functionMap } = compileOptions;
  let code = '';
  let tag = compileTag();
  code += tag[0];
  code += compileVueImports();
  if (componentMap && componentMap.size > 0) {
    code += compileImports(componentMap);
  }
  if (functionMap && functionMap.size > 0) {
    code += compileImports(functionMap);
  }
  if (variables && variables.length > 0) {
    code += compileVariables(variables);
  }
  if (functions && functions.length > 0) {
    code += compileFunctions(functions);
  }
  if (lifeCycle && lifeCycle.length > 0) {
    code += compileLifeCycle(lifeCycle);
  }
  code += tag[1];
  return { token: code };
}

function compileTag(): string[] {
  const statement = t.jsxElement(
    t.jsxOpeningElement(t.jsxIdentifier('script'), [
      t.jsxAttribute(t.jsxIdentifier('setup')),
      t.jsxAttribute(t.jsxIdentifier('lang'), t.stringLiteral('ts')),
    ]),
    t.jsxClosingElement(t.jsxIdentifier('script')),
    [t.jsxText('split')]
  );
  const { code } = generate(statement);
  return code.split('split').map((ele) => ele + '\n');
}

function compileVueImports(): string {
  const statement = t.program([
    t.importDeclaration(
      [
        t.importSpecifier(t.identifier('onBeforeUnmount'), t.identifier('onBeforeUnmount')),
        t.importSpecifier(t.identifier('onMounted'), t.identifier('onMounted')),
        t.importSpecifier(t.identifier('reactive'), t.identifier('reactive')),
        t.importSpecifier(t.identifier('ref'), t.identifier('ref')),
      ],
      t.stringLiteral('vue')
    ),
    t.importDeclaration(
      [t.importSpecifier(t.identifier('useRouter'), t.identifier('useRouter'))],
      t.stringLiteral('vue-router')
    ),
  ]);
  const { code } = generate(statement);
  return code + '\n';
}

function compileImports(imports: Map<string, VueTypes.Component> | Map<string, VueTypes.Function>): string {
  const importArray: any[] = [];
  const packageObj: { [propname: string]: number } = {};
  let count = 0;
  imports.forEach((ele) => {
    const { key, source } = ele;
    if (key && source) {
      const { filePath, packageName, exportName, alias } = source;
      const sourceStr = compileSourceStr(packageName, filePath);
      if (packageObj[sourceStr] === undefined) {
        let specifier = compileSpecifier(exportName, key, alias);
        let source = t.stringLiteral(sourceStr);
        importArray.push([[specifier], source]);
      } else {
        importArray[packageObj[sourceStr]][0].push(compileSpecifier(exportName, key, alias));
      }
      packageObj[sourceStr] = count;
      count++;
    }
  });
  const statement = t.program(
    importArray.map((ele) => {
      return t.importDeclaration(ele[0], ele[1]);
    })
  );
  const { code } = generate(statement);
  return code + '\n';
}

function compileSpecifier(
  exportName: string,
  key: string,
  alias?: string
): t.ImportSpecifier | t.ImportDefaultSpecifier | t.ImportNamespaceSpecifier {
  let specifier;
  if (exportName === 'default') {
    specifier = t.importDefaultSpecifier(t.identifier(key));
  } else {
    if (!alias) {
      specifier = t.importSpecifier(t.identifier(exportName), t.identifier(exportName));
    } else {
      specifier = t.importSpecifier(t.identifier(exportName), t.identifier(alias));
    }
  }
  return specifier;
}

function compileSourceStr(packageName?: string, filePath?: string): string {
  const sourceStr = packageName || relative('src/folder', filePath as string);
  return sourceStr;
}

function compileVariables(variables: Array<Identifier>): string {
  const statement = t.program(
    variables.map((ele) => {
      return t.variableDeclaration('const', [
        t.variableDeclarator(t.identifier(ele.key), t.callExpression(t.identifier('ref'), [t.nullLiteral()])),
      ]);
    })
  );
  const { code } = generate(statement);
  return code + '\n';
}

function compileFunctions(functions: Array<ICS_Function>): string {
  const statement = t.program(
    functions.map((func) => {
      return t.functionDeclaration(
        t.identifier(func.key),
        func.parameters.map((param) => {
          return t.identifier(param.key);
        }),
        t.blockStatement([])
      );
    })
  );
  const { code } = generate(statement);
  return code + '\n';
}

function compileLifeCycle(lifeCycle: Array<I_component_LifeCycle>): string {
  const lifeStatements: t.Statement[] = [];
  for (let i = 0; i < lifeCycle.length; i++) {
    const lifeEle = lifeCycle[i];
    const actions = lifeEle.actions;
    // @ts-ignore 
    if (events[lifeEle.eventId].key === 'loading') {
      const actionStatements = [];
      for (let j = 0; j < actions.length; j++) {
        const actionEle = actions[j];
        if (actionEle.mode === 'api') {
          actionStatements.push(
            // @ts-ignore
            t.expressionStatement(t.callExpression(t.identifier(apis[actionEle.args.id as string].key), []))
          );
        }
      }
      lifeStatements.push(
        t.expressionStatement(
          t.callExpression(t.identifier('onMounted'), [
            t.arrowFunctionExpression([], t.blockStatement(actionStatements)),
          ])
        )
      );
    }
  }
  const statement = t.program(lifeStatements);
  const { code } = generate(statement);
  return code + '\n';
}

export default compileScript;
