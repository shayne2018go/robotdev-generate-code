import { ICss, IStyle, ICss_CommonSchema, ICss_BlockSchema, ICss_AttrSchema, ICss_Item } from '../types';
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
    code += generateCssData(item);
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
 * CssItem 转 css string
 * @param {ICss_Item} item
 * @returns {string}
 */
const generateCssData = (item: ICss_Item): string => {
  const { type } = item;
  switch (type) {
    case CssDataType['block']:
      return generateBlockData(item);
    case CssDataType['attr']:
      return generateAttrData(item);
    case CssDataType['common']:
      return generateCommonData(item);

    default:
      throw new Error(`generateCssData: not found css schema type ${type}`);
  }
};

/**
 * BlockSchema 转 block string
 * @param {ICss_BlockSchema} schema
 * @returns {string}
 */
const generateBlockData = (schema: ICss_BlockSchema): string => {
  const { key, value: items } = schema;
  const value = items.reduce((start, ele) => start + generateCssData(ele), '');
  return `${key}{${value}}`;
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
