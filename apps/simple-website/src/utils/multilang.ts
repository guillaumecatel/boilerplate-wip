import { getCollection } from 'astro:content'

import {
  locales as availableLocales,
  baseLocale,
  type Locale,
} from '@/i18n/runtime'

type Locales = readonly (typeof availableLocales)[number][]
export type LocaleHrefMap = { locale: Locale; href: string }[]

/**
 * Nettoie et combine une URL de base avec un chemin pour éviter les doubles slashes
 */
function cleanUrl(siteUrl: string, path: string): string {
  const cleanSiteUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${cleanSiteUrl}${cleanPath}`
}

export interface MultilangGroup<T = unknown> {
  baseId: string
  items: T[]
  mainItem: T
  getUrl: (item: T) => string
  getAlternateLinks: () => { locale: Locale; href: string }[]
}

/**
 * Fonction utilitaire pour extraire l'identifiant de base d'un chemin de fichier
 * Ex: "src/data/posts/sample-1-fr.md" -> "sample-1"
 */
export function getBaseId(filePath: string): string {
  const filename = filePath.split('/').pop() || filePath
  return filename.replace(/\.(md|mdx)$/, '').replace(/-[a-z]{2}$/, '')
}

/**
 * Groupe les éléments d'une collection par leur identifiant de base
 * en se basant sur le nom de fichier (pattern: nom-base-langue.md)
 */
export function groupByBaseId<
  T extends { filePath?: string; id: string; data: { locale: Locale } },
>(items: T[]): Map<string, T[]> {
  const groups = new Map<string, T[]>()

  for (const item of items) {
    const baseId = getBaseId(item.filePath || item.id)

    if (!groups.has(baseId)) {
      groups.set(baseId, [])
    }
    groups.get(baseId)!.push(item)
  }

  return groups
}

/**
 * Crée des groupes multilingues avec des méthodes utilitaires
 */
export function createMultilangGroups<
  T extends {
    filePath?: string
    id: string
    data: { locale: Locale; slug: string }
  },
>(
  items: T[],
  urlBuilder: (slug: string, locale: Locale) => string,
  siteUrl: string,
): MultilangGroup<T>[] {
  const groups = groupByBaseId(items)

  return Array.from(groups.entries()).map(([baseId, groupItems]) => {
    // Choisir l'élément principal (langue préférée en priorité)
    const mainItem =
      groupItems.find((item) => item.data.locale === baseLocale) ||
      groupItems[0]

    return {
      baseId,
      items: groupItems,
      mainItem,
      getUrl: (item: T) =>
        cleanUrl(siteUrl, urlBuilder(item.data.slug, item.data.locale)),
      getAlternateLinks: () =>
        groupItems.map((item) => ({
          locale: item.data.locale,
          href: cleanUrl(siteUrl, urlBuilder(item.data.slug, item.data.locale)),
        })),
    }
  })
}

/**
 * Fonction spécialisée pour les posts de blog
 */
export async function getPostGroups(siteUrl: string) {
  const posts = await getCollection('posts')

  return createMultilangGroups(
    posts.map((post) => ({
      ...post,
      data: {
        ...post.data,
        locale: post.data.lang,
      },
    })),
    (slug, locale) => {
      // Utiliser votre logique de routes existante
      const routes = {
        fr: '/articles',
        en: '/en/posts',
        ar: '/ar/مقالات',
        de: '/de/artikel',
      } as const

      const basePath = routes[locale as keyof typeof routes] || '/posts'
      return `${basePath}/${slug}`
    },
    siteUrl,
  )
}

/**
 * Génère les liens rel="alternate" pour le head d'une page
 */
export function generateAlternateLinks<T>(
  group: MultilangGroup<T>,
  currentLocale: Locale,
): string {
  return group
    .getAlternateLinks()
    .filter((link) => link.locale !== currentLocale) // Exclure la langue courante
    .map(
      (link) =>
        `<link rel="alternate" hreflang="${link.locale}" href="${link.href}" />`,
    )
    .join('\n')
}

/**
 * Génère les liens hreflang pour un sitemap XML
 */
export function generateHreflangLinks<T>(group: MultilangGroup<T>): string {
  return group
    .getAlternateLinks()
    .map(
      (link) =>
        `    <xhtml:link rel="alternate" hreflang="${link.locale}" href="${link.href}" />`,
    )
    .join('\n')
}

/**
 * Trouve un groupe contenant un élément avec un slug et une langue donnés
 */
export function findGroupBySlugAndLang<
  T extends { data: { locale: Locale; slug: string } },
>(
  groups: MultilangGroup<T>[],
  slug: string,
  locale: Locale,
): MultilangGroup<T> | undefined {
  return groups.find((group) =>
    group.items.some(
      (item) => item.data.slug === slug && item.data.locale === locale,
    ),
  )
}

/**
 * Génère les liens alternatifs pour les pages statiques (homepage, etc.)
 */
export function generateStaticPageAlternates(
  locales: Locales,
  pathBuilder: (locale: Locale) => string,
  siteUrl: string,
): { locale: Locale; href: string }[] {
  return locales.map((locale) => ({
    locale,
    href: cleanUrl(siteUrl, pathBuilder(locale)),
  }))
}
