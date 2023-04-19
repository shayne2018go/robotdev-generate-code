import {
  DataTypeSchema,
  DataTypeSchemaArray,
  DataTypeSchemaFunction,
  DataTypeSchemaObject,
} from '../dataType/dataTypeSchema';

interface IQuantityCommon {
  __Iquantity_: true;
  id: string;
  mode: 'variable' | 'call' | 'new' | 'literal' | 'ternary' | 'binary';
  computed?: boolean;
}

interface IQuantityRef extends IQuantityCommon {
  mode: 'variable' | 'call' | 'new';
  name: string;
  path?: (IQuantity | Literal)[];
}

// 访问变量
interface IQuantityVariable extends IQuantityRef {
  mode: 'variable';
}

// 调用函数
interface IQuantityCall extends IQuantityRef {
  mode: 'call';
  args?: (IQuantity | Literal)[];
}

// new构造函数
interface IQuantityNew extends IQuantityRef {
  mode: 'new';
  args?: (IQuantity | Literal)[];
}

// 三元表达式
interface IQuantityTernary extends IQuantityCommon {
  mode: 'ternary';
  cond: IQuantity;
  true: IQuantity;
  false: IQuantity;
}

// 二元表达式
interface IQuantityBinary extends IQuantityCommon {
  mode: 'binary';
  logical: '||' | '??';
  datas: IQuantity[];
}

// 真实字面量的object
type LiteralObject = { [key: string]: Literal | IQuantity };
type LiteralArray = (Literal | IQuantity)[];
type Literal = string | number | boolean | LiteralArray | LiteralObject;

type IQuantity =
  | IQuantityVariable
  | IQuantityCall
  | IQuantityNew
  | IQuantityLiteral
  | IQuantityTernary
  | IQuantityBinary;

// IQuantityLiteral的dataType为object时，value对应的专属数据结构，不会出现在其他地方
type IQuantityLiteral_Value_Object = { key: string; value: IQuantity | Literal }[];

interface _IQuantityLiteral extends IQuantityCommon {
  mode: 'literal';
  dataTypeId: DataTypeSchema['id'];
  value: Literal | IQuantityLiteral_Value_Object;
}
interface IQuantityLiteralArray extends _IQuantityLiteral {
  dataTypeId: DataTypeSchemaArray['id'];
  value: LiteralArray;
}

interface IQuantityLiteralObject extends _IQuantityLiteral {
  dataTypeId: DataTypeSchemaObject['id'];
  value: IQuantityLiteral_Value_Object;
}

interface IQuantityLiteralFunction extends _IQuantityLiteral {
  dataTypeId: DataTypeSchemaFunction['id'];
  value: Array<IRun>;
}

interface IQuantityLiteralOther extends _IQuantityLiteral {
  dataTypeId: DataTypeSchema['id'];
  value: Exclude<Literal, LiteralArray>;
}

// 字面量
type IQuantityLiteral = IQuantityLiteralArray | IQuantityLiteralObject | IQuantityLiteralOther;

// 运行
type IRun = IQuantityCall | IQuantityNew;
