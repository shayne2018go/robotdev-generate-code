import { ICodeSchema } from '@/types';
import { Compile } from '@/types/compile/token';
import { ICS_Component } from '@/types/component';
import { VueCompileOptions } from './compileVue';

export interface VueComponent {
  id: string; // tagId
  tag: string; // tag 标签
  source: {
    filePath?: string; // 本地路径
    packageName?: string; // 包路径
    exportName: string; // 导出名 (不能为空 默认default )
    alias?: string; // 别名
  };
  protocol: ICS_Component; // 协议
}

export type RequiredPicke1<T, K extends keyof T> = {
  [P in K]-?: T[P];
};

type CompileComponentsOptions = RequiredPicke1<VueCompileOptions, 'routes' | 'functions'>;

function compileComponents(
  codeSchema: ICodeSchema,
  compileOptions: CompileComponentsOptions
): { tokens: Compile.Token[]; components: VueComponent[] } {
  const tokens = [] as Compile.Token[];

  const components = [] as VueComponent[];

  return { tokens, components };
}

export default compileComponents;
