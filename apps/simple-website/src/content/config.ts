import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

import { PageSchema, PostSchema } from '@/schemas'

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: PageSchema,
})

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: PostSchema,
})

export const collections = { pages, posts }
