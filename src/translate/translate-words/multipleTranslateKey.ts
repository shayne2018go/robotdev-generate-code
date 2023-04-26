import * as Fxc from '@robotdev/fx-code';

const translateKey = (obj: Record<string, any>): Promise<void> => {
  return new Promise((resolve, reject) => {
    if ('key' in obj && obj.key !== obj.id) {
      return resolve();
    }
    obj['key'] = Fxc.toPinyin(obj.name).replace(/\s/g, '');
    resolve();
  });
};

const multipleTranslateKey = (objs: Record<string, any>[]): Promise<void[]> => {
  return Promise.all(objs.map(translateKey));
};

export default multipleTranslateKey;
