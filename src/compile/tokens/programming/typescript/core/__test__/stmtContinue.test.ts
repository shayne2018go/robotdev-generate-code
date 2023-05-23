import { statement } from '../statement';
import { mock_continue, mock_continue1 } from './fixtures/stmtContinue';

describe('statement continue', () => {
  it('continue', () => {
    const code = statement.continue(mock_continue);
    expect(`continue`).toEqual(code);
  });
  it('continue1', () => {
    const code = statement.continue(mock_continue1);
    expect(`continue for1`).toEqual(code);
  });
});
