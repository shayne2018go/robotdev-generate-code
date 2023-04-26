import { doctype, doctypeRange } from '../const/doctype';

export type IXml_Prop_Item = string | number;

export type IXml_Doctype = keyof typeof doctype;
export type IXml_DoctypeRange = typeof doctypeRange[number];

export interface IXml_Prop {
  key: string;
  value?: IXml_Prop_Item;
  quotationMarks?: {
    none?: boolean;
    single?: boolean;
  };
}

export interface IXml_Node {
  tag: string;
  isSelfClosing?: boolean;
  props?: Array<IXml_Prop>;
  childNodes?: Array<IXml_Node | string>;
}

export interface IXml {
  doctype?: IXml_DoctypeRange;
  prolog?: Array<IXml_Prop>;
  nodes?: Array<IXml_Node | string>;
}
