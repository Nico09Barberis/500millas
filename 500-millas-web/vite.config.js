import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegura que Vite compile en la carpeta que Vercel espera
  },
  server: {
    fs: {
      strict: false,
    },
  },
  resolve: {
    alias: {
      '@': '/src', // opcional, si usás alias en tus imports
    },
  },
  base: '/', // importante para rutas en producción
});