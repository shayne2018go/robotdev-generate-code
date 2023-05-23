import createToken from '@/compile/config/createToken';
import { Compile } from '@/types/compile/token';
import { relative } from '@/utils/node';
import generate from '@babel/generator';
import * as t from '@babel/types';
import { VueGlobalCtx } from './compileVue';
import { ROUTER_DIR, ROUTES_FILENAME } from './const/config';

function compileRouter(codeSchema: CodeSchema.Project, vueGlobalCtx: VueGlobalCtx): { tokens: Compile.Token[] } {
  const tokens = [
    createToken(`${ROUTER_DIR}/${ROUTES_FILENAME}`, generateRouterToken(codeSchema.pages, ROUTER_DIR, vueGlobalCtx)),
  ] as Compile.Token[];
  return { tokens };
}

// 生成token
function generateRouterToken(pages: CodeSchema.Page[], routerDir: string, vueGlobalCtx: VueGlobalCtx) {
  const statement = generateRoutesDeclarationAst(
    pages.map((r) => {
      const page = vueGlobalCtx.pagesStore.getPage(r.id);
      if (!page) {
        throw new Error('找不到page');
      }
      return generateRouteAst(page.routerPath, relative(routerDir, page.source.filePath), page.routerName);
    })
  );

  // 3 生成
  const { code } = generate(statement);

  return code;
}

/**
 *
 * @param routesAst
 * @returns
 *
 * import {RouteRecordRaw} from 'vue-router'
 *
 * const routes = \routesAst\
 *
 * export {routes}
 */
function generateRoutesDeclarationAst(routesAst: (t.SpreadElement | t.Expression | null)[]) {
  const statement = t.program([
    // 1 导入
    // t.importDeclaration([t.importNamespaceSpecifier(t.identifier('aaa'))], t.stringLiteral('ant-design-vue')),
    t.importDeclaration(
      [t.importSpecifier(t.identifier('RouteRecordRaw'), t.identifier('RouteRecordRaw'))],
      t.stringLiteral('vue-router')
    ),
    // 2 创建routes变量
    t.variableDeclaration('const', [t.variableDeclarator(t.identifier('routes'), t.arrayExpression(routesAst))]),
    t.exportNamedDeclaration(null, [t.exportSpecifier(t.identifier('routes'), t.identifier('routes'))]),
  ]);
  return statement;
}

/**
 *
 * @param path
 * @param componentPath
 * @param name
 * @returns route {path: '/home', name: 'home', component: () => import('./pages/home.vue')}
 */
function generateRouteAst(path: string, componentPath: string, name: string = '') {
  return t.objectExpression([
    t.objectProperty(t.identifier('path'), t.stringLiteral(path)),
    t.objectProperty(t.identifier('name'), t.stringLiteral(name)),
    t.objectProperty(
      t.identifier('component'),
      t.arrowFunctionExpression([], t.callExpression(t.import(), [t.stringLiteral(componentPath)]))
    ),
  ]);
}

export default compileRouter;
