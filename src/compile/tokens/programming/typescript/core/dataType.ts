import { DataType } from '../../types/dataType';
import { Config } from '../types';

export const dataTypeHelper = {
  getFn(name: DataType.TypeKeyEnum) {
    if (typeof dataType[name] !== 'function') {
      return false;
    }
    return dataType[name];
  },
};

export const dataType = {
  string(schema: DataType.Schema_String, config?: Config) {
    let code = '';
    return code;
  },
  boolean(schema: DataType.Schema_Boolean, config?: Config) {
    let code = '';
    return code;
  },
  object(schema: DataType.Schema_Object, config?: Config) {
    let code = '';
    return code;
  },
  function(schema: DataType.Schema_Function, config?: Config) {
    let code = '';
    return code;
  },
  null(schema: DataType.Schema_Null, config?: Config) {
    let code = '';
    return code;
  },
  long(schema: DataType.Schema_Long, config?: Config) {
    let code = '';
    return code;
  },
  int(schema: DataType.Schema_Int, config?: Config) {
    let code = '';
    return code;
  },
  decimal(schema: DataType.Schema_Decimal, config?: Config) {
    let code = '';
    return code;
  },
  array(schema: DataType.Schema_Array, config?: Config) {
    let code = '';
    return code;
  },
  tuple(schema: DataType.Schema_Tuple, config?: Config) {
    let code = '';
    return code;
  },
  enum(schema: DataType.Schema_Enum, config?: Config) {
    let code = '';
    return code;
  },
  datetime(schema: DataType.Schema_Datetime, config?: Config) {
    let code = '';
    return code;
  },
  date(schema: DataType.Schema_Date, config?: Config) {
    let code = '';
    return code;
  },
  time(schema: DataType.Schema_Time, config?: Config) {
    let code = '';
    return code;
  },
  timestamp(schema: DataType.Schema_Timestamp, config?: Config) {
    let code = '';
    return code;
  },
};
