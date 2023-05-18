declare namespace GlobalContext {
  // export interface Router {
  //   id: string; // 页面id
  //   name?: string; // name
  //   path: string; // path
  //   filePath: string; // 文件地址
  // }
  export type RequiredPick<T, K extends keyof T> = Required<Pick<T, Extract<keyof T, K>>> & Omit<T, K>;
  export type PartialPick<T, K extends keyof T> = Partial<Pick<T, Extract<keyof T, K>>> & Omit<T, K>;

  /**
   * 页面
   */
  export interface Page {
    id: string;
    key: string;
    routerName?: string; // vur router 中的name
    routerPath: string; //  vur router 中的path
    source: RequiredPick<Source, 'filePath'>;
    protocol: CodeSchema.Page; // 协议
  }

  /**
   * 组件
   */
  export interface Component {
    id: string; // tagId
    key: string; // tag 标签
    source?: Source;
    protocol: CodeSchema.Component; // 协议
  }

  /**
   * 函数
   */
  export interface Function {
    id: string; // 函数id
    key: string; // 函数名称
    source?: Source;
    protocol: CodeSchema.Function_Protocol; // 协议
  }

  /**
   * 行为
   */
  export interface Action {
    id: string; // 行为id
    key: string; // 行为名称
    source?: Source;
    protocol: CodeSchema.Action_Protocol; // 协议
  }

  export interface Api {
    id: string; // 行为id
    key: string; // 行为名称
    source: Source;
    protocol: CodeSchema.Api_Protocol; // 协议
  }

  export interface Event {
    id: string; // 行为id
    key: string; // 行为名称
    source?: Source;
    protocol: CodeSchema.Event_Protocol; // 协议
  }

  export interface Slot {
    id: string; // 插槽id
    key: string; // 插槽名称
    source?: Source;
    protocol: CodeSchema.Slot_Protocol; // 协议
  }

  export interface Property {
    id: string; // 属性id
    key: string; // 属性名称
    protocol: CodeSchema.Property_Protocol; // 协议
  }
}

declare namespace GlobalContext {
  export interface Source {
    filePath?: string;
    packageName?: string; // 包名
    exportNamespace?: string; // import * as {xxx} from 'xxxx'
    exportName?: string; // import { xxx: yyy } from 'aaaa
    alias?: string; // 别名
  }
}
