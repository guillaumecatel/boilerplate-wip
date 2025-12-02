import { getLanguageInfo } from '@myorg/shared/intl'
import { useEffect, useMemo } from 'react'
import { useGlobals } from 'storybook/internal/preview-api'
import type { DecoratorFunction } from 'storybook/internal/types'

import { Locale, setLocale } from '../i18n/runtime'

const withLocale: DecoratorFunction = (Story) => {
  const [global] = useGlobals()

  const locale = global.locale as Locale

  useEffect(() => {
    setLocale(locale, { reload: false })
  }, [locale])

  const { code, direction } = useMemo(() => {
    return getLanguageInfo(locale)
  }, [locale])

  return (
    <div
      lang={code}
      dir={direction}>
      <Story />
    </div>
  )
}

export default withLocale
