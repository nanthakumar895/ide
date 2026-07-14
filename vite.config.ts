import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        editor: resolve(__dirname, 'editor.html'),
        settings: resolve(__dirname, 'settings.html'),
        profile: resolve(__dirname, 'profile.html'),
        premium: resolve(__dirname, 'premium.html'),
        addUser: resolve(__dirname, 'add-user.html'),
        apps: resolve(__dirname, 'apps.html'),
        interview: resolve(__dirname, 'interview.html'),
        store: resolve(__dirname, 'store.html'),
        companies: resolve(__dirname, 'companies.html'),
        contest: resolve(__dirname, 'contest.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@clerk')) return 'vendor-clerk';
            if (id.includes('@supabase')) return 'vendor-supabase';
            if (id.includes('monaco-editor')) return 'vendor-monaco';
            if (id.includes('lucide-react')) return 'vendor-lucide';
            return 'vendor';
          }
        },
      },
    },
  },
});
