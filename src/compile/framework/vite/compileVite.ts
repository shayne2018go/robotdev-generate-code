import { CompileConfig } from '@/compile/config/parseCompileConfig';
import { ICodeSchema } from '@/types/ICodeSchema';
import compileViteTemplate from './compileViteTemplate';

export type ViteTemplate =
  | 'vue'
  | 'vue-ts'
  | 'vanilla'
  | 'vanilla-ts'
  | 'react'
  | 'react-ts'
  | 'preact'
  | 'preact-ts'
  | 'lit'
  | 'lit-ts'
  | 'svelte'
  | 'svelte-ts';

export type IViteCompilerOptions = {
  template: ViteTemplate;
};

function compileVite(codeSchema: ICodeSchema, compileConfig: CompileConfig) {
  const template: ViteTemplate = 'vue-ts';

  const { projectKey } = compileConfig;

  const { tokens: templateTokens } = compileViteTemplate(template);

  const viteTokens = templateTokens.map((token) => {
    return {
      path: `${projectKey}/${token.path}`,
      token: token.token,
    };
  });

  return { tokens: viteTokens };
}

export default compileVite;
