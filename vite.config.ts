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
      port: 3000,
      open: true,
    },
    define: {
      "process.env": env,
    },
  };
});
