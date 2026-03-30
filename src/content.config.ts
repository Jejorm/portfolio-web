import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const tagsCollection = z.object({
	label: z.string(),
	icon: z.string(),
});

const projectsCollection = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
	schema: ({ image }) => z.object({
		number: z.string(),
		title: z.string(),
		quote: z.string(),
		tags: z.array(tagsCollection),
		image: image(),
		imageAlt: z.string(),
		liveUrl: z.string().url(),
		secondaryLabel: z.string(),
		secondaryUrl: z.string().url(),
		thirdLabel: z.string().optional(),
		thirdUrl: z.string().url().optional(),
		reversed: z.boolean(),
		order: z.number(), // Added order field to sort projects easily
	}),
});

export const collections = {
	'projects': projectsCollection,
};