import { expression } from '../expression';
import {
  expression_access1,
  expression_access2,
  expression_access3,
  expression_access4,
  expression_access5,
  expression_access6,
  expression_access7,
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
  it(`output: list[0].tools['isString']`, () => {
    const code = expression.access(expression_access5);
    expect(`list[0].tools['isString']`).toEqual(code);
  });
  it(`output(accessOptionalChainingDefault: true): list?.[0]?.tools?.['isString']`, () => {
    const code = expression.access(expression_access5, { accessOptionalChainingDefault: true });
    expect(`list?.[0]?.tools?.['isString']`).toEqual(code);
  });
  it(`output(isOptionalChaining: true): list?.[0]?.tools['isString']`, () => {
    const code = expression.access(expression_access6);
    expect(`list?.[0]?.tools['isString']`).toEqual(code);
  });
  it(`output(accessOptionalChainingDefault and isOptionalChaining: mix): list?.[0].tools['isString']`, () => {
    const code = expression.access(expression_access7, { accessOptionalChainingDefault: true });
    expect(`list?.[0].tools?.['isString']`).toEqual(code);
  });
});
