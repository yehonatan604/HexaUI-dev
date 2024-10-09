import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'index.ts', // The entry point of your library
      name: 'react-hexa-dev', // Global variable name for UMD/IIFE builds
      formats: ['es', 'umd'],  // Output formats
      fileName: (format) => `react-hexa-dev.${format}.js`, // Output file naming
    },
    cssCodeSplit: true, // Enable code splitting for CSS. Default: true
    rollupOptions: {
      external: ['react', 'react-dom'], // Peer dependencies to exclude from the bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
})
