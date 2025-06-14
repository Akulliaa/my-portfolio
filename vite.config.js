import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/', // Make sure this matches your GitHub repo name
  plugins: [react()],
})
