// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://antonkozyrev.dev',
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
});
