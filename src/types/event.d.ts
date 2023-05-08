import { Identifier } from './code-schema/Identifier';
import { IQuantity_Literal_Function } from './programming/quantity';
import { IProp } from './prop';

export interface IEvent extends IProp {
  value: IQuantity_Literal_Function['id'];
}

export interface ICS_Event {
  id: string;
  name: string;
  key: string;
  parameters: Array<Identifier>;
}
