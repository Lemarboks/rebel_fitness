import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repo at /rebel_fitness/ unless a custom domain is added.
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/rebel_fitness/' : '/',
  plugins: [react(), tailwindcss()],
})
