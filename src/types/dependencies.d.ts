//  platform: 'npm' | 'composer' | 'maven';

import { ICS_Api } from './api';
import { ICS_Component } from './component';
import { ICS_Function } from './function';

// 一个包
export interface ICS_Dependencies {
  id: string;
  name: string; // 包名
  key: string; // antd html wxapi uni-app
  version: string; // 包的版本号
  components?: Array<ICS_Component>; // 前端组件
  functions?: Array<ICS_Function>;
  apis?: Array<ICS_Api>; // 后端接口信息
}

// packageName?: string; // 包安装名
// exportName?: string; // 导出时的名字
