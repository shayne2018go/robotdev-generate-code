import { IQuantity_LiteralFunction } from './programming/quantity';
import { IProp } from './prop';

export interface IEvent extends IProp {
  value: IQuantity_LiteralFunction['id'];
}
