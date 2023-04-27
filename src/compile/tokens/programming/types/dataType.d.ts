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

  export interface Schema_Null_Common {
    type: TypeKey['null'];
  }

  export interface Schema_Void_Common {
    type: TypeKey['void'];
  }

  export interface Schema_String_Common {
    type: TypeKey['string'];
  }

  export interface Schema_Long_Common {
    type: TypeKey['long'];
  }

  export interface Schema_Boolean_Common {
    type: TypeKey['boolean'];
  }

  export interface Schema_Int_Common {
    type: TypeKey['int'];
  }

  export interface Schema_Decimal_Common {
    type: TypeKey['decimal'];
  }

  export interface Schema_Date_Common {
    type: TypeKey['date'];
  }

  export interface Schema_Datetime_Common {
    type: TypeKey['datetime'];
  }

  export interface Schema_Time_Common {
    type: TypeKey['time'];
  }

  export interface Schema_Timestamp_Common {
    type: TypeKey['timestamp'];
  }

  // export interface Schema_Enum_Common {
  //   type: TypeKey['enum'];
  //   range: Array<{
  //     TypeKey: Unknown;
  //     value: Expression.Unknown;
  //   }>;
  // }

  // export interface Schema_Enums {
  //   type: TypeKey['enums'];
  //   range: Array<{
  //     TypeKey: Unknown;
  //     value: Expression.Unknown;
  //   }>;
  // }

  interface Schema_Properties_Item {
    key: Expression.Identifier;
    types: Array<Unknown>;
  }

  export interface Schema_Object_Common {
    type: TypeKey['object'];
    record?: {
      key: Array<Unknown>;
      value: Array<Unknown>;
    };
    properties?: Array<Schema_Properties_Item>;
  }

  export interface Schema_Array_Common {
    type: TypeKey['array'];
    items?: Array<Unknown>;
  }

  export interface Schema_Tuple_Common {
    type: TypeKey['tuple'];
    items?: Array<Unknown>;
  }

  export interface Schema_Function_Common {
    type: TypeKey['function'];
    parameters?: Array<Schema_Properties_Item>;
    outTypes?: Array<Unknown>;
  }

  export type Unknown_Common =
    | Schema_Object_Common
    | Schema_Array_Common
    | Schema_Function_Common
    | Schema_String_Common
    | Schema_Long_Common
    | Schema_Boolean_Common
    | Schema_Int_Common
    | Schema_Decimal_Common
    | Schema_Tuple_Common
    | Schema_Datetime_Common
    | Schema_Date_Common
    | Schema_Time_Common
    | Schema_Timestamp_Common;
  // | Schema_Enum_Common;

  interface DataType_Common extends Expression.Common {
    _expression_: ExpressionType['dataType'];
  }

  export type Schema_Object = DataType_Common & Schema_Object_Common;
  export type Schema_Array = DataType_Common &
    Schema_Array_Common & {
      items: Array<Unknown>;
    };
  export type Schema_Function = DataType_Common & Schema_Function_Common;
  export type Schema_String = DataType_Common & Schema_String_Common;
  export type Schema_Long = DataType_Common & Schema_Long_Common;
  export type Schema_Boolean = DataType_Common & Schema_Boolean_Common;
  export type Schema_Int = DataType_Common & Schema_Int_Common;
  export type Schema_Decimal = DataType_Common & Schema_Decimal_Common;
  export type Schema_Tuple = DataType_Common &
    Schema_Tuple_Common & {
      items: Array<Unknown>;
    };
  export type Schema_Datetime = DataType_Common & Schema_Datetime_Common;
  export type Schema_Date = DataType_Common & Schema_Date_Common;
  export type Schema_Time = DataType_Common & Schema_Time_Common;
  export type Schema_Timestamp = DataType_Common & Schema_Timestamp_Common;
  // export type Schema_Enum = DataType_Common & Schema_Enum_Common;
  export type Schema_Null = DataType_Common & Schema_Null_Common;
  export type Schema_Void = DataType_Common & Schema_Void_Common;

  export type Unknown =
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
    // | Schema_Enum
    | Schema_Null
    | Schema_Void;
}
