import type { APIRoute } from 'astro'
import { getEntry } from 'astro:content'

import { PNG } from '@/utils/opengraph'
import { isRTLLanguage } from '@myorg/shared'

export const GET: APIRoute = async (context) => {
  const page = await getEntry(`pages`, `${context.params.id}`)

  if (page === undefined) return context.rewrite('/404')

  console.log('Generating OpenGraph PNG for page:', page.id)
  console.log('Title:', page.data.title, page.data.locale)
  const png = await PNG(
    {
      type: 'div',
      props: {
        lang: page.data.locale,
        dir: isRTLLanguage(page.data.locale) ? 'rtl' : 'ltr',
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#f9fafb',
        },
        children: [
          {
            type: 'h1',
            props: {
              style: {
                fontSize: '64px',
              },
              children: page.data.title,
            },
          },
          {
            type: 'p',
            props: {
              style: { fontSize: '32px', marginTop: '20px' },
              children: page.data.description,
            },
          },
        ],
      },
    },
    context,
  )

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
