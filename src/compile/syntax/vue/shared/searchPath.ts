import { Identifier } from '@/types/code-schema/Identifier';

const seach = <T extends boolean>(
  types: Identifier['types'],
  path: string[],
  typeKey: 'module' | 'action' | 'function',
  ruleKey: 'properties' | 'parameters',
  key: T
): T extends true ? string[] : Identifier[] => {
  key = key || (false as T);
  const _path: any[] = [];
  let type: Identifier['types'][number] | undefined;
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

export const searchModulePath = (types: Identifier['types'], path: string[]) => {
  return seach(types, path, 'module', 'properties', false);
};

export const searchActionPath = (types: Identifier['types'], path: string[]) => {
  return seach(types, path, 'action', 'parameters', false);
};

export const searchFunctionPath = (types: Identifier['types'], path: string[]) => {
  return seach(types, path, 'function', 'parameters', false);
};

export const searchModulePathKeys = (types: Identifier['types'], path: string[]) => {
  return seach(types, path, 'module', 'properties', true);
};

export const searchActionPathKeys = (types: Identifier['types'], path: string[]) => {
  return seach(types, path, 'action', 'parameters', true);
};

export const searchFunctionPathKeys = (types: Identifier['types'], path: string[]) => {
  return seach(types, path, 'function', 'parameters', true);
};
