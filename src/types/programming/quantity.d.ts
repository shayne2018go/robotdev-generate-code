import {
  IDataTypeSchema,
  IDataTypeSchema_Array,
  IDataTypeSchema_Boolean,
  IDataTypeSchema_Date,
  IDataTypeSchema_Datetime,
  IDataTypeSchema_Decimal,
  IDataTypeSchema_Enum,
  IDataTypeSchema_Enums,
  IDataTypeSchema_Function,
  IDataTypeSchema_Int,
  IDataTypeSchema_Long,
  IDataTypeSchema_Object,
  IDataTypeSchema_Ref,
  IDataTypeSchema_String,
  IDataTypeSchema_Time,
  IDataTypeSchema_Timestamp,
  IDataTypeSchema_Tuple,
} from '../dataType/dataTypeSchema';
import { ICodeLine } from './codeLine';

type IQuantity =
  | IQuantity_Variable
  | IQuantity_Call
  | IQuantity_New
  | IQuantity_Literal
  | IQuantity_Class
  | IQuantity_Ternary
  | IQuantity_Binary;

// 运行
type IRun = IQuantity_Call | IQuantity_New;
type IRuns = Array<IRun['id']>;

interface IQuantity_Common {
  __Iquantity_: true;
  id: string;
  mode: 'variable' | 'call' | 'new' | 'literal' | 'ternary' | 'binary' | 'class';
  computed?: boolean;
}

interface IQuantity_Ref extends IQuantity_Common {
  name: string;
  path?: Array<IQuantity['id']>;
}

// 访问变量
interface IQuantity_Variable extends IQuantity_Ref {
  mode: 'variable';
}

// 调用函数
interface IQuantity_Call extends IQuantity_Ref {
  mode: 'call';
  args?: Array<IQuantity['id']>;
}

// new构造函数
interface IQuantity_New extends IQuantity_Ref {
  mode: 'new';
  args?: Array<IQuantity['id']>;
}

// 三元表达式
interface IQuantity_Ternary extends IQuantity_Common {
  mode: 'ternary';
  cond: IQuantity['id'];
  true: IQuantity['id'];
  false: IQuantity['id'];
}

// 二元表达式
interface IQuantity_Binary extends IQuantity_Common {
  mode: 'binary';
  logical: '||' | '??';
  datas: Array<IQuantity['id']>;
}

interface IQuantity_Class extends IQuantity_Ref {
  mode: 'class';
  constructor: IQuantity_Literal_Function['id'];
  attrs: IQuantity_Literal_Value_Object;
}

// 字面量
type IQuantity_Literal =
  | IQuantity_Literal_String
  | IQuantity_Literal_Long
  | IQuantity_Literal_Int
  | IQuantity_Literal_Decimal
  | IQuantity_Literal_Boolean
  | IQuantity_Literal_Array
  | IQuantity_Literal_Tuple
  | IQuantity_Literal_Object
  | IQuantity_Literal_DateTime
  | IQuantity_Literal_Date
  | IQuantity_Literal_Time
  | IQuantity_Literal_Timestamp
  | IQuantity_Literal_Enum
  | IQuantity_Literal_Enums
  | IQuantity_Literal_Function
  | IQuantity_Literal_Ref;

// 真实字面量的object
type LiteralObject = { [key: string]: IQuantity['id'] };
type LiteralArray = Array<IQuantity['id']>;
type Literal = string | number | boolean | LiteralArray | LiteralObject;

// IQuantity_Literal的dataType为object时，value对应的专属数据结构，不会出现在其他地方
type IQuantity_Literal_Value_Object = Array<{ key: string; value: Array<IQuantity['id']> }>;

interface IQuantity_Literal_Common extends IQuantity_Common {
  mode: 'literal';
}

interface IQuantity_Literal_String extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_String['id'] | IDataTypeSchema_String;
  value: string;
}

interface IQuantity_Literal_Long extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Long['id'] | IDataTypeSchema_Long;
  value: string;
}
interface IQuantity_Literal_Int extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Int['id'] | IDataTypeSchema_Int;
  value: number;
}
interface IQuantity_Literal_Decimal extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Decimal['id'] | IDataTypeSchema_Decimal;
  value: number;
}
interface IQuantity_Literal_Boolean extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Boolean['id'] | IDataTypeSchema_Boolean;
  value: boolean;
}

interface IQuantity_Literal_Array extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Array['id'] | IDataTypeSchema_Array;
  value: LiteralArray;
}
interface IQuantity_Literal_Tuple extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Tuple['id'] | IDataTypeSchema_Tuple;
  value: LiteralArray;
}

interface IQuantity_Literal_Object extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Object['id'] | IDataTypeSchema_Object;
  value: IQuantity_Literal_Value_Object;
}

interface IQuantity_Literal_Enum extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Enum['id'] | IDataTypeSchema_Enum;
  value: IQuantity['id'];
}
interface IQuantity_Literal_Enums extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Enums['id'] | IDataTypeSchema_Enums;
  value: string;
}
interface IQuantity_Literal_DateTime extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Datetime['id'] | IDataTypeSchema_Datetime;
  value: string;
}
interface IQuantity_Literal_Date extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Date['id'] | IDataTypeSchema_Date;
  value: string;
}
interface IQuantity_Literal_Time extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Time['id'] | IDataTypeSchema_Time;
  value: string;
}
interface IQuantity_Literal_Timestamp extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Timestamp['id'] | IDataTypeSchema_Timestamp;
  value: string;
}

interface IQuantity_Literal_Function extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Function['id'] | IDataTypeSchema_Function;
  value: Array<ICodeLine>;
}

interface IQuantity_Literal_Ref extends IQuantity_Literal_Common {
  dataType: IDataTypeSchema_Ref['id'] | IDataTypeSchema_Ref;
  value: IQuantity['id'];
}
