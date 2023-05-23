import { dataType } from '../dataType';
import {
  dataType_void,
  dataType_null,
  dataType_string,
  dataType_long,
  dataType_boolean,
  dataType_int,
  dataType_decimal,
  dataType_object1,
  dataType_object2,
  dataType_array,
  dataType_tuple,
  dataType_function1,
  dataType_function2,
  dataType_datetime,
  dataType_date,
  dataType_time,
  dataType_timestamp,
} from './fixtures/stmtExprDataType';

describe('statement expression dataType', () => {
  it('void', () => {
    const code = dataType.void(dataType_void);
    expect(`void`).toEqual(code);
  });
  it('null', () => {
    const code = dataType.null(dataType_null);
    expect(`null | undefined`).toEqual(code);
  });
  it('string', () => {
    const code = dataType.string(dataType_string);
    expect(`string`).toEqual(code);
  });
  it('long', () => {
    const code = dataType.long(dataType_long);
    expect(`string`).toEqual(code);
  });
  it('boolean', () => {
    const code = dataType.boolean(dataType_boolean);
    expect(`boolean`).toEqual(code);
  });
  it('int', () => {
    const code = dataType.int(dataType_int);
    expect(`number`).toEqual(code);
  });
  it('decimal', () => {
    const code = dataType.decimal(dataType_decimal);
    expect(`number`).toEqual(code);
  });
  it('object { ... }', () => {
    const code = dataType.object(dataType_object1);
    expect(`{title:string;length:number;}`).toEqual(code);
  });
  it('object record', () => {
    const code = dataType.object(dataType_object2);
    expect(`Record<string|number,string|boolean>`).toEqual(code);
  });
  it('array', () => {
    const code = dataType.array(dataType_array);
    expect(`Array<string|number|boolean>`).toEqual(code);
  });
  it('tuple', () => {
    const code = dataType.tuple(dataType_tuple);
    expect(`[string,number,boolean]`).toEqual(code);
  });
  it('function', () => {
    const code = dataType.function(dataType_function1);
    expect(`(a:string,b:number)=>void`).toEqual(code);
  });
  it('function void', () => {
    const code = dataType.function(dataType_function2);
    expect(`(a:string,b:string|number)=>string|boolean`).toEqual(code);
  });
  it('datetime', () => {
    const code = dataType.datetime(dataType_datetime);
    expect(`string`).toEqual(code);
  });
  it('date', () => {
    const code = dataType.date(dataType_date);
    expect(`string`).toEqual(code);
  });
  it('time', () => {
    const code = dataType.time(dataType_time);
    expect(`string`).toEqual(code);
  });
  it('timestamp', () => {
    const code = dataType.timestamp(dataType_timestamp);
    expect(`string`).toEqual(code);
  });
});
