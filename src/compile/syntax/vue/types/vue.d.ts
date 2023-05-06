import { ICS_ACTION } from '@/types/action';
import { ICS_Api } from '@/types/api';
import { ICS_Component } from '@/types/component';
import { ICS_Function } from '@/types/function';

declare namespace VueTypes {
  /**
   * 组件
   */
  export interface Component {
    id: string; // tagId
    key: string; // tag 标签
    source?: {
      filePath?: string; // 本地路径
      packageName?: string; // 包路径
      exportName: string; // 导出名 (不能为空 默认default ) aaa
      alias?: string; // 别名
    };
    protocol: ICS_Component; // 协议
  }

  /**
   * 函数
   */
  export interface Function {
    id: string; // 函数id
    key: string; // 函数名称
    source: {
      filePath?: string; // 本地路径
      packageName?: string; // 包路径
      exportName: string; // 导出名 (不能为空 默认default )
      alias?: string; // 别名
    };
    protocol: ICS_Function; // 协议
  }

  /**
   * 行为
   */
  export interface Action {
    id: string; // 行为id
    key: string; // 行为名称
    source: {
      filePath?: string; // 本地路径
      packageName?: string; // 包路径
      exportName: string; // 导出名 (不能为空 默认default )
      alias?: string; // 别名
    };
    protocol: ICS_ACTION; // 协议
  }

  export interface Api {
    id: string; // 行为id
    key: string; // 行为名称
    source: {
      filePath?: string; // 本地路径
      packageName?: string; // 包路径
      exportName: string; // 导出名 (不能为空 默认default )
      alias?: string; // 别名
    };
    protocol: ICS_Api; // 协议
  }
}
