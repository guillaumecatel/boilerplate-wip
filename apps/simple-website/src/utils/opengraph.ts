import type { APIContext } from 'astro'
import type { JSX } from 'astro/jsx-runtime'
import { getFontData } from 'astro:assets'
import satori from 'satori'
import sharp from 'sharp'

export async function SVG(component: JSX.Element, context: APIContext) {
  const data = getFontData('--font-inter')

  return await satori(component, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: await fetch(new URL(data[0].src[0].url, context.url.origin)).then(
          (res) => res.arrayBuffer(),
        ),
        weight: 400,
        style: 'normal',
      },
    ],
  })
}

export async function PNG(component: JSX.Element, context: APIContext) {
  return await sharp(Buffer.from(await SVG(component, context)))
    .png()
    .toBuffer()
}
