import { expression } from '../expression';
import { expression_new } from './fixtures/stmtExprNew';

describe('statement expression new', () => {
  it('new', () => {
    const code = expression.new(expression_new);
    expect(`new Factory(type,true,"1998")`).toEqual(code);
  });
});
