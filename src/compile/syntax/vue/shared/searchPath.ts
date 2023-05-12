const seach = <T extends boolean>(
  types: CodeSchema.Property_Protocol['types'],
  path: string[],
  typeKey: 'module' | 'action' | 'function',
  ruleKey: 'properties' | 'parameters',
  key: T
): T extends true ? string[] : CodeSchema.Property_Protocol[] => {
  if (!Array.isArray(path)) {
    return [];
  }
  key = key || (false as T);
  const _path: any[] = [];
  let type: CodeSchema.Property_Protocol['types'][number] | undefined;
  path.forEach((pathId) => {
    type = types.find((item) => item.type === typeKey);
    if (!type) {
      throw new Error('找不到module类型配置');
    }
    const prop = type.rules?.[ruleKey]?.find((item) => item.id === pathId);
    if (!prop) {
      throw new Error(`找不到${typeKey}中"${pathId}"的属性定义`);
    }
    if (key === false) {
      _path.push(prop);
    } else {
      _path.push(prop.key);
    }
  });
  return _path;
};

export const searchModulePath = (types: CodeSchema.Property_Protocol['types'], path: string[]) => {
  return seach(types, path, 'module', 'properties', false);
};

export const searchActionPath = (types: CodeSchema.Property_Protocol['types'], path: string[]) => {
  return seach(types, path, 'action', 'parameters', false);
};

export const searchFunctionPath = (types: CodeSchema.Property_Protocol['types'], path: string[]) => {
  return seach(types, path, 'function', 'parameters', false);
};

export const searchModulePathKeys = (types: CodeSchema.Property_Protocol['types'], path: string[]) => {
  return seach(types, path, 'module', 'properties', true);
};

export const searchActionPathKeys = (types: CodeSchema.Property_Protocol['types'], path: string[]) => {
  return seach(types, path, 'action', 'parameters', true);
};

export const searchFunctionPathKeys = (types: CodeSchema.Property_Protocol['types'], path: string[]) => {
  return seach(types, path, 'function', 'parameters', true);
};
