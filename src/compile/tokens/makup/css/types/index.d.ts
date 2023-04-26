import { CssDataType } from './cssDataType';

export type ICss_DataType = keyof typeof CssDataType;

export type ICss_DataTypeEnum = typeof CssDataType;

/**
 * 块状代码schema
 */
export interface ICss_BlockSchema {
  key: string;
  value: Array<ICss_Item>;
}

/**
 * 样式schema
 */
export interface ICss_AttrSchema {
  key: string;
  value: string;
}

/**
 * @ atrule 通用的 schema
 */
export interface ICss_CommonSchema {
  key: string;
  value: string;
}

export interface ICss_BlockItem extends ICss_BlockSchema {
  type: ICss_DataTypeEnum['block'];
}

export interface ICss_AttrItem extends ICss_AttrSchema {
  type: ICss_DataTypeEnum['attr'];
}

export interface ICss_CommonItem extends ICss_CommonSchema {
  type: ICss_DataTypeEnum['common'];
}

export type ICss = Array<ICss_Item>;

export type ICss_Item = ICss_BlockItem | ICss_AttrItem | ICss_CommonItem;

export type IStyle = Array<ICss_AttrSchema>;
