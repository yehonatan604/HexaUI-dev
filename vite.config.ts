import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts', // The entry point of your library
      name: 'react-hexa', // Global variable name for UMD/IIFE builds
      formats: ['es', 'umd'],  // Output formats
      fileName: (format) => `rainbow-plus-ui.${format}.js`, // Output file naming
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
