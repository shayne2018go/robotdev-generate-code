import { generateVueTemplate } from '../core';

const helper = {
  isProp(schema: GenerateVueTemplateTypes.PropElement): schema is GenerateVueTemplateTypes.Prop {
    return schema._prop_ === 'prop';
  },
  isEvent(schema: GenerateVueTemplateTypes.PropElement): schema is GenerateVueTemplateTypes.Event {
    return schema._prop_ === 'event';
  },
  isDirective(schema: GenerateVueTemplateTypes.PropElement): schema is GenerateVueTemplateTypes.Directive {
    return schema._prop_ === 'directive';
  },
  getProp(schema: GenerateVueTemplateTypes.Prop): VueTemplateTypes.Prop {
    const { _prop_, ...obj } = schema;
    return obj;
  },
  getEvent(schema: GenerateVueTemplateTypes.Event): VueTemplateTypes.Event {
    const { _prop_, ...obj } = schema;
    return obj;
  },
  getDirective(schema: GenerateVueTemplateTypes.Directive): VueTemplateTypes.Directive {
    const { _prop_, ...obj } = schema;
    return obj;
  },
};

/**
 * 将generate node schema转为vue template node schema
 */
function convert(nodeArr: Array<GenerateVueTemplateTypes.NodeElement>): VueTemplateTypes.ChildNodes {
  const nodes: VueTemplateTypes.ChildNodes = [];
  for (let index = 0; index < nodeArr.length; index++) {
    const node = nodeArr[index];
    if (node._node_ === 'node') {
      const props: VueTemplateTypes.Prop[] = [];
      const events: VueTemplateTypes.Event[] = [];
      const directives: VueTemplateTypes.Directive[] = [];
      node.propArr.forEach((propEle) => {
        if (helper.isProp(propEle)) {
          props.push(helper.getProp(propEle));
        } else if (helper.isEvent(propEle)) {
          events.push(helper.getEvent(propEle));
        } else if (helper.isDirective(propEle)) {
          directives.push(helper.getDirective(propEle));
        } else {
          throw new Error('node的propArr属性类型错误，_prop_');
        }
      });
      nodes.push({
        tag: node.tag,
        isSelfClosing: node.isSelfClosing,
        props,
        events,
        directives,
        childNodes: convert(node.childNodeArr),
      });
    } else if (node._node_ === 'text') {
      nodes.push({
        text: node.text,
      });
    } else if (node._node_ === 'insertText') {
      nodes.push({
        expression: node.expression,
      });
    } else {
      throw new Error('node的类型错误，node._node_');
    }
  }
  return nodes;
}

/**
 * 属性
 */
export function prop(key: string, value?: string | number, isDynamic?: boolean): GenerateVueTemplateTypes.Prop {
  return {
    _prop_: 'prop',
    key,
    value,
    isDynamic,
  };
}

/**
 * 事件
 */
export function evt(key: string, value?: string, modifiers?: Array<string>): GenerateVueTemplateTypes.Event {
  return {
    _prop_: 'event',
    key,
    value,
    modifiers,
  };
}

/**
 * 指令
 */
export function directive(
  key: string,
  value?: string,
  arg?: string,
  modifiers?: Array<string>
): GenerateVueTemplateTypes.Directive {
  return {
    _prop_: 'directive',
    key,
    value,
    arg,
    modifiers,
  };
}

/**
 * 文本
 */
export function text(text: string): GenerateVueTemplateTypes.Text {
  return {
    _node_: 'text',
    text,
  };
}

/**
 * 文本插值
 */
export function insertText(expression: string): GenerateVueTemplateTypes.InsertText {
  return {
    _node_: 'insertText',
    expression,
  };
}

/**
 * 节点
 */
export function node(
  tag: string,
  propArr: Array<GenerateVueTemplateTypes.PropElement>,
  childNodeArr: Array<GenerateVueTemplateTypes.NodeElement>,
  isSelfClosing?: boolean
): GenerateVueTemplateTypes.Node {
  return {
    _node_: 'node',
    tag,
    propArr,
    childNodeArr,
    isSelfClosing: isSelfClosing || false,
  };
}

/**
 * 通过generate node schema生成vue template string
 */
export function generate(nodeArr: Array<GenerateVueTemplateTypes.NodeElement>): string {
  let code = '';
  const nodes = convert(nodeArr);
  code += generateVueTemplate({ nodes });
  return code;
}
