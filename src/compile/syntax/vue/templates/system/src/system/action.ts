import axios from 'axios';
import { useRouter } from 'vue-router';

// const request = (url: string, body: any, success: (res: any) => void, fail: (err: any) => void) => {
//   return axios.post(url, body).then(
//     (response: any) => success(response),
//     (err: any) => fail(err)
//   );
// };

function open(mode: 'out', target: string, url: string): void;
function open(mode: 'in', target: string, name: string, query?: any): void;
function open(mode: string, target: string, url: string, query?: any) {
  const router = useRouter();
  if (mode === 'in') {
    router.push({ name: url, query });
  } else if (mode === 'out') {
    const dom = document.createElement('a');
    dom.setAttribute('href', url);
    dom.setAttribute('target', `_${target}`);
    dom.click();
    dom.remove();
  } else {
    throw new Error('open的mode类型错误');
  }
}

const queryImage = (id: string, fn: (value: any) => void) => {
  axios.get(`http://1.13.37.16:3001/imagesApi/images/${id}`).then((res) => {
    fn(res);
  });
};

const getType = (value: any) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
export const assignment = (data: { [key: string]: any } | any[], path: (string | number)[], value: any) => {
  const state = data;

  const type = getType(data);
  if (!['array', 'object'].includes(type)) {
    // 初始data类型不符，取消赋值
    return;
  }

  const set = (pathStr: string, _value: any) => {
    try {
      Function('state', 'value', `state${pathStr} = value`)(state, _value);
    } catch (e) {
      console.log('E955816');
    }
  };
  let index = -1;
  let pathStr = '';
  let lastData: any = null;
  let thisData: any = data;
  while (path.length > index + 1 && `${path[index]}`) {
    index++;
    const key = path[index];
    const pathType = typeof key;
    if (!['string', 'number'].includes(pathType)) {
      // 索引类型异常，取消赋值
      return;
    }
    const lastPathStr = pathStr;
    pathStr += `['${key}']`;

    const isNumber = /[0-9]+/g.test(`${key}`);
    const type = getType(thisData);
    if (type === 'array') {
      if (!isNumber) {
        // 类型不匹配，取消赋值
        return;
      }
    } else if (type === 'undefined') {
      set(lastPathStr, isNumber ? [] : {});
      thisData = lastData[path[index - 1]];
    } else if (type !== 'object') {
      // 下一级不是数组或object则终止赋值
      return;
    }

    if (path.length > index + 1) {
      lastData = thisData;
      thisData = thisData[key];
    } else {
      set(pathStr, value);
    }
  }
};

export { open, queryImage };
