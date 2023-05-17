declare namespace CodeSchema {
  export interface Project {
    id: string;
    tech?: TechnologyStack;
    key: string;
    meta: {
      title: string; // 应用标题（目前仅前端用）
      describe: string; // 应用描述（目前仅前端用）
      keyword: string; // 应用关键词（目前仅前端用）
    };
    dependencies: Array<Dependency>; // 依赖包（前后端通用）
    pages: Array<Page>; // 页面
    components: Array<Component>; // 前端组件
    functions: Array<Function_Protocol>;
    apis: Array<Api_Protocol>; // 后端接口信息
    databases?: Array<Database>; // 数据库信息
    directories?: Array<Directory>;
  }
}

// tech
declare namespace CodeSchema {
  // 技术栈
  export namespace TechnologyStack {
    export type SynTax = 'vue3' | 'react' | 'php' | 'express' | 'fastify';

    export interface Framework {
      name?: 'vite' | 'webpack' | 'larvel' | 'thinkphp' | 'nuxt' | 'nest' | 'express' | 'fastify';
      plugins: Plugin[];
    }
  }

  export namespace TechnologyStack {
    export interface Plugin {
      name: string;
      dependencies: PluginDependency[];
      configs?: Record<string, any>; // 插件的相关配置
    }

    export interface PluginDependency {
      name: string;
      version: string;
      configs?: Record<string, any>; // 依赖的相关配置
    }

    export interface PluginConfig {
      path: string;
    }
  }

  export interface TechnologyStack {
    syntax?: TechnologyStack.SynTax;
    framework?: TechnologyStack.Framework;
  }
}

declare namespace CodeSchema {
  // 依赖包
  export interface Dependency {
    id: string; // 来源id
    projectId: string; // 溯源id
    name: string; // 包名
    key?: string; // antd html wxapi uni-app
    version?: string; // 包的版本号
    subType?: string; //包类型
    components?: Array<Component>; // 前端组件
    elements?: Array<Element_Protocol>;
    functions?: Array<Function_Protocol>;
    actions?: Array<Action_Protocol>;
    events?: Array<Event_Protocol>;
    props?: Array<Property_Protocol>;
    slots?: Array<Slot_Protocol>;
    apis?: Array<Api_Protocol>; // 后端接口信息
  }

  // page
  export interface Page {
    id: string;
    // key: string; // 页面标识名 不需要（在directory中取, 这里可视为一个页面的描述，类似一个组件的描述）
    mate: {
      title: DataValue; // 页面标题（可动态拼接，因此用“量”表示）
      describe?: DataValue; // 页面描述（可动态拼接，因此用“量”表示）
      keyword?: DataValue; // 页面关键词（可动态拼接，因此用“量”表示）
    };
    route?: {
      path?: string; // 路径包括路由参数,例：xxxx/:id/yyy/:type
      params?: Array<Property_Protocol>; // 路径参数
      query?: Array<Property_Protocol>; // 路由get参数声明
    };
    variables?: Array<Property_Protocol>;
    nodes: Array<ComponentNode>;
    lifeCycle: Array<ComponentLifeCycle>; // 生命周期
    functions: Array<Function_Protocol>; // 函数
  }
}

// component
declare namespace CodeSchema {
  export interface Component {
    id: string;
    name: string;
    key: string;
    props: Array<ComponentProp>;
    emits: Array<ComponentEmit>;
    slots: Array<ComponentSlot>;
    variables: Array<ComponentVariable>;
    nodes: Array<ComponentNode>;

    lifeCycle: Array<ComponentLifeCycle>;
    functions: Array<Function_Protocol>;
    classes?: Array<ComponentClasses>;
  }

  export interface ComponentProp extends Property_Protocol {}
  export interface ComponentEmit extends Omit<Event_Protocol, 'outTypes'> {}
  export interface ComponentSlot extends Slot_Protocol {}
  export interface ComponentVariable extends Property_Protocol {}
  export interface ComponentNode {
    id: string;
    name?: string;
    key?: string;
    parentId?: string | null;
    preId?: string | null;
    nextId?: string | null;

    tagId: string;
    packageId?: string | null;

    props?: Array<Property> | null;
    events?: Array<Event> | null;
    slotId?: string;
  }
  export interface ComponentLifeCycle extends Event {}

  export interface ComponentClasses {}
}

// element
declare namespace CodeSchema {
  export interface Element_Protocol {
    id: string;
    name: string;
    key: string;
    props: Array<ComponentProp>;
    emits: Array<ComponentEmit>;
    slots: Array<ComponentSlot>;
    variables: Array<ComponentVariable>;
    nodes: Array<ComponentNode>;

