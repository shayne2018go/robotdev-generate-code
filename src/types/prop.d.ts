import { IDataTypeSchema_Properties_Item } from './dataType/dataTypeSchema';
import { IQuantity } from './programming/quantity';

export interface IProp {
  id: string;
  propId: IDataTypeSchema_Properties_Item['id'];
  value: IQuantity['id'];
}
