import generate from '@babel/generator';
import * as t from '@babel/types';
import { CompilePageCtx } from '../compilePages';
import { relative } from '@/utils/node';
import { tools } from '@/utils/tools';
import { actionToAst, nodePropValueAst } from '../shared/bind-parse/core';

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
    statements.push(...getImports(ctx.importComponents));
  }
  if (ctx.importFunctions.length > 0) {
    statements.push(...getImports(ctx.importFunctions));
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

function getImports(imports: Array<VueTypes.Component> | Array<VueTypes.Function>): t.ImportDeclaration[] {
  const importArray: any[] = [];
  const packageObj: { [propname: string]: number } = {};
  let count = 0;
  imports.forEach((ele) => {
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
            return t.objectProperty(t.identifier(ctx.variablesNames[ele.id].varName), t.nullLiteral());
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
        const ast = nodePropValueAst(node.id, prop.propId, ctx);
        if (ast) {
          propProps.push(
            t.objectProperty(t.identifier(ctx.nodesVarNames[node.id].propMembers[prop.propId].varName), ast)
          );
        }
      });
    }
    if (node.events?.length) {
      node.events.forEach((event) => {
        const ast = nodePropValueAst(node.id, event.eventId, ctx);
        if (ast) {
          propProps.push(
            t.objectProperty(t.identifier(ctx.nodesVarNames[node.id].eventMembers[event.eventId].varName), ast)
          );
        }
      });
    }
    nodeProps.push(
      t.objectProperty(
        t.identifier(ctx.nodesVarNames[node.id].varName),
        t.objectExpression([...propProps, ...eventProps])
      )
    );
  });
  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(ctx.nodesVarRootName),
      t.callExpression(t.identifier('reactive'), [t.objectExpression(nodeProps)])
    ),
  ]);
}

function getFunctions(functions: Array<CodeSchema.Function_Protocol>, ctx: CompilePageCtx): t.FunctionDeclaration[] {
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

function getLifeCycles(lifeCycles: Array<CodeSchema.ComponentLifeCycle>, ctx: CompilePageCtx): t.Statement[] {
  return lifeCycles.map((lifeCycle) =>
    t.expressionStatement(
      t.callExpression(t.identifier(lifeCycleMap[ctx.eventsStore.getEvent(lifeCycle.eventId).key]), [
        t.arrowFunctionExpression(
          [],
          t.blockStatement(lifeCycle.actions.map((action) => t.expressionStatement(actionToAst(action, ctx))))
        ),
      ])
    )
  );
}

export default compileScript;
