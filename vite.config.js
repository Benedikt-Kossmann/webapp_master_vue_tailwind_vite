// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [vue()],
  //base: '/wp-content/themes/custom_theme/dist/', 
  build: {
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});


