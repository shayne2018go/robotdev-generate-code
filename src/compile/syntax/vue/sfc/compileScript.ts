import * as g from '@/compile/tokens/markup/vue-template/generate-schema';
import * as t from '@babel/types';
import { CompileCurrentCtx } from '../compilePages';
import { actionsToAst, nodePropsAst, defaultAst } from '../shared/bind-parse/core';
import { getNodeTagVarName, getVariableVarName } from '../shared/script-helper';
import { PropertiesMapItem } from '../shared/store/properties';
import { getVueType } from '../shared/vue-helper';
import { getCurrentDirByPath, parsingImportedParsingArray } from './shared/imported-helper';

export enum LifeCycle {
  loading = 'onMounted',
}

export enum VueVariable {
  router = 'router',
}

function compileScript<T extends CodeSchema.Page | CodeSchema.Component>(
  page: T,
  ctx: CompileCurrentCtx
): { token: string } {
  return { token: gernateScriptToken(page, ctx) };
}

function gernateScriptToken<T extends CodeSchema.Page | CodeSchema.Component>(page: T, ctx: CompileCurrentCtx): string {
  let statements: Array<t.Statement> = [];
  // 导入模块
  statements = statements.concat(getAllImports(ctx));
  // 属性声明
  statements = statements.concat(parsingComponentProps(ctx));
  // 事件声明
  statements = statements.concat(parsingComponentEmits(ctx));
  // 声明变量与赋值
  statements = statements.concat(getAllVariables(page, ctx));
  // 函数和方法执行
  statements = statements.concat(getFunctionMethod(page, ctx));
  // 使用xml生成script标签
  return g.generate(
    [g.node('script', [g.prop('setup'), g.prop('lang', 'ts')], [g.text(t.program(statements))])],
    // 字符串形式代码
    // minified压缩一行 minimal中文不转码为unicode
    { minified: true, jsescOption: { minimal: true } }
  );
}

function getAllImports<T extends CodeSchema.Page | CodeSchema.Component>(ctx: CompileCurrentCtx): t.Statement[] {
  let imports: t.Statement[] = [];
  const apis = ctx.global.apisStore.apis();
  const importComponents = ctx.scope.current.importComponents;
  const importFunctions = ctx.scope.current.importFunctions;
  imports = imports.concat(getVueImports());
  if (importComponents && importComponents.length) {
    imports = imports.concat(getImporteds(importComponents, ctx));
  }
  if (importFunctions && importFunctions.length) {
    imports = imports.concat(getImporteds(importFunctions, ctx));
  }
  if (apis && apis.length) {
    imports = imports.concat(getImporteds(apis, ctx));
  }
  return imports;
}

function parsingComponentProps(ctx: CompileCurrentCtx): t.VariableDeclaration {
  const props = ctx.scope.current.propsStore.findAll() || [];

  return createComponentPropsAst(props);
}

function createComponentPropsAst(props: PropertiesMapItem[]) {
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier('props'),
      t.callExpression(t.identifier('defineProps'), [
        t.objectExpression(
          props.map((p) =>
            t.objectProperty(
              t.identifier(p.data.key),
              t.identifier(getVueType(p.data.types[0]))
              // t.objectExpression([t.objectProperty(t.identifier('type'), t.identifier(getType(p.data.types[0])))])
            )
          )
        ),
      ])
    ),
  ]);
}

function parsingComponentEmits(ctx: CompileCurrentCtx): t.VariableDeclaration {
  const emits = ctx.scope.current.emitsStore.findAll() || [];
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier('emit'),
      t.callExpression(t.identifier('defineEmits'), [t.arrayExpression(emits.map((p) => t.stringLiteral(p.data.key)))])
    ),
  ]);
}

function getAllVariables<T extends CodeSchema.Page | CodeSchema.Component>(
  page: T,
  ctx: CompileCurrentCtx
): t.Statement[] {
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

function getFunctionMethod<T extends CodeSchema.Page | CodeSchema.Component>(
  page: T,
  ctx: CompileCurrentCtx
): t.Statement[] {
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
        t.importSpecifier(t.identifier('defineProps'), t.identifier('defineProps')),
        t.importSpecifier(t.identifier('defineEmits'), t.identifier('defineEmits')),
      ],
      t.stringLiteral('vue')
    ),
    t.importDeclaration(
      [t.importSpecifier(t.identifier('useRouter'), t.identifier('useRouter'))],
      t.stringLiteral('vue-router')
    ),
  ];
}

function getImporteds<T extends CodeSchema.Page | CodeSchema.Component>(
  importeds: (GlobalContext.Component | GlobalContext.Function | GlobalContext.Api)[],
  ctx: CompileCurrentCtx
): t.ImportDeclaration[] {
  const currentFilePath = getCurrentDependency(ctx.scope.current.data.id, ctx)?.source?.filePath;
  if (!currentFilePath) {
    return [];
  }
  const currentDir = getCurrentDirByPath(currentFilePath);

  const importedParsingArray = parsingImportedParsingArray(importeds, currentDir);

  return importedParsingArray.map((ip) => t.importDeclaration(ip.specifiers, t.stringLiteral(ip.importPath)));
}

function getVueVariables() {
  return t.variableDeclaration('const', [
    t.variableDeclarator(t.identifier(VueVariable.router), t.callExpression(t.identifier('useRouter'), [])),
  ]);
}

function getVariables<T extends CodeSchema.Page | CodeSchema.Component>(
  variables: Array<CodeSchema.Property_Protocol>,
  ctx: CompileCurrentCtx
): t.VariableDeclaration {
  const varProperty: t.ObjectProperty[] = [];
  variables.forEach((ele) => {
    const varName = getVariableVarName(ele.id, ctx);
    if (varName) {
      const value = defaultAst(ctx, ele.types, true) || t.identifier('undefined');
      varProperty.push(t.objectProperty(t.identifier(varName), value));
    }
  });
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(ctx.global.variablesRootName),
      t.callExpression(t.identifier('reactive'), [t.objectExpression(varProperty)])
    ),
  ]);
}

function getNodesVariables<T extends CodeSchema.Page | CodeSchema.Component>(
  nodes: CodeSchema.ComponentNode[],
  ctx: CompileCurrentCtx
): t.VariableDeclaration {
  const nodeProps: t.ObjectProperty[] = [];
  nodes.forEach((node) => {
    const props = nodePropsAst(node.id, ctx);
    const varName = getNodeTagVarName(node.id, ctx);
    if (!props.length) {
      return;
    }
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

function getApiVariables<T extends CodeSchema.Page | CodeSchema.Component>(
  apis: GlobalContext.Api[],
  ctx: CompileCurrentCtx
): t.VariableDeclaration {
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

function getFunctions<T extends CodeSchema.Page | CodeSchema.Component>(
  functions: Array<CodeSchema.Function_Protocol>,
  _ctx: CompileCurrentCtx
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

function getLifeCycles<T extends CodeSchema.Page | CodeSchema.Component>(
  lifeCycles: Array<CodeSchema.ComponentLifeCycle>,
  ctx: CompileCurrentCtx
): t.Statement[] {
  const lifeCycleExprs: t.CallExpression[] = [];
  lifeCycles.forEach((lifeCycle) => {
    const actionStatements: t.Statement[] = actionsToAst(lifeCycle.actions, ctx);
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

export function getCurrentDependency<T extends CodeSchema.Page | CodeSchema.Component>(
  id: string,
  ctx: CompileCurrentCtx
) {
  return ctx.global.pagesStore.getPage(id) || ctx.global.componentsStore.getCmpt(id);
}
export default compileScript;
