import { describe, it, expect } from 'vitest';
import { expression } from '../expression';
import {
  expression_access1,
  expression_access2,
  expression_access3,
  expression_access4,
  expression_access5,
} from './fixtures/stmtExprAccess';

describe('statement expression access', () => {
  it('output: tools.isString', () => {
    const code = expression.access(expression_access1);
    expect(`tools.isString`).toEqual(code);
  });
  it(`output: tools['isString']`, () => {
    const code = expression.access(expression_access2);
    expect(`tools['isString']`).toEqual(code);
  });
  it(`output: list[0]`, () => {
    const code = expression.access(expression_access3);
    expect(`list[0]`).toEqual(code);
  });
  it(`output: list[0]['isString']`, () => {
    const code = expression.access(expression_access4);
    expect(`list[0]['isString']`).toEqual(code);
  });
  it(`output: list[0].tools.['isString']`, () => {
    const code = expression.access(expression_access5);
    expect(`list[0].tools.['isString']`).toEqual(code);
  });
});
