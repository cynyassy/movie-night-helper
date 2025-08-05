import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/movie-night-helper/', // <-- replace with your repo name
  plugins: [react()],
})
