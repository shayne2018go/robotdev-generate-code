import { Expression } from '../../../../types/expression';

export const expression_access1: Expression.Access = {
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
};

export const expression_access2: Expression.Access = {
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
};

export const expression_access3: Expression.Access = {
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
};

export const expression_access4: Expression.Access = {
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
};

export const expression_access5: Expression.Access = {
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
};

export const expression_access6: Expression.Access = {
  _statement_: 'expression',
  _expression_: 'access',
  expression: {
    _statement_: 'expression',
    _expression_: 'access',
    isOptionalChaining: true,
    expression: {
      _statement_: 'expression',
      _expression_: 'access',
      isOptionalChaining: true,
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
};

export const expression_access7: Expression.Access = {
  _statement_: 'expression',
  _expression_: 'access',
  expression: {
    _statement_: 'expression',
    _expression_: 'access',
    isOptionalChaining: false,
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
};
