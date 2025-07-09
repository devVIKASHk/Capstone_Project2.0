import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server:{
    host:'0.0.0.0',

    proxy:{
      '/api':{
        target:`http://10.29.176.110:4000`,
        changeOrigin:true,
      }

    }
  },
  plugins: [react(),tailwindcss()],
})
