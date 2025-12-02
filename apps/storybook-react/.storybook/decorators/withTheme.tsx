import { useOnce } from '@myorg/hooks/use-once'
import { useTheme } from '@myorg/hooks/use-theme'
import { getSystemTheme, type Theme } from '@myorg/shared/dom'
import { useEffect } from 'react'
import { useGlobals } from 'storybook/internal/preview-api'
import type { DecoratorFunction } from 'storybook/internal/types'

export type StorybookTheme = Theme & 'system'

const setThemeClasses = () =>
  document.documentElement.classList.add('bg-base-50', 'dark:bg-base-950')

const withTheme: DecoratorFunction = (Story) => {
  const { setTheme } = useTheme()
  const [globals] = useGlobals()

  const theme = globals.theme as StorybookTheme

  useOnce(setThemeClasses)

  useEffect(() => {
    if (theme === 'system') {
      const globalSystemTheme = getSystemTheme()
      setTheme(globalSystemTheme)
    } else {
      setTheme(theme)
    }
  }, [theme, setTheme])

  return (
    <div className='bg-base-50 dark:bg-base-950 relative p-4'>
      <Story />
    </div>
  )
}

export default withTheme