    lifeCycle: Array<ComponentLifeCycle>;
    functions: Array<Function_Protocol>;
    classes?: Array<ComponentClasses>;
  }
}

// function
declare namespace CodeSchema {
  // 函数协议
  export interface Function_Protocol {
    id: string;
    name: string;
    key: string;
    parameters: Array<Property_Protocol>;
    outTypes: Array<PropertyType_Protocol>;
  }
}

// action
declare namespace CodeSchema {
  // 行为协议
  export interface Action_Protocol {
    id: string;
    name: string;
    key: string;
    parameters: Array<Property_Protocol>;
    outTypes: Array<PropertyType_Protocol>;
  }

  // 执行行为的接口
  export interface Action {
    type: 'action';
    id: string;
    modeId?: string;
    name?: string;
    // returnType: 'assignment' | 'async' // assignment：赋值类型；async：异步类型（远程数据请求、计时器、延时器）
    // returnModel?: any // 待定，记录当时选中的那个 数据的数据结构
    mode: string; // 具体的行为（例如 业务数据赋值、节点属性赋值）、获取数据（例如 业务数据、元素属性值、计算结果、判断结果）
    args: {
      [parameterName: string]: ActionArgument;
    };
    extendPlatform?: boolean; // 是否全平台支持
    platforms?: string[]; // 端的key，由于key是动态配的，因此此处不应该指定有哪些key项
  }
  export type ActionArgument = LiteralValue | DataValue | Action | ActionArgument[];
}

// action 分类
declare namespace CodeSchema {
  // 修改变量数据
  export interface Action_SetVar extends Action {
    mode: 'setVar';
    args: {
      id: string;
      path?: string[];
      value: any;
    };
  }

  // 修改业务数据
  export interface Action_SetApiData extends Action {
    mode: 'setApiData';
    args: {
      id: string;
      path?: string[];
      value: any;
    };
  }

  // 修改数据
  export interface Action_Set extends Action {
    mode: 'set';
    args: {
      actions: (Action_SetVar | Action_SetApiData)[];
    };
  }

  // 执行业务
  export interface Action_Api extends Action {
    mode: 'api';
    args: {
      id: string;
      params: DataValue_Custom;
      success: Action[];
      fail: Action[];
    };
  }

  // 执行业务
  export interface Action_Open extends Action {
    mode: 'open';
    args: {
      mode: 'in' | 'out';
      target: string;
      pageId: string;
      url: string;
    };
  }
}

// event
declare namespace CodeSchema {
  export interface Event_Protocol {
    id: string;
    name: string;
    key: string;
    desc?: string;
    parameters: Array<Property_Protocol>;
  }

  export interface Event {
    eventId: string;
    actions: Array<Action>;
  }
}

// slot
declare namespace CodeSchema {
  export interface Slot_Protocol {
    id: string;
    name: string;
    key: string;
    isHide: boolean;
    properties: Array<Property_Protocol>;
  }
}

// api
declare namespace CodeSchema {
  export interface Api_Protocol {
    id: string;
    key: string;
    method: string; // 如：get、post、put、delete等
    route: {
      path?: string; // 路径包括路由参数,例：xxxx/:id/yyy/:type
      pathPrames?: Array<Property_Protocol>; // 路径参数
    };
    request: {
      query?: Array<Property_Protocol>; // 路由get参数声明
      headers?: Array<Property_Protocol>; // 请求头参数声明
      body?: Array<Property_Protocol>; // 提交数据参数声明
      bodyType?: null | 'form-data' | 'x-www-form-urlencoded' | 'json' | 'xml' | 'binary';
      cookies?: Array<Property_Protocol>; // 提交数据cookies参数声明
    };
    response: {
      headers?: Array<Property_Protocol>; // 返回参数声明
      body?: Array<Property_Protocol>; // 返回参数声明
    };
  }
}

// prop
declare namespace CodeSchema {
  export interface Property_Protocol {
    id: string; // 唯一id
    key: string; // 属性名（生成代码用），元件 手输，组件 自动生成
    types: PropertyType_Protocol[]; // 类型定义配置（包括输入控件、数据结构）
    required?: boolean;
    name?: string; // 属性标题（ui配置界面用）
    desc?: string; // 描述
    display?: Property_Diaplay; // 显示条件配置，不配视为显示，配了就按条件配置决定是否显示
    extendPlatform?: boolean; // 是否全平台支持
    platforms?: string[]; // 端的key，由于key是动态配的，因此此处不应该指定有哪些key项
    bind?: boolean; // 允许被绑定
  }

