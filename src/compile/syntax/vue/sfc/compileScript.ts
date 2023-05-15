import generate from '@babel/generator';
import * as t from '@babel/types';
import { CompilePageCtx } from '../compilePages';
import { relative } from '@/utils/node';
import { tools } from '@/utils/tools';
import { actionsToAst, nodePropsAst } from '../shared/bind-parse/core';
import { getNodeTagVarName, getVariableVarName } from '../shared/script-helper';
import { COMPONENT_DIR } from '../const/config';

export enum LifeCycle {
  loading = 'onMounted',
}

export enum VueVariable {
  router = 'router',
}

function compileScript(page: CodeSchema.Page, ctx: CompilePageCtx): { token: string } {
  return { token: gernateScriptToken(page, ctx) };
}

function gernateScriptToken(page: CodeSchema.Page, ctx: CompilePageCtx): string {
  const { variables, lifeCycle, functions } = page;
  const statements: Array<t.Statement> = [];
  const nodes = ctx.scope.page.nodesStore.nodes();
  let code = '';
  let tag = getTagStrs();
  code += tag[0];
  statements.push(...getVueImports());
  if (ctx.scope.page.importComponents.length) {
    statements.push(...getComponentImports(ctx));
  }
  if (ctx.scope.page.importFunctions.length) {
    statements.push(...getFunctionImports(ctx));
  }
  statements.push(getVueVariables());
  if (variables && variables.length) {
    statements.push(getVariables(variables, ctx));
  }
  if (nodes && nodes.length) {
    statements.push(getNodesVariables(nodes, ctx));
  }
  if (functions && functions.length) {
    statements.push(...getFunctions(functions, ctx));
  }
  if (lifeCycle && lifeCycle.length) {
    statements.push(...getLifeCycles(lifeCycle, ctx));
  }
  const statement = t.program(statements);
  code += generate(statement, { minified: true }).code;
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
  return code.split('split');
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

function getComponentImports(ctx: CompilePageCtx): t.ImportDeclaration[] {
  const importArray: any[] = [];
  const packageObj: { [propname: string]: number } = {};
  let count = 0;
  ctx.scope.page.importComponents.forEach((ele) => {
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

function getFunctionImports(ctx: CompilePageCtx): t.ImportDeclaration[] {
  const importArray: any[] = [];
  const packageObj: { [propname: string]: number } = {};
  let count = 0;
  ctx.scope.page.importComponents.forEach((ele) => {
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

function getVueVariables() {
  return t.variableDeclaration('const', [
    t.variableDeclarator(t.identifier(VueVariable.router), t.callExpression(t.identifier('useRoute'), [])),
  ]);
}

function getVariables(variables: Array<CodeSchema.Property_Protocol>, ctx: CompilePageCtx): t.VariableDeclaration {
  const varProperty: t.ObjectProperty[] = [];
  variables.forEach((ele) => {
    const varName = getVariableVarName(ele.id, ctx);
    if (varName) {
      varProperty.push(t.objectProperty(t.identifier(varName), t.nullLiteral()));
    }
  });
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(ctx.global.variablesRootName),
      t.callExpression(t.identifier('reactive'), [t.objectExpression(varProperty)])
    ),
  ]);
}

function getNodesVariables(nodes: CodeSchema.ComponentNode[], ctx: CompilePageCtx): t.VariableDeclaration {
  const nodeProps: t.ObjectProperty[] = [];
  nodes.forEach((node) => {
    const props = nodePropsAst(node.id, ctx);
    const varName = getNodeTagVarName(node.id, ctx);
    if (varName) {
      nodeProps.push(t.objectProperty(t.identifier(varName), t.objectExpression(props)));
    }
  });
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(ctx.global.nodesVarRootName),
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
    const actionStatements: t.ExpressionStatement[] = actionsToAst(lifeCycle.eventId, ctx);
    lifeCycleExprs.push(
      t.callExpression(
        t.identifier(LifeCycle[ctx.global.eventsStore.getEvent(lifeCycle.eventId).key as keyof typeof LifeCycle]),
        [t.arrowFunctionExpression([], t.blockStatement(actionStatements))]
      )
    );
  });
  return lifeCycleExprs.map((ele) => t.expressionStatement(ele));
}

export default compileScript;
