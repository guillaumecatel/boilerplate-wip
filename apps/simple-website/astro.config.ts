import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import compressor from 'astro-compressor'
import { defineConfig } from 'astro/config'

import routes from './routes'

export default defineConfig({
  trailingSlash: 'never',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [playformCompress({}), compressor(), mdx()],
  vite: {
    plugins: [
      // @ts-expect-error Missing Vite types
      tailwindcss(),
      paraglideVitePlugin({
        project: '../../.inlang',
        outdir: './src/i18n',
        strategy: ['url', 'preferredLanguage'],
        urlPatterns: routes,
      }),
    ],
  },
  experimental: {
    fonts: [
      {
        provider: 'local',
        name: 'Inter',
        cssVariable: '--font-inter',
        fallbacks: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        variants: [
          {
            display: 'swap',
            weight: 400,
            style: 'normal',
            src: [
              '@myorg/fonts/inter-regular.ttf',
              '@myorg/fonts/inter-regular.woff2',
            ],
          },
          {
            display: 'swap',
            weight: 700,
            style: 'normal',
            src: [
              '@myorg/fonts/inter-bold.ttf',
              '@myorg/fonts/inter-bold.woff2',
            ],
          },
        ],
      },
    ],
  },
})