  export interface PropertyType_Protocol {
    id?: string;
    type: PropertyTypeOne;
    multiple?: boolean; // 存储多个还是单个（multiple实际就是将returnType用数组包起来，可以存多个，就是一个数组类型）
    // modelId?: string; // returnType 为 model时参能选，且必选
    extendPlatform?: boolean; // 是否全平台支持
    platforms?: string[]; // 端的key，由于key是动态配的，因此此处不应该指定有哪些key项
    default?: ActionArgument | DataValueArgument;
    rules?: {
      min?: number;
      max?: number;
      items?: {
        id: string;
        value: string;
        label: string;
      }[];
      // 表格 类型属性
      tableDataKey?: string; // 表格数据的属性名
      tableConfig?: [
        {
          id: 'key';
          key: string;
          types: [{ type: 'text' }];
          required: true;
          name: '字段标识';
        },
        {
          id: 'title';
          key: string;
          types: [{ type: 'text' }];
          required: true;
          name: '标题标识';
        },
        ...Property_Protocol[]
      ]; // 表头配置项的属性配置
      // tableId?: string; // 表头唯一标识的key
      // tableTitle?: string; // 表头标题的key
      /*
        // 类型选择为“array”时的相关配置存于此处
        arrayFiexdLength?: boolean; // 是否长度限制 true / false（default）
        arraySame?: boolean; // 当长度限制 true 时，此项 代表是否 每个元素相同，true（default） / false
        arraySameItem?: PropertyType_Protocol; // 长度限制为false 或 每个元素相同为true时，每个元素的类型配置存此处
        arraySameLength?: number; // 每个元素相同 配置为true时，限制长度
        arrayDiffItems?: {
          label: string;
          type: PropertyType_Protocol;
        }[]; // 长度限制为true且每个元素不相同时，各个元素的类型配置存此处
        */
      minLength?: number;
      maxLength?: number;
      modelId?: string; // returnType 为 model 时必须要选一个引用的模型，为module是选填
      quoteModel?: any; // returnType 为 model 时必须配置引用哪些属性，为module是选填
      properties?: Property_Protocol[]; // 类型为module时专属属性，用来定义有哪些属性，每个属性分别是什么数据结构，与引用模型的配置最后合并在一起
      propertiesRef?: {
        type: 'decl' | 'params' | 'apiParams' | 'apiRespones' | 'model' | 'respones' | 'props';
        id: string;
        path: string[];
      }[];
      parameters?: Property_Protocol[]; // 当type为functionData时，需要设置它的入参
      outTypes?: PropertyType_Protocol[]; // 当type为functionData时，需要设置它的出参类型
      itemTypes?: PropertyType_Protocol[];
    };
    grammar?: string; // 语法句式
    desc?: string; // 描述
    outDesc?: string; // 出参描述
    doc?: string; // 说明文档
    ui?: {
      // 记录具体的输入控件，用于ui配置界面具体显示什么控件，该数据在编译代码时会被忽略掉
      tag?: string; // 输入控件的组件名
      props?: Property[]; // 输入控件的组件属性
    };
  }

  export interface Property_Diaplay {
    mode: 'and' | 'or';
    config: {
      key: string; // 要比对的属性名
      action: 'eq' | 'nor' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'noin'; // 对比方式 > >= < <= === includes !includes
      value: string | number | boolean | (string | number | boolean)[];
    }[];
  }

  export interface Property {
    propId: string; // 属性名
    value?: DataValueArgument;
    static?: any; // 目前只有class和style在用
    dynamic?: DataValue; // 目前只有class和style在用
    ui?: {
      // 如果支持用户自己选择用什么控件输入static，则在ui中记录具体的输入控件，用于ui配置界面具体显示什么控件，该数据在编译代码时会被忽略掉
      tag?: string; // 输入控件的组件名
      props?: { [key: string]: any };
    };
  }

  export const DATA_TYPE_KEYS: [
    'text', //纯文字
    'richText', //富文本
    'password', //密码
    'email', //电子邮箱
    'mobilePhone', //手机
    'telephone', //座机
    'fax', //传真
    'option', //选项
    'date', //日期
    'time', //时间
    'datetime', //日期时间
    'url', //网址
    'image', //图片
    'video', //视频
    'file', //附件
    'number', //纯数字
    'amount', // 金额数
    'whether', //是/否
    'module', //模块
    'icon', //图标
    'style', //样式
    'sequence', //排序序号
    'model', //模型
    // 'api', // 接口id（业务id）
    // , 'apiData' // TODO还没想清楚
    // 'functionData', // 带返回值的函数
    // 'functionVoid', // 不带返回值的函数
    'unknown', // 临时的未知类型，老数据转新数据可能会存在，新的不会有
    // 'void',
    'assignment',
    // 'async',
    'action', // 行为
    'function', // 函数
    'table', // 表格
    'array' // 表格
  ];

