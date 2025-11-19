import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://strangerboxx.github.io/pro-animal-calle-larga/',
  plugins: [react(),tailwindcss()],
})
