import type { Runtime } from '@inlang/paraglide-js'

export default [
  {
    pattern: '/',
    localized: [
      ['fr', '/'],
      ['en', '/en'],
      ['ar', '/ar'],
      ['de', '/de'],
    ],
  },
  {
    pattern: '/posts/:slug',
    localized: [
      ['fr', '/articles/:slug'],
      ['en', '/en/posts/:slug'],
      ['ar', '/ar/مقالات/:slug'],
      ['de', '/de/artikel/:slug'],
    ],
  },
  {
    pattern: '/accessibility',
    localized: [
      ['fr', '/accessibilite'],
      ['en', '/en/accessibility'],
    ],
  },
  {
    pattern: '/:path(.*)?',
    localized: [
      ['fr', '/:path(.*)?'],
      ['en', '/en/:path(.*)?'],
    ],
  },
] as Runtime['urlPatterns']
