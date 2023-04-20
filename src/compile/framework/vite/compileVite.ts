import { ICodeSchema } from '@/types/ICodeSchema';
import ViteVueTs from './const/vite-vue-ts.json';

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

function compileVite(codeSchema: ICodeSchema) {
  const template: ViteTemplate = 'vue-ts';

  return ViteVueTs;
}

export default compileVite;
