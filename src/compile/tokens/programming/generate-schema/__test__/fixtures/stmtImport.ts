import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Statement } from '../../../../types/statement';
import { dataTypeKey } from '@/compile/tokens/programming/const/dataType';

export const mock_import: Statement.Import = {
  _statement_: statementType.import,
  default: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'temp',
  },
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
};
export const mock_import_all: Statement.Import = {
  _statement_: statementType.import,
  all: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'alias',
  },
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
};
export const mock_import_element: Statement.Import = {
  _statement_: statementType.import,
  elements:[
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      }
    }
  ] ,
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
};
export const mock_import_element_as: Statement.Import = {
  _statement_: statementType.import,
  elements:[
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'alias',
      },
      propertyName: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      }
    }
  ] ,
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
};
export const mock_import_elements: Statement.Import = {
  _statement_: statementType.import,
  elements:[
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      }
    },
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp1',
      }
    }
  ] ,
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
};
export const mock_import_elements_as: Statement.Import = {
  _statement_: statementType.import,
  elements:[
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      }
    },
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'alias',
      },
      propertyName: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp1',
      }
    }
  ] ,
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
};

export const mock_import_element_default: Statement.Import = {
  _statement_: statementType.import,
  default: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'defaultTemp',
  },
  elements:[
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      }
    },
  ] ,
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
}

export const mock_import_default_all: Statement.Import = {
  _statement_: statementType.import,
  default: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'defaultTemp',
  },
  all: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'alias',
  },
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
}

export const mock_import_only_path: Statement.Import = {
  _statement_: statementType.import,
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
}