import { IEvent } from './event';
import { ICS_Function } from './function';
import { IDataTypeSchema_Object } from './dataType/dataTypeSchema';
import { IViewNode } from './view';

// 一个前端组件
export interface ICS_Component {
  id: string;
  name: string;
  props: IDataTypeSchema_Object['id'];
  emits: IDataTypeSchema_Object['id'];
  slots: Array<{
    name: string;
    props: IDataTypeSchema_Object['id'];
  }>;
  declareVariables: IDataTypeSchema_Object['id'];
  nodes: Array<IViewNode>;
  events: Array<IEvent>;
  functions: Array<ICS_Function>;
}
