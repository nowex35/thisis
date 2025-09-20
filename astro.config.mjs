// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import remarkLinkCard from 'remark-link-card';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [
      [remarkLinkCard, {
        // カスタム設定
        cache: true, // キャッシュを有効化
        shortenUrl: true, // URLを短縮表示
        target: '_blank', // 新しいタブで開く
      }]
    ]
  },
  build: {
    assets: 'assets'
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  })
});