import { ICss, IStyle, ICss_CommonSchema, ICss_BlockSchema, ICss_AttrSchema } from '../types';
import { CssDataType } from '../types/cssDataType';

/**
 * css 数组转 css string
 * @param {ICss} array
 * @returns {string}
 */
export const generateCss = (array: ICss): string => {
  let code = '';
  const vLen = array.length;
  for (let index = 0; index < vLen; index++) {
    const item = array[index];
    const { type } = item;
    if (type === CssDataType['block']) {
      code += generateBlockData(item);
    } else if (type === CssDataType['attr']) {
      code += generateAttrData(item);
    } else if (type === CssDataType['common']) {
      code += generateCommonData(item);
    }
  }
  return code;
};

/**
 * 样式数组转 style string
 * @param {IStyle} array
 * @returns {string}
 */
export const generateStyle = (array: IStyle): string => {
  let code = '';
  const vLen = array.length;
  for (let index = 0; index < vLen; index++) {
    const item = array[index];
    code += generateAttrData(item);
  }
  return code;
};

/**
 * BlockSchema 转 block string
 * @param {ICss_BlockSchema} schema
 * @returns {string}
 */
const generateBlockData = (schema: ICss_BlockSchema): string => {
  const { key, value } = schema;
  return `${key}{${generateCss(value)}}`;
};

/**
 * AttrSchema 转 attr string
 * @param {ICss_AttrSchema} schema
 * @returns {string}
 */
const generateAttrData = (schema: ICss_AttrSchema): string => {
  const { key, value } = schema;
  return `${key}:${value};`;
};

/**
 * CommonSchema 转 common string
 * @param {ICss_CommonSchema} schema
 * @returns {string}
 */
const generateCommonData = (schema: ICss_CommonSchema): string => {
  let code = '';
  const { key, value } = schema;
  code += `${key} ${value};`;
  return code;
};
