import { IDataTypeSchema_Properties_Item } from './dataType/dataTypeSchema';
import { IViewNode } from './view';

// 一个前端组件
export interface ICS_Function {
  id: string;
  name: string;
  key: string;
  parameters: Array<IDataTypeSchema_Properties_Item>;
  outTypes: Array<IDataTypeSchema_Properties_Item>;
}
