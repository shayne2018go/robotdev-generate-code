import { IComplexData, IJson, ISimpleData } from '../types';
import { JsonDataType } from '../types/jsonDataType';

/**
 * 是否是复杂类型schema
 * @param {any} schema
 * @returns {boolean}
 */
const isComplex = (schema: any): schema is IComplexData => {
  return [JsonDataType['object'], JsonDataType['array']].includes(schema.type);
};

/**
 * 是否是简单类型schema
 * @param {any} schema
 * @returns {boolean}
 */
const isSimple = (schema: any): schema is ISimpleData => {
  return [JsonDataType['null'], JsonDataType['string'], JsonDataType['number'], JsonDataType['boolean']].includes(
    schema.type
  );
};

/**
 * 简单类型schema转code
 * @param {ISimpleData} schema
 * @returns {string}
 */
const generateSimpleData = (schema: ISimpleData): string => {
  let code = '';
  const { type } = schema;
  if (type !== JsonDataType['null']) {
    const { value } = schema;
    if (type === JsonDataType['string']) {
      code = `"${value}"`;
    } else if (type === JsonDataType['number']) {
      code = `${value}`;
    } else if (type === JsonDataType['boolean']) {
      code = `${value}`;
    } else {
      throw new Error('not found json simple schema type')
    }
  } else {
    code = 'null';
  }
  return code;
};

/**
 * 复杂类型schema转code
 * @param {IComplexData} schema
 * @returns {string}
 */
const generateComplexData = (schema: IComplexData): string => {
  let code = '';
  const { type, value } = schema;
  const vLen = value.length;
  if (type === JsonDataType['object']) {
    let objectCode = '{';
    for (let index = 0; index < vLen; index++) {
      const item = value[index];
      const { key, value: itemValue } = item;
      const isNotLast = index !== vLen - 1;
      objectCode += `"${key}":${
        isComplex(itemValue)
          ? generateComplexData(itemValue)
          : generateSimpleData(itemValue)
      }${isNotLast ? ',' : ''}`;
    }
    code = objectCode + '}';
  } else if (type === JsonDataType['array']) {
    let arrayCode = '[';
    for (let index = 0; index < vLen; index++) {
      const itemValue = value[index];
      const isNotLast = index !== vLen - 1;
      arrayCode += `${
        isComplex(itemValue)
          ? generateComplexData(itemValue)
          : generateSimpleData(itemValue)
      }${isNotLast ? ',' : ''}`;
    }
    code = arrayCode + ']';
  } else {
    throw new Error('not found json complex schema type')
  }
  return code;
};

/**
 * 简单类型schema转code
 * @param {IComplexData} schema
 * @returns {string}
 */
export const generateJson = (schema: IJson): string => {
  let code = '';
  if (isComplex(schema)) {
    code = generateComplexData(schema);
  } else if (isSimple(schema)) {
    code = generateSimpleData(schema);
  } else {
    throw new Error('not found json schema type')
  }
  return code;
};
