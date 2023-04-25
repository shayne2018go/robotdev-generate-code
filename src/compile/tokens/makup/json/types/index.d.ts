import { JsonDataType } from './jsonDataType';

export type IJson_DataType = keyof typeof JsonDataType;

export type IJson_DataTypeEnum = typeof JsonDataType;

export interface IJson_Object {
  type: IJson_DataTypeEnum['object'];
  value: Array<IJson_Object_Item>;
}

export interface IJson_Object_Item {
  key: string;
  value: IJson;
}

export interface IJson_Array {
  type: IJson_DataTypeEnum['array'];
  value: Array<IJson>;
}

export interface IJson_String {
  type: IJson_DataTypeEnum['string'];
  value: string;
}

export interface IJson_Number {
  type: IJson_DataTypeEnum['number'];
  value: number;
}

export interface IJson_Boolean {
  type: IJson_DataTypeEnum['boolean'];
  value: boolean;
}

export interface IJson_Null {
  type: IJson_DataTypeEnum['null'];
}

export type IJson = IJson_Null | IJson_String | IJson_Number | IJson_Boolean | IJson_Object | IJson_Array;

/**
 * null string number boolean 为简单类型数据
 */
export type ISimpleData = IJson_Null | IJson_String | IJson_Number | IJson_Boolean;


/**
 * object array 为复杂类型数据
 */
export type IComplexData = IJson_Object | IJson_Array;