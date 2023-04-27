import { ICodeSchema } from '@/types/ICodeSchema';
import { compileVite } from './vite';
import { CompileConfig } from '../config/parseCompileConfig';
import { Compile } from '@/types/compile/token';

function compileFramework(codeSchema: ICodeSchema, compileConfig: CompileConfig): Compile.Token[] {
  const { tokens } = compileVite(codeSchema, compileConfig);
  return tokens;
}

export default compileFramework;
