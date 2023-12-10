import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://feature-tour.netlify.app',
  integrations: [ preact(),
                  react(),
                  sitemap({
    canonicalURL: 'https://feature-tour.netlify.app'
  }), tailwind(), 

 ]
});


