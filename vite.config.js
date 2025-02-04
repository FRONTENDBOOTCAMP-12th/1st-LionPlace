import { resolve } from "node:path";
import { defineConfig } from "vite";
import inlineCssModules from "vite-plugin-inline-css-modules";

export default defineConfig({
  plugins: [inlineCssModules()],
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "src/pages/login/index.html"),
        register: resolve(__dirname, "src/pages/register/index.html"),
        feed: resolve(__dirname, "src/pages/feed/index.html"),
        review: resolve(__dirname, "src/pages/review/index.html"),
        visitRecord: resolve(__dirname, "src/pages/visit-record/index.html"),
        reserved: resolve(__dirname, "src/pages/reserved/index.html"),
        order: resolve(__dirname, "src/pages/order/index.html"),
        themeEnrollWrap: resolve(__dirname, "src/pages/theme-enroll-wrap/index.html"),
        themeEnroll: resolve(__dirname, "src/pages/theme-enroll/index.html"),
        plusReview: resolve(__dirname, "src/pages/plus-review/index.html"),
        visitLike: resolve(__dirname, "src/pages/visit-like/index.html"),
        deleteAccount: resolve(__dirname, "src/pages/delete-account/index.html"),
      },
    },
  },
});
