import { DBWSchema } from '../DBWSchema';

export interface Identifier extends DBWSchema.RdDefineProp {}

export interface IdentifierType extends DBWSchema.RdDefinePropType {}

export interface IdentifierValue extends DBWSchema.RdData {
  id?: string;
  modeId?: string;
  mode: string;
  type: 'data';
  args: {
    [parameterName: string]: IdentifierValueArgs;
  };
}

export type IdentifierValueArgs = DBWSchema.RdDataArguments;
