import { Statement } from '../../../../types/statement';

export const mock_declareVariable: Statement.DeclareVariable = {
  _statement_: 'declareVariable',
  name: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'title',
  },
};

export const mock_declareVariable_const: Statement.DeclareVariable = {
  _statement_: 'declareVariable',
  isConst: true,
  name: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'title',
  },
};

export const mock_declareVariable_type: Statement.DeclareVariable = {
  _statement_: 'declareVariable',
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

export const mock_declareVariable_value: Statement.DeclareVariable = {
  _statement_: 'declareVariable',
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

export const mock_declareVariable_type_value: Statement.DeclareVariable = {
  _statement_: 'declareVariable',
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
