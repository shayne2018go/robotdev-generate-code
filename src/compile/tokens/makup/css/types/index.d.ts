import { CssDataType } from './cssDataType';

export type IBlock_DataType = keyof typeof CssDataType;

export type IBlock_DataTypeEnum = typeof CssDataType;

/**
 * 块状代码schema
 */
export interface IBlock_BlockSchema {
  key: string;
  value: Array<IBlock_Item>;
}

/**
 * 样式schema
 */
export interface IBlock_AttrSchema {
  key: string;
  value: string;
}

/**
 * @ 声明的 schema
 */
export interface IBlock_CommonSchema {
  key: string;
  value: string;
}

export type IBlock = Array<IBlock_Item>;

export type IBlock_Item = IBlock_BlockItem | IBlock_AttrItem | IBlock_CommonItem;

export interface IBlock_BlockItem extends IBlock_BlockSchema {
  type: IBlock_DataTypeEnum['block'];
}

export interface IBlock_AttrItem extends IBlock_AttrSchema {
  type: IBlock_DataTypeEnum['attr'];
}

export interface IBlock_CommonItem extends IBlock_CommonSchema {
  type: IBlock_DataTypeEnum['common'];
}

export type IAttr = Array<IBlock_AttrSchema>;
