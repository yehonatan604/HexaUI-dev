import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',  // For DOM elements testing, like React components
        setupFiles: './src/setupTests.ts', // Optional, setup file path
        include: ['src/**/*.spec.{ts,tsx}'], // Add this to specify test file pattern
    },
});
