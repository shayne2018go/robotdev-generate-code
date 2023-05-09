import * as Fxc from '@robotdev/fx-code';

const translateKey = (obj: Record<string, any>): Promise<void> => {
  return new Promise((resolve, reject) => {
    if ('tag' in obj && obj.func && !obj.key) {
      /**
       *   数据中 行为的key 是tag
       *  "productId": "64254754fdc7e85f87137555",
          "id": "64094db1e00c640dbd2f8fff",
          "name": "是否为正整数",
          "type": "function",
          "tag": "isPositiveInteger",
       */
      obj.key = obj.tag;
      return resolve();
    } else if ('key' in obj && obj.key !== obj.id) {
      // 如果有key 且 key 不等于id，就不翻译
      return resolve();
    } else {
      obj.key = Fxc.toPinyin(obj.name).replace(/\s/g, '');
      resolve();
    }
  });
};

const multipleTranslateKey = (objs: Record<string, any>[]): Promise<void[]> => {
  return Promise.all(objs.map(translateKey));
};

export default multipleTranslateKey;
