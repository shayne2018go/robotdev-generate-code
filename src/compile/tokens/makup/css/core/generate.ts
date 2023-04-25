import {
  IBlock,
  IAttr,
  IBlock_CommonSchema,
  IBlock_BlockSchema,
  IBlock_AttrSchema,
} from '../types';
import { CssDataType } from '../types/cssDataType';

/**
 * 数组BlockSchema值转block
 * @param {IBlock} array
 * @returns {string}
 */
export const generateBlock = (array: IBlock): string => {
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
 * 数组AttrSchema值转attr
 * @param {IAttr} array
 * @returns {string}
 */
export const generateAttr = (array: IAttr): string => {
  let code = '';
  const vLen = array.length;
  for (let index = 0; index < vLen; index++) {
    const item = array[index];
    code += generateAttrData(item);
  }
  return code;
};

/**
 * BlockSchema转block
 * @param schema 
 * @returns {string}
 */
const generateBlockData = (schema: IBlock_BlockSchema): string => {
  const { key, value } = schema;
  return `${key}{${generateBlock(value)}}`;
};

/**
 * AttrSchema转attr
 * @param schema 
 * @returns {string}
 */
const generateAttrData = (schema: IBlock_AttrSchema): string => {
  const { key, value } = schema;
  return `${key}:${value};`;
};

/**
 * CommonSchema转code
 * @param schema 
 * @returns {string}
 */
const generateCommonData = (schema: IBlock_CommonSchema): string => {
  let code = '';
  const { key, value } = schema;
  code += `${key} ${value};`;
  return code;
};
