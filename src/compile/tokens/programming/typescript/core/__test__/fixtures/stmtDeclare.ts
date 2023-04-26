import { Statement } from '../../../../types/statement';

export const mock_declare: Statement.Declare = {
  _statement_: 'declare',
  name: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'title',
  },
};

export const mock_declare_const: Statement.Declare = {
  _statement_: 'declare',
  isConst: true,
  name: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'title',
  },
};

export const mock_declare_type: Statement.Declare = {
  _statement_: 'declare',
  name: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'title',
  },
  dataTypes: [
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'string',
    },
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'int',
    },
  ],
};

export const mock_declare_value: Statement.Declare = {
  _statement_: 'declare',
  name: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'title',
  },
  value: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: '中国',
  },
};

export const mock_declare_type_value: Statement.Declare = {
  _statement_: 'declare',
  name: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'title',
  },
  dataTypes: [
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'string',
    },
  ],
  value: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: '中国',
  },
};
