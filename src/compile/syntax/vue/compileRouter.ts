import createToken from '@/compile/config/createToken';
import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Directory } from '@/types/directory';
import t from '@babel/types';
import generate from '@babel/generator';

function compileRouter(codeSchema: ICodeSchema): { tokens: Compile.Token[] } {
  const routerPath = 'router/routes.ts';

  const { directories = [], pages } = codeSchema;
  // directories
  const routes = pages.map((page) => {
    return getRouteByDirectories(directories, page.id);
  });

  const tokens = [createToken(routerPath, generateRouterToken(routes))] as Compile.Token[];
  return { tokens };
}

interface VueRoute {
  id: string;
  path: string;
  component: string;
  name?: string;
}

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

  // 解析称 vue route 的path
  const path = `/${dirPath.map((p) => p.key).join('/')}`;

  const component = `../pages${path}.vue`;

  return {
    id,
    name: dirPath[dirPath.length - 1].key,
    path,
    component,
  };
}

function generateRouterToken(routes: VueRoute[]) {
  debugger;
  // 模拟
  const statement = t.blockStatement([
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
                t.arrowFunctionExpression([], t.callExpression(t.import(), [t.stringLiteral(r.component)]))
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

export default compileRouter;
