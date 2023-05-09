import createToken from '@/compile/config/createToken';
import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Directory } from '@/types/directory';
import t from '@babel/types';
import generate from '@babel/generator';
import { relative } from '@/utils/node';

export interface VueRoute {
  id: string; // 页面id
  path: string; // path
  filePath: string; // 文件地址
  name?: string; // name
}

function compileRouter(codeSchema: ICodeSchema, routes: VueRoute[]): { tokens: Compile.Token[] } {
  const routerDir = 'src/router';

  const routeFile = 'routes.ts';

  const tokens = [createToken(`${routerDir}/${routeFile}`, generateRouterToken(routes, routerDir))] as Compile.Token[];
  return { tokens };
}

function parsingRouter(codeSchema: ICodeSchema): { routes: VueRoute[] } {
  const { directories = [], pages } = codeSchema;

  const routes =
    pages.map((page) => {
      return getRouteByDirectories(directories, page.id);
    }) || [];

  return { routes };
}

/**
 * 根据目录获取路由
 * @param directories 目录
 * @param id 页面id
 * @returns
 */
function getRouteByDirectories(directories: ICS_Directory[], id: string): VueRoute {
  const dirPath: ICS_Directory[] = [];

  let curId: string | null = id;

  while (curId) {
    const current = directories.find((d) => d.id === curId);
    if (current) {
      dirPath.unshift(current);
      curId = current.parentId;
    } else {
      break;
    }
  }

  // vue-router 的path
  const path = `/${dirPath.map((p) => p.key).join('/')}`;

  // 文件的绝对路径
  const filePath = `src/pages${path}.vue`;

  return {
    id,
    name: dirPath[dirPath.length - 1].key,
    path,
    filePath,
  };
}

// 生成token
function generateRouterToken(routes: VueRoute[], routerDir: string) {
  // 模拟
  const statement = t.program([
    // 1 导入
    // t.importDeclaration([t.importNamespaceSpecifier(t.identifier('aaa'))], t.stringLiteral('ant-design-vue')),
    t.importDeclaration(
      [t.importSpecifier(t.identifier('RouteRecordRaw'), t.identifier('RouteRecordRaw'))],
      t.stringLiteral('vue-router')
    ),
    // 2 创建routes变量
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('routes'),
        t.arrayExpression(
          routes.map((r) =>
            t.objectExpression([
              t.objectProperty(t.identifier('path'), t.stringLiteral(r.path)),
              t.objectProperty(
                t.identifier('component'),
                t.arrowFunctionExpression(
                  [],
                  t.callExpression(t.import(), [t.stringLiteral(relative(routerDir, r.filePath))])
                )
              ),
            ])
          )
        )
      ),
    ]),
    t.exportNamedDeclaration(null, [t.exportSpecifier(t.identifier('routes'), t.identifier('routes'))]),
  ]);

  // 3 生成
  const { code } = generate(statement);

  return code;
}

export { parsingRouter };

export default compileRouter;
