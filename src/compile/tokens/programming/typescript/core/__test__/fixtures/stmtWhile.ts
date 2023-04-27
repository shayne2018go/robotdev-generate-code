import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Statement } from '../../../../types/statement';
import { dataTypeKey } from '@/compile/tokens/programming/const/dataType';

export const mock_while: Statement.While = {
  _statement_: statementType.while,
  expression: {
    _statement_: statementType.expression,
    _expression_: expressionType.binary,
    logical: 'lt',
    left: {
      _statement_: statementType.expression,
      _expression_: expressionType.identifier,
      escapedText: 'index',
    },
    right: {
      _statement_: statementType.expression,
      _expression_: expressionType.literal,
      type: dataTypeKey.int,
      value: 10,
    },
  },
  statements: [
    {
      _statement_: statementType.expression,
      _expression_: expressionType.postfixUnary,
      action: 'add',
      identifier: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'index',
      },
    },
  ],
};
