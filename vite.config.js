import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import dotenv from "dotenv";
dotenv.config();
export default defineConfig(() => {
  return {
    define: {
      __VALUE__: `"${process.env.VALUE}"`,
    },
    plugins: [react()],
  };
});
