import { IJson, IJson_Array, IJson_Boolean, IJson_Null, IJson_Number, IJson_Object, IJson_String } from '../types';
import { JsonDataType } from '../types/jsonDataType';

/**
 * json schema 转 code string
 * @param {IJson} schema
 * @returns {string}
 */
export const generateJson = (schema: IJson): string => {
  const { type } = schema;
  switch (type) {
    case JsonDataType['string']: {
      return generateString(schema);
    }
    case JsonDataType['number']: {
      return generateNumber(schema);
    }
    case JsonDataType['boolean']: {
      return generateBoolean(schema);
    }
    case JsonDataType['null']: {
      return generateNull(schema);
    }
    case JsonDataType['object']: {
      return generateObject(schema);
    }
    case JsonDataType['array']: {
      return generateArray(schema);
    }
    default:
      throw new Error(`generateJson: not found json schema type ${type}`);
  }
};

/**
 * json string schema 转 code string
 * @param {IJson_String} schema 
 * @returns {string}
 */
const generateString = (schema: IJson_String): string => {
  const { value } = schema;
  return `"${value}"`;
};

/**
 * json number schema 转 code string
 * @param {IJson_Number} schema 
 * @returns {string}
 */
const generateNumber = (schema: IJson_Number): string => {
  const { value } = schema;
  return `${value}`;
};

/**
 * json boolean schema 转 code string
 * @param {IJson_Boolean} schema 
 * @returns {string}
 */
const generateBoolean = (schema: IJson_Boolean): string => {
  const { value } = schema;
  return `${value}`;
};

/**
 * json null schema 转 code string
 * @param {IJson_Null} _schema 
 * @returns {string}
 */
const generateNull = (_schema: IJson_Null): string => {
  return 'null';
};

/**
 * json object schema 转 code string
 * @param {IJson_Object} schema 
 * @returns {string}
 */
const generateObject = (schema: IJson_Object): string => {
  let code = '{';
  const { value } = schema;
  const vLen = value.length;
  for (let index = 0; index < vLen; index++) {
    const item = value[index];
    const { key, value: itemValue } = item;
    const isNotLast = index !== vLen - 1;
    const comma = isNotLast ? ',' : '';
    code += `"${key}":${generateJson(itemValue)}${comma}`;
  }
  code += '}';
  return code;
};

/**
 * json array schema 转 code string
 * @param {IJson_Array} schema 
 * @returns {string}
 */
const generateArray = (schema: IJson_Array): string => {
  let code = '[';
  const { value } = schema;
  const vLen = value.length;
  for (let index = 0; index < vLen; index++) {
    const itemValue = value[index];
    const isNotLast = index !== vLen - 1;
    const comma = isNotLast ? ',' : '';
    code += `${generateJson(itemValue)}${comma}`;
  }
  code += ']';
  return code;
};
