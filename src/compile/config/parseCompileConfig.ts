export interface CompileConfig {
  projectKey: string;
  syntax: CodeSchema.TechnologyStack.SynTax;
}

function parseCompileConfig(codeSchema: CodeSchema.Project): CompileConfig {
  // 项目名称

  return {
    projectKey: codeSchema.key,
    syntax: 'vue3',
  };
}

export default parseCompileConfig;
