import { ICS_Function } from './function';
import { DBSchema } from './DBSchema';
import { Identifier } from './code-schema/Identifier';
import { INode } from './view';

export interface I_Component_Variable extends Identifier {}

export interface I_Component_Props extends Identifier {}

export interface I_Component_Emit {
  id: string;
  name: string;
  key: string;
  desc?: string;
  extendPlatform?: boolean;
  platforms?: string[];
  parameters?: Array<Identifier>;
}

export interface I_Component_Slot {
  id: string;
  name: string;
  key: string;
  desc?: string;
  extendPlatform?: boolean;
  platforms?: string[];
  properties?: Array<Identifier>;
}

export interface I_Component_Classes {}

export interface I_component_LifeCycle {
  eventId: string;
  actions: DBSchema.RdAction[];
}

export interface ICS_Component {
  id: string;
  name: string;
  key: string;
  props: Array<I_Component_Props>;
  emits: Array<I_Component_Emit>;
  slots: Array<I_Component_Slot>;
  variables: Array<I_Component_Variable>;
  nodes: Array<INode>;

  lifeCycle: Array<I_component_LifeCycle>;
  functions: Array<ICS_Function>;
  classes?: Array<I_Component_Classes>;
}
