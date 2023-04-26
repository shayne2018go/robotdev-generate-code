import { Identifier } from './code-schema/Identifier';
import { IQuantity } from './programming/quantity';

export interface IProp {
  id: string;
  propId: Identifier['id'];
  value: IQuantity['id'];
}
