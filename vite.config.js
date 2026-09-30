import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use relative base path for build (GitHub Pages, Vercel, Netlify subpaths), absolute '/' for dev server
  base: command === 'build' ? './' : '/',
  server: {
    port: 3000,
    host: true, // Expose on 0.0.0.0 for local network hosting & device testing
    open: false,
  },
  preview: {
    port: 3000,
    host: true,
  },
}));

