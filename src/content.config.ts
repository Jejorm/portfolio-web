import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projectsCollection = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			order: z.number(),
			title: z.string(),
			kind: z.string(),
			summary: z.string(),
			description: z.string(),
			challenges: z.array(z.string()),
			solutions: z.array(z.string()),
			tags: z.array(z.string()),
			image: image(),
			imageAlt: z.string(),
			liveUrl: z.string().url(),
			links: z.array(
				z.object({
					label: z.string(),
					url: z.string().url(),
				}),
			),
		}),
})

export const collections = {
	projects: projectsCollection,
}
