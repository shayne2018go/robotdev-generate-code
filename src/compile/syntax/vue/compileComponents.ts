import { Compile } from '@/types/compile/token';
import { VueCompileOptions } from './compileVue';

export type RequiredPicke1<T, K extends keyof T> = {
  [P in K]-?: T[P];
};

type CompileComponentsOptions = RequiredPicke1<VueCompileOptions, 'routes' | 'functions'>;

function compileComponents(
  codeSchema: CodeSchema.Project,
  compileOptions: VueCompileOptions
): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  codeSchema.components.forEach((component) => {
    const token = compileComponent(component, compileOptions.components);
  });

  return { tokens };
}

function compileComponent(cmpt: CodeSchema.Component, components: VueTypes.Component[]): string {
  return '';
}

export default compileComponents;
