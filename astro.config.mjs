import { defineConfig } from 'astro/config';
// import netlify from "@astrojs/netlify";
// import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // adapter: netlify({
  //   edgeMiddleware: true
  // }),

  // integrations: [tailwind()],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "src/assets/scss/config/import.scss" as *;',
        },
      },
    },
  },
});