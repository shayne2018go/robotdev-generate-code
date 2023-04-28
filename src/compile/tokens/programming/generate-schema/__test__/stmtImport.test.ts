import { describe, it, expect } from 'vitest';
import { statement } from '../statement';

describe('statement import', () => {
  it('import elements path', () => {
    const code = statement.import(null, [{ exportName: 'a', name: 'b' }, { name: 'c' }], 'module');
    expect({
      _statement_: 'import',
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
  it('import elements not path', () => {
    const code = statement.import(null, [{ exportName: 'a', name: 'b' }, { name: 'c' }]);
    expect({
      _statement_: 'import',
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
  it('import all path', () => {
    const code = statement.import('props', null, 'module');
    expect({
      _statement_: 'import',
      all: {
        _expression_: 'identifier',
        _statement_: 'expression',
        escapedText: 'props',
      },
      path: {
        _expression_: 'literal',
        _statement_: 'expression',
        type: 'string',
        value: 'module',
      },
    }).toEqual(code);
  });
});
