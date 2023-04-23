import { IDataType, IDataTypeEnum } from '../programming/common';
import { IQuantity, IQuantity_Literal } from '../programming/quantity';

export interface IDataTypeSchema_Properties_Item {
  id: string;
  name: string;
  key: string;
  types?: Array<IDataTypeSchema>;
  default?: IDataTypeSchema;
}

export interface IDataTypeSchema_Common {
  id: string;
  type: IDataType;
  name?: string;
  reactive?: boolean;
  default?: IQuantity_Literal;
}

export interface IDataTypeSchema_Ref extends IDataTypeSchema_Common {
  type: IDataTypeEnum['ref'];
  ref?: IDataTypeSchema;
}

export interface IDataTypeSchema_Null extends IDataTypeSchema_Common {
  type: IDataTypeEnum['null'];
}

export interface IDataTypeSchema_String extends IDataTypeSchema_Common {
  type: IDataTypeEnum['string'];
}

export interface IDataTypeSchema_Long extends IDataTypeSchema_Common {
  type: IDataTypeEnum['long'];
}

export interface IDataTypeSchema_Boolean extends IDataTypeSchema_Common {
  type: IDataTypeEnum['boolean'];
}

export interface IDataTypeSchema_Int extends IDataTypeSchema_Common {
  type: IDataTypeEnum['int'];
}

export interface IDataTypeSchema_Decimal extends IDataTypeSchema_Common {
  type: IDataTypeEnum['decimal'];
}

export interface IDataTypeSchema_Date extends IDataTypeSchema_Common {
  type: IDataTypeEnum['date'];
}

export interface IDataTypeSchema_Datetime extends IDataTypeSchema_Common {
  type: IDataTypeEnum['datetime'];
}

export interface IDataTypeSchema_Time extends IDataTypeSchema_Common {
  type: IDataTypeEnum['time'];
}

export interface IDataTypeSchema_Timestamp extends IDataTypeSchema_Common {
  type: IDataTypeEnum['timestamp'];
}

export interface IDataTypeSchema_Enum extends IDataTypeSchema_Common {
  type: IDataTypeEnum['enum'];
  range: Array<{
    dataType: IDataTypeSchema;
    value: IQuantity;
  }>;
}

export interface IDataTypeSchema_Enums extends IDataTypeSchema_Common {
  type: IDataTypeEnum['enums'];
  range: Array<{
    dataType: IDataTypeSchema;
    value: IQuantity;
  }>;
}

export interface IDataTypeSchema_Object extends IDataTypeSchema_Common {
  type: IDataTypeEnum['object'];
  properties?: Array<IDataTypeSchema_Properties_Item>;
}

export interface IDataTypeSchema_Array extends IDataTypeSchema_Common {
  type: IDataTypeEnum['array'];
  item?: IDataTypeSchema;
}

export interface IDataTypeSchema_Tuple extends IDataTypeSchema_Common {
  type: IDataTypeEnum['tuple'];
  item?: Array<IDataTypeSchema>;
}

export interface IDataTypeSchema_Function extends IDataTypeSchema_Common {
  type: IDataTypeEnum['function'];
  parameters?: Array<IDataTypeSchema_Properties_Item>;
  outTypes?: Array<IDataTypeSchema>;
}

type IDataTypeSchema =
  | IDataTypeSchema_Object
  | IDataTypeSchema_Array
  | IDataTypeSchema_Function
  | IDataTypeSchema_String
  | IDataTypeSchema_Long
  | IDataTypeSchema_Boolean
  | IDataTypeSchema_Int
  | IDataTypeSchema_Decimal
  | IDataTypeSchema_Tuple
  | IDataTypeSchema_Datetime
  | IDataTypeSchema_Date
  | IDataTypeSchema_Time
  | IDataTypeSchema_Timestamp
  | IDataTypeSchema_Enum
  | IDataTypeSchema_Enums
  | IDataTypeSchema_Ref;
