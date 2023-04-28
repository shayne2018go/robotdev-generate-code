import { describe, it, expect } from 'vitest';
import { statement } from '../statement';
import {
  mock_declareVariable,
  mock_declareVariable_const,
  mock_declareVariable_type,
  mock_declareVariable_type_value,
  mock_declareVariable_value,
} from './fixtures/stmtDeclareVariable';

describe('statement declareVariable', () => {
  it('declareVariable', () => {
    const code = statement.declareVariable(mock_declareVariable);
    expect(`let title`).toEqual(code);
  });
  it('declareVariable is const', () => {
    const code = statement.declareVariable(mock_declareVariable_const);
    expect(`const title`).toEqual(code);
  });
  it('declareVariable type', () => {
    const code = statement.declareVariable(mock_declareVariable_type);
    expect(`let title:string|number`).toEqual(code);
  });
  it('declareVariable has value', () => {
    const code = statement.declareVariable(mock_declareVariable_value);
    expect(`let title='中国'`).toEqual(code);
  });
  it('declareVariable has type', () => {
    const code = statement.declareVariable(mock_declareVariable_type_value);
    expect(`let title:string='中国'`).toEqual(code);
  });
});
