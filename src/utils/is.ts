export const isArray = <T = any>(value: unknown): value is Array<T> => {
  return Object.prototype.toString.call(value) === '[object Array]';
};

export const isPlanObject = <T = any>(value: unknown): value is Record<string, T> => {
  return Object.prototype.toString.call(value) === '[object Object]';
};
