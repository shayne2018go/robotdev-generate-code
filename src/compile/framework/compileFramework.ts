import { ICodeSchema } from '@/types/ICodeSchema';
import { compileVite } from './vite';
export interface IToken {
  path: string;
  token: string;
}
function compileFramework(codeSchema: ICodeSchema) {
  return compileVite(codeSchema);
}

export default compileFramework;
