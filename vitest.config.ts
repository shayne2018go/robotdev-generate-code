import { defineConfig } from 'vitest/config';
import path, { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    exclude: ['node_modules', 'code-test'],
    testTimeout: 180000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
