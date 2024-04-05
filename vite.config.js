import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  server: {
    mimeTypes: {
      ".scss": "text/x-scss",
    },
  },
  plugins: [
    react(),
    commonjs({
      transformMisc: {
        globalThis: "window", // Fix for global 'this' errors
      },
    }),
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          // Add other vendor chunks if needed
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
