import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Statement } from '../../../../types/statement';

export const mock_for: Statement.For = {
  _statement_: statementType.for,
  declare: {
    _statement_: statementType.declare,
    name: {
      _statement_: statementType.expression,
      _expression_: expressionType.identifier,
      escapedText: 'index',
    },
    value: {
      _statement_: statementType.expression,
      _expression_: expressionType.literal,
      type: 'int',
      value: 0,
    },
  },
  initializer: {
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
      type: 'int',
      value: 10,
    },
  },
  incrementor: {
    _statement_: statementType.expression,
    _expression_: expressionType.postfixUnary,
    action: 'add',
    identifier: {
      _statement_: statementType.expression,
      _expression_: expressionType.identifier,
      escapedText: 'index',
    },
  },
  statements: [
    {
      _statement_: statementType.expression,
      _expression_: expressionType.call,
      expression: {
        _statement_: statementType.expression,
        _expression_: expressionType.access,
        expression: {
          _statement_: statementType.expression,
          _expression_: expressionType.identifier,
          escapedText: 'console',
        },
        name: {
          _statement_: statementType.expression,
          _expression_: expressionType.identifier,
          escapedText: 'log',
        },
      },
      args: [
        {
          _statement_: statementType.expression,
          _expression_: expressionType.identifier,
          escapedText: 'index',
        },
      ],
    },
  ]
};
