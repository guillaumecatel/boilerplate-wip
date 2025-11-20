import { isRTLLanguage } from '@myorg/shared/intl'
import { Suspense, useEffect } from 'react'
import type { DecoratorFunction } from 'storybook/internal/types'

import { m } from '../i18n/messages'
import { locales, setLocale } from '../i18n/runtime'

const withLocale: DecoratorFunction = (Story, context) => {
  const { locale } = context.globals as { locale: (typeof locales)[number] }

  useEffect(() => {
    setLocale(locale)
  }, [locale])

  return (
    <Suspense fallback={<div>{m.loading()}</div>}>
      <div
        lang={locale}
        dir={isRTLLanguage(locale) ? 'rtl' : 'ltr'}>
        <Story />
      </div>
    </Suspense>
  )
}

export default withLocale
