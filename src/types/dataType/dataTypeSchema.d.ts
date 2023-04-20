import { IQuantityDataType, IQuantityDataTypeEnum } from '../programming/common';
import { IQuantityLiteral } from '../programming/quantity';

interface DataTypeSchema_Properties {
  id: string;
  name: string;
  types?: Array<DataTypeSchema>;
  typesRef?: Array<{
    type: 'prop' | 'type';
    id: DataTypeSchema['id'] | DataTypeSchema_Properties['id'];
  }>;
  default?: DataTypeSchema['id'];
}

interface DataTypeSchemaCommon {
  id: string;
  type: IQuantityDataType;
  name?: string;
  reactive?: boolean;
  ref?: DataTypeSchema['id'];
  default?: IQuantityLiteral['id'];
}

interface DataTypeSchemaObject extends DataTypeSchemaCommon {
  type: IQuantityDataTypeEnum['object'];
  properties?: Array<DataTypeSchema_Properties>;
}

interface DataTypeSchemaArray extends DataTypeSchemaCommon {
  type: IQuantityDataTypeEnum['array'];
  item?: DataTypeSchema;
}

interface DataTypeSchemaFunction extends DataTypeSchemaCommon {
  type: IQuantityDataTypeEnum['function'];
  parameters?: {
    [key: string]: DataTypeSchema;
  };
  outTypes?: DataTypeSchema[];
}

interface DataTypeSchemaOther extends DataTypeSchemaCommon {
  type: Exclude<
    IQuantityDataType,
    IQuantityDataTypeEnum['array'] | IQuantityDataTypeEnum['object'] | IQuantityDataTypeEnum['function']
  >;
}

type DataTypeSchema = DataTypeSchemaObject | DataTypeSchemaArray | DataTypeSchemaFunction | DataTypeSchemaOther;
