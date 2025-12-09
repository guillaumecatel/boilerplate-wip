// import type { APIContext } from 'astro'
// import type { JSX } from 'astro/jsx-runtime'

// import fontInterRegular from '@myorg/fonts/inter-regular.ttf'
// import satori from 'satori'
// import sharp from 'sharp'

// export async function SVG(component: JSX.Element, context: APIContext) {
//   return await satori(component, {
//     width: 1200,
//     height: 630,
//     fonts: [
//       {
//         name: 'Inter',
//         data: await fetch(new URL(fontInterRegular, context.url.origin)).then(
//           (res) => res.arrayBuffer(),
//         ),
//         weight: 400,
//         style: 'normal',
//       },
//     ],
//     debug: true,
//   })
// }

// export async function PNG(component: JSX.Element, context: APIContext) {
//   return await sharp(Buffer.from(await SVG(component, context)))
//     .png()
//     .toBuffer()
// }
