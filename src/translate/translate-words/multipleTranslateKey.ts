import * as Fxc from '@robotdev/fx-code';
import { TranslateOptions } from '../tanslate';
import { genVarName } from '@/compile/syntax/vue/shared/helper';

export interface TranslateKeyOption {
  translateKey: string;
  translateKeyFn: (name: string) => Promise<string>;
}

const translateKey = (obj: Record<string, any>, options: TranslateKeyOption): Promise<void> => {
  const _translateKey = options.translateKey || 'key';
  return new Promise(async (resolve, reject) => {
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
      // obj[_translateKey] = Fxc.toPinyin(obj.name).replace(/\s/g, '');
      if (obj.name) {
        obj[_translateKey] = await options.translateKeyFn(obj.name);
      }
      resolve();
    }
  });
};

const translateGroupKey = async (objs: Record<string, any>[], options: TranslateOptions): Promise<void> => {
  // 去重
  const uniqueGenKey = genVarName();

  const translateKeyFn = async (name: string) => {
    const stringKey = await options.translateFn(name);
    const uniKey = uniqueGenKey(stringKey);
    return uniKey;
  };

  for (let i = 0; i < objs.length; i++) {
    const obj = objs[i];
    await translateKey(obj, { translateKey: 'key', translateKeyFn });
  }
};

const multipleTranslateKey = (objs: Record<string, any>[][], options: TranslateOptions): Promise<void[]> => {
  return Promise.all(
    objs.map((objgroup) => {
      if (Array.isArray(objgroup)) {
        return translateGroupKey(objgroup, options);
      } else {
        return translateKey(objgroup, { translateKey: 'key', translateKeyFn: options.translateFn });
      }
    })
  );
};

export default multipleTranslateKey;
