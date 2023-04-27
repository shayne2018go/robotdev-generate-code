import { Expression } from '../../../../types/expression';

export const expression_call: Expression.Call = {
  _statement_: 'expression',
  _expression_: 'call',
  expression: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'func',
  },
  args: [
    {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'string',
      value: 'abc',
    },
    {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'int',
      value: 200,
    },
    {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'boolean',
      value: true,
    },
  ],
};

export const expression_call1: Expression.Call = {
  _statement_: 'expression',
  _expression_: 'call',
  expression: {
    _statement_: 'expression',
    _expression_: 'access',
    expression: {
      _statement_: 'expression',
      _expression_: 'identifier',
      escapedText: 'tools',
    },
    name: {
      _statement_: 'expression',
      _expression_: 'identifier',
      escapedText: 'isString',
    },
  },
};

export const expression_call2: Expression.Call = {
  _statement_: 'expression',
  _expression_: 'call',
  expression: {
    _statement_: 'expression',
    _expression_: 'access',
    expression: {
      _statement_: 'expression',
      _expression_: 'identifier',
      escapedText: 'tools',
    },
    name: {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'string',
      value: 'isString',
    },
  },
};

export const expression_call3: Expression.Call = {
  _statement_: 'expression',
  _expression_: 'call',
  expression: {
    _statement_: 'expression',
    _expression_: 'access',
    expression: {
      _statement_: 'expression',
      _expression_: 'identifier',
      escapedText: 'list',
    },
    name: {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'int',
      value: 0,
    },
  },
};

export const expression_call4: Expression.Call = {
  _statement_: 'expression',
  _expression_: 'call',
  expression: {
    _statement_: 'expression',
    _expression_: 'access',
    expression: {
      _statement_: 'expression',
      _expression_: 'access',
      expression: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'list',
      },
      name: {
        _statement_: 'expression',
        _expression_: 'literal',
        type: 'int',
        value: 0,
      },
    },
    name: {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'string',
      value: 'isString',
    },
  },
};

export const expression_call5: Expression.Call = {
  _statement_: 'expression',
  _expression_: 'call',
  expression: {
    _statement_: 'expression',
    _expression_: 'access',
    expression: {
      _statement_: 'expression',
      _expression_: 'access',
      expression: {
        _statement_: 'expression',
        _expression_: 'access',
        expression: {
          _statement_: 'expression',
          _expression_: 'identifier',
          escapedText: 'list',
        },
        name: {
          _statement_: 'expression',
          _expression_: 'literal',
          type: 'int',
          value: 0,
        },
      },
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'tools',
      },
    },
    name: {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'string',
      value: 'isString',
    },
  },
};
