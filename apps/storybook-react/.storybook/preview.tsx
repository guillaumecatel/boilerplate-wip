import { getLanguageEmoji, getLanguageEndonym } from '@myorg/shared/intl'
import type { Preview } from '@storybook/react-vite'

import '@myorg/fonts/inter.css'

import withTheme from './decorators/withTheme'
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
          return {
            value: locale,
            title: getLanguageEndonym(locale),
            right: getLanguageEmoji(locale),
          }
        }),
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'system', title: 'System', icon: 'accessibility' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: baseLocale,
    theme: 'system',
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
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
  decorators: [withTranslations, withTheme],
}

export default preview
