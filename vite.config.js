import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ถ้า deploy ที่ repo Sitthikon
  plugins: [react()],
});