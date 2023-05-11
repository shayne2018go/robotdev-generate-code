import generate from '@babel/generator';
import * as t from '@babel/types';
import { CompilePageCtx } from '../compilePages';
import { relative } from '@/utils/node';
import { tools } from '@/utils/tools';
import { actionToAst, isAstType, isTableType, nodeEventValueAst, nodePropValueAst } from '../shared/bind-parse/core';
import { getNodeEventKeyByNodeId, getNodePropKeyByNodeId, getNodeTagVarName, getVariableVarName } from '../shared/script-helper';
import { COMPONENT_DIR } from '../const/config';

const lifeCycleMap: { [propname: string]: string } = {
  loading: 'onMounted',
};

function compileScript(page: CodeSchema.Page, ctx: CompilePageCtx): { token: string } {
  return { token: gernateScriptToken(page, ctx) };
}

function gernateScriptToken(page: CodeSchema.Page, ctx: CompilePageCtx): string {
  const { variables, lifeCycle, functions } = page;
  const statements: Array<t.Statement> = [];
  let code = '';
  let tag = getTagStrs();
  code += tag[0];
  statements.push(...getVueImports());
  if (ctx.importComponents.length > 0) {
    statements.push(...getComponentImports(ctx));
  }
  if (ctx.importFunctions.length > 0) {
    statements.push(...getFunctionImports(ctx));
  }
  if (variables && variables.length > 0) {
    statements.push(getVariables(variables, ctx));
  }
  if (ctx.nodesVarNames) {
    statements.push(getNodesVariables(ctx));
  }
  if (functions && functions.length > 0) {
    statements.push(...getFunctions(functions, ctx));
  }
  if (lifeCycle && lifeCycle.length > 0) {
    statements.push(...getLifeCycles(lifeCycle, ctx));
  }
  const statement = t.program(statements);
  code += generate(statement).code + '\n';
  code += tag[1];
  return code;
}

function getTagStrs(): string[] {
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

function getComponentImports(
  ctx: CompilePageCtx
): t.ImportDeclaration[] {
  const importArray: any[] = [];
  const packageObj: { [propname: string]: number } = {};
  let count = 0;
  ctx.importComponents.forEach((ele) => {
    let { key, source } = ele;
    if (key && source) {
      const { filePath, packageName, exportName, alias } = source;
      const sourceStr = packageName || relative(COMPONENT_DIR, filePath as string);
      if (packageObj[sourceStr] === undefined) {
        let specifier = getImportSpecifier(exportName, key, alias);
        let source = t.stringLiteral(sourceStr);
        importArray.push([[specifier], source]);
      } else {
        importArray[packageObj[sourceStr]][0].push(getImportSpecifier(exportName, key, alias));
      }
      packageObj[sourceStr] = count;
      count++;
    }
  });
  return importArray.map((ele) => {
    return t.importDeclaration(ele[0], ele[1]);
  });
}

function getFunctionImports(
  ctx: CompilePageCtx
): t.ImportDeclaration[] {
  const importArray: any[] = [];
  const packageObj: { [propname: string]: number } = {};
  let count = 0;
  ctx.importComponents.forEach((ele) => {
    let { key, source } = ele;
    if (key && source) {
      const { filePath, packageName, exportName, alias } = source;
      const sourceStr = packageName || relative('src/folder', filePath as string);
      if (packageObj[sourceStr] === undefined) {
        let specifier = getImportSpecifier(exportName, key, alias);
        let source = t.stringLiteral(sourceStr);
        importArray.push([[specifier], source]);
      } else {
        importArray[packageObj[sourceStr]][0].push(getImportSpecifier(exportName, key, alias));
      }
      packageObj[sourceStr] = count;
      count++;
    }
  });
  return importArray.map((ele) => {
    return t.importDeclaration(ele[0], ele[1]);
  });
}

function getImportSpecifier(
  exportName: string,
  key: string,
  alias?: string
): t.ImportSpecifier | t.ImportDefaultSpecifier {
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

function getVariables(variables: Array<CodeSchema.Property_Protocol>, ctx: CompilePageCtx): t.VariableDeclaration {
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(ctx.variablesRootName),
      t.callExpression(t.identifier('reactive'), [
        t.objectExpression(
          variables.map((ele) => {
            return t.objectProperty(t.identifier(getVariableVarName(ele.id,ctx)), t.nullLiteral());
          })
        ),
      ])
    ),
  ]);
}

function getNodesVariables(ctx: CompilePageCtx): t.VariableDeclaration {
  const nodes = ctx.nodesStore.nodes();
  const nodeProps: t.ObjectProperty[] = [];
  nodes.forEach((node) => {
    const propProps: t.ObjectProperty[] = [];
    const eventProps: t.ObjectProperty[] = [];
    if (!node.props?.length && !node.events?.length) {
      return;
    }
    if (node.props?.length) {
      node.props.forEach((prop) => {
        const res = nodePropValueAst(node.id, prop.propId, ctx);
        if (res) {
          if (isAstType(res)) {
            const ast = res.value;
            if (ast) {
              propProps.push(t.objectProperty(t.identifier(getNodePropKeyByNodeId(node.id, prop.propId, ctx)), ast));
            }
          } else if (isTableType(res)) {
            const tableProp = res.value;
            if (tableProp) {
              propProps.push(
                t.objectProperty(
                  t.identifier(getNodePropKeyByNodeId(node.id, prop.propId, ctx)),
                  t.objectExpression([
                    t.objectProperty(t.identifier(tableProp.columns.key), tableProp.columns.value),
                    t.objectProperty(t.identifier(tableProp.dataSource.key), tableProp.dataSource.value),
                  ])
                )
              );
            }
          } else {
          }
        }
      });
    }
    if (node.events?.length) {
      node.events.forEach((event) => {
        const ast = nodeEventValueAst(node.id, event.eventId, ctx);
        if (ast) {
          propProps.push(t.objectProperty(t.identifier(getNodeEventKeyByNodeId(node.id, event.eventId, ctx)), ast));
        }
      });
    }
    nodeProps.push(
      t.objectProperty(t.identifier(getNodeTagVarName(node.id, ctx)), t.objectExpression([...propProps, ...eventProps]))
    );
  });
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(ctx.nodesVarRootName),
      t.callExpression(t.identifier('reactive'), [t.objectExpression(nodeProps)])
    ),
  ]);
}

function getFunctions(functions: Array<CodeSchema.Function_Protocol>, _ctx: CompilePageCtx): t.FunctionDeclaration[] {
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

function getLifeCycles(lifeCycles: Array<CodeSchema.ComponentLifeCycle>, ctx: CompilePageCtx): t.ExpressionStatement[] {
  const lifeCycleExprs: t.CallExpression[] = [];
  lifeCycles.forEach((lifeCycle) => {
    const actionStatements: t.ExpressionStatement[] = [];
    lifeCycle.actions.forEach((action) => {
      const ast = actionToAst(action, ctx);
      if (ast) {
        actionStatements.push(t.expressionStatement(ast));
      }
    });
    lifeCycleExprs.push(
      t.callExpression(t.identifier(lifeCycleMap[ctx.eventsStore.getEvent(lifeCycle.eventId).key]), [
        t.arrowFunctionExpression([], t.blockStatement(actionStatements)),
      ])
    );
  });
  return lifeCycleExprs.map((ele) => t.expressionStatement(ele));
}

export default compileScript;
