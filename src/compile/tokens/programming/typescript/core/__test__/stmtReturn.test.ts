import { statement } from '../statement';
import { mock_return } from './fixtures/stmtReturn';

describe('statement return', () => {
  it('return', () => {
    const code = statement.return(mock_return);
    expect(`return true`).toEqual(code);
  });
});
