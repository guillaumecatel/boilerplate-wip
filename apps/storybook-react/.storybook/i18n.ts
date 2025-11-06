import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ar from './translations/ar'
import de from './translations/de'
import en from './translations/en'
import fr from './translations/fr'

export const defaultLocale = 'fr'

export const locales = [
  { key: 'en', icon: '🇺🇸', name: 'English', dir: 'ltr' },
  { key: 'fr', icon: '🇫🇷', name: 'Français', dir: 'ltr' },
  { key: 'de', icon: '🇩🇪', name: 'Deutsch', dir: 'ltr' },
  { key: 'ar', icon: '🇸🇦', name: 'العربية', dir: 'rtl' },
] as const

i18n.use(initReactI18next).init({
  fallbackLng: defaultLocale,
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    de: { translation: de },
    ar: { translation: ar },
  },
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (locale) => {
  const direction = i18n.dir(locale)
  document.dir = direction
})

export default i18n
