import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";



// https://astro.build/config
export default defineConfig({
  site: 'https://sgordeev.xyz',
  integrations: [ preact({
    include: ['**/preact/*'],
  }),
                  react({
                    include: ['**/react/*'],
                  }),
                  sitemap(),
                  tailwind(), 
                ],
  i18n: {
                  defaultLocale: "ru",
                  locales: ["en","ru"],
  },
}
);


