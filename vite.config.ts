import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'; // 正确导入 path 模块
import { viteReactSvgComponentPlugin } from 'svg-component-vite-plugin/dist/react';

const r = (p: string): string => path.resolve(__dirname, p); // 使用 path.resolve

export default defineConfig({
  server: {
    port: 8000,
    host: true,
  },

  resolve: {
    alias: {
      '@': r('./src'),
      '@c': r('./src/components'),
      '@p': r('./src/pages'),
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util',
    },
  },
  plugins: [
    react(),
    viteReactSvgComponentPlugin({
      include: 'src/assets/svg/**/*.svg*',
    }),
  ],
});