  export type PropertyTypeOne = (typeof DATA_TYPE_KEYS)[number] | '';
}

// value
declare namespace CodeSchema {
  export interface DataValue {
    id?: string;
    type: 'data';
    modeId?: string;
    mode: string; // 具体的行为（例如 业务数据、元素属性值、计算结果、判断结果）
    args: {
      [parameterName: string]: DataValueArgument;
    };
  }

  export type DataValueArgument = LiteralValue | DataValue;

  export type LiteralValue =
    | LiteralString
    | LiteralNumber
    | LiteralBoolean
    | LiteralObject
    | LiteralArray<LiteralString | LiteralNumber | LiteralBoolean | LiteralObject>
    | null;

  export type LiteralString = string;
  export type LiteralNumber = number;
  export type LiteralBoolean = boolean;
  export type LiteralArray<T> = Array<T>;
  export type LiteralObject = { [key: string]: DataValueArgument | ActionArgument };
}

// data value 分类
declare namespace CodeSchema {
  // 自定义数据
  export interface DataValue_Custom extends DataValue {
    mode: 'custom';
    args: {
      type: PropertyTypeOne;
      multiple?: boolean;
      value: any;
    };
  }

  export interface DataValue_GetVar extends DataValue {
    mode: 'getVar';
    args: {
      id: string;
      path?: string[];
    };
  }

  // 业务请求的数据
  export interface DataValue_GetApiData extends DataValue {
    mode: 'getApiData';
    args: {
      id: string;
      path?: string[];
    };
  }

  // 循环节点数据
  export interface DataValue_GetEachData extends DataValue {
    mode: 'getEachData';
    args: {
      id: string;
      path?: string[];
    };
  }

  // 页面/业务 入参数据
  export interface DataValue_GetParam extends DataValue {
    mode: 'getParam';
    args: {
      id: string;
      path?: string[];
    };
  }

  // 事件数据
  export interface DataValue_GetEventData extends DataValue {
    mode: 'getEventData';
    args: {
      id: string;
      path?: string[];
    };
  }

  // 作用域插槽数据
  export interface DataValue_GetSlotData extends DataValue {
    mode: 'getSlotData';
    args: {
      id: string;
      path?: string[];
    };
  }

  // 回调参数数据
  export interface DataValue_GetArguments extends DataValue {
    mode: 'getArguments';
    args: {
      id: string;
      path?: string[];
    };
  }

  // 模型数据
  export interface DataValue_GetModelData extends DataValue {
    mode: 'getModelData';
    args: {
      id: string;
      path?: string[];
    };
  }

  // 组件属性
  export interface DataValue_GetCmptPropData extends DataValue {
    mode: 'getCmptPropData';
    args: {
      id: string;
      path?: string[];
    };
  }

  // 模型数据
  export interface DataValue_TableData extends DataValue {
    mode: 'tableData';
    args: {
      data?: null | DataValue;
      tableDataKey?: string; // 表格数据属性名
      keyFieldName?: string; // 属性字段名
      titleFieldName?: string; // 标题字段名
      showColumns: string[]; // 勾选列的id存储在该数组中，用来标记哪些列需要显示
      columns: {
        [key: string]: any; // 每个列的各个属性配置。
      }[];
    };
  }
}

// directory
declare namespace CodeSchema {
  export interface Directory {
    id: string; // 页面/组件/接口/目录id号
    parentId: string | null; // 父id
    isDirectory: boolean; // 是否为目录
    name: string;
    key: string;
    resourceType?: 'component' | 'api' | 'page' | 'function';
    refId?: string;
  }
}

// database
declare namespace CodeSchema {
  const database: {
    mongodb: 'mongodb';
    mysql: 'mysql';
    orical: 'orical';
  };

  export type DatabaseType = keyof typeof database;

  export interface Database {
    id: string;
    name: string; // 数据库名
    key: string;
    tech: DatabaseType;
    version: string;
    host: string;
    password: string;
    tables: Array<DatabaseTable>; // 多个表配置，关联多个“数据库表”的id号
  }

  export interface DatabaseTable {
    id: string;
    name: string;
    key: string;
    fields: Array<Property>; // 多个字段配置，关联多个“属性定义”的id号
  }
}
