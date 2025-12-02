export type Theme = 'light' | 'dark'

/**
 * Retourne le thème système (`'dark'` | `'light'`).
 * Renvoie `defaultTheme` si l'environnement n'expose pas `window`.
 */
export function getSystemTheme(defaultTheme: Theme = 'light'): Theme {
  if (typeof window === 'undefined') return defaultTheme

  try {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (mediaQuery && typeof mediaQuery.matches === 'boolean') {
      return mediaQuery.matches ? 'dark' : 'light'
    }
    return defaultTheme
  } catch {
    return defaultTheme
  }
}
