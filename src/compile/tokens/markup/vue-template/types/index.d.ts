import {
  CallExpression,
  BinaryExpression,
  MemberExpression,
  NumericLiteral,
  StringLiteral,
  ArrowFunctionExpression,
  Program,
  ObjectExpression,
} from '@babel/types';
declare namespace VueTemplateTypes {
  export type PropItem = string | number | CallExpression | MemberExpression | BinaryExpression | ObjectExpression;

  export type EventItem = string | CallExpression | MemberExpression | ArrowFunctionExpression;

  export type DirectiveItem = string | CallExpression | MemberExpression | BinaryExpression;

  export type TextExpression = string | CallExpression | MemberExpression;

  export type TextLiteral = NumericLiteral | StringLiteral | Program | string | number;

  export interface Prop {
    key: string;
    value?: PropItem;
    isDynamic?: boolean;
  }

  export interface Event {
    key: string;
    value?: EventItem;
    modifiers?: Array<string>;
  }

  export interface Directive {
    key: string;
    value?: DirectiveItem;
    arg?: string | number;
    modifiers?: Array<string>;
  }

  export interface Text {
    text: TextLiteral;
  }

  export interface InsertText {
    expression: TextExpression;
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
    nodes: ChildNodes;
  }
}

declare namespace GenerateVueTemplateTypes {
  export type PropElement = Prop | Event | Directive;

  export interface Prop extends VueTemplateTypes.Prop {
    _prop_: 'prop';
  }

  export interface Event extends VueTemplateTypes.Event {
    _prop_: 'event';
  }

  export interface Directive extends VueTemplateTypes.Directive {
    _prop_: 'directive';
  }

  export type NodeElement = Node | Text | InsertText;

  export interface Text extends VueTemplateTypes.Text {
    _node_: 'text';
  }

  export interface InsertText extends VueTemplateTypes.InsertText {
    _node_: 'insertText';
  }

  export interface Node {
    _node_: 'node';
    tag: string;
    propArr: Array<PropElement>;
    childNodeArr: Array<NodeElement>;
    isSelfClosing: boolean;
  }
}
