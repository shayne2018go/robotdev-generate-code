import { IDataTypeSchema_Properties } from './dataType/dataTypeSchema';
import { IQuantity } from './programming/quantity';

export interface IProp {
  id: string;
  propId: IDataTypeSchema_Properties['id'];
  value: IQuantity['id'];
}
