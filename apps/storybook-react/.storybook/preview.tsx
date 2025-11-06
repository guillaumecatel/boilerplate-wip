import type { Preview } from '@storybook/react-vite'

import withTranslations from './decorators/withTranslations'
import { baseLocale, locales } from './i18n/runtime'

import './style.css'

const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Global language for components',
      toolbar: {
        title: 'Language',
        icon: 'globe',
        items: locales.map((locale) => {
          const localeInformation = new Intl.Locale(locale)
          const displayLanguageName = new Intl.DisplayNames([locale], {
            type: 'language',
          })
          // @ts-expect-error TextInfo is not yet in TS lib
          const dir = localeInformation.getTextInfo().direction

          return {
            value: locale,
            title: displayLanguageName.of(locale),
            right: dir,
          }
        }),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: baseLocale,
  },
  parameters: {
    options: {
      storySort: {
        method: '',
        order: ['Components', ['All']],
        locales: '',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [withTranslations],
}

export default preview
