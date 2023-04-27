import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Statement } from '../../../../types/statement';

export const mock_continue: Statement.Continue = {
  _statement_: statementType.continue,
};
export const mock_continue1: Statement.Continue = {
  _statement_: statementType.continue,
  label: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'for1',
  },
};
