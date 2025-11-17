import type { Runtime } from '@inlang/paraglide-js'

export default [
  {
    pattern: '/',
    localized: [
      ['en', '/en'],
      ['fr', '/fr'],
      ['de', '/de'],
      ['ar', '/ar'],
    ],
  },
  {
    pattern: '/about',
    localized: [
      ['en', '/en/about'],
      ['fr', '/fr/a-propos'],
      ['de', '/de/uber-uns'],
      ['ar', '/ar/حول'],
    ],
  },
  {
    pattern: '/posts',
    localized: [
      ['en', '/en/posts'],
      ['fr', '/fr/articles'],
      ['de', '/de/artikel'],
      ['ar', '/ar/مقالات'],
    ],
  },
  {
    pattern: '/posts/:slug',
    localized: [
      ['en', '/en/posts/:slug'],
      ['fr', '/fr/articles/:slug'],
      ['de', '/de/artikel/:slug'],
      ['ar', '/ar/مقالات/:slug'],
    ],
  },
  {
    pattern: '/accessibility',
    localized: [
      ['en', '/en/accessibility'],
      ['fr', '/fr/accessibilite'],
      ['de', '/de/barrierefreiheit'],
      ['ar', '/ar/إمكانية-الوصول'],
    ],
  },
  {
    pattern: '/privacy-policy',
    localized: [
      ['en', '/en/privacy-policy'],
      ['fr', '/fr/politique-de-confidentialite'],
      ['de', '/de/datenschutz'],
      ['ar', '/ar/سياسة-الخصوصية'],
    ],
  },
  {
    pattern: '/terms-of-service',
    localized: [
      ['en', '/en/terms-of-service'],
      ['fr', '/fr/conditions-d-utilisation'],
      ['de', '/de/nutzungsbedingungen'],
      ['ar', '/ar/شروط-الخدمة'],
    ],
  },
  {
    pattern: '/cookie-policy',
    localized: [
      ['en', '/en/cookie-policy'],
      ['fr', '/fr/politique-des-cookies'],
      ['de', '/de/cookie-richtlinie'],
      ['ar', '/ar/سياسة-ملفات-تعريف-الارتباط'],
    ],
  },
  {
    pattern: '/manifest.webmanifest',
    localized: [
      ['en', '/en/manifest.webmanifest'],
      ['fr', '/fr/manifest.webmanifest'],
      ['de', '/de/manifest.webmanifest'],
      ['ar', '/ar/manifest.webmanifest'],
    ],
  },
  {
    pattern: '/:path(.*)?',
    localized: [
      ['en', '/en/:path(.*)?'],
      ['fr', '/fr/:path(.*)?'],
      ['de', '/de/:path(.*)?'],
      ['ar', '/ar/:path(.*)?'],
    ],
  },
] as Runtime['urlPatterns']
