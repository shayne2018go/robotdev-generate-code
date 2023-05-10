import { relative } from '@/utils/node';
import { tools } from '@/utils/tools';
import generate from '@babel/generator';
import * as t from '@babel/types';
import { CompilePageCtx } from '../compilePages';

function compileScript(page: CodeSchema.Page, ctx: CompilePageCtx): { token: string } {
  return { token: gernateScriptToken(page, ctx) };
}

function gernateScriptToken(page: CodeSchema.Page, ctx: CompilePageCtx): string {
  const { variables, lifeCycle, functions } = page;
  const statements: Array<t.Statement> = [];
  let code = '';
  let tag = compileTag();
  code += tag[0];
  statements.push(...getVueImports());
  if (ctx.importComponents.length > 0) {
    statements.push(...getImports(ctx.importComponents));
  }
  if (ctx.importFunctions.length > 0) {
    statements.push(...getImports(ctx.importFunctions));
  }
  if (variables && variables.length > 0) {
    statements.push(compileVariables(variables, ctx));
  }
  if (ctx.nodesVarNames) {
    statements.push(compileNodesVariables(ctx));
  }
  if (functions && functions.length > 0) {
    statements.push(...compileFunctions(functions, ctx));
  }
  if (lifeCycle && lifeCycle.length > 0) {
    statements.push(...compileLifeCycle(lifeCycle, ctx));
  }
  const statement = t.program(statements);
  code += generate(statement).code + '\n';
  code += tag[1];
  return code;
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

function getVueImports(): t.ImportDeclaration[] {
  return [
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
  ];
}

function getImports(imports: Array<VueTypes.Component> | Array<VueTypes.Function>): t.ImportDeclaration[] {
  const importArray: any[] = [];
  const packageObj: { [propname: string]: number } = {};
  let count = 0;
  imports.forEach((ele) => {
    let { key, source } = ele;
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
  return importArray.map((ele) => {
    return t.importDeclaration(ele[0], ele[1]);
  });
}

function compileSpecifier(
  exportName: string,
  key: string,
  alias?: string
): t.ImportSpecifier | t.ImportDefaultSpecifier | t.ImportNamespaceSpecifier {
  let specifier;
  if (exportName === 'default') {
    specifier = t.importDefaultSpecifier(t.identifier(tools.string.lineToHumpBig(key)));
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

function compileVariables(variables: Array<CodeSchema.Property_Protocol>, ctx: CompilePageCtx): t.VariableDeclaration {
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(ctx.variablesRootName),
      t.callExpression(t.identifier('reactive'), [
        t.objectExpression(
          variables.map((ele) => {
            return t.objectProperty(t.identifier(ctx.variablesNames[ele.id].varName), t.nullLiteral());
          })
        ),
      ])
    ),
  ]);
}

function compileNodesVariables(ctx: CompilePageCtx): t.VariableDeclaration {
  // ctx.components.getCmpt(ctx.nodesStore.getNode('').tagId)
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(ctx.nodesVarRootName),
      t.callExpression(t.identifier('reactive'), [
        t.objectExpression(
          Object.entries(ctx.nodesVarNames).map((node) => {
            return t.objectProperty(
              t.identifier(node[1].varName),
              t.callExpression(t.identifier('reactive'), [
                t.objectExpression(
                  Object.entries(node[1].propMembers)
                    .map((ele) => {
                      return t.objectProperty(t.identifier(ele[1].varName), t.nullLiteral(/*这里是prop赋值*/));
                    })
                    .concat(
                      Object.entries(node[1].eventMembers).map((ele) => {
                        return t.objectProperty(t.identifier(ele[1].varName), t.nullLiteral(/*这里是event赋值*/));
                      })
                    )
                ),
              ])
            );
          })
        ),
      ])
    ),
  ]);
}

function compileFunctions(
  functions: Array<CodeSchema.Function_Protocol>,
  ctx: CompilePageCtx
): t.FunctionDeclaration[] {
  return functions.map((func) => {
    return t.functionDeclaration(
      t.identifier(func.key),
      func.parameters.map((param) => {
        return t.identifier(param.key);
      }),
      t.blockStatement([])
    );
  });
}

function compileLifeCycle(lifeCycle: Array<CodeSchema.ComponentLifeCycle>, ctx: CompilePageCtx): t.Statement[] {
  const lifeStatements: t.Statement[] = [];
  for (let i = 0; i < lifeCycle.length; i++) {
    const lifeEle = lifeCycle[i];
    const actions = lifeEle.actions;
    const actionStatements = [];
    for (let j = 0; j < actions.length; j++) {
      const actionEle = actions[j];
      if (actionEle.mode === 'api') {
        actionStatements.push(
          t.expressionStatement(
            t.callExpression(t.identifier(ctx.apisStore.getApi(actionEle.args.id as string).key), [])
          )
        );
      }
    }
    lifeStatements.push(
      t.expressionStatement(
        t.callExpression(t.identifier('onMounted'), [t.arrowFunctionExpression([], t.blockStatement(actionStatements))])
      )
    );
  }
  return lifeStatements;
}

export default compileScript;
