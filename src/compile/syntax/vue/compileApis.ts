import generate from '@babel/generator';
import * as t from '@babel/types';
import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { VueTypes } from './types/vue';
import { ICS_Api } from '@/types/api';
import createToken from '@/compile/config/createToken';
import { AxiosRequestConfig } from 'axios';
// import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { relative } from '@/utils/node';

// console.log(compileApis(codeSchema).tokens, compileApis(codeSchema).apis);
// console.log(compileRequestInstance({})[0].path);
// console.log(compileRequestInstance({})[0].token);

function compileApis(codeSchema: ICodeSchema): { tokens: Compile.Token[]; apis: VueTypes.Api[] } {
  const apiDir = 'src/api';
  const { apis: apiArray } = codeSchema;
  const tokens = [] as Compile.Token[];
  const apis = [] as VueTypes.Api[];
  for (let index = 0; index < apiArray.length; index++) {
    const api = apiArray[index];
    const apiFile = `${api.key}.ts`;
    const path = `${apiDir}/${apiFile}`;
    let token = getAxiosImport();
    token += getExportRequest(api);
    tokens.push(createToken(path, token));
    apis.push(getApiType(path, api));
  }
  return { tokens, apis };
}

// @ts-ignore
function getAxiosImport(): string {
  const program = t.program([
    t.importDeclaration([t.importDefaultSpecifier(t.identifier('axios'))], t.stringLiteral('axios')),
  ]);
  const { code } = generate(program);
  return code + '\n';
}

// @ts-ignore
function getAxiosUtilImport(): string {
  const apiDir = 'src/api';
  const utilDir = 'src/util';
  const utilFile = 'axios.ts';
  const program = t.program([
    t.importDeclaration(
      [t.importDefaultSpecifier(t.identifier('axios'))],
      t.stringLiteral(relative(apiDir, `${utilDir}/${utilFile}`))
    ),
  ]);
  const { code } = generate(program);
  return code + '\n';
}

function getExportRequest(api: ICS_Api): string {
  const program = t.program([
    t.exportNamedDeclaration(
      t.functionDeclaration(
        t.identifier(api.key),
        [t.identifier('data')],
        t.blockStatement([
          t.returnStatement(
            t.callExpression(t.identifier('axios'), [
              t.objectExpression([
                t.objectProperty(t.identifier('method'), t.stringLiteral(api.method)),
                t.objectProperty(t.identifier('url'), t.stringLiteral(api.key)),
                t.objectProperty(t.identifier('data'), t.identifier('data')),
              ]),
            ])
          ),
        ])
      )
    ),
  ]);
  const { code } = generate(program);
  return code;
}

function getApiType(path: string, api: ICS_Api): VueTypes.Api {
  const apiType: VueTypes.Api = {
    id: api.id,
    key: api.key,
    source: {
      filePath: path,
      exportName: api.key,
    },
    protocol: api,
  };
  return apiType;
}

export function compileRequestInstance({ timeout, baseURL, headers }: AxiosRequestConfig): Compile.Token[] {
  const utilDir = 'src/util';
  const utilFile = 'axios.ts';
  const headersExpr: t.ObjectProperty[] = [];
  if (headers) {
    for (const key in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, key)) {
        const element = headers[key];
        headersExpr.push(t.objectProperty(t.stringLiteral(key), t.stringLiteral(element)));
      }
    }
  }
  const generateInterceptorStatement = function (type: 'request' | 'response', funcExpression: t.FunctionExpression) {
    return t.expressionStatement(
      t.callExpression(
        t.memberExpression(
          t.memberExpression(
            t.memberExpression(t.identifier('instance'), t.identifier('interceptors')),
            t.identifier(type)
          ),
          t.identifier('use')
        ),
        [
          funcExpression,
          t.functionExpression(
            null,
            [t.identifier('error')],
            t.blockStatement([
              t.returnStatement(
                t.callExpression(t.memberExpression(t.identifier('error'), t.identifier('reject')), [
                  t.identifier('error'),
                ])
              ),
            ])
          ),
        ]
      )
    );
  };
  const program = t.program([
    t.importDeclaration([t.importDefaultSpecifier(t.identifier('axios'))], t.stringLiteral('axios')),
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('instance'),
        t.callExpression(t.memberExpression(t.identifier('axios'), t.identifier('create')), [
          t.objectExpression([
            t.objectProperty(t.identifier('timeout'), t.numericLiteral(timeout || 6000)),
            t.objectProperty(t.identifier('baseURL'), t.stringLiteral(baseURL || '')),
            t.objectProperty(t.identifier('headers'), t.objectExpression(headersExpr)),
          ]),
        ])
      ),
    ]),
    generateInterceptorStatement(
      'request',
      t.functionExpression(
        null,
        [t.identifier('config')],
        t.blockStatement([t.returnStatement(t.identifier('config'))])
      )
    ),
    generateInterceptorStatement(
      'response',
      t.functionExpression(
        null,
        [t.identifier('response')],
        t.blockStatement([t.returnStatement(t.memberExpression(t.identifier('response'), t.identifier('data')))])
      )
    ),
    t.exportDefaultDeclaration(t.identifier('instance')),
  ]);
  const { code } = generate(program);
  return [createToken(`${utilDir}/${utilFile}`, code)];
}

export default compileApis;
