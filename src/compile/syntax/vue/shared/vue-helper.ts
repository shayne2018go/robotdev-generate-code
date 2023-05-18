export const getVueType = (type: CodeSchema.PropertyType_Protocol) => {
  if (type.multiple) {
    return 'Array';
  }
  switch (type.type) {
    case 'text':
    case 'richText':
    case 'password':
    case 'mobilePhone':
    case 'telephone':
    case 'date':
    case 'time':
    case 'datetime':
    case 'fax':
      return 'String';
    case 'number':
    case 'amount':
    case 'sequence':
      return 'Number';
    case 'whether':
      return 'Boolean';
    case 'url':
    case 'image':
    case 'video':
    case 'file':
    case 'icon':
    case 'module':
      return 'Object';
    case 'option':
      return 'Array';
    default:
      return 'String';
  }
};
