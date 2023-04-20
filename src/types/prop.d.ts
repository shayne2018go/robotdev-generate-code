import { DataTypeSchema_Properties } from './dataType/dataTypeSchema';
import { IQuantity } from './programming/quantity';

export interface IProp {
  id: string;
  propId: DataTypeSchema_Properties['id'];
  value: IQuantity['id'];
}
