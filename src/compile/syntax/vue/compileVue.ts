import { ICodeSchema } from '@/types/ICodeSchema';
import { compileTemplate, compileScript, compileStyle } from './sfc';
import compileRouter from './compileRouter';
import compilePages from './compilePages';

function compileVue(codeSchema: ICodeSchema) {
  const { tokens: routerTokens } = compileRouter(codeSchema);
  const { tokens: pageTokens } = compilePages(codeSchema);

  // const template = compileTemplate(codeSchema);
  // const script = compileScript(codeSchema);
  // const style = compileStyle(codeSchema);
  const tokens = routerTokens.concat(pageTokens);
  return { tokens };
}

export default compileVue;
