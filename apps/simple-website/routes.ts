import type { Runtime } from '@inlang/paraglide-js'

export default [
  {
    pattern: '/',
    localized: [
      ['en', '/en'],
      ['fr', '/'],
    ],
  },
  {
    pattern: '/accessibility',
    localized: [
      ['en', '/en/accessibility'],
      ['fr', '/accessibilite'],
    ],
  },
  {
    pattern: '/:path(.*)?',
    localized: [
      ['en', '/en/:path(.*)?'],
      ['fr', '/:path(.*)?'],
    ],
  },
] as Runtime['urlPatterns']
