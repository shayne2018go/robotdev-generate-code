import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Component } from '@/types/component';
import { VueCompileOptions } from './compileVue';
import { BUILT_IN_PACKAGES, COMPONENT_DIR } from './const/config';
import { VueTypes } from './types/vue';
import { elementData } from '@dreawer/robotdev-view-editor-mock-data';

export type RequiredPicke1<T, K extends keyof T> = {
  [P in K]-?: T[P];
};

type CompileComponentsOptions = RequiredPicke1<VueCompileOptions, 'routes' | 'functions'>;

function compileComponents(codeSchema: ICodeSchema, compileOptions: VueCompileOptions): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  codeSchema.components.forEach((component) => {
    const token = compileComponent(component, compileOptions.components);
  });

  return { tokens };
}

function compileComponent(cmpt: ICS_Component, components: VueTypes.Component[]): string {
  return '';
}

export default compileComponents;
