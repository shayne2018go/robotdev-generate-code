import { expression } from '../expression';
import {
  expression_call,
  expression_call1,
  expression_call2,
  expression_call3,
  expression_call4,
  expression_call5,
  expression_call6,
} from './fixtures/stmtExprCall';

describe('statement expression call', () => {
  it(`output: func('abc',200,true)`, () => {
    const code = expression.call(expression_call);
    expect(`func('abc',200,true)`).toEqual(code);
  });
  it('output: tools.isString()', () => {
    const code = expression.call(expression_call1);
    expect(`tools.isString()`).toEqual(code);
  });
  it(`output: tools['isString']`, () => {
    const code = expression.call(expression_call2);
    expect(`tools['isString']()`).toEqual(code);
  });
  it(`output: list[0]()`, () => {
    const code = expression.call(expression_call3);
    expect(`list[0]()`).toEqual(code);
  });
  it(`output: list[0]['isString']()`, () => {
    const code = expression.call(expression_call4);
    expect(`list[0]['isString']()`).toEqual(code);
  });
  it(`output: list[0].tools['isString']()`, () => {
    const code = expression.call(expression_call5);
    expect(`list[0].tools['isString']()`).toEqual(code);
  });
  it(`output: tools[isString(title)]()`, () => {
    const code = expression.call(expression_call6);
    expect(`tools[isString(title)]()`).toEqual(code);
  });
});
