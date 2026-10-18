import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Topic tests live beside the contracts and implementation shells they explain.
    include: ["src/**/*.test.ts"],
  },
});
