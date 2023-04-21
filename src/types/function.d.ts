import { IDataTypeSchema_Properties_Item } from './dataType/dataTypeSchema';
import { IViewNode } from './view';

// 一个前端组件
export interface ICS_Function {
  id: string;
  name: string;
  parameters: Array<IDataTypeSchema_Properties_Item>;
  outTypes: Array<IDataTypeSchema_Properties_Item>;
  slots: Array<{
    name: string;
    props: Array<IDataTypeSchema_Properties_Item>;
  }>;
  declareVariables: Array<IDataTypeSchema_Properties_Item>;
  nodes: IViewNode[];
  events: any[];
}
