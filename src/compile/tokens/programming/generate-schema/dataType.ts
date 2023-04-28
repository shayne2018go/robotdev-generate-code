import { DataType } from '../types/dataType';
import { expressionType, statementType } from '../const/statementType';
import { ExpressionType } from '../types/statementType';
import { expression } from './expression';
import { statement } from './statement';

export const dataType = {
  unknown<T extends DataType.TypeKeyEnum, R extends Record<string, any>>(
    dataType: T,
    data?: R
  ): {
    _statement_: 'expression';
    _expression_: ExpressionType['dataType'];
    type: T;
  } & R {
    return statement.unknown(
      statementType.expression,
      expression.unknown(expressionType.dataType, {
        type: dataType,
        ...(data || ({} as R)),
      })
    );
  },
  void(): DataType.Schema_Void {},
  null(): DataType.Schema_Null {},
  string(): DataType.Schema_String {},
  long(): DataType.Schema_Long {},
  boolean(): DataType.Schema_Boolean {},
  int(): DataType.Schema_Int {},
  decimal(): DataType.Schema_Decimal {},
  object(): DataType.Schema_Object {},
  array(): DataType.Schema_Array {},
  tuple(): DataType.Schema_Tuple {},
  function(): DataType.Schema_Function {},
  datetime(): DataType.Schema_Datetime {},
  date(): DataType.Schema_Date {},
  time(): DataType.Schema_Time {},
  timestamp(): DataType.Schema_Timestamp {},
};
