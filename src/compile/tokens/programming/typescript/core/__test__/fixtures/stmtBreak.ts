import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Statement } from '../../../../types/statement';

export const mock_break: Statement.Break = {
  _statement_: statementType.break,
};
export const mock_break1: Statement.Break = {
  _statement_: statementType.break,
  label: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'for1',
  },
};
