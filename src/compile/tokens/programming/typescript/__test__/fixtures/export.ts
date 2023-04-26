import { Statement } from "../../../types/statement";

// export{temp}from'module'
// export{default as alias,temp,temp1}from'module'
// export*from'module'
// export * as alias from'module'
// export{temp,temp1}

export const mock_export: Statement.Export = {
  _statement_: 'export',
  elements: [
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      },
    },
  ],
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
}
export const mock_export_default: Statement.Export = {
  _statement_: 'export',
  elements: [
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'alias',
      },
      propertyName: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'default',
      },
    },
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      },
    },
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp1',
      },
    },
  ],
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
}
export const mock_export_all: Statement.Export = {
  _statement_: 'export',
  all: true,
  path: {
    _statement_: 'expression',
    _expression_: 'literal',
    type: 'string',
    value: 'module',
  },
}
export const mock_export_all_as: Statement.Export = {
  _statement_: 'export',
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
export const mock_export_without_path: Statement.Export = {
  _statement_: 'export',
  elements: [
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      },
    },
    {
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp1',
      },
    },
  ]
}