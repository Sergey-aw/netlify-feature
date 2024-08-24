import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";



// https://astro.build/config
export default defineConfig({
  site: 'https://feature-tour.netlify.app',
  integrations: [ preact({
    include: ['**/preact/*'],
  }),
                  react({
                    include: ['**/react/*'],
                  }),
                  sitemap({
    canonicalURL: 'https://feature-tour.netlify.app'
  }), tailwind(), 
                ],
  i18n: {
                  defaultLocale: "ru",
                  locales: ["en","ru"],
  },
}
);


