import { statement } from '../statement';
import { mock_if, mock_if_else, mock_if_elseIf, mock_if_elseIf_statement } from './fixtures/stmtIf';

describe('statement if', () => {
  it('if', () => {
    const code = statement.if(mock_if);
    expect(`if(temp){}`).toEqual(code);
  });
  it('if else', () => {
    const code = statement.if(mock_if_else);
    expect(`if(temp){}else{}`).toEqual(code);
  });
  it('if elseIf else', () => {
    const code = statement.if(mock_if_elseIf);
    expect(`if(temp){}else if(temp1){}else if(temp2){}else{}`).toEqual(code);
  });
  it('if elseIf else statement', () => {
    const code = statement.if(mock_if_elseIf_statement);
    expect(`if(temp){console.log(1);}else{let title='中国';console.log(title);}`).toEqual(code);
  });
});
