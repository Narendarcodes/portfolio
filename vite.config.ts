import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouterGenerator } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), tanstackRouterGenerator(), tanstackStart(), react(), tailwindcss()],
});
