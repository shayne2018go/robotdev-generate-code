import { IDataTypeSchema_Object } from './dataType/dataTypeSchema';
import { IViewNode } from './view';

// 一个前端组件
export interface ICS_Function {
  id: string;
  name: string;
  parameters: IDataTypeSchema_Object['id'];
  outTypes: IDataTypeSchema_Object['id'];
  slots: Array<{
    name: string;
    props: IDataTypeSchema_Object['id'];
  }>;
  declareVariables: IDataTypeSchema_Object['id'];
  nodes: IViewNode[];
  events: any[];
}
