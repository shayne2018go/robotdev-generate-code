import { statementType } from '../const/statementType';
import { Expression } from '../types/expression';
import { ExpressionTypeEnum } from '../types/statementType';
import { statement } from './statement';

export const expression = {
  unknown<T extends ExpressionTypeEnum, R extends Record<string, any>>(
    expressionType: T,
    data?: R
  ): Expression.Common & {
    _expression_: T;
  } & R {
    return statement.unknown(statementType.expression, {
      _expression_: expressionType,
      ...(data || ({} as R)),
    });
  },
  dataType(): Expression.DataType {},
  literal(): Expression.Literal {},
  class(): Expression.Class {},
  access(): Expression.Access {},
  identifier(name: string): Expression.Identifier {
    return expression.unknown('identifier', {
      escapedText: name,
    });
  },
  call(): Expression.Call {},
  new(): Expression.New {},
  assignment(): Expression.Assignment {},
  binary(): Expression.Binary {},
  conditional(): Expression.Conditional {},
  postfixUnary(): Expression.PostfixUnary {},
  prefixUnary(): Expression.PrefixUnary {},
};
