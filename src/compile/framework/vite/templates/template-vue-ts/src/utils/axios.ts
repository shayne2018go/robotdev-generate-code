import { initAxios } from '@dreawer/robotdev-remote-request';

export const { axios, userApi } = initAxios({
  pathStart: '/api',
  appid: '',
  notLoggedIn() {
    // 接口报未登录时的回调
  },
});

export default axios