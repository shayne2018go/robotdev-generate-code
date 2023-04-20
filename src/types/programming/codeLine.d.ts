import { IDataTypeSchema } from '../dataType/dataTypeSchema';
import { IQuantity_Variable, IQuantity, IQuantity_Call, IQuantity_Class, IQuantity_Literal_Function } from './quantity';

export interface ICodeLineCommon {
  __code_line__: 'declare' | 'assignment' | 'return' | 'cond' | 'loop' | 'call' | 'new' | 'break' | 'continue';
  id: string;
}

export interface ICodeLine_Declare {
  mode: 'global' | 'const' | 'variable';
  name: string;
  dataTypes?: IDataTypeSchema[];
  value?: IQuantity['id'];
}

export interface ICodeLine_Assignment {
  left: IQuantity_Variable['id'];
  right: IQuantity['id'];
}

export interface ICodeLine_Return {
  value?: IQuantity['id'];
}

export interface ICodeLine_Cond {
  ifs: [IQuantity['id'], Array<ICodeLine>];
  else: Array<ICodeLine>;
}

export interface ICodeLine_Loop {
  mode: 'data' | 'times';
  data: IQuantity['id'];
  callback: Array<ICodeLine>;
}

export interface ICodeLine_Call {
  target: IQuantity_Call['id'];
}

export interface ICodeLine_New {
  data: IQuantity_Class['id'];
}

type ICodeLine = ICodeLine_Declare | ICodeLine_Assignment | ICodeLine_Cond | ICodeLine_Loop;
