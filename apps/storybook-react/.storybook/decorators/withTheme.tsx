import { useEffect } from 'react'
import type { DecoratorFunction } from 'storybook/internal/types'

document.documentElement.classList.add('bg-base-50', 'dark:bg-base-950')

const withTheme: DecoratorFunction = (Story, context) => {
  const { theme } = context.globals as { theme: 'light' | 'dark' | 'system' }

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    if (theme === 'system') {
      const isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      document.documentElement.classList.add(isDarkMode ? 'dark' : 'light')
    } else {
      document.documentElement.classList.add(theme)
    }
  }, [theme])

  return <Story />
}

export default withTheme
