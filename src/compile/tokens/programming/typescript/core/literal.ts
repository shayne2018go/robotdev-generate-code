import { helper } from '../../shared/tools/check';
import { DataType } from '../../types/dataType';
import { Expression } from '../../types/expression';
import { Config } from '../types';

export const literalHelper = {
  getFn(name: DataType.TypeKeyEnum) {
    if (typeof literal[name] !== 'function') {
      return false;
    }
    return literal[name];
  },
};

export const literal = {
  string(schema: Expression.Literal_String, config?: Config) {
    if (!helper.literal.isString(schema)) {
      throw new Error('dataType.string 方法的 schema参数 错误！');
    }
    let code = `'${schema.value}'`;
    return code;
  },
  boolean(schema: Expression.Literal_Boolean, config?: Config) {
    if (!helper.literal.isBoolean(schema)) {
      throw new Error('dataType.boolean 方法的 schema参数 错误！');
    }
    if (typeof schema.value !== 'boolean') {
      throw new Error('dataType.boolean 方法的 schema.value 参数 错误！');
    }
    let code = `${schema.value.toString()}`;
    return code;
  },
  object(schema: Expression.Literal_Object, config?: Config) {
    let code = '';
    return code;
  },
  function(schema: Expression.Literal_Function, config?: Config) {
    let code = '';
    return code;
  },
  null(schema: Expression.Literal_Null, config?: Config) {
    let code = '';
    return code;
  },
  long(schema: Expression.Literal_Long, config?: Config) {
    let code = '';
    return code;
  },
  int(schema: Expression.Literal_Int, config?: Config) {
    if (!helper.isInt(schema)) {
      throw new Error('dataType.int 方法的 schema参数 错误！');
    }
    let code = `${schema.value}`;
    return code;
  },
  decimal(schema: Expression.Literal_Decimal, config?: Config) {
    if (!helper.isDecimal(schema)) {
      throw new Error('dataType.decimal 方法的 schema参数 错误！');
    }
    let code = `${schema.value}`;
    return code;
  },
  array(schema: Expression.Literal_Array, config?: Config) {
    let code = '';
    return code;
  },
  tuple(schema: Expression.Literal_Tuple, config?: Config) {
    let code = '';
    return code;
  },
  enum(schema: Expression.Literal_Enum, config?: Config) {
    let code = '';
    return code;
  },
  datetime(schema: Expression.Literal_Datetime, config?: Config) {
    let code = '';
    return code;
  },
  date(schema: Expression.Literal_Date, config?: Config) {
    let code = '';
    return code;
  },
  time(schema: Expression.Literal_Time, config?: Config) {
    let code = '';
    return code;
  },
  timestamp(schema: Expression.Literal_Timestamp, config?: Config) {
    let code = '';
    return code;
  },
};
