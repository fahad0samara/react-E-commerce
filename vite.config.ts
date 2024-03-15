import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ViteCompressionPlugin from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteCompressionPlugin({
      verbose: true,
      disable: false,
      threshold: 10240, // Threshold for compression
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the chunk size warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Define manual chunks based on your needs
          // For example:
          if (id.indexOf('node_modules') !== -1) {
            return 'vendor'; // Put all dependencies in a separate chunk
          }
        }
      }
    }
  }
});
