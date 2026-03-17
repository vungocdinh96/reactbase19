import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackRouter({ routesDirectory: "./src/routes", generatedRouteTree: "./src/routes/routeTree.gen.ts" }),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
      "@features": resolve(__dirname, "src/features"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@pages": resolve(__dirname, "src/pages"),
      "@configs": resolve(__dirname, "src/configs"),
      "@constants": resolve(__dirname, "src/constants"),
      "@locales": resolve(__dirname, "src/locales"),
      "@providers": resolve(__dirname, "src/providers"),
      "@routes": resolve(__dirname, "src/routes"),
      "@services": resolve(__dirname, "src/services"),
      "@store": resolve(__dirname, "src/store"),
      "@styles": resolve(__dirname, "src/styles"),
      "@types": resolve(__dirname, "src/types"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
});
