import type { Preview } from '@storybook/react-vite'

import withTranslations from './decorators/withTranslations'
import { defaultLocale, locales } from './i18n'

import './style.css'

const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Global language for components',
      toolbar: {
        title: 'Language',
        icon: 'globe',
        items: locales.map((locale) => ({
          value: locale.key,
          title: `${locale.icon} ${locale.name}`,
          right: locale.dir,
        })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: defaultLocale,
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
