import { describe, it, expect } from 'vitest';
import { statement } from '../statement';
import { mock_for } from './fixtures/stmtFor';

describe('statement for', () => {
  it('for', () => {
    const code = statement.for(mock_for);
    expect(`for(let index=0;index<10;index++){console.log(index);}`).toEqual(code);
  });
});
