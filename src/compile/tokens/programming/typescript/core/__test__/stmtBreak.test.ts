import { describe, it, expect } from 'vitest';
import { statement } from '../statement';
import { mock_break, mock_break1 } from './fixtures/stmtBreak';

describe('statement break', () => {
  it('break', () => {
    const code = statement.break(mock_break);
    expect(`break`).toEqual(code);
  });
  it('break1', () => {
    const code = statement.break(mock_break1);
    expect(`break for1`).toEqual(code);
  });
});
