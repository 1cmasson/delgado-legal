import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

const isTest = process.env.VITEST === "true";

export default defineConfig({
  plugins: isTest
    ? [react(), tailwindcss(), tsconfigPaths()]
    : [tailwindcss(), (await import("@react-router/dev/vite")).reactRouter(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: ["./app/test/setup.ts"],
    include: ["app/**/*.test.{ts,tsx}"],
    globals: true,
  },
});
