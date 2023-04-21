import { IDataTypeSchema, IDataTypeSchema_Properties_Item } from './dataType/dataTypeSchema';

// 一个api接口
export interface ICS_Api {
  id: string;
  key: string;
  method: string; // 如：get、post、put、delete等
  route: {
    path?: string; // 路径包括路由参数,例：xxxx/:id/yyy/:type
    pathPrames?: Array<IDataTypeSchema_Properties_Item>; // 路径参数
  };
  request: {
    query?: Array<IDataTypeSchema_Properties_Item>; // 路由get参数声明
    headers: Array<IDataTypeSchema_Properties_Item>; // 请求头参数声明
    body: IDataTypeSchema; // 提交数据参数声明
    bodyType?: null | 'form-data' | 'x-www-form-urlencoded' | 'json' | 'xml' | 'binary';
    cookies: Array<IDataTypeSchema_Properties_Item>; // 提交数据cookies参数声明
  };
  response: {
    headers: Array<IDataTypeSchema_Properties_Item>; // 返回参数声明
    body: IDataTypeSchema; // 返回参数声明
  };
}
