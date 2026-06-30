import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import path from "node:path";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ["babel-plugin-react-compiler"],
    },
  }), cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});