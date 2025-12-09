import node from '@astrojs/node'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import compressor from 'astro-compressor'
import { defineConfig } from 'astro/config'

import routes from './routes'

export default defineConfig({
  trailingSlash: 'never',
  site: 'http://localhost:4321',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [playformCompress({}), compressor()],
  vite: {
    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
        project: '../../.inlang',
        outdir: './src/i18n',
        strategy: ['url', 'preferredLanguage'],
        urlPatterns: routes,
      }),
    ],
  },
})
