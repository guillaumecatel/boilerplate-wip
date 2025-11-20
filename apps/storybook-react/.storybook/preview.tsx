import { getLanguageEndonym, isRTLLanguage } from '@myorg/shared/intl'
import type { Preview } from '@storybook/react-vite'

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
            right: isRTLLanguage(locale) ? 'rtl' : 'ltr',
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
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'system', title: 'System' },
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
    backgrounds: {
      grid: {
        cellSize: 8,
        opacity: 0.2,
        cellAmount: 10,
        offsetX: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
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
