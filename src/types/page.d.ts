import { IEvent } from './event';
import { ICS_Function } from './function';
import { IDataTypeSchema, IDataTypeSchema_Properties_Item } from './dataType/dataTypeSchema';
import { IQuantity } from './programming/quantity';
import { IViewNode } from './view';

// 一个页面
export interface ICS_Page {
  id: string;
  name: string; // 页面标识名
  mate: {
    title: IQuantity; // 页面标题（可动态拼接，因此用“量”表示）
    describe: IQuantity; // 页面描述（可动态拼接，因此用“量”表示）
    keyword: IQuantity; // 页面关键词（可动态拼接，因此用“量”表示）
  };
  route?: {
    path?: string; // 路径包括路由参数,例：xxxx/:id/yyy/:type
    params?: Array<IDataTypeSchema_Properties_Item>; // 路径参数
    query?: Array<IDataTypeSchema_Properties_Item>; // 路由get参数声明
  };
  variables?: Array<IDataTypeSchema_Properties_Item>;
  nodes: Array<IViewNode>;
  events: Array<IEvent>;
  functions: Array<ICS_Function>;
  // types?: Array<IDataTypeSchema>;
}
