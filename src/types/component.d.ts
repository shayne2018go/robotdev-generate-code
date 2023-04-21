import { IEvent } from './event';
import { ICS_Function } from './function';
import { IDataTypeSchema_Properties_Item } from './dataType/dataTypeSchema';
import { IViewNode } from './view';

// 一个前端组件
export interface ICS_Component {
  id: string;
  name: string;
  props: Array<IDataTypeSchema_Properties_Item>;
  emits: Array<IDataTypeSchema_Properties_Item>;
  slots: Array<{
    name: string;
    props: Array<IDataTypeSchema_Properties_Item>;
  }>;
  declareVariables: Array<IDataTypeSchema_Properties_Item>;
  nodes: Array<IViewNode>;
  events: Array<IEvent>;
  functions: Array<ICS_Function>;
}
