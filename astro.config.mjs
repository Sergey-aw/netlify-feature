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
  // Integrations: Ensure MDX plugin runs before React integration for MDX support
  integrations: [
    preact({
      include: ['**/preact/*'],
    }),
    // MDX support for content files
    mdx(),
    react({
      // Enable React components in src directory (JSX/TSX only)
      include: ['src/**/*.{jsx,tsx}'],
    }),
    sitemap(),
    tailwind(),
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
    defaultLocale: "en",
    locales: ["en", "ru"],
  },
});