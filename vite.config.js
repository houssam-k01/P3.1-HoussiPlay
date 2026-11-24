import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // la raiz del proyecto es src
  build: {
    outDir: "../docs", // lo compilado va a docs para GitHub Pages
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // pagina de inicio
        login: resolve(__dirname, "./src/login.html"), // pagina del formulario
      },
    },
  },
  base: "./", // rutas relativas
});
