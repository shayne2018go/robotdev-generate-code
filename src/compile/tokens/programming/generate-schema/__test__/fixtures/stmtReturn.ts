import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Statement } from '../../../../types/statement';
import { dataTypeKey } from '@/compile/tokens/programming/const/dataType';

export const mock_return: Statement.Return = {
  _statement_: statementType.return,
  value: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.boolean,
    value: true
  }
};
