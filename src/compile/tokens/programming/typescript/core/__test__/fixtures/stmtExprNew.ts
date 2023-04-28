import { dataTypeKey } from '@/compile/tokens/programming/const/dataType';
import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Expression } from '@/compile/tokens/programming/types/expression';

export const expression_new: Expression.New = {
  _statement_: statementType.expression,
  _expression_: expressionType.new,
  expression: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'Factory',
  },
  args: [
    {
      _statement_: statementType.expression,
      _expression_: expressionType.identifier,
      escapedText: 'type',
    },
    {
      _statement_: statementType.expression,
      _expression_: expressionType.literal,
      type: dataTypeKey.boolean,
      value: true,
    },
    {
      _statement_: statementType.expression,
      _expression_: expressionType.literal,
      type: dataTypeKey.string,
      value: '1998',
    },
  ],
};
