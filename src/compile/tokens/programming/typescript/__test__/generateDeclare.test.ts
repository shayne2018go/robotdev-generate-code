import { describe, it, expect } from 'vitest';
import { GenerateTypeScript } from '../core';
import {
  mock_declare,
  mock_declare_const,
  mock_declare_type,
  mock_declare_type_value,
  mock_declare_value,
} from './fixtures/declare';

describe('GenerateTypeScript', () => {
  describe('declare', () => {
    it('declare', () => {
      const code = new GenerateTypeScript().declare(mock_declare);
      expect(`let title`).toEqual(code);
    });
    it('declare is const', () => {
      const code = new GenerateTypeScript().declare(mock_declare_const);
      expect(`const title`).toEqual(code);
    });
    it('declare type', () => {
      const code = new GenerateTypeScript().declare(mock_declare_type);
      expect(`let title:string|number`).toEqual(code);
    });
    it('declare has value', () => {
      const code = new GenerateTypeScript().declare(mock_declare_value);
      expect(`let title='中国'`).toEqual(code);
    });
    it('declare has type', () => {
      const code = new GenerateTypeScript().declare(mock_declare_type_value);
      expect(`let title:string='中国'`).toEqual(code);
    });
  });
});
