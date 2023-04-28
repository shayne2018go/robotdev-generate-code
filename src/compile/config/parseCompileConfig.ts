import { ICodeSchema } from '@/types';
import { Tech } from '@/types/tech';

export interface CompileConfig {
  projectKey: string;
  syntax: Tech.SynTax;
}

function parseCompileConfig(codeSchema: ICodeSchema): CompileConfig {
  // 项目名称

  return {
    projectKey: codeSchema.key,
    syntax: 'vue3',
  };
}

export default parseCompileConfig;
