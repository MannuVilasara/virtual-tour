import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    ViteImageOptimizer({
      jpg: {
        quality: 60,
      },
      png: {
        quality: 60,
      },
      webp: {
        quality: 60,
      },
      avif: {
        quality: 80,
      },
    }),
  ]
});
