export const dataType = {
  getType: (data: any) => Object.prototype.toString.call(data).slice(8, -1).toLowerCase(),
  isObject(data: any): data is Record<any, any> {
    return dataType.getType(data) === 'object';
  },
  isUndefined(data: any): data is undefined {
    return data === undefined;
  },
  isNull(data: any): data is null {
    return data === null;
  },
  isNullOrUndefined(data: any): data is null {
    return data == null;
  },
};
