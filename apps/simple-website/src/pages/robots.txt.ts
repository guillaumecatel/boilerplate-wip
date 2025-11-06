export async function GET() {
  const siteUrl = import.meta.env.SITE

  const result = `
User-agent: *
Allow: /
Disallow: /api

Sitemap: ${siteUrl}/sitemap.xml
  `.trim()

  return new Response(result, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
