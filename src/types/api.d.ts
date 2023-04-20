import { IDataTypeSchema, IDataTypeSchema_Object, IDataTypeSchema_Properties } from './dataType/dataTypeSchema';

// 一个api接口
export interface ICS_Api {
  id: string;
  name: string;
  method: string; // 如：get、post、put、delete等
  route: {
    path?: string; // 路径包括路由参数,例：xxxx/:id/yyy/:type
    pathPrames?: IDataTypeSchema_Object['id']; // 路径参数
  };
  request: {
    query?: IDataTypeSchema_Object['id']; // 路由get参数声明
    headers: IDataTypeSchema_Object['id']; // 请求头参数声明
    body: IDataTypeSchema; // 提交数据参数声明
    bodyType?: null | 'form-data' | 'x-www-form-urlencoded' | 'json' | 'xml' | 'binary';
    cookies: IDataTypeSchema_Object['id']; // 提交数据cookies参数声明
  };
  response: {
    headers: IDataTypeSchema_Object['id']; // 返回参数声明
    body: IDataTypeSchema; // 返回参数声明
  };
}
