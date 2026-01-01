import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import fs from "fs";

// Load your JSON data
const data = JSON.parse(fs.readFileSync("./src/data/task1.json", "utf8"));

export default defineConfig({
  root: "src",           // src/ is the root folder for Vite
  plugins: [
    handlebars({
      context: data       // all {{title}}, {{objective}}, etc.
    })
  ],
  build: {
    outDir: "../dist",    // compiled output goes to project/dist
    emptyOutDir: true     // clears dist folder before build
  },
  server: {
    port: 5173,           // optional: specify port
    open: true            // opens browser automatically
  }
});
