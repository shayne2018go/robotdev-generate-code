import { dataTypeKey } from '../const/dataType';
import { Expression } from './expression';
import { ExpressionType } from './statementType';

export namespace DataType {
  export type TypeKeyEnum = keyof typeof dataTypeKey;
  export type TypeKey = typeof dataTypeKey;

  // export interface Schema_Ref {
  //   type: TypeKey['ref'];
  //   ref?: Unknown;
  // }

  export interface Schema_Null {
    type: TypeKey['null'];
  }

  export interface Schema_String {
    type: TypeKey['string'];
  }

  export interface Schema_Long {
    type: TypeKey['long'];
  }

  export interface Schema_Boolean {
    type: TypeKey['boolean'];
  }

  export interface Schema_Int {
    type: TypeKey['int'];
  }

  export interface Schema_Decimal {
    type: TypeKey['decimal'];
  }

  export interface Schema_Date {
    type: TypeKey['date'];
  }

  export interface Schema_Datetime {
    type: TypeKey['datetime'];
  }

  export interface Schema_Time {
    type: TypeKey['time'];
  }

  export interface Schema_Timestamp {
    type: TypeKey['timestamp'];
  }

  export interface Schema_Enum {
    type: TypeKey['enum'];
    range: Array<{
      TypeKey: Unknown;
      value: Expression.Unknown;
    }>;
  }

  // export interface Schema_Enums {
  //   type: TypeKey['enums'];
  //   range: Array<{
  //     TypeKey: Unknown;
  //     value: Expression.Unknown;
  //   }>;
  // }

  interface Schema_Properties_Item {
    key: string;
    desc?: string;
    types: Array<Unknown>;
  }

  export interface Schema_Object {
    type: TypeKey['object'];
    properties?: Array<Schema_Properties_Item>;
  }

  export interface Schema_Array {
    type: TypeKey['array'];
    item?: Unknown;
  }

  export interface Schema_Tuple {
    type: TypeKey['tuple'];
    item?: Array<Unknown>;
  }

  export interface Schema_Function {
    type: TypeKey['function'];
    parameters?: Array<Schema_Properties_Item>;
    outTypes?: Array<Unknown>;
  }

  export type Unknown_Common =
    | Schema_Object
    | Schema_Array
    | Schema_Function
    | Schema_String
    | Schema_Long
    | Schema_Boolean
    | Schema_Int
    | Schema_Decimal
    | Schema_Tuple
    | Schema_Datetime
    | Schema_Date
    | Schema_Time
    | Schema_Timestamp
    | Schema_Enum;
  // | Schema_Enums
  // | Schema_Ref;

  export type Unknown = Expression.Common & {
    _expression_: ExpressionType['dataType'];
  } & Unknown_Common;
}
