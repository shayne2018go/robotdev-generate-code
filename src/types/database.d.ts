import { database } from '../const/database';
import { IDataTypeSchema_Properties_Item } from './dataType/dataTypeSchema';

type ICS_DatabaseType = keyof typeof database;

// 一个数据库表
export interface ICS_Databases_Table {
  id: string;
  name: string;
  fields: Array<IDataTypeSchema_Properties_Item>; // 多个字段配置，关联多个“属性定义”的id号
}

// 一个数据库
export interface ICS_Databases {
  id: string;
  name: string; // 数据库名
  tech: ICS_DatabaseType;
  version: string;
  host: string;
  password: string;
  tables: Array<ICS_Databases_Table>; // 多个表配置，关联多个“数据库表”的id号
}
