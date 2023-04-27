import { Statement } from '../../../../types/statement';

export const mock_import: Statement.Import = {
  _statement_: 'import',
  default: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'temp',
  },
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
};
export const mock_import_all: Statement.Import = {
  _statement_: 'import',
  all: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'alias',
  },
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
};
export const mock_import_element: Statement.Import = {
  _statement_: 'import',
  elements:[
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      }
    }
  ] ,
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
};
export const mock_import_element_as: Statement.Import = {
  _statement_: 'import',
  elements:[
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'alias',
      },
      propertyName: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      }
    }
  ] ,
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
};
export const mock_import_elements: Statement.Import = {
  _statement_: 'import',
  elements:[
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      }
    },
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp1',
      }
    }
  ] ,
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
};
export const mock_import_elements_as: Statement.Import = {
  _statement_: 'import',
  elements:[
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      }
    },
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'alias',
      },
      propertyName: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp1',
      }
    }
  ] ,
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
};

export const mock_import_element_default: Statement.Import = {
  _statement_: 'import',
  default: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'defaultTemp',
  },
  elements:[
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      }
    },
  ] ,
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
}

export const mock_import_default_all: Statement.Import = {
  _statement_: 'import',
  default: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'defaultTemp',
  },
  all: {
    _statement_: 'expression',
    _expression_: 'identifier',
    escapedText: 'alias',
  },
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
}

export const mock_import_only_path: Statement.Import = {
  _statement_: 'import',
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
}