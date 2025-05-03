import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    build: {
      outDir: "dist",
      sourcemap: true,
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      open: true,
      strictPort: true,
    },
    define: {
      "process.env": env,
    },
  };
});
