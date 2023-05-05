import axios from 'axios';
import { useRouter } from 'vue-router';

const request = (url: string, body: any, success: (res: any) => void, fail: (err: any) => void) => {
  return axios.post(url, body).then(
    (response: any) => success(response),
    (err: any) => fail(err)
  );
};

function open(mode: 'out', target: string, url: string): void;
function open(mode: 'in', target: string, name: string, query: any): void;
function open(mode: string, target: string, url: string, query?: any) {
  if (mode === 'out') {
    window.open(url, target);
  } else if (mode === 'in') {
    const router = useRouter();
    const routeData = router.resolve({ name: url, query });
    window.open(routeData.href, target);
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

export { request, open };
