import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Keep tests beside the package while separating them from publishable source.
    include: ["test/**/*.test.ts"],
  },
});
