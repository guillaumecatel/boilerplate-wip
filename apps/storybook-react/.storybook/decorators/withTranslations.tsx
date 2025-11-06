import { Suspense, useEffect } from 'react'
import type { DecoratorFunction } from 'storybook/internal/types'

import { locales, setLocale } from '../i18n/runtime'

const withLocale: DecoratorFunction = (Story, context) => {
  const { locale } = context.globals as { locale: (typeof locales)[number] }
  const localeInformation = new Intl.Locale(locale)
  // @ts-expect-error TextInfo is not yet in TS lib
  const dir = localeInformation.getTextInfo().direction

  useEffect(() => {
    setLocale(locale)
  }, [locale])

  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <div
        lang={locale}
        dir={dir}>
        <Story />
      </div>
    </Suspense>
  )
}

export default withLocale
