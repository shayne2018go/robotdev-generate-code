import { describe, it, expect } from 'vitest';
import { GenerateTypeScript } from '../core';

describe('GenerateTypeScript', () => {
  describe('declare', () => {
    it('declare', () => {
      const code = new GenerateTypeScript().declare({
        _statement_: 'declare',
        name: {
          _statement_: 'expression',
          _expression_: 'identifier',
          escapedText: 'title',
        },
      });
      expect(`let title`).toEqual(code);
    });
    it('declare is const', () => {
      const code = new GenerateTypeScript().declare({
        _statement_: 'declare',
        isConst: true,
        name: {
          _statement_: 'expression',
          _expression_: 'identifier',
          escapedText: 'title',
        },
      });
      expect(`const title`).toEqual(code);
    });
    it('declare has value', () => {
      const code = new GenerateTypeScript().declare({
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
      });
      expect(`let title='中国'`).toEqual(code);
    });
    it('declare has type', () => {
      const code = new GenerateTypeScript().declare({
        _statement_: 'declare',
        name: {
          _statement_: 'expression',
          _expression_: 'identifier',
          escapedText: 'title',
        },
        dataTypes: [
          {
            _statement_: 'expression',
            _expression_: 'dataType',
            type: 'string',
          },
        ],
        value: {
          _statement_: 'expression',
          _expression_: 'literal',
          type: 'string',
          value: '中国',
        },
      });
      expect(`let title:string='中国'`).toEqual(code);
    });
  });
});
