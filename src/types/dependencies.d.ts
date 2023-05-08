//  platform: 'npm' | 'composer' | 'maven';

import { ICS_ACTION } from './action';
import { ICS_Api } from './api';
import { ICS_Component } from './component';
import { ICS_Element } from './element';
import { ICS_Event } from './event';
import { ICS_Function } from './function';
import { ICS_Property } from './prop';
import { ICS_Slot } from './slot';

// 一个包
export interface ICS_Dependencies {
  id: string; // 来源id
  projectId: string; // 溯源id
  name: string; // 包名
  key?: string; // antd html wxapi uni-app
  version?: string; // 包的版本号
  components?: Array<ICS_Component>; // 前端组件
  elements?: Array<ICS_Element>;
  functions?: Array<ICS_Function>;
  actions?: Array<ICS_ACTION>;
  events?: Array<ICS_Event>;
  props?: Array<ICS_Property>;
  slots?: Array<ICS_Slot>;
  apis?: Array<ICS_Api>; // 后端接口信息
}
