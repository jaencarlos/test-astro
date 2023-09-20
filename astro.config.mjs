import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// recover the envs to can put in the config and use to expternal components
const enviroments = loadEnv(process.env, process.cwd(), "");

export default defineConfig({
  integrations: [react()],
  vite: {
    define: {
      'process.env': enviroments
    }
  }
});
