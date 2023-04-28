import { describe, it, expect } from 'vitest';
import { statement } from '../statement';
import { mock_throw } from './fixtures/stmtThrow';

describe('statement throw', () => {
  it('throw', () => {
    const code = statement.throw(mock_throw);
    expect(`throw new Error(message)`).toEqual(code);
  });
});
