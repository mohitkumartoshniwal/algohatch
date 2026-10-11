import { defineConfig } from "tsdown";

export default defineConfig({
  // Build the package's single public entry point.
  entry: "src/index.ts",
  format: "esm",
  dts: {
    sourcemap: true,
  },
  sourcemap: true,
  // Prevent removed entry points from surviving in dist.
  clean: true,
});
