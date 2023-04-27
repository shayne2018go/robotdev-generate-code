import { ICodeSchema } from '@/types/ICodeSchema';
import { compileVite } from './vite';
import { CompileConfig } from '../config/parseCompileConfig';

function compileFramework(codeSchema: ICodeSchema, compileConfig: CompileConfig) {
  return compileVite(codeSchema, compileConfig);
}

export default compileFramework;
