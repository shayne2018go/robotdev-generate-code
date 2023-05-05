import { ICodeSchema } from '@/types';
import { ICS_Api } from '@/types/api';
import { Compile } from '@/types/compile/token';
import { ICS_Function } from '@/types/function';
import { actionData as systemAction } from '@dreawer/robotdev-view-editor-mock-data';

export interface VueFunction {
  id: string; // 函数id
  tag: string; // 函数名称
  source: {
    filePath?: string; // 本地路径
    packageName?: string; // 包路径
    exportName: string; // 导出名 (不能为空 默认default )
    alias?: string; // 别名
  };
  protocol: ICS_Api | ICS_Function; // 协议
}

function compileFunctions(codeSchema: ICodeSchema): { tokens: Compile.Token[]; functions: VueFunction[] } {
  const tokens = [] as Compile.Token[];

  const functions = parsingFunctions(codeSchema);

  return { tokens, functions };
}

function parsingFunctions(codeSchema: ICodeSchema): VueFunction[] {
  const functions = [] as VueFunction[];

  systemAction.actions.forEach((action) => {
    // debugger;
    // functions.push({
    //   id: action.id,
    //   tag: action.tag,
    //   source: {
    //     packageName: systemAction.packages
    //   }
    // });
  });

  return functions;
}

export { parsingFunctions };

export default compileFunctions;
