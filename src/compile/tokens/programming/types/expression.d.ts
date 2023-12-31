import { DataType as ExpressionDataType } from './dataType';
import { Keyword } from './keyword';
import { Statement } from './statement';
import { ExpressionType, ExpressionTypeEnum } from './statementType';
export namespace Expression {
  export interface Common {
    _statement_: 'expression';
    _expression_: ExpressionTypeEnum;
  }
  // Json类型字面量
  // export type Json_String = string;
  // export type Json_Number = number;
  // export type Json_Boolean = boolean;
  // export type Json_Object = { [key: string]: Unknown };
  // export type Json_Array = Array<Unknown>;
  // export type Json = Json_String | Json_Number | Json_Boolean | Json_Array | Json_Object;

  // 标准的量数据结构
  export type Standard =
    | Identifier
    | Access
    | Assignment
    | Call
    | New
    | Conditional
    | Binary
    | Logical
    | PostfixUnary
    | PrefixUnary
    | Literal
    | DataType;

  // 标准和Json所有
  export type Unknown = Standard;

  // 写一个变量名或属性名
  export interface Identifier extends Common {
    _expression_: ExpressionType['identifier'];
    escapedText: string;
  }

  // 访问对象或数组元素
  export interface Access extends Common {
    _expression_: ExpressionType['access'];
    expression: Unknown;
    name: Unknown;
    isOptionalChaining?: boolean;
  }

  // 调用函数
  export interface Assignment extends Common {
    _expression_: ExpressionType['assignment'];
    left: Identifier | Access;
    right?: Unknown;
  }

  // 调用函数
  export interface Call extends Common {
    _expression_: ExpressionType['call'];
    expression: Unknown;
    args?: Array<Unknown>;
  }

  // new构造函数
  export interface New extends Common {
    _expression_: ExpressionType['new'];
    expression: Unknown;
    args?: Array<Unknown>;
  }

  // 三元表达式
  export interface Conditional extends Common {
    _expression_: ExpressionType['conditional'];
    condition: Unknown;
    true: Unknown;
    false: Unknown;
  }

  // 二元表达式
  export interface Logical extends Common {
    _expression_: ExpressionType['binary'];
    logical: '||' | '??';
    datas: Array<Unknown>;
  }

  export interface Binary extends Common {
    _expression_: ExpressionType['binary'];
    logical: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'ct' | 'nct'; // ct 包含，nct 不包含
    left: Unknown;
    right: Unknown;
  }

  export interface PostfixUnary extends Common {
    _expression_: ExpressionType['postfixUnary'];
    action: 'add' | 'subtract';
    identifier: Identifier;
  }

  export interface PrefixUnary extends Common {
    _expression_: ExpressionType['prefixUnary'];
    action: 'add' | 'subtract';
    identifier: Identifier;
  }

  export interface Await extends Common {
    _expression_: ExpressionType['await'];
    expression: Unknown;
  }

  export type DataType = ExpressionDataType.Unknown;

  // 字面量
  export type Literal =
    | Literal_Null
    | Literal_Void
    | Literal_String
    | Literal_Long
    | Literal_Int
    | Literal_Decimal
    | Literal_Boolean
    | Literal_Array
    | Literal_Tuple
    | Literal_Object
    | Literal_Datetime
    | Literal_Date
    | Literal_Time
    | Literal_Timestamp
    // | Literal_Enum
    // | Literal_Enums
    | Literal_Function;
  // | Literal_Ref;

  export type Literal_Common = Common & {
    _expression_: 'literal';
  };

  export type Literal_Void = Literal_Common &
    ExpressionDataType.Schema_Void_Common & {
      value?: null;
    };

  export type Literal_Null = Literal_Common &
    ExpressionDataType.Schema_Null_Common & {
      value?: null;
    };

  export type Literal_String = Literal_Common &
    ExpressionDataType.Schema_String_Common & {
      value?: string;
    };

  export type Literal_Long = Literal_Common &
    ExpressionDataType.Schema_Long_Common & {
      value?: string;
    };

  export type Literal_Int = Literal_Common &
    ExpressionDataType.Schema_Int_Common & {
      value: number;
    };

  export type Literal_Decimal = Literal_Common &
    ExpressionDataType.Schema_Decimal_Common & {
      value: number;
    };

  export type Literal_Boolean = Literal_Common &
    ExpressionDataType.Schema_Boolean_Common & {
      value: boolean;
    };

  export type Literal_Array = Literal_Common &
    ExpressionDataType.Schema_Array_Common & {
      value?: Array<Unknown>;
    };

  export type Literal_Tuple = Literal_Common &
    ExpressionDataType.Schema_Tuple_Common & {
      value: Array<Unknown>;
    };

  export type Literal_Object = Literal_Common &
    ExpressionDataType.Schema_Object_Common & {
      value?: Array<{
        key: Unknown;
        value: Unknown;
      }>;
    };

  // export type Literal_Enum = Literal_Common &
  //   ExpressionDataType.Schema_Enum_Common & {
  //     value: Unknown;
  //   };

  // export type Literal_Enums = Literal_Common &
  //   ExpressionDataType.Schema_Enums & {
  //     value: string;
  //   };

  export type Literal_Datetime = Literal_Common &
    ExpressionDataType.Schema_Datetime_Common & {
      value: string;
    };

  export type Literal_Date = Literal_Common &
    ExpressionDataType.Schema_Date_Common & {
      value: string;
    };

  export type Literal_Time = Literal_Common &
    ExpressionDataType.Schema_Time_Common & {
      value: string;
    };

  export type Literal_Timestamp = Literal_Common &
    ExpressionDataType.Schema_Timestamp_Common & {
      value: string;
    };

  export type Literal_Function = Literal_Common &
    ExpressionDataType.Schema_Function_Common & {
      value: Array<Statement.Line>;
      mode: 'function' | 'arrow' | 'method';
    };

  // export type Literal_Ref = Literal_Common &
  //   ExpressionDataType.Schema_Ref & {
  //     value: Unknown;
  //   };
}
