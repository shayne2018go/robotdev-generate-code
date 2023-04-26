import { Expression } from '../../../../types/expression';

export const literal_string: Expression.Literal_String = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'string',
  value: '这是一条文本',
};

export const literal_int: Expression.Literal_Int = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'int',
  value: 89757,
};

export const literal_decimal: Expression.Literal_Decimal = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'decimal',
  value: 3.1415926,
};
