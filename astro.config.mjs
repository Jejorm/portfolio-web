// @ts-check

import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://jeremyo.dev', // TODO: Replace with actual domain
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [sitemap()],
	// Spanish moved from /es/ to the root; keep shared links working.
	redirects: {
		'/es': '/',
	},
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
})
