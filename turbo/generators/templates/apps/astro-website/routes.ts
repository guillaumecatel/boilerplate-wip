import type { Runtime } from '@inlang/paraglide-js'

export default [
  {
    pattern: '/',
    localized: [
      ['fr', '/'],
      ['en', '/en'],
    ],
  },
  {
    pattern: '/posts/:slug',
    localized: [
      ['fr', '/articles/:slug'],
      ['en', '/en/posts/:slug'],
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
