import { tools } from '@/utils/tools';
import { dataTypeKey } from '../const/dataType';
import { expressionType } from '../const/statementType';
import { DataType } from '../types/dataType';
import { Expression } from '../types/expression';
import { ExpressionType } from '../types/statementType';
import { expression } from './expression';

export const literal = {
  unknown<T extends DataType.TypeKeyEnum, R extends Record<string, any>>(
    dataType: T,
    data?: R
  ): Expression.Common & {
    _expression_: ExpressionType['literal'];
    type: T;
  } & R {
    return expression.unknown(expressionType.literal, {
      type: dataType,
      ...(data || ({} as R)),
    });
  },
  void(): Expression.Literal_Void {
    return literal.unknown('void');
  },
  null(): Expression.Literal_Null {
    return literal.unknown('null');
  },
  string(value?: string): Expression.Literal_String {
    return literal.unknown(
      dataTypeKey.string,
      value
        ? {
            value,
          }
        : undefined
    );
  },
  long(value?: string): Expression.Literal_Long {
    return literal.unknown(
      dataTypeKey.long,
      value
        ? {
            value,
          }
        : undefined
    );
  },
  boolean(value: boolean): Expression.Literal_Boolean {
    return literal.unknown(dataTypeKey.boolean, { value });
  },
  int(value: string | number): Expression.Literal_Int {
    if (typeof value === 'string') {
      value = parseFloat(value);
      if (isNaN(value)) {
        throw new Error('literal.int 方法 的value参数的值必须为纯数字或小鼠数字！');
      }
    } else if (typeof value !== 'number') {
      throw new Error('literal.int 方法 的value参数必须为 文本 或 数字！');
    }
    return literal.unknown(dataTypeKey.int, { value: value });
  },
  decimal(): Expression.Literal_Decimal {},
  object(): Expression.Literal_Object {},
  array(): Expression.Literal_Array {},
  tuple(): Expression.Literal_Tuple {},
  function(): Expression.Literal_Function {},
  datetime(): Expression.Literal_Datetime {},
  date(): Expression.Literal_Date {},
  time(): Expression.Literal_Time {},
  timestamp(): Expression.Literal_Timestamp {},
};
