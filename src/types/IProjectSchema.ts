export namespace IDB_Schema {
  export interface Project {
    project: string;
    id: string;
    name: string;
    desc: string;
    type: 'resource' | 'application';
    subType: 'server' | 'client' | 'element' | 'component' | 'plugin' | 'httpReq';
    platforms: string[];
    data: Page[];
    dependencies: Dependencies[];
    apis: Api[];
    projectIndex: ProjectIndex;
  }
}

export namespace IDB_Schema {
  export interface DATA_COMMON {
    name: string;
    type: 'page' | 'theme' | 'component' | 'template' | 'action' | 'function';
    nodes: RdNode[];
    decl: RdDecl[];
    classes: Css;
    events: RdEvent[];

    spec: {
      props?: RdComponentDefineProp[];
      slots?: RdComponentDefineSlot[];
      events?: RdComponentDefineEvent[];
    };
  }

  export interface Page extends DATA_COMMON {
    originId: string;
    project: string;
    name: string;
    type: 'page';
    cover: string;
    flowcharts: string[];
    params: string[];
  }

  export interface Dependencies extends DATA_COMMON {
    id: string;
    tag: string;
    project: string;
  }

  export interface Api {
    id: string;
    project: string;
    name: string;
    type: string;
    model: any;
    params: {
      front_id: string;
      name: string;
    }[];
    request: RdDefineProp[];
    response: RdDefineProp[];
  }

  export interface ProjectIndex {
    page: {
      id: string;
      type: 'page' | 'directory';
      name: string;
      depth: number;
      parentId: string | null;
      preId: string | null;
      cover: string;
      namespace: 'page';
    }[];
  }
}

export namespace IDB_Schema {
  export interface RdNode {
    id: string; // 节点唯一id标识
    parentId: string | null; // 父节点id
    tag: string; // 节点对应的 组件/元件 标签名
    type: 'element' | 'component';
    productId?: string; // 来源于product则记录productId
    projectId?: string; //来源于project则记录projectId
    // resourceId?: string; // 该节点对应 组件/元件 的id号
    // packageId?: string; // resourceId 所属的包id
    // source?: 'project' | 'product'; // packageId 属于项目中心的包 还是资源中心的包
    comment?: string; // 注释
    name?: string; // 用户自定义节点的名称，用来显示
    data?: RdNodeData; // 用户配置的信息
    slotId?: string; // 插槽名，当该节点tag为'slot' 或 'tpl'时必须有此属性，其他情况一定不会有
    preId?: string | null; // 前1个节点的id
    nextId?: string | null; // 后1个节点的id
    depth?: number; // 当前节点在第几层
    extendPlatform?: boolean; // 是否全平台支持
    platforms?: string[]; // 端的key，由于key是动态配的，因此此处不应该指定有哪些key项
  }

  export interface RdNodeData {
    props?: RdNodeProp[]; // 组件属性
    events?: RdNodeEvent[]; // 事件数据
    theme?: any;
  }

  export interface RdNodeProp {
    propId: string; // 属性名
    value?: RdDataArguments;
    static?: any; // 目前只有class和style在用
    dynamic?: RdData; // 目前只有class和style在用
    ui?: {
      // 如果支持用户自己选择用什么控件输入static，则在ui中记录具体的输入控件，用于ui配置界面具体显示什么控件，该数据在编译代码时会被忽略掉
      tag?: string; // 输入控件的组件名
      props?: { [key: string]: any };
    };
  }

  export interface RdNodeEvent {
    eventId: string; // 事件名唯一id
    actions: RdAction[]; // 绑定行为的配置
  }
}

export namespace IDB_Schema {
  export interface RdData {
    id?: string;
    modeId?: string;
    type: 'data';
    mode: string; // 具体的行为（例如 业务数据、元素属性值、计算结果、判断结果）
    args: {
      [parameterName: string]: RdDataArguments;
    };
  }

  export type RdDataArguments = RdBasicData | RdData;

  export type RdBasicData = string | number | boolean | RdObject | string[] | number[] | boolean[] | RdObject[] | null; // args 中可以出现的数据类型（除RdAction）

  export type RdObject = { [key: string]: RdDataArguments | RdActionArguments };
}

export namespace IDB_Schema {
  export interface RdEvent {
    eventId: string;
    actions: RdAction[]; // 绑定行为的配置
  }
}

export namespace IDB_Schema {
  export interface RdAction {
    type: 'action';
    id: string;
    modeId?: string;
    // returnType: 'assignment' | 'async' // assignment：赋值类型；async：异步类型（远程数据请求、计时器、延时器）
    // returnModel?: any // 待定，记录当时选中的那个 数据的数据结构
    mode: string; // 具体的行为（例如 业务数据赋值、节点属性赋值）、获取数据（例如 业务数据、元素属性值、计算结果、判断结果）
    args: {
      [parameterName: string]: RdActionArguments;
    };
    extendPlatform?: boolean; // 是否全平台支持
    platforms?: string[]; // 端的key，由于key是动态配的，因此此处不应该指定有哪些key项
  }

  export type RdActionArguments = RdBasicData | RdData | RdAction | RdActionArguments[];
}

export namespace IDB_Schema {
  export interface RdDecl extends RdDefineProp {}

  export interface RdDefineProp {
    id: string; // 唯一id
    key?: string; // 属性名（生成代码用），元件 手输，组件 自动生成
    types: RdDefinePropType[]; // 类型定义配置（包括输入控件、数据结构）
    required?: boolean;
    name?: string; // 属性标题（ui配置界面用）
    desc?: string; // 描述
    display?: RdDisplay; // 显示条件配置，不配视为显示，配了就按条件配置决定是否显示
    extendPlatform?: boolean; // 是否全平台支持
    platforms?: string[]; // 端的key，由于key是动态配的，因此此处不应该指定有哪些key项
    // ui?: {
    //   title: string; // 属性标题（ui配置界面用）
    //   desc?: string; // 描述
    //   display?: RdDisplay; // 显示条件配置，不配视为显示，配了就按条件配置决定是否显示
    // };
    // default?: RdActionArguments; // 默认值（根据类型定义显示对应的输入控件操作来输入默认值）
    bind?: boolean; // 允许被绑定
  }

