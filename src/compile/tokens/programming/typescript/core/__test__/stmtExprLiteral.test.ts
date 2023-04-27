import { describe, it, expect } from 'vitest';
import { literal } from '../literal';
import { literal_string, literal_int, literal_decimal } from './fixtures/stmtExprLiteral';

describe('statement expression literal', () => {
  it('string', () => {
    const code = literal.string(literal_string);
    expect(`'这是一条文本'`).toEqual(code);
  });
  it('int', () => {
    const code = literal.int(literal_int);
    expect(`89757`).toEqual(code);
  });
  it('decimal', () => {
    const code = literal.decimal(literal_decimal);
    expect(`3.1415926`).toEqual(code);
  });
});
