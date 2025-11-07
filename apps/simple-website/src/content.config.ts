import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

import { locales } from '@/i18n/runtime'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    lang: z.enum(locales),
  }),
})

export const collections = { posts }
