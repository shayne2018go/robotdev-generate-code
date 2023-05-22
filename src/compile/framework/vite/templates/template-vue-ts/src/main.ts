import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import './assets/vendor/a18e4772.js';

createApp(App).use(router).use(Antd).mount('#app');
