import type { AnyEntryMap } from 'astro:content'

import { baseLocale, locales, localizeHref } from '@/i18n/runtime'

export const createStaticSitemapEntry = (
  url: string,
  changefreq: string = 'monthly',
  priority: number = 1.0,
) => {
  return `
    <url>
      <loc>
        ${localizeHref(url, { locale: baseLocale })}
      </loc>
      ${locales
        .filter((locale) => locale !== baseLocale)
        .map(
          (locale) =>
            `<xhtml:link rel="alternate" hreflang="${locale}" href="${localizeHref(url, { locale })}" />`,
        )
        .join('\n    ')}
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `
}

export const createDynamicSitemapEntry = <
  T extends keyof Omit<AnyEntryMap, 'pages'>,
>(
  url: string,
  content: AnyEntryMap[T][string][],
  changefreq: string = 'monthly',
  priority: number = 1.0,
) => {
  return (
    content
      /*
      /* Posts and alternates
      */
      .filter((content) => content.data.locale === baseLocale)
      .map(
        (content) => `
          <url>
            <loc>
              ${localizeHref(`posts/${content.data.slug}`, { locale: baseLocale })}
            </loc>
            ${content.data.alternates
              .filter(({ locale }) => locale !== baseLocale)
              .map(
                (alternates) =>
                  `<xhtml:link
                    rel="alternate"
                    hreflang="${alternates.locale}"
                    href="${localizeHref(`${url}/${alternates.slug}`, { locale: alternates.locale })}"
                  />`,
              )
              .join('\n')}
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
          </url>
        `,
      )
      .join('')
  )
}
