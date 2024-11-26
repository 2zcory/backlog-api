import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],  // Entry point(s)
  outDir: 'dist',           // Output directory
  format: ['esm', 'cjs'],   // Output formats
  dts: true,                // Generate TypeScript declaration files
  splitting: false,         // Code splitting (optional, false for libraries)
  sourcemap: true,          // Include sourcemaps
  clean: true,              // Clean output directory before build
  minify: false,            // Minify output (optional)
  target: 'esnext',         // Target environment (e.g., es2015, esnext)
});
