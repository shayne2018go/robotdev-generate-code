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
    router.push({ name: url, query })
  } else if (mode === 'out') {
    const dom = document.createElement('a');
    dom.setAttribute('href', url);
    dom.setAttribute('target', `_${target}`);
    dom.click();
    dom.remove();
  } else {
    throw new Error ('open的mode类型错误')
  }
}
// const open = (mode: 'out', name: string, query: any) => void;
// const open = (mode: 'in', name: string, query: any) => void;
// const open = (mode:) => {
//   return axios.post(url, body).then(
//     (response: any) => success(response),
//     (err: any) => fail(err)
//   );
// };

export { open };
