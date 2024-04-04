import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Import the correct plugin for React

// Import your Webpack configuration if needed
import webpackConfig from "./webpack.config.js";

export default defineConfig({
  server: {
    mimeTypes: {
      ".scss": "text/x-scss",
    },
  },
  // Use Webpack configuration if needed
  configureWebpack: webpackConfig,
  plugins: [react()], // Ensure the correct import of the react plugin
  resolve: {
    alias: {
      // Construct the absolute path based on the current module's URL
      "@": new URL("./src", import.meta.url).pathname,
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
});
