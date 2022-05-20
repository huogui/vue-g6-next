import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

module.exports = defineConfig({
  plugins: [ vue() ],
  build: {
    outDir: './lib',
    lib: {
      entry: 'src/index.ts',
      name: 'Vue3DragResize',
      formats: [ 'umd', 'es' ],
    },
    rollupOptions: {
      external: [ 'vue' ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
