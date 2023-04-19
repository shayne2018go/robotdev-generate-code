import { IEvent } from './event';
import { ICS_Function } from './function';
import { DataTypeSchemaObject } from './dataType/dataTypeSchema';
import { IViewNode } from './view';

// 一个前端组件
export interface ICS_Component {
  id: string;
  name: string;
  props: DataTypeSchemaObject['id'];
  emits: DataTypeSchemaObject['id'];
  slots: Array<{
    name: string;
    props: DataTypeSchemaObject['id'];
  }>;
  declareVariables: DataTypeSchemaObject['id'];
  nodes: Array<IViewNode>;
  events: Array<IEvent>;
  functions: Array<ICS_Function>;
}
