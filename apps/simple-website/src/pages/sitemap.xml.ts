import { locales, localizeHref } from '@/i18n/runtime'
import { generateHreflangLinks, getPostGroups } from '@/utils/multilang'

export async function GET() {
  const siteUrl = import.meta.env.SITE

  // Utiliser la fonction utilitaire pour obtenir les groupes de posts
  const postGroups = await getPostGroups(siteUrl, 'fr')

  const urls: string[] = []

  // Créer UNE seule URL par groupe de posts
  for (const group of postGroups) {
    const mainUrl = group.getUrl(group.mainItem)
    const hreflangLinks = generateHreflangLinks(group)

    // Ajouter UNE SEULE entrée pour ce groupe
    urls.push(`  <url>
    <loc>${mainUrl}</loc>
${hreflangLinks}
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`)
  }

  // Ajouter la homepage (toutes langues)
  const homeAlternates = locales
    .map((locale) => {
      const href = `${siteUrl}${localizeHref('/', { locale })}`
      return `<xhtml:link rel="alternate" hreflang="${locale}" href="${href}" />`
    })
    .join('\n    ')

  const homeUrl = `
  <url>
    <loc>${siteUrl}/</loc>
    ${homeAlternates}
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`

  // Génération du XML final
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${homeUrl}
${urls.join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
