import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://eanid.github.io',
	base: '/my-repo',
	integrations: [mdx(), sitemap()],
});
