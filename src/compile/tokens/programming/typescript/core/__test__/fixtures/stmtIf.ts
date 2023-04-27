import { Statement } from '../../../../types/statement';
import { mock_declare_type_value } from './stmtDeclare';

export const mock_if: Statement.If = {
  _statement_: 'if',
  ifs: [
    [
      {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      },
      [],
    ],
  ],
};
export const mock_if_else: Statement.If = {
  _statement_: 'if',
  ifs: [
    [
      {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      },
      [],
    ],
  ],
  else: [],
};
export const mock_if_elseIf: Statement.If = {
  _statement_: 'if',
  ifs: [
    [
      {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      },
      [],
    ],
    [
      {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp1',
      },
      [],
    ],
    [
      {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp2',
      },
      [],
    ],
  ],
  else: [],
};
export const mock_if_elseIf_statement: Statement.If = {
  _statement_: 'if',
  ifs: [
    [
      {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'temp',
      },
      [
        {
          _statement_: 'expression',
          _expression_: 'call',
          expression: {
            _statement_: 'expression',
            _expression_: 'access',
            expression: {
              _statement_: 'expression',
              _expression_: 'identifier',
              escapedText: 'console',
            },
            name: {
              _statement_: 'expression',
              _expression_: 'identifier',
              escapedText: 'log',
            },
          },
          args: [
            {
              _statement_: 'expression',
              _expression_: 'literal',
              type: 'int',
              value: 1,
            },
          ],
        },
      ],
    ],
  ],
  else: [
    {
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
    },
    {
      _statement_: 'expression',
      _expression_: 'call',
      expression: {
        _statement_: 'expression',
        _expression_: 'access',
        expression: {
          _statement_: 'expression',
          _expression_: 'identifier',
          escapedText: 'console',
        },
        name: {
          _statement_: 'expression',
          _expression_: 'identifier',
          escapedText: 'log',
        },
      },
      args: [
        {
          _statement_: 'expression',
          _expression_: 'identifier',
          escapedText: 'title',
        },
      ],
    },
  ],
};
