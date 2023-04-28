import { ICodeSchema } from '@/types/ICodeSchema';
import { compileTemplate, compileScript, compileStyle } from './sfc';
import compileRouter from './compileRouter';

function compileVue(codeSchema: ICodeSchema) {
  const { tokens } = compileRouter(codeSchema);

  // const template = compileTemplate(codeSchema);
  // const script = compileScript(codeSchema);
  // const style = compileStyle(codeSchema);
  return tokens.concat(tokens);
}

export default compileVue;
