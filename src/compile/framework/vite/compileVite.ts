import { CompileConfig } from '@/compile/config/parseCompileConfig';
import compileViteTemplate from './compileViteTemplate';
import compileVitePlugins from './compileVitePlugins';

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

function compileVite(codeSchema: CodeSchema.Project, compileConfig: CompileConfig) {
  const template: ViteTemplate = 'vue-ts';
  const plugins: CodeSchema.TechnologyStack.Plugin[] = [
    {
      name: 'less',
      dependencies: [
        {
          name: 'less',
          version: '4.1.3',
        },
      ],
      configs: [
        {
          path: 'vite.config.ts',
          file: [{ type: 'exportExpression' }, { type: 'callExpression', name: 'defineConfig' }],
          value: {
            'css.preprocessorOptions.less.javascriptEnabled': true,
          },
        },
        {
          path: 'postcss.config.js',
          value: {
            'plugins.preprocessorOptions.less.javascriptEnabled': true,
          },
        },
      ],
    },
  ];

  const { tokens: templateTokens } = compileViteTemplate(template, compileConfig);

  const viteTokens = compileVitePlugins(templateTokens, plugins);

  return { tokens: viteTokens };
}

export default compileVite;
