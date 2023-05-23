import { expression } from '../expression';
import { expression_conditional } from './fixtures/stmtExprConditional';

describe('statement expression conditional', () => {
  it('conditional', () => {
    const code = expression.conditional(expression_conditional);
    expect(`age>=18?"adult":"minor"`).toEqual(code);
  });
});
