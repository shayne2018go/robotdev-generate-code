import { doctype } from './const/doctype';
import { IXml_DoctypeRange, IXml, IXml_Node, IXml_Prop } from './types/index.d';

const generateXml_Prop = (schema: IXml_Prop): string => {
  let code = '';
  if (typeof schema.key !== 'string') {
    throw new Error('Xml的props中的key必须为string');
  }
  if (schema.value) {
    if (!['string', 'number'].includes(typeof schema.value)) {
      throw new Error('Xml的prop中的value必须为string或number');
    }
    code += `${schema.key}=`;
    if (schema.quotationMarks?.none === true) {
      code += schema.value;
    } else if (schema.quotationMarks?.single === true) {
      code += `'${schema.value}'`;
    } else {
      code += `"${schema.value}"`;
    }
  } else {
    code += ` ${schema.key}`;
  }
  return code;
};

const generateXml_Props = (schema?: Array<IXml_Prop>): string => {
  if (!schema) {
    return '';
  }
  let code = '';
  if (!Array.isArray(schema)) {
    throw new Error('Xml的props参数必须为数组');
  }
  schema.forEach((item) => {
    code += ' ' + generateXml_Prop(item);
  });
  return code;
};

const generateXml_Node = (schema: IXml_Node): string => {
  if (!schema) {
    return '';
  }
  if (!schema.tag || typeof schema.tag !== 'string') {
    throw new Error('xml的node节点tag是必须的，且为string');
  }
  let code = '<';
  code += schema.tag;
  code += generateXml_Props(schema.props);
  if (schema.isSelfClosing) {
    code += ' />';
  } else {
    code += `>`;
    if (schema.childNodes) {
      code += generateXml_Nodes(schema.childNodes);
    }
    code += `</${schema.tag}>`;
  }
  return code;
};

const generateXml_Nodes = (schema: Array<IXml_Node | string>): string => {
  if (!schema) {
    return '';
  }
  if (!Array.isArray(schema)) {
    throw new Error('xml的nodes必须为数组');
  }
  let code = '';
  schema.forEach((item) => {
    if (typeof item === 'string') {
      code += item;
    } else {
      code += generateXml_Node(item);
    }
  });
  return code;
};

const generatexXml_doctype = (version?: IXml_DoctypeRange): string => {
  if (!version) {
    return '';
  }
  switch (version) {
    case doctype.h5: {
      return `<!DOCTYPE html>`;
    }
    case doctype.h4: {
      return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`;
    }
    case doctype.xml1: {
      return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">`;
    }
    default: {
      throw new Error('DocType is Error');
    }
  }
};

const generatexXml_prolog = (schema: Array<IXml_Prop>) => {
  if (!Array.isArray(schema)) {
    throw Error('XML的prolog配置必须为数组');
  }
  let code = '<?xml ';
  code = generateXml_Props(schema);
  code += '?>';
  return code;
};

const _generateXml = (schema: IXml): string => {
  let code = '';
  if (schema.prolog && schema.doctype) {
    throw Error('XML的prolog和doctype不能同时存在');
  }
  if (schema.prolog) {
    code += generatexXml_prolog(schema.prolog);
  } else if (schema.doctype) {
    code += generatexXml_doctype(schema.doctype);
  }
  if (schema.nodes) {
    code += generateXml_Nodes(schema.nodes);
  }
  return code;
};

export const generateXml = {
  xml: _generateXml,
  prop: generateXml_Prop,
  props: generateXml_Props,
  node: generateXml_Node,
};
