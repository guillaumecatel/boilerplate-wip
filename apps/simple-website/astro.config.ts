import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import compressor from 'astro-compressor'
import { defineConfig } from 'astro/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import routes from './routes'

import react from '@astrojs/react'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  trailingSlash: 'never',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [playformCompress({}), compressor(), mdx(), react()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(dirname, './src'),
        '~': path.resolve(dirname, '.'),
      },
    },
    plugins: [
      // @ts-expect-error Missing Vite types
      tailwindcss(),
      // @ts-expect-error Missing Vite types
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
            src: ['@myorg/fonts/inter-regular.woff2'],
          },
          {
            display: 'swap',
            weight: 700,
            style: 'normal',
            src: ['@myorg/fonts/inter-bold.woff2'],
          },
        ],
      },
    ],
  },
})
