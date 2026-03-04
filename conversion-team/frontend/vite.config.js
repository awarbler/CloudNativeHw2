import { defineConfig } from "vite"; // import defineConfig
import react from "@vitejs/plugin-react"; // import React plugin

export default defineConfig({ // export Vite config
  plugins: [react()], // enable React plugin
  server: { // dev server config
    proxy: { // proxy config
      "/api": "http://localhost:5001", // forward /api to backend
    }, // end proxy
  }, // end server
}); // end config
