import { z } from 'astro:content'

import { locales } from '@/i18n/runtime'

export const PostSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  slug: z.string(),
  locale: z.enum(locales),
  alternates: z.array(
    z.object({
      locale: z.enum(locales),
      slug: z.string(),
    }),
  ),
})

export type Post = z.infer<typeof PostSchema>
