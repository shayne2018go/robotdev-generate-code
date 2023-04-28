import { dataTypeKey } from '@/compile/tokens/programming/const/dataType';
import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Expression } from '@/compile/tokens/programming/types/expression';

export const expression_assignment: Expression.Assignment = {
  _statement_: statementType.expression,
  _expression_: expressionType.assignment,
  left: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'age',
  },
  right: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.int,
    value: 18,
  },
};

export const expression_assignment1: Expression.Assignment = {
  _statement_: statementType.expression,
  _expression_: expressionType.assignment,
  left: {
    _statement_: statementType.expression,
    _expression_: expressionType.access,
    expression: {
      _statement_: statementType.expression,
      _expression_: expressionType.identifier,
      escapedText: 'this',
    },
    name: {
      _statement_: statementType.expression,
      _expression_: expressionType.identifier,
      escapedText: 'age',
    },
  },
  right: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.int,
    value: 18,
  },
};
