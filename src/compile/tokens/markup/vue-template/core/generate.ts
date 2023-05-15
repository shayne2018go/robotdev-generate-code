import { check } from '../tools/helper';
import { VueTemplateTypes } from '../types';
import * as t from '@babel/types';
import generate from '@babel/generator';

const generatePropItem = (propItem: VueTemplateTypes.PropItem) => {
  if (['string', 'number'].includes(typeof propItem)) {
    return propItem;
  } else if (typeof propItem === 'object') {
    if (t.isCallExpression(propItem) || t.isMemberExpression(propItem) || t.isBinaryExpression(propItem)) {
      const { code } = generate(propItem);
      return code;
    } else {
      return propItem;
    }
  } else {
    return propItem;
  }
};

const generateEventItem = (eventItem: VueTemplateTypes.EventItem) => {
  if (['string', 'number'].includes(typeof eventItem)) {
    return eventItem;
  } else if (typeof eventItem === 'object') {
    if (t.isCallExpression(eventItem) || t.isMemberExpression(eventItem) || t.isArrowFunctionExpression(eventItem)) {
      const { code } = generate(eventItem);
      return code;
    } else {
      return eventItem;
    }
  } else {
    return eventItem;
  }
};

const generateTemplateProp = (schema: VueTemplateTypes.Prop): string => {
  let code = '';
  if (schema.value) {
    code += `${schema.isDynamic ? ':' : ''}${schema.key}="${generatePropItem(schema.value)}"`;
  } else {
    code += `${schema.key}`;
  }
  return code;
};

const generateTemplateProps = (schema?: Array<VueTemplateTypes.Prop>): string => {
  if (!schema) {
    return '';
  }
  let code = '';
  if (!Array.isArray(schema)) {
    throw new Error('Vue的props参数必须为数组');
  }
  schema.forEach((item) => {
    code += ' ' + generateTemplateProp(item);
  });
  return code;
};

const generateTemplateEvent = (schema: VueTemplateTypes.Event): string => {
  let code = `@${schema.key}`;
  if (schema.modifiers && Array.isArray(schema.modifiers)) {
    code += schema.modifiers.reduce((start, ele) => `${start}.${ele}`, '');
  }
  if (schema.value) {
    code += `="${generateEventItem(schema.value)}"`;
  }
  return code;
};

const generateTemplateEvents = (schema?: Array<VueTemplateTypes.Event>): string => {
  if (!schema) {
    return '';
  }
  let code = '';
  if (!Array.isArray(schema)) {
    throw new Error('Vue的events参数必须为数组');
  }
  schema.forEach((item) => {
    code += ' ' + generateTemplateEvent(item);
  });
  return code;
};

const generateTemplateDirective = (schema: VueTemplateTypes.Directive): string => {
  let code = '';
  code += `v-${schema.key}`;
  if (schema.arg) {
    code += `:${schema.arg}`;
  }
  if (schema.modifiers && Array.isArray(schema.modifiers)) {
    code += schema.modifiers.reduce((start, ele) => `${start}.${ele}`, '');
  }
  if (schema.value) {
    code += `="${generatePropItem(schema.value)}"`;
  }
  return code;
};

const generateTemplateDirectives = (schema?: Array<VueTemplateTypes.Directive>): string => {
  if (!schema) {
    return '';
  }
  let code = '';
  if (!Array.isArray(schema)) {
    throw new Error('Vue的directives参数必须为数组');
  }
  schema.forEach((item) => {
    code += ' ' + generateTemplateDirective(item);
  });
  return code;
};

const generateTemplateNode = (schema: VueTemplateTypes.Node): string => {
  if (!schema) {
    return '';
  }
  let code = '<';
  code += schema.tag;
  code += generateTemplateProps(schema.props);
  code += generateTemplateEvents(schema.events);
  code += generateTemplateDirectives(schema.directives);
  if (schema.isSelfClosing) {
    code += ' />';
  } else {
    code += `>`;
    if (schema.childNodes) {
      code += generateTemplateNodes(schema.childNodes);
    }
    code += `</${schema.tag}>`;
  }
  return code;
};

const generateTemplateText = (schema: VueTemplateTypes.Text): string => {
  if (!schema) {
    return '';
  } else if (['string', 'number'].includes(typeof schema.text)) {
    return `${schema.text}`;
  } else if (typeof schema.text === 'object') {
    if (t.isNumericLiteral(schema.text) || t.isStringLiteral(schema.text)) {
      const { code } = generate(schema.text);
      return code;
    }
    return `${schema.text}`;
  }
  return `${schema.text}`;
};

const generateTemplateInsertText = (schema: VueTemplateTypes.InsertText): string => {
  if (!schema) {
    return '';
  } else if (['string', 'number'].includes(typeof schema.expression)) {
    return `{{${schema.expression}}}`;
  } else if (typeof schema.expression === 'object') {
    if (t.isCallExpression(schema.expression) || t.isMemberExpression(schema.expression)) {
      const { code } = generate(schema.expression);
      return `{{${code}}}`;
    }
    return `{{${schema.expression}}}`;
  }
  return `{{${schema.expression}}}`;
};

const generateTemplateNodes = (schema: VueTemplateTypes.ChildNodes): string => {
  if (!schema) {
    return '';
  }
  if (!Array.isArray(schema)) {
    throw new Error('Vue的nodes必须为数组');
  }
  let code = '';
  schema.forEach((item) => {
    if (check.isNode(item)) {
      code += generateTemplateNode(item);
    } else if (check.isText(item)) {
      code += generateTemplateText(item);
    } else if (check.isInsertText(item)) {
      code += generateTemplateInsertText(item);
    } else {
      throw new Error('Vue的node类型错误');
    }
  });
  return code;
};

export const generateVueTemplate = (schema: VueTemplateTypes.VueTemplate): string => {
  let code = '';
  if (schema.nodes) {
    code += generateTemplateNodes(schema.nodes);
  }
  return code;
};
