import { describe, it, expect } from 'vitest';
import { dataType } from '../dataType';
import { dataType_string, dataType_int, dataType_decimal } from './fixtures/stmtExprDataType';

describe('statement expression dataType', () => {
  it('string', () => {
    const code = dataType.string(dataType_string);
    expect(`string`).toEqual(code);
  });
  it('int', () => {
    const code = dataType.int(dataType_int);
    expect(`number`).toEqual(code);
  });
  it('decimal', () => {
    const code = dataType.decimal(dataType_decimal);
    expect(`number`).toEqual(code);
  });
});
