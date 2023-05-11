import generate from '@babel/generator';
import * as t from '@babel/types';
import { Compile } from '@/types/compile/token';
import createToken from '@/compile/config/createToken';
import { AxiosRequestConfig } from 'axios';
// import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { relative } from '@/utils/node';
import { API_DIR, UTIL_DIR } from './const/config';

// console.log(compileApis(codeSchema).tokens, compileApis(codeSchema).apis);
// console.log(compileRequestInstance({})[0].path);
// console.log(compileRequestInstance({})[0].token);

function parsingApis(codeSchema: CodeSchema.Project): { apis: GlobalContext.Api[] } {
  const apis = [] as GlobalContext.Api[];

  codeSchema.apis.forEach((api) => {
    const apiFile = `${api.key}.ts`;
    const path = `${API_DIR}/${apiFile}`;
    apis.push(getApiType(path, api));
  });

  return { apis };
}

function getApiType(path: string, api: CodeSchema.Api_Protocol): GlobalContext.Api {
  const apiType: GlobalContext.Api = {
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

function compileApis(codeSchema: CodeSchema.Project, apis: GlobalContext.Api[]): { tokens: Compile.Token[] } {
  const tokens = apis.map((api) => {
    if (!api.source.filePath) {
      throw new Error(`${api}`);
    }
    return createToken(api.source.filePath, generateApiToken(api.protocol));
  });
  return { tokens };
}

function generateApiToken(api: CodeSchema.Api_Protocol): string {
  const statement = t.program([getAxiosImport(), getExportRequests(api)]);
  const { code } = generate(statement);
  return code;
}

function getAxiosImport(): t.ImportDeclaration {
  return t.importDeclaration([t.importDefaultSpecifier(t.identifier('axios'))], t.stringLiteral('axios'));
}

// @ts-ignore
function getAxiosUtilImport(): t.ImportDeclaration {
  const utilFile = 'axios.ts';
  return t.importDeclaration(
    [t.importDefaultSpecifier(t.identifier('axios'))],
    t.stringLiteral(relative(API_DIR, `${UTIL_DIR}/${utilFile}`))
  );
}

function getExportRequests(api: CodeSchema.Api_Protocol): t.ExportNamedDeclaration {
  return t.exportNamedDeclaration(
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
  );
}

function compileRequestInstance({ timeout, baseURL, headers }: AxiosRequestConfig): Compile.Token[] {
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
  return [createToken(`${UTIL_DIR}/${utilFile}`, code)];
}

export { parsingApis, compileRequestInstance };

export default compileApis;
