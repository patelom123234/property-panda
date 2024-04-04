import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    mimeTypes: {
      '.scss': 'text/x-scss',
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
})
