import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // nested1: resolve(__dirname, 'src/pages/new-page.html'),
        // nested2: resolve(__dirname, 'src/pages/newpage.html'),
      },
    },
  },
  server: {
    port: 8080,
    hot: true
  },
});