import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

import {
  createDynamicSitemapEntry,
  createStaticSitemapEntry,
} from '@/utils/server/sitemap'

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${createStaticSitemapEntry('')}
    ${createStaticSitemapEntry('posts')}
    ${createDynamicSitemapEntry('posts', posts)}
    ${createStaticSitemapEntry('about')}
    ${createStaticSitemapEntry('privacy-policy')}
    ${createStaticSitemapEntry('terms-of-service')}
    ${createStaticSitemapEntry('cookie-policy')}
    ${createStaticSitemapEntry('accessibility')}
  </urlset>`.trim()

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
