import { expressionType, statementType } from '@/compile/tokens/programming/const/statementType';
import { Statement } from '../../../../types/statement';
import { dataTypeKey } from '@/compile/tokens/programming/const/dataType';

export const mock_if: Statement.If = {
  _statement_: statementType.if,
  ifs: [
    [
      {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      },
      [],
    ],
  ],
};
export const mock_if_else: Statement.If = {
  _statement_: statementType.if,
  ifs: [
    [
      {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      },
      [],
    ],
  ],
  else: [],
};
export const mock_if_elseIf: Statement.If = {
  _statement_: statementType.if,
  ifs: [
    [
      {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      },
      [],
    ],
    [
      {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp1',
      },
      [],
    ],
    [
      {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp2',
      },
      [],
    ],
  ],
  else: [],
};
export const mock_if_elseIf_statement: Statement.If = {
  _statement_: statementType.if,
  ifs: [
    [
      {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'temp',
      },
      [
        {
          _statement_: statementType.expression,
          _expression_: expressionType.call,
          expression: {
            _statement_: statementType.expression,
            _expression_: expressionType.access,
            expression: {
              _statement_: statementType.expression,
              _expression_: expressionType.identifier,
              escapedText: 'console',
            },
            name: {
              _statement_: statementType.expression,
              _expression_: expressionType.identifier,
              escapedText: 'log',
            },
          },
          args: [
            {
              _statement_: statementType.expression,
              _expression_: expressionType.literal,
              type: dataTypeKey.int,
              value: 1,
            },
          ],
        },
      ],
    ],
  ],
  else: [
    {
      _statement_: statementType.declare,
      name: {
        _statement_: statementType.expression,
        _expression_: expressionType.identifier,
        escapedText: 'title',
      },
      value: {
        _statement_: statementType.expression,
        _expression_: expressionType.literal,
        type: dataTypeKey.string,
        value: '中国',
      },
    },
    {
      _statement_: statementType.expression,
      _expression_: expressionType.call,
      expression: {
        _statement_: statementType.expression,
        _expression_: expressionType.access,
        expression: {
          _statement_: statementType.expression,
          _expression_: expressionType.identifier,
          escapedText: 'console',
        },
        name: {
          _statement_: statementType.expression,
          _expression_: expressionType.identifier,
          escapedText: 'log',
        },
      },
      args: [
        {
          _statement_: statementType.expression,
          _expression_: expressionType.identifier,
          escapedText: 'title',
        },
      ],
    },
  ],
};
