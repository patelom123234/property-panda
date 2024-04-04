import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Import the correct plugin for React
import commonjs from "@rollup/plugin-commonjs"; // Import the Rollup CommonJS plugin

export default defineConfig({
  server: {
    mimeTypes: {
      ".scss": "text/x-scss",
    },
  },
  plugins: [
    react(), // Ensure the correct import of the react plugin
    commonjs(), // Add the Rollup CommonJS plugin
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
});
