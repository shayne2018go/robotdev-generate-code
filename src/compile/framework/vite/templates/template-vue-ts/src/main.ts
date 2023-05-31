import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import RdElement from '@dreawer/robotdev-element';
import 'ant-design-vue/dist/antd.less';
import '@dreawer/robotdev-element/dist/style.css';
import './assets/vendor/a18e4772.js';

const app = createApp(App);

// app.config.errorHandler = (err, instance, info) => {
//   new Error(err as any);
//   console.log('instance:', instance);
//   console.log('info:', info);
//   return null;
// };

app.use(router).use(Antd).use(RdElement).mount('#app');
