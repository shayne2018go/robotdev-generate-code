import { dataTypeKey } from '../const/dataType';
import { expressionType, statementType } from '../const/statementType';
import { DataType } from '../types/dataType';
import { Expression } from '../types/expression';
import { Statement } from '../types/statement';
import { ExpressionType, StatementType } from '../types/statementType';
import { expression } from './expression';
import { statement } from './statement';

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
  void(data: any): Expression.Literal_Void {},
  null(): Expression.Literal_Null {},
  string(value: string): Expression.Literal_String {
    return literal.unknown(dataTypeKey.string, {
      value,
    });
  },
  long(): Expression.Literal_Long {},
  boolean(): Expression.Literal_Boolean {},
  int(): Expression.Literal_Int {},
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
