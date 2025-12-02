import { getSystemTheme } from '@myorg/shared/dom'
import { useCallback, useEffect } from 'react'

import { useLocalStorage } from './useLocalStorage'

type Theme = 'light' | 'dark'

export function useTheme() {
  // On utilise useLocalStorage pour centraliser la lecture/écriture
  // de la clé 'theme'. L'initialValue provient de la préférence système.
  const [theme, setTheme] = useLocalStorage<Theme>('theme', getSystemTheme())

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const setDark = useCallback(() => setTheme('dark'), [setTheme])
  const setLight = useCallback(() => setTheme('light'), [setTheme])
  const toggle = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [setTheme],
  )

  return { theme, setTheme, setDark, setLight, toggle }
}

export default useTheme
