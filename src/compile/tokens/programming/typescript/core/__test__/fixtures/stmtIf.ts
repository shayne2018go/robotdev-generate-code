import { Statement } from '../../../../types/statement';
import { mock_declare_type_value } from './stmtDeclare';
import { expression_call, expression_call1 } from './stmtExprCall';
import { expression_identifier1 } from './stmtExprIdentifier';

export const mock_if: Statement.If = {
  _statement_: 'if',
  ifs: [[expression_identifier1, []]],
};
export const mock_if_else: Statement.If = {
  _statement_: 'if',
  ifs: [[expression_identifier1, []]],
  else: [],
};
export const mock_if_elseIf: Statement.If = {
  _statement_: 'if',
  ifs: [
    [expression_identifier1, []],
    [expression_call, []],
  ],
  else: [],
};
export const mock_if_elseIf_statement: Statement.If = {
  _statement_: 'if',
  ifs: [[expression_identifier1, [expression_call, mock_if_else]]],
  else: [mock_declare_type_value, expression_call1],
};
