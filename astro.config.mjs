import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://feature-tour.netlify.app',
  integrations: [preact(), sitemap({
    canonicalURL: 'https://feature-tour.netlify.app'
  }), tailwind(), 

  storyblok({
    accessToken: "0pVyrxo9wIEd5K2FFPLA1gtt-222699-iaxjtUnzWM_mxb3uzyU_",
    components: {
      page: "storyblok/Page",
      feature: "storyblok/Feature",
      grid: "storyblok/Grid",
      teaser: "storyblok/Teaser",
    },  
  })]
});


