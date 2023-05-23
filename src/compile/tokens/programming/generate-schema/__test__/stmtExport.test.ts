import { statement } from '../statement';

describe('statement export', () => {
  it('export elements path', () => {
    const code = statement.export(null, [{ exportName: 'a', name: 'b' }, { name: 'c' }], 'module');
    expect({
      _statement_: 'export',
      elements: [
        {
          name: {
            _expression_: 'identifier',
            _statement_: 'expression',
            escapedText: 'b',
          },
          propertyName: {
            _expression_: 'identifier',
            _statement_: 'expression',
            escapedText: 'a',
          },
        },
        {
          name: {
            _expression_: 'identifier',
            _statement_: 'expression',
            escapedText: 'c',
          },
        },
      ],
      path: {
        _expression_: 'literal',
        _statement_: 'expression',
        type: 'string',
        value: 'module',
      },
    }).toEqual(code);
  });
  it('export elements not path', () => {
    const code = statement.export(null, [{ exportName: 'a', name: 'b' }, { name: 'c' }]);
    expect({
      _statement_: 'export',
      elements: [
        {
          name: {
            _expression_: 'identifier',
            _statement_: 'expression',
            escapedText: 'b',
          },
          propertyName: {
            _expression_: 'identifier',
            _statement_: 'expression',
            escapedText: 'a',
          },
        },
        {
          name: {
            _expression_: 'identifier',
            _statement_: 'expression',
            escapedText: 'c',
          },
        },
      ],
    }).toEqual(code);
  });
  it('export all path', () => {
    const code = statement.export(null, null, 'module');
    expect({
      _statement_: 'export',
      all: true,
      path: {
        _expression_: 'literal',
        _statement_: 'expression',
        type: 'string',
        value: 'module',
      },
    }).toEqual(code);
  });
});
