import { ICodeSchema } from '@/types';

export interface CompileConfig {
  projectKey: string;
}

function parseCompileConfig(codeSchema: ICodeSchema) {
  // 项目名称

  return {
    projectKey: codeSchema.key,
  };
}

export default parseCompileConfig;
