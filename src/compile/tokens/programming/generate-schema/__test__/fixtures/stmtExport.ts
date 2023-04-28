import { expressionType, statementType } from "@/compile/tokens/programming/const/statementType";
import { Statement } from "../../../../types/statement";
import { dataTypeKey } from "@/compile/tokens/programming/const/dataType";

export const mock_export: Statement.Export = {
  _statement_: statementType.export,
  elements: [
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      },
    },
  ],
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
}
export const mock_export_default: Statement.Export = {
  _statement_: statementType.export,
  elements: [
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'alias',
      },
      propertyName: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'default',
      },
    },
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      },
    },
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp1',
      },
    },
  ],
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
}
export const mock_export_all: Statement.Export = {
  _statement_: statementType.export,
  all: true,
  path: {
    _statement_: statementType.expression,
    _expression_: expressionType.literal,
    type: dataTypeKey.string,
    value: 'module',
  },
}
export const mock_export_all_as: Statement.Export = {
  _statement_: statementType.export,
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
export const mock_export_without_path: Statement.Export = {
  _statement_: statementType.export,
  elements: [
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      },
    },
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp1',
      },
    },
  ]
}