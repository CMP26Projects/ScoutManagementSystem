import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        // switch between the 2 lines for local and remote
        // target: "http://localhost:5000",
        target: "https://scouts-managment-system-api-dev.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
