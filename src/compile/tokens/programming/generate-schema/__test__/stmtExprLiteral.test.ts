import { describe, expect, it } from 'vitest';
import { literal } from '../literal';
import {
  literal_array,
  literal_boolean,
  literal_date,
  literal_datetime,
  literal_decimal,
  literal_function,
  literal_int,
  literal_long1,
  literal_long2,
  literal_null,
  literal_object1,
  literal_string1,
  literal_string2,
  literal_time,
  literal_timestamp,
  literal_tuple,
  literal_void,
} from './fixtures/stmtExprLiteral';

describe('statement expression literal', () => {
  it('void', () => {
    const code = literal.void();
    expect(literal_void).toEqual(code);
  });
  it('null', () => {
    const code = literal.null();
    expect(literal_null).toEqual(code);
  });
  it('string is null', () => {
    const code = literal.string();
    expect(literal_string1).toEqual(code);
  });
  it('string', () => {
    const code = literal.string('这是"双引号"，这是\'单引号\'');
    expect(literal_string2).toEqual(code);
  });
  it('long not found', () => {
    const code = literal.long();
    expect(literal_long1).toEqual(code);
  });
  it('long', () => {
    const code = literal.long(`<p>这是一段文本</p>`);
    expect(literal_long2).toEqual(code);
  });
  it('boolean', () => {
    const code = literal.boolean(true);
    expect(literal_boolean).toEqual(code);
  });
  it('int', () => {
    const code = literal.int(89757);
    expect(literal_int).toEqual(code);
  });
  it('decimal', () => {
    const code = literal.decimal(literal_decimal);
    expect(`3.1415926`).toEqual(code);
  });
  it('object', () => {
    const code = literal.object(literal_object1);
    expect(`{title:"中国",[getText()]:()=>{let a="abc";let b=123;}}`).toEqual(code);
  });
  it('array', () => {
    const code = literal.array(literal_array);
    expect(`["a",1,false]`).toEqual(code);
  });
  it('tuple', () => {
    const code = literal.tuple(literal_tuple);
    expect(`["a",1,false]`).toEqual(code);
  });
  it('function', () => {
    const code = literal.function(literal_function);
    expect(`(a:string,b:boolean)=>{let a="abc";let b=123;}`).toEqual(code);
  });
  it('datetime', () => {
    const code = literal.datetime(literal_datetime);
    expect(`"Thu Apr 27 2023 17:01:16 GMT+0800 (中国标准时间)"`).toEqual(code);
  });
  it('date', () => {
    const code = literal.date(literal_date);
    expect(`"2023/4/27"`).toEqual(code);
  });
  it('time', () => {
    const code = literal.time(literal_time);
    expect(`"17:02:20"`).toEqual(code);
  });
  it('timestamp', () => {
    const code = literal.timestamp(literal_timestamp);
    expect(`"1682586168861"`).toEqual(code);
  });
});
