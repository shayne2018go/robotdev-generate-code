//  platform: 'npm' | 'composer' | 'maven';

import { ICodeSchema, ICodeSchemaResource } from './ICodeSchema';

// 一个包
export interface ICS_Dependencies {
  id: string;
  name: string; // 包名
  packageName?: string; // 包安装名
  exportName?: string; // 导出时的名字
  version: string; // 包的版本号
  data: ICodeSchemaResource['id'];
}
