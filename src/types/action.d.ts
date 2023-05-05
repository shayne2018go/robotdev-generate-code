import { Identifier, IdentifierType } from './code-schema/Identifier';

export interface ICS_ACTION {
  id: string;
  name: string;
  key: string;
  parameters: Array<Identifier>;
  outTypes: Array<IdentifierType>;
}
