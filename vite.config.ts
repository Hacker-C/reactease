// vite.config.ts
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    react(),
    unocss()
  ],
  server: {
    port: 3333
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  }
})
