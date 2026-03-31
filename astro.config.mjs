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
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
})
