import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Statement } from '../../../../types/statement';

export const mock_throw: Statement.Throw = {
  _statement_: statementType.throw,
  expression: {
    _statement_: statementType.expression,
    _expression_: expressionType.new,
    expression: {
      _statement_: statementType.expression,
      _expression_: expressionType.identifier,
      escapedText: 'Error',
    },
    args: [
      {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'message',
      },
    ]
  }
};
