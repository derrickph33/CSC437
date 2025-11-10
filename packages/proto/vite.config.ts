import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/auth': 'http://localhost:3000'
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        puka: resolve(__dirname, 'puka.html'),
        ceedee: resolve(__dirname, 'ceedee.html'),
        amon: resolve(__dirname, 'amon.html'),
        temp: resolve(__dirname, 'temp.html'),
        login: resolve(__dirname, 'login.html'),
        player: resolve(__dirname, 'player.html'),
      },
    },
  },
});
