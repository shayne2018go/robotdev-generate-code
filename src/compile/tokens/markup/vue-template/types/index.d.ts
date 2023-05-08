declare namespace VueTemplateTypes {
  export type PropItem = string | number;
  
  export interface Prop {
    key: string;
    value?: PropItem;
    isDynamic?: boolean;
  }
  
  export interface Event {
    key: string;
    value?: string;
    modifiers?: Array<string>;
  }
  
  export interface Directive {
    key: string;
    value?: string;
    arg?: string | number;
    modifiers?: Array<string>;
  }
  
  export interface Text {
    text: string | number;
  }
  
  export interface InsertText {
    expression: string;
  }
  
  export interface Node {
    tag: string;
    isSelfClosing?: boolean;
    props?: Array<Prop>;
    events?: Array<Event>;
    directives?: Array<Directive>;
    childNodes?: ChildNodes;
  }
  
  export type ChildNode = Node | Text | InsertText;
  
  export type ChildNodes = Array<ChildNode>;
  
  export interface VueTemplate {
    nodes?: ChildNodes;
  }
}
