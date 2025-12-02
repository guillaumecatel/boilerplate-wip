import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import react from '@astrojs/react'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import compressor from 'astro-compressor'
import { defineConfig } from 'astro/config'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import routes from './routes'

const path = fileURLToPath(import.meta.url)
const dir = dirname(path)

export default defineConfig({
  trailingSlash: 'never',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [playformCompress({}), compressor(), mdx(), react()],
  vite: {
    resolve: {
      alias: {
        '@': resolve(dir, './src'),
        '~': resolve(dir, '.'),
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
