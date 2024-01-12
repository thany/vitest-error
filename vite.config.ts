/// <reference types="vitest" />
/// <reference types="vite/client" />

import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  worker: {
    plugins: () => [react()],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'vitest.setup.ts',
    coverage: {
      reportsDirectory: './__tests__/coverage',
      reporter: ['text', 'html'],
      all: true,
      exclude: [
        ...configDefaults.exclude,
        '**/*.@(spec|test).@(js|jsx|ts|tsx)',
        '.eslintrc.*',
        'index.ts',
        'augments.ts',
        'theme/*',
        '__tests__/*',
      ],
    },
  },
});
