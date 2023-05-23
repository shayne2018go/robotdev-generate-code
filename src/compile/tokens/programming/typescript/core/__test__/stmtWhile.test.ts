import { statement } from '../statement';
import { mock_while } from './fixtures/stmtWhile';

describe('statement while', () => {
  it('while', () => {
    const code = statement.while(mock_while);
    expect(`while(index<10){index++;}`).toEqual(code);
  });
});
