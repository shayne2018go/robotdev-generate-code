import { describe, it, expect } from 'vitest';
import { statement } from '../statement';
import { mock_class } from './fixtures/stmtExprClass';

describe('statement class', () => {
  it('class', () => {
    const code = statement.declareClass(mock_class);
    expect(`class Demo{constructor(x,y){};func(){};func1=()=>{};temp:string="Point";temp1:string|number=title;}`).toEqual(code);
  });
});
