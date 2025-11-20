import type { APIRoute } from 'astro'
import { getEntry } from 'astro:content'

export const GET: APIRoute = async (context) => {
  const page = await getEntry(`pages`, `${context.params.id}`)

  if (page === undefined) return context.rewrite('/404')

  console.log('Generating OpenGraph PNG for page:', page.id)
  console.log('Title:', page.data.title, page.data.locale)
  // const png = await PNG(
  //   {
  //     type: OpengraphImage,
  //     props: {
  //       title: page.data.title,
  //       description: page.data.description,
  //       lang: `${page.data.locale}-${page.data.locale.toUpperCase()}`,
  //     },
  //   },
  //   context,
  // )

  return new Response(new Uint8Array(), {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