  export interface RdDefinePropType {
    type: RdInType;
    multiple?: boolean; // 存储多个还是单个（multiple实际就是将returnType用数组包起来，可以存多个，就是一个数组类型）
    // modelId?: string; // returnType 为 model时参能选，且必选
    extendPlatform?: boolean; // 是否全平台支持
    platforms?: string[]; // 端的key，由于key是动态配的，因此此处不应该指定有哪些key项
    default?: RdActionArguments;
    rules?: {
      min?: number;
      max?: number;
      items?: (
        | {
            value: string;
            label: string;
          }
        | string
      )[];
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
        ...RdDefineProp[]
      ]; // 表头配置项的属性配置
      // tableId?: string; // 表头唯一标识的key
      // tableTitle?: string; // 表头标题的key
      /*
      // 类型选择为“array”时的相关配置存于此处
      arrayFiexdLength?: boolean; // 是否长度限制 true / false（default）
      arraySame?: boolean; // 当长度限制 true 时，此项 代表是否 每个元素相同，true（default） / false
      arraySameItem?: RdDefinePropType; // 长度限制为false 或 每个元素相同为true时，每个元素的类型配置存此处
      arraySameLength?: number; // 每个元素相同 配置为true时，限制长度
      arrayDiffItems?: {
        label: string;
        type: RdDefinePropType;
      }[]; // 长度限制为true且每个元素不相同时，各个元素的类型配置存此处
      */
      minLength?: number;
      maxLength?: number;
      modelId?: string; // returnType 为 model 时必须要选一个引用的模型，为module是选填
      quoteModel?: any; // returnType 为 model 时必须配置引用哪些属性，为module是选填
      properties?: RdDefineProp[]; // 类型为module时专属属性，用来定义有哪些属性，每个属性分别是什么数据结构，与引用模型的配置最后合并在一起
      propertiesRef?: {
        type: 'decl' | 'params' | 'apiParams' | 'apiRespones' | 'model' | 'respones' | 'props';
        id: string;
        path: string[];
      }[];
      parameters?: RdDefineProp[]; // 当type为functionData时，需要设置它的入参
      outTypes?: RdDefinePropType[]; // 当type为functionData时，需要设置它的出参类型
    };
    grammar?: string; // 语法句式
    desc?: string; // 描述
    outDesc?: string; // 出参描述
    doc?: string; // 说明文档
    ui?: {
      // 记录具体的输入控件，用于ui配置界面具体显示什么控件，该数据在编译代码时会被忽略掉
      tag?: string; // 输入控件的组件名
      props?: RdNodeProp[]; // 输入控件的组件属性
    };
  }

  export interface RdDisplay {
    mode: 'and' | 'or';
    config: {
      key: string; // 要比对的属性名
      action: 'eq' | 'nor' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'noin'; // 对比方式 > >= < <= === includes !includes
      value: string | number | boolean | (string | number | boolean)[];
    }[];
  }
}

export namespace IDB_Schema {
  export const DATA_TYPE_KEYS = [
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
    'api', // 接口id（业务id）
    // , 'apiData' // TODO还没想清楚
    'functionData', // 带返回值的函数
    'functionVoid', // 不带返回值的函数
    'unknown', // 临时的未知类型，老数据转新数据可能会存在，新的不会有
    'void',
    'assignment',
    'async',
    'action', // 行为
    'function', // 函数
    'table', // 表格
  ] as const;

  export type RdInType = typeof DATA_TYPE_KEYS[number] | '';
}

export namespace IDB_Schema {
  export type Css = {
    [key: CssClass]: CssStyle;
  };

  export type CssClass = string;
  export type CssStyle = {
    [key: string]: string | number;
  };
}

export namespace IDB_Schema {
  export interface RdComponentDefineProp extends RdDefineProp {}

  export interface RdComponentDefineSlot {
    id: string; // 唯一id
    key?: string; // 插槽名（生成代码用），元件 手输，组件 自动生成
    name?: string; // 插槽标题（ui配置界面用）
    desc?: string; // 描述
    extendPlatform?: boolean; // 是否全平台支持
    platforms?: string[]; // 端的key，由于key是动态配的，因此此处不应该指定有哪些key项
    // ui?: {
    //   title: string; // 插槽标题（ui配置界面用）
    //   desc?: string; // 描述
    // };
    parameters?: RdDefineProp[];
    isHide?: boolean; // 是否在大纲隐藏
    // 注：默认插槽的底层解析方案改变：以前没有isHide字段，配置界面勾后实际是将name改为了default，新方案解耦，2个配置分开。底层实现的方案也要通过获取定义中的默认插槽标记来解析
  }

  export interface RdComponentDefineEvent {
    id: string; // 唯一id
    key?: string; // 事件名（生成代码用），元件 手输，组件 自动生成
    name?: string; // 事件标题（ui配置界面用）
    desc?: string; // 描述
    extendPlatform?: boolean; // 是否全平台支持
    platforms?: string[]; // 端的key，由于key是动态配的，因此此处不应该指定有哪些key项
    // ui?: {
    //   title: string; // 事件标题（ui配置界面用）
    //   desc?: string; // 描述
    // };
    parameters?: RdDefineProp[]; // 事件传参属性定义
    icon?: string;
  }
}
