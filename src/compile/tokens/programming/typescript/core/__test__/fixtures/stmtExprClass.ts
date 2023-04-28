import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { dataTypeKey } from '@/compile/tokens/programming/const/dataType';
import { Statement } from '@/compile/tokens/programming/types/statement';

export const mock_class: Statement.DeclareClass = {
  _statement_: statementType.class,
  name: {
    _statement_: statementType.expression,
    _expression_: expressionType.identifier,
    escapedText: 'Demo',
  },
  members: [
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'constructor',
      },
      value: {
        _statement_: statementType.expression,
        _expression_: expressionType.literal,
        type: dataTypeKey.function,
        mode: 'method',
        value: [],
        parameters: [
          {
            key: {
              _statement_: statementType.expression,
              _expression_: expressionType.identifier,
              escapedText: 'x',
            },
            types: [],
          },
          {
            key: {
              _statement_: statementType.expression,
              _expression_: expressionType.identifier,
              escapedText: 'y',
            },
            types: [],
          },
        ],
      },
    },
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'func',
      },
      value: {
        _statement_: statementType.expression,
        _expression_: expressionType.literal,
        type: dataTypeKey.function,
        mode: 'method',
        value: [],
        parameters: [],
      },
    },
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'func1',
      },
      value: {
        _statement_: statementType.expression,
        _expression_: expressionType.literal,
        type: dataTypeKey.function,
        mode: 'arrow',
        value: [],
      },
    },
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      },
      dataTypes: [
        {
          _statement_: statementType.expression,
          _expression_: expressionType.dataType,
          type: 'string',
        },
      ],
      value: {
        _statement_: statementType.expression,
        _expression_: expressionType.literal,
        type: dataTypeKey.string,
        value: 'Point',
      },
    },
    {
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp1',
      },
      dataTypes: [
        {
          _statement_: statementType.expression,
          _expression_: expressionType.dataType,
          type: 'string',
        },
        {
          _statement_: statementType.expression,
          _expression_: expressionType.dataType,
          type: 'int'
        },
      ],
      value: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'title',
      },
    },
  ],
};
