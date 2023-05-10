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
    protocol: CodeSchema.Component; // 协议
  }

  /**
   * 函数
   */
  export interface Function {
    id: string; // 函数id
    key: string; // 函数名称
    source?: {
      filePath?: string; // 本地路径
      packageName?: string; // 包路径
      exportName: string; // 导出名 (不能为空 默认default )
      alias?: string; // 别名
    };
    protocol: CodeSchema.Function_Protocol; // 协议
  }

  /**
   * 行为
   */
  export interface Action {
    id: string; // 行为id
    key: string; // 行为名称
    source?: {
      filePath?: string; // 本地路径
      packageName?: string; // 包路径
      exportName: string; // 导出名 (不能为空 默认default )
      alias?: string; // 别名
    };
    protocol: CodeSchema.Action_Protocol; // 协议
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
    protocol: CodeSchema.Api_Protocol; // 协议
  }

  export interface Event {
    id: string; // 行为id
    key: string; // 行为名称
    source?: {
      filePath?: string; // 本地路径
      packageName?: string; // 包路径
      exportName: string; // 导出名 (不能为空 默认default )
      alias?: string; // 别名
    };
    protocol: CodeSchema.Event_Protocol; // 协议
  }

  export interface Property {
    id: string; // 属性id
    key: string; // 属性名称
    protocol: CodeSchema.Property_Protocol; // 协议
  }
}
