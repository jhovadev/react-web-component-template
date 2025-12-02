import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cssInjectedByJs()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: true,
    cssCodeSplit: false,
  },
})
