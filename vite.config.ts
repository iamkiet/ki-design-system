import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "radix-ui",
        /^@radix-ui\/react-/,
        "class-variance-authority",
        "clsx",
        "cmdk",
        "input-otp",
        "lucide-react",
        "sonner",
        "tailwind-merge",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        // Rename the asset so CSS lands at dist/styles.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "styles.css") return "styles.css";
          return assetInfo.name ?? "asset";
        },
        // JS chunk naming
        entryFileNames: "[name].js",
      },
    },
    cssCodeSplit: true,
  },
});

