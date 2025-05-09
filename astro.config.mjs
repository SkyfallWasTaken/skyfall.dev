// @ts-check
import { defineConfig } from 'astro/config';

import expressiveCode from "astro-expressive-code";
import tailwindcss from '@tailwindcss/vite';

import { remarkAlert } from "remark-github-blockquote-alert";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), expressiveCode({
      themes: ["catppuccin-macchiato", "catppuccin-latte"],
    }),]
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-macchiato",
        dark: "catppuccin-macchiato",
      },
    },
    remarkPlugins: [remarkAlert],
  },
});