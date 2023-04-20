import { IQuantity_Literal_Function } from './programming/quantity';
import { IProp } from './prop';

export interface IEvent extends IProp {
  value: IQuantity_Literal_Function['id'];
}
