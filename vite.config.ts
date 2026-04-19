import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        settings: resolve(__dirname, 'settings.html'),
        profile: resolve(__dirname, 'profile.html'),
        premium: resolve(__dirname, 'premium.html'),
        addUser: resolve(__dirname, 'add-user.html'),
        apps: resolve(__dirname, 'apps.html'),
      },
    },
  },
});
