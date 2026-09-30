import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative base path so hosted assets resolve correctly on GitHub Pages, Vercel, Netlify, or subpaths
  base: './',
  server: {
    port: 3000,
    host: true, // Expose on 0.0.0.0 for local network hosting & device testing
    open: false,
  },
  preview: {
    port: 3000,
    host: true,
  },
});
