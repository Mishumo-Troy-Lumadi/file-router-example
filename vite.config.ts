import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { routes } from "@troyio/vite-file-router";

// https://vite.dev/config/
export default defineConfig({
  devtools:true,
  plugins: [react(), routes("src/app"), tailwindcss()],
});
