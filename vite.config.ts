import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',  // 请求代理的地址
        changeOrigin: true,               // 是否允许跨域
        // 路径改写  ^
        rewrite: (path) => { return path.replace(/^\/api/, '') },
      }
    }
  }
})
