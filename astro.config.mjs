import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // FIXME: don't hardcode this
  site: "https://skyfall.dev",
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  /* output: "hybrid", // or 'server'
  experimental: {
    actions: true,
  }, */
});