import { Identifier } from './code-schema/Identifier';
import { DBWSchema } from './DBWSchema';

// 一个api接口
export interface ICS_Api {
  id: string;
  key: string;
  method: string; // 如：get、post、put、delete等
  route: {
    path?: string; // 路径包括路由参数,例：xxxx/:id/yyy/:type
    pathPrames?: Array<Identifier>; // 路径参数
  };
  request: {
    query?: Array<Identifier>; // 路由get参数声明
    headers?: Array<Identifier>; // 请求头参数声明
    body?: Array<DBWSchema.RdDefineProp>; // 提交数据参数声明
    bodyType?: null | 'form-data' | 'x-www-form-urlencoded' | 'json' | 'xml' | 'binary';
    cookies?: Array<Identifier>; // 提交数据cookies参数声明
  };
  response: {
    headers?: Array<Identifier>; // 返回参数声明
    body?: Array<DBWSchema.RdDefineProp>; // 返回参数声明
  };
}
