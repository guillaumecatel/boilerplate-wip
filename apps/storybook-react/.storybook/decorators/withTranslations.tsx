import { Suspense, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import type { DecoratorFunction } from 'storybook/internal/types'

import i18n from '../i18n'

const withLocale: DecoratorFunction = (Story, context) => {
  const { locale } = context.globals

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
}

export default withLocale
