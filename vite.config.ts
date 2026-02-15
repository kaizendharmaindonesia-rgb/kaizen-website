import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Untuk GitHub Pages: base harus '/nama-repo/' agar asset & routing benar
// Di CI kita set env VITE_BASE_PATH; lokal pakai '/' atau '/kaizen/' jika mau preview
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
