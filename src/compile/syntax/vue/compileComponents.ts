import createToken from '@/compile/config/createToken';
import { Compile } from '@/types/compile/token';
import { CompileCurrentCtx, ParsingCurrentResult, parsingCurrent } from './compilePages';
import { VueGlobalCtx } from './compileVue';
import { COMPONENT_DIR } from './const/config';
import { compileScript, compileStyle, compileTemplate } from './sfc';

function compileComponents(codeSchema: CodeSchema.Project, vueGlobalCtx: VueGlobalCtx): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  const { directories = [] } = codeSchema;

  codeSchema.components.forEach((component) => {
    // 1 编译页面代码字符串（token）
    const { token } = compileComponent(component, vueGlobalCtx);
    // 2 编译页面地址 ps： 根据directories
    const filePath = getComponentPath(component, vueGlobalCtx);

    tokens.push(createToken(filePath, token));
  });
  return { tokens };
}

function compileComponent(component: CodeSchema.Component, ctx: VueGlobalCtx) {
  const parsingComponentResult = parsingCurrent(component, ctx);

  const currentPageCompileOptions: CompileCurrentCtx = {
    global: ctx,
    scope: {
      current: parsingComponentResult,
    },
  };

  const { token: templateToken } = compileTemplate(component, currentPageCompileOptions);
  const { token: scriptToken } = compileScript(component, currentPageCompileOptions);
  const { token: styleToken } = compileStyle(component, currentPageCompileOptions);

  const token = templateToken + scriptToken + styleToken;

  return { token };
}

function getComponentPath(page: CodeSchema.Component, vueGlobalCtx: VueGlobalCtx): string {
  // const dirPath: CodeSchema.Directory[] = [];

  // let curId: string | null = page.id;

  // while (curId) {
  //   const current = directories.find((d) => d.id === curId);
  //   if (current) {
  //     dirPath.unshift(current);
  //     curId = current.parentId;
  //   } else {
  //     break;
  //   }
  // }

  // // vue-router 的path
  // const path = dirPath.length ? `/${dirPath.map((p) => p.key).join('/')}` : page.key;

  // 文件的绝对路径
  const filePath =
    vueGlobalCtx.componentsStore.getCmpt(page.id)?.source?.filePath || `${COMPONENT_DIR}/${page.key}.vue`;

  return filePath;
}
export default compileComponents;
