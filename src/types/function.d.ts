import { DataTypeSchemaObject } from './dataType/dataTypeSchema';
import { IViewNode } from './view';

// 一个前端组件
export interface ICS_Function {
  id: string;
  name: string;
  parameters: DataTypeSchemaObject['id'];
  outTypes: DataTypeSchemaObject['id'];
  slots: Array<{
    name: string;
    props: DataTypeSchemaObject['id'];
  }>;
  declareVariables: DataTypeSchemaObject['id'];
  nodes: IViewNode[];
  events: any[];
}
