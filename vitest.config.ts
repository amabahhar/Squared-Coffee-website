import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    globals: true,
    setupFiles: './vitest.setup.ts',
    include: ['**/*.test.tsx', '**/*.test.ts'],
    exclude: ['node_modules', 'dist', 'e2e'],
  },
});
