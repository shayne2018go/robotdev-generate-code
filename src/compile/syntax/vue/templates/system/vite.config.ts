import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '0.0.0.0', // 设置：内、外网皆可访问
    port: 3001, // 设置：端口号
    open: true, // 设置：服务启动时，是否自动打开浏览器
    cors: true, // 设置：是否允许跨域

    // 设置：代理（根据我们项目实际情况配置）

    // 这个APP_ID需要生成对应env配置来代替
    proxy: {
      '/api': {
        target: 'http://${APP_ID}.server.robodev.cn:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/')
      },
      '/imagesApi': {
        target: 'https://6219dc51c1edd6d0f0229f11.server.robodev.cn',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/imagesApi/', '/')
      }
    },
  }
})
