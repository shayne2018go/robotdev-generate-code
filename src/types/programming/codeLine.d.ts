// import { IDataTypeSchema } from '../dataType/dataTypeSchema';
// import { IQuantity_Variable, IQuantity, IQuantity_Call, IQuantity_Class } from './quantity';

// export interface ICodeLineCommon {
//   __code_line__:
//     | 'declare'
//     | 'assignment'
//     | 'return'
//     | 'cond'
//     | 'loop'
//     | 'call'
//     | 'new'
//     | 'break'
//     | 'remote'
//     | 'continue'
//     | 'command';
//   id: string;
// }

// export interface ICodeLine_Declare extends ICodeLineCommon {
//   mode: 'global' | 'const' | 'variable';
//   key: string;
//   dataTypes?: IDataTypeSchema[];
//   value?: IQuantity;
// }

// export interface ICodeLine_Assignment extends ICodeLineCommon {
//   left: IQuantity_Variable;
//   right: IQuantity;
// }

// export interface ICodeLine_Return extends ICodeLineCommon {
//   value?: IQuantity;
// }

// export interface ICodeLine_Cond extends ICodeLineCommon {
//   ifs: Array<[IQuantity, Array<ICodeLine>]>;
//   else: Array<ICodeLine>;
// }

// export interface ICodeLine_Loop extends ICodeLineCommon {
//   mode: 'data' | 'times';
//   data: IQuantity;
//   callback: Array<ICodeLine>;
// }

// export interface ICodeLine_Call extends ICodeLineCommon {
//   target: IQuantity_Call;
// }

// export interface ICodeLine_New extends ICodeLineCommon {
//   data: IQuantity_Class;
// }

// type ICodeLine =
//   | ICodeLine_Declare
//   | ICodeLine_Assignment
//   | ICodeLine_Return
//   | ICodeLine_Cond
//   | ICodeLine_Loop
//   | ICodeLine_Call
//   | ICodeLine_New;
