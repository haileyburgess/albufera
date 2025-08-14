import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./frontend", // <-- folder containing index.html
  build: {
    outDir: "../dist", // adjust so Netlify publishes the right folder
    emptyOutDir: true,
  },
});
