import { IEvent } from './event';
import { ICS_Function } from './function';
import { IDataTypeSchema_Properties_Item } from './dataType/dataTypeSchema';
import { IViewNode } from './view';

export interface I_Component_Emit {
  id: string;
  name: string;
  key: string;
  parameters: Array<IDataTypeSchema_Properties_Item>;
}
export interface I_Component_Slot {
  id: string;
  name: string;
  key: string;
  properties?: Array<IDataTypeSchema_Properties_Item>;
}

export interface ICS_Component {
  id: string;
  name: string;
  key: string;
  props: Array<IDataTypeSchema_Properties_Item>;
  emits: Array<I_Component_Emit>;
  slots: Array<I_Component_Slot>;
  variables: Array<IDataTypeSchema_Properties_Item>;
  nodes: Array<IViewNode>;
  events: Array<IEvent>;
  functions: Array<ICS_Function>;
}
