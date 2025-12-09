import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      name: 'Simple Website',
      short_name: 'SW',
      description: 'A simple website boilerplate built with Astro.',
      lang: 'fr',
      start_url: `/?utm_source=pwa`,
      scope: `/`,
      display_override: ['window-controls-overlay'],
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#f6f5ec',
      theme_color: '#000',
      screenshots: [
        {
          src: '/images/screenshot.png',
          sizes: '1200x630',
          type: 'image/png',
          form_factor: 'wide',
          label: 'Simple website',
        },
        {
          src: '/images/screenshot.png',
          sizes: '1200x630',
          type: 'image/png',
          label: 'Simple website',
        },
      ],
      icons: [
        {
          sizes: '1024x1024',
          src: '/icons/maskable_icon.png',
          type: 'image/png',
        },
        {
          sizes: '48x48',
          src: '/icons/maskable_icon_x48.png',
          type: 'image/png',
        },
        {
          sizes: '72x72',
          src: '/icons/maskable_icon_x72.png',
          type: 'image/png',
        },
        {
          sizes: '96x96',
          src: '/icons/maskable_icon_x96.png',
          type: 'image/png',
        },
        {
          sizes: '128x128',
          src: '/icons/maskable_icon_x128.png',
          type: 'image/png',
        },
        {
          sizes: '192x192',
          src: '/icons/maskable_icon_x192.png',
          type: 'image/png',
        },
        {
          sizes: '384x384',
          src: '/icons/maskable_icon_x384.png',
          type: 'image/png',
        },
        {
          sizes: '512x512',
          src: '/icons/maskable_icon_x512.png',
          type: 'image/png',
        },
      ],
    }),
    {
      headers: {
        'Content-Type': 'application/manifest+json',
      },
    },
  )
}
