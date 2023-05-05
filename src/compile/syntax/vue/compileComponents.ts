import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Component } from '@/types/component';
import { VueCompileOptions } from './compileVue';
import { INode } from '@/types/view';
import { getNodesComponentDependencies } from './shared/helper';
import { COMPONENT_DIR } from './const/config';
import { VueTypes } from './types/vue';

export type RequiredPicke1<T, K extends keyof T> = {
  [P in K]-?: T[P];
};

type CompileComponentsOptions = RequiredPicke1<VueCompileOptions, 'routes' | 'functions'>;

function compileComponents(
  codeSchema: ICodeSchema,
  compileOptions: CompileComponentsOptions
): { tokens: Compile.Token[]; components: VueTypes.Component[] } {
  const tokens = [] as Compile.Token[];

  const components = [] as VueTypes.Component[];

  //  优先生成组件路径 ,方便后续引用
  codeSchema.components.forEach((component) => {
    components.push({
      id: component.id,
      tag: component.key,
      source: {
        filePath: `${COMPONENT_DIR}/${component.key}.vue`,
        exportName: 'default',
      },
      protocol: component,
    });
  });

  codeSchema.components.forEach((component) => {
    const token = compileComponent(component, components);
  });

  return { tokens, components };
}

function compileComponent(cmpt: ICS_Component, components: VueTypes.Component[]): string {
  const {} = parsingComponent(cmpt, components);
  return '';
}

interface ParsingComponentResult {
  nodeMap?: Map<string, INode>;
  componentMap?: Map<string, VueTypes.Component>;
  functionMap?: Map<string, VueTypes.Function>;
}

function parsingComponent(cmpt: ICS_Component, components: VueTypes.Component[]): ParsingComponentResult {
  const componentMap = getNodesComponentDependencies(cmpt.nodes, components);

  return { componentMap };
}

export default compileComponents;
