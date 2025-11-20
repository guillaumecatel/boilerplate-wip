import type { Locale } from '@/i18n/runtime'

export type AlternativeHrefLang = {
  locale: Locale
  href: string
}

export type HrefItem = {
  label: string
  href: string
}
