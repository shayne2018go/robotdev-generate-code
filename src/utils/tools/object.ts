export const object = {
  has(obj: Record<any, any>, key: string) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  },
};
