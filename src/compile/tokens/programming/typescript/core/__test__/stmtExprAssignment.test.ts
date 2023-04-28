import { describe, it, expect } from 'vitest';
import { expression } from '../expression';
import { expression_assignment, expression_assignment1 } from './fixtures/stmtExprAssignment';

describe('statement expression assignment', () => {
  it('assignment', () => {
    const code = expression.assignment(expression_assignment);
    expect(`age=18`).toEqual(code);
  });
  it('assignment1', () => {
    const code = expression.assignment(expression_assignment1);
    expect(`this.age=18`).toEqual(code);
  });
});
