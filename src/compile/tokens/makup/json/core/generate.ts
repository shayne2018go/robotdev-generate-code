import { IComplexData, IJson, ISimpleData } from '../types';
import { JsonDataType } from '../types/jsonDataType';

/**
 * 是否是复杂类型schema
 * @param {ISimpleData} schema
 * @returns {boolean}
 */
const isComplex = (schema: IJson): boolean => {
  return schema.type === JsonDataType['object'] || schema.type === JsonDataType['array'];
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
          ? generateComplexData(itemValue as IComplexData)
          : generateSimpleData(itemValue as ISimpleData)
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
          ? generateComplexData(itemValue as IComplexData)
          : generateSimpleData(itemValue as ISimpleData)
      }${isNotLast ? ',' : ''}`;
    }
    code = arrayCode + ']';
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
    code = generateComplexData(schema as IComplexData);
  } else {
    code = generateSimpleData(schema as ISimpleData);
  }
  return code;
};
