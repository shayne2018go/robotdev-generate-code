import { DBSchema } from '../DBSchema';

export interface Identifier {
  id: string;
  name?: string;
  key: string;
  desc?: string;
  extendPlatform?: boolean;
  types: Array<IdentifierType>;
}

export interface IdentifierType extends DBSchema.RdDefinePropType {}

export interface IdentifierValue extends DBSchema.RdData {
  id?: string;
  modeId?: string;
  mode: string;
  type: 'data';
  args: {
    [parameterName: string]: IdentifierValueArgs;
  };
}

export type IdentifierValueArgs = DBSchema.RdDataArguments;
