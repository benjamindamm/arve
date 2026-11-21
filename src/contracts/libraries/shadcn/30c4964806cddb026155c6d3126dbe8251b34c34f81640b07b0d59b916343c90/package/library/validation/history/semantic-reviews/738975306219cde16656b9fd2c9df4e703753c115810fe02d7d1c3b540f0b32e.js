import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  server: {
    fs: {
      // Imported contracts remain module dependencies; only their supplied
      // font assets need a direct URL allowance outside this app directory.
      allow: [
        fileURLToPath(new URL('.', import.meta.url)),
        fileURLToPath(new URL('../../libraries/shadcn/assets/fonts/', import.meta.url)),
      ],
    },
  },
});
