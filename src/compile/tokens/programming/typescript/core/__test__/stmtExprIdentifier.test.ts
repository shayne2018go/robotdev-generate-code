import { describe, it, expect } from 'vitest';
import { expression } from '../expression';
import { expression_identifier1 } from './fixtures/stmtExprIdentifier';

describe('statement expression identifier', () => {
  it('output: identifierText', () => {
    const code = expression.identifier(expression_identifier1);
    expect(`identifierText`).toEqual(code);
  });
});
