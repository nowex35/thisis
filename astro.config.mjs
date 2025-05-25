// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  })
});