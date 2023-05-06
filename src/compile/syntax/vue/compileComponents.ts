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

function compileComponents(
  codeSchema: ICodeSchema,
  compileOptions: CompileComponentsOptions
): { tokens: Compile.Token[]; components: VueTypes.Component[] } {
  const tokens = [] as Compile.Token[];

  const { components } = parsingComponents(codeSchema);

  codeSchema.components.forEach((component) => {
    const token = compileComponent(component, components);
  });

  return { tokens, components };
}

function compileComponent(cmpt: ICS_Component, components: VueTypes.Component[]): string {
  return '';
}

function parsingComponents(codeSchema: ICodeSchema) {
  const components = [] as VueTypes.Component[];

  // 1 拿到内置包的组件描述
  codeSchema.dependencies.forEach((dep) => {
    if (!dep.components?.length) {
      return;
    }
    if (BUILT_IN_PACKAGES.includes(dep.projectId)) {
      dep.components.forEach((cmpt) => {
        components.push({
          id: cmpt.id,
          tag: cmpt.key,
          protocol: cmpt,
        });
      });
    } else {
      // 在线组件
      dep.components.forEach((cmpt) => {
        components.push({
          id: cmpt.id,
          tag: cmpt.key,
          source: {
            filePath: `${COMPONENT_DIR}/${cmpt.key}.vue`,
            exportName: 'default',
          },
          protocol: cmpt,
        });
      });
    }
  });

  // 2 特殊组件描述
  elementData.sys.forEach((cmpt) => {
    // components.push({})
  });

  return { components };
}

export default compileComponents;
