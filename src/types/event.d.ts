import { IQuantityLiteralFunction } from './programming/quantity';
import { IProp } from './prop';

export interface IEvent extends IProp {
  value: IQuantityLiteralFunction;
}
