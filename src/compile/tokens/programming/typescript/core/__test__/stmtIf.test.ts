import { describe, it, expect } from 'vitest';
import { statement } from '../statement';
import {
  mock_if, mock_if_else, mock_if_elseIf, mock_if_elseIf_statement
} from './fixtures/stmtIf';

describe('statement if', () => {
  it('if', () => {
    const code = statement.if(mock_if);
    expect(`if(identifierText){}`).toEqual(code);
  });
  it('if else', () => {
    const code = statement.if(mock_if_else);
    expect(`if(identifierText){}else{}`).toEqual(code);
  });
  it('if elseIf else', () => {
    const code = statement.if(mock_if_elseIf);
    expect(`if(identifierText){}else if(func('abc',200,true)){}else{}`).toEqual(code);
  });
  it('if elseIf else statement', () => {
    const code = statement.if(mock_if_elseIf_statement);
    expect(`if(identifierText){func('abc',200,true);if(identifierText){}else{};}else{let title:string='中国';tools.isString();}`).toEqual(code);
  });
});