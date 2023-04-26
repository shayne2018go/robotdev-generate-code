import { DBSchema } from '../DBSchema';
import { IDataTypeEnum } from '../programming/common';
import {
  IQuantity,
  IQuantity_Literal_Array,
  IQuantity_Literal_Boolean,
  IQuantity_Literal_Date,
  IQuantity_Literal_DateTime,
  IQuantity_Literal_Decimal,
  IQuantity_Literal_Enum,
  IQuantity_Literal_Enums,
  IQuantity_Literal_Function,
  IQuantity_Literal_Int,
  IQuantity_Literal_Long,
  IQuantity_Literal_Object,
  IQuantity_Literal_Ref,
  IQuantity_Literal_Time,
  IQuantity_Literal_Timestamp,
  IQuantity_Literal_Tuple,
} from '../programming/quantity';

export interface IDataTypeSchema_Properties_Item {
  id: string;
  name: string;
  key: string;
  desc?: string;
  extendPlatform?: boolean;
  types?: Array<DBSchema.RdDefineProp>;
  default?: DBSchema.RdActionArguments;
}

export interface IDataTypeSchema_Common {
  id: string;
  // type: IQuantityDataType;
  name?: string;
  reactive?: boolean;
}

export interface IDataTypeSchema_Ref extends IDataTypeSchema_Common {
  type: IDataTypeEnum['ref'];
  ref?: IDataTypeSchema;
  default?: IQuantity_Literal_Ref;
}

export interface IDataTypeSchema_Null extends IDataTypeSchema_Common {
  type: IDataTypeEnum['null'];
}

export interface IDataTypeSchema_String extends IDataTypeSchema_Common {
  type: IDataTypeEnum['string'];
  default?: string;
}

export interface IDataTypeSchema_Long extends IDataTypeSchema_Common {
  type: IDataTypeEnum['long'];
  default?: IQuantity_Literal_Long['value'];
}

export interface IDataTypeSchema_Boolean extends IDataTypeSchema_Common {
  type: IDataTypeEnum['boolean'];
  default?: IQuantity_Literal_Boolean['value'];
}

export interface IDataTypeSchema_Int extends IDataTypeSchema_Common {
  type: IDataTypeEnum['int'];
  default?: IQuantity_Literal_Int['value'];
}

export interface IDataTypeSchema_Decimal extends IDataTypeSchema_Common {
  type: IDataTypeEnum['decimal'];
  default?: IQuantity_Literal_Decimal['value'];
}

export interface IDataTypeSchema_Date extends IDataTypeSchema_Common {
  type: IDataTypeEnum['date'];
  default?: IQuantity_Literal_Date['value'];
}

export interface IDataTypeSchema_Datetime extends IDataTypeSchema_Common {
  type: IDataTypeEnum['datetime'];
  default?: IQuantity_Literal_DateTime['value'];
}

export interface IDataTypeSchema_Time extends IDataTypeSchema_Common {
  type: IDataTypeEnum['time'];
  default?: IQuantity_Literal_Time['value'];
}

export interface IDataTypeSchema_Timestamp extends IDataTypeSchema_Common {
  type: IDataTypeEnum['timestamp'];
  default?: IQuantity_Literal_Timestamp['value'];
}

export interface IDataTypeSchema_Enum extends IDataTypeSchema_Common {
  type: IDataTypeEnum['enum'];
  range: Array<{
    dataType: IDataTypeSchema;
    value: IQuantity;
  }>;
  default?: IQuantity_Literal_Enum['value'];
}

export interface IDataTypeSchema_Enums extends IDataTypeSchema_Common {
  type: IDataTypeEnum['enums'];
  range: Array<{
    dataType: IDataTypeSchema;
    value: IQuantity;
  }>;
  default?: IQuantity_Literal_Enums['value'];
}

export interface IDataTypeSchema_Object extends IDataTypeSchema_Common {
  type: IDataTypeEnum['object'];
  properties?: Array<IDataTypeSchema_Properties_Item>;
  default?: IQuantity_Literal_Object['value'];
}

export interface IDataTypeSchema_Array extends IDataTypeSchema_Common {
  type: IDataTypeEnum['array'];
  item?: IDataTypeSchema;
  default?: IQuantity_Literal_Array['value'];
}

export interface IDataTypeSchema_Tuple extends IDataTypeSchema_Common {
  type: IDataTypeEnum['tuple'];
  item?: Array<IDataTypeSchema>;
  default?: IQuantity_Literal_Tuple['value'];
}

export interface IDataTypeSchema_Function extends IDataTypeSchema_Common {
  type: IDataTypeEnum['function'];
  parameters?: Array<IDataTypeSchema_Properties_Item>;
  outTypes?: Array<IDataTypeSchema>;
  default?: IQuantity_Literal_Function['value'];
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
