import generate from '@babel/generator';
import * as t from '@babel/types';
import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { VueTypes } from './types/vue';
import { ICS_Api } from '@/types/api';
import createToken from '@/compile/config/createToken';
// import codeSchema from '@/__test__/__fixture__/CodeSchema';

// console.log(compileApis(codeSchema).tokens, compileApis(codeSchema).apis);

function compileApis(codeSchema: ICodeSchema): { tokens: Compile.Token[]; apis: VueTypes.Api[] } {
  const apiDir = 'src/api';
  const { apis: apiArray } = codeSchema;
  const tokens = [] as Compile.Token[];
  const apis = [] as VueTypes.Api[];
  for (let index = 0; index < apiArray.length; index++) {
    const api = apiArray[index];
    const apiFile = `${api.key}.ts`;
    const path = `${apiDir}/${apiFile}`;
    const token = compileRequestFunc(api);
    tokens.push(createToken(path, token));
    apis.push(getApiType(path, api));
  }
  return { tokens, apis };
}

function compileRequestFunc(api: ICS_Api): string {
  const program = t.program([
    t.exportNamedDeclaration(
      t.functionDeclaration(t.identifier(api.key), [t.identifier('data')], t.blockStatement(compileRequest(api).body))
    ),
  ]);
  const { code } = generate(program);
  return code;
}

function compileRequest(api: ICS_Api): t.Program {
  const program = t.program([
    t.returnStatement(
      t.callExpression(t.identifier('axios'), [
        t.objectExpression([
          t.objectProperty(t.identifier('method'), t.stringLiteral(api.method)),
          t.objectProperty(t.identifier('url'), t.stringLiteral(api.key)),
          t.objectProperty(t.identifier('data'), t.identifier('data')),
        ]),
      ])
    ),
  ]);
  return program;
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

export default compileApis;
