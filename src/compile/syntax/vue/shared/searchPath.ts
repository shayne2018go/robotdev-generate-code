const seach = <T extends boolean>(
  types: CodeSchema.Property_Protocol['types'],
  path: string[],
  typeKey: 'module' | 'action' | 'function',
  ruleKey: 'properties' | 'parameters',
  key: T,
  lastMultiple = false
): T extends true ? string[] : CodeSchema.Property_Protocol[] => {
  if (!Array.isArray(path)) {
    return [];
  }
  key = key || (false as T);
  const _path: any[] = [];
  if (!types?.length) {
    return _path;
  }
  let type: CodeSchema.Property_Protocol['types'][number] | undefined;
  path.forEach((pathId, index) => {
    type = types.find((item) => item.type === typeKey);
    if (!type || (path.length === index + 1 && (type.multiple === true) !== lastMultiple)) {
      throw new Error('找不到module类型配置');
    }
    const prop = type.rules?.[ruleKey]?.find((item) => item.id === pathId);
    if (!prop) {
      throw new Error(`找不到${typeKey}中"${pathId}"的属性定义`);
    }
    types = prop.types;
    if (key === false) {
      _path.push(prop);
    } else {
      _path.push(prop.key);
    }
  });
  return _path;
};

export const searchModulePath = (
  types: CodeSchema.Property_Protocol['types'],
  path: string[],
  lastMultiple = false
) => {
  return seach(types, path, 'module', 'properties', false, lastMultiple);
};

export const searchArrayItemModulePath = (
  types: CodeSchema.Property_Protocol['types'],
  path: string[],
  lastMultiple = false
) => {
  return seach(types, path, 'module', 'properties', false, true);
};

export const searchActionPath = (
  types: CodeSchema.Property_Protocol['types'],
  path: string[],
  lastMultiple = false
) => {
  return seach(types, path, 'action', 'parameters', false, lastMultiple);
};

export const searchFunctionPath = (
  types: CodeSchema.Property_Protocol['types'],
  path: string[],
  lastMultiple = false
) => {
  return seach(types, path, 'function', 'parameters', false, lastMultiple);
};

export const searchModulePathKeys = (
  types: CodeSchema.Property_Protocol['types'],
  path: string[],
  lastMultiple = false
) => {
  return seach(types, path, 'module', 'properties', true, lastMultiple);
};

export const searchActionPathKeys = (
  types: CodeSchema.Property_Protocol['types'],
  path: string[],
  lastMultiple = false
) => {
  return seach(types, path, 'action', 'parameters', true, lastMultiple);
};

export const searchFunctionPathKeys = (
  types: CodeSchema.Property_Protocol['types'],
  path: string[],
  lastMultiple = false
) => {
  return seach(types, path, 'function', 'parameters', true, lastMultiple);
};
