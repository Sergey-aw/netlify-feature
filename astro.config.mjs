import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import remarkRehype from "remark-rehype";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://sgordeev.xyz',
  integrations: [ 
    preact({
      include: ['**/preact/*'],
    }),
    react({
      include: ['**/react/*'],
    }),
    sitemap(),
    tailwind(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkRehype
    ],
    rehypePlugins: [
      rehypeKatex
    ],
  },
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
  },
});