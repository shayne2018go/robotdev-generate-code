import { dataTypeKey } from '@/compile/tokens/programming/const/dataType';
import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Expression } from '@/compile/tokens/programming/types/expression';

export const expression_conditional: Expression.Conditional = {
  _statement_: statementType.expression,
  _expression_: expressionType.conditional,
  condition: {
    _statement_: statementType.expression,
    _expression_: expressionType.binary,
    logical: 'gte',
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
  },
  true: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'adult',
  },
  false: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'minor',
  },
};
