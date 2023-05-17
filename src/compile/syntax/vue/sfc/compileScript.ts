import * as g from '@/compile/tokens/markup/vue-template/generate-schema';
import * as t from '@babel/types';
import { CompilePageCtx } from '../compilePages';
import { relative } from '@/utils/node';
import { tools } from '@/utils/tools';
import { actionsToAst, nodePropsAst } from '../shared/bind-parse/core';
import { getNodeTagVarName, getVariableVarName } from '../shared/script-helper';

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
  let statements: Array<t.Statement> = [];
  // 导入模块
  statements = statements.concat(getAllImports(ctx));
  // 声明变量与赋值
  statements = statements.concat(getAllVariables(page, ctx));
  // 函数和方法执行
  statements = statements.concat(getFunctionMethod(page, ctx));
  // 使用xml生成script标签
  return g.generate(
    [
      g.node(
        'script',
        [g.prop('setup'), g.prop('lang', 'ts')],
        [g.text(t.program(statements))]
      ),
    ],
    // 字符串形式代码
    // minified压缩一行 minimal中文不转码为unicode
    { minified: true, jsescOption: { minimal: true } }
  );
}

function getAllImports(ctx: CompilePageCtx): t.Statement[] {
  let imports: t.Statement[] = [];
  const apis = ctx.global.apisStore.apis();
  const importComponents = ctx.scope.current.importComponents;
  const importFunctions = ctx.scope.current.importFunctions;
  imports = imports.concat(getVueImports());
  if (importComponents && importComponents.length) {
    imports = imports.concat(getComponentImports(importComponents, ctx));
  }
  if (importFunctions && importFunctions.length) {
    imports = imports.concat(getFunctionImports(importFunctions, ctx));
  }
  if (apis && apis.length) {
    imports = imports.concat(getApiImports(apis, ctx));
  }
  return imports;
}

function getAllVariables(page: CodeSchema.Page, ctx: CompilePageCtx): t.Statement[] {
  let variables: t.Statement[] = [];
  const { variables: pageVariables } = page;
  const apis = ctx.global.apisStore.apis();
  const nodes = ctx.scope.current.nodesStore.nodes();
  variables.push(getVueVariables());
  if (pageVariables && pageVariables.length) {
    variables = variables.concat(getVariables(pageVariables, ctx));
  }
  if (apis && apis.length) {
    variables = variables.concat(getApiVariables(apis, ctx));
  }
  if (nodes && nodes.length) {
    variables = variables.concat(getNodesVariables(nodes, ctx));
  }
  return variables;
}

function getFunctionMethod(page: CodeSchema.Page, ctx: CompilePageCtx): t.Statement[] {
  let fnMethods: t.Statement[] = [];
  const { lifeCycle, functions } = page;
  if (functions && functions.length) {
    fnMethods = fnMethods.concat(getFunctions(functions, ctx));
  }
  if (lifeCycle && lifeCycle.length) {
    fnMethods = fnMethods.concat(getLifeCycles(lifeCycle, ctx));
  }
  return fnMethods;
}

function getVueImports(): t.ImportDeclaration[] {
  return [
    t.importDeclaration(
      [
        t.importSpecifier(t.identifier('onBeforeUnmount'), t.identifier('onBeforeUnmount')),
        t.importSpecifier(t.identifier('onMounted'), t.identifier('onMounted')),
        t.importSpecifier(t.identifier('reactive'), t.identifier('reactive')),
        t.importSpecifier(t.identifier('ref'), t.identifier('ref')),
        t.importSpecifier(t.identifier('computed'), t.identifier('computed')),
      ],
      t.stringLiteral('vue')
    ),
    t.importDeclaration(
      [t.importSpecifier(t.identifier('useRouter'), t.identifier('useRouter'))],
      t.stringLiteral('vue-router')
    ),
  ];
}

function getComponentImports(importComponents: GlobalContext.Component[], ctx: CompilePageCtx): t.ImportDeclaration[] {
  const importArray: any[] = [];
  const packageObj: { [propname: string]: number } = {};
  let count = 0;
  let pageDir = ctx.global.pagesStore.getPage(ctx.scope.current.data.id)?.source.filePath;
  pageDir = pageDir && pageDir.match(/^(.+[\\/])([^\\/]+)$/)?.[1];
  importComponents.forEach((ele) => {
    let { key, source } = ele;
    if (key && source) {
      const { filePath, packageName, exportName, alias } = source;

      const sourceStr = packageName || relative(pageDir!, filePath as string);
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

function getFunctionImports(importComponents: GlobalContext.Function[], ctx: CompilePageCtx): t.ImportDeclaration[] {
  const importArray: any[] = [];
  const packageObj: { [propname: string]: number } = {};
  let count = 0;
  let pageDir = ctx.global.pagesStore.getPage(ctx.scope.current.data.id)?.source.filePath;
  pageDir = pageDir && pageDir.match(/^(.+[\\/])([^\\/]+)$/)?.[1];
  importComponents.forEach((ele) => {
    let { key, source } = ele;
    if (key && source) {
      const { filePath, packageName, exportName, alias } = source;
      const sourceStr = packageName || relative(pageDir!, filePath as string);
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

function getApiImports(apis: GlobalContext.Api[], ctx: CompilePageCtx) {
  const importArray: any[] = [];
  let pageDir = ctx.global.pagesStore.getPage(ctx.scope.current.data.id)?.source.filePath;
  pageDir = pageDir && pageDir.match(/^(.+[\\/])([^\\/]+)$/)?.[1];
  apis.forEach((ele) => {
    let { key, source } = ele;
    if (key && source) {
      const { filePath, exportName } = source;
      const sourcePath = relative(pageDir!, filePath as string);
      let specifier = getImportSpecifier(exportName, key);
      let sourceStr = t.stringLiteral(sourcePath);
      importArray.push([[specifier], sourceStr]);
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
    t.variableDeclarator(t.identifier(VueVariable.router), t.callExpression(t.identifier('useRouter'), [])),
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

function getApiVariables(apis: GlobalContext.Api[], ctx: CompilePageCtx): t.VariableDeclaration {
  const apiProps: t.ObjectProperty[] = [];
  apis.forEach((api) => {
    const varName = api.key;
    if (varName) {
      apiProps.push(t.objectProperty(t.identifier(varName), t.nullLiteral()));
    }
  });
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(ctx.global.apiVarRootName),
      t.callExpression(t.identifier('reactive'), [t.objectExpression(apiProps)])
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
    const actionStatements: t.ExpressionStatement[] = actionsToAst(lifeCycle.actions, ctx);
    lifeCycleExprs.push(
      t.callExpression(
        t.identifier(
          LifeCycle[ctx.scope.current.lifeCyclesStore.findId(lifeCycle.eventId)?.data.key as keyof typeof LifeCycle]
        ),
        [t.arrowFunctionExpression([], t.blockStatement(actionStatements))]
      )
    );
  });
  return lifeCycleExprs.map((ele) => t.expressionStatement(ele));
}

export default compileScript;
