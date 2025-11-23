import { useCallback, useState } from 'react'

export interface UseToggleVisibilityOptions {
  /**
   * Initial visibility state
   * @default false
   */
  defaultVisible?: boolean
  /**
   * Callback when visibility changes
   */
  onToggle?: (isVisible: boolean) => void
}

export interface UseToggleVisibilityReturn {
  /**
   * Current visibility state
   */
  isVisible: boolean
  /**
   * Toggle visibility
   */
  toggle: () => void
  /**
   * Show (set to visible)
   */
  show: () => void
  /**
   * Hide (set to not visible)
   */
  hide: () => void
  /**
   * Set visibility directly
   */
  setIsVisible: (visible: boolean) => void
}

/**
 * Hook for managing visibility toggle state
 *
 * @example
 * ```tsx
 * const { isVisible, toggle, show, hide } = useToggleVisibility({
 *   defaultVisible: false
 * })
 * ```
 */
export function useToggleVisibility(
  options: UseToggleVisibilityOptions = {},
): UseToggleVisibilityReturn {
  const { defaultVisible = false, onToggle } = options

  const [isVisible, setIsVisibleState] = useState(defaultVisible)

  const setIsVisible = useCallback(
    (visible: boolean) => {
      setIsVisibleState(visible)
      onToggle?.(visible)
    },
    [onToggle],
  )

  const toggle = useCallback(() => {
    setIsVisible(!isVisible)
  }, [isVisible, setIsVisible])

  const show = useCallback(() => {
    setIsVisible(true)
  }, [setIsVisible])

  const hide = useCallback(() => {
    setIsVisible(false)
  }, [setIsVisible])

  return {
    isVisible,
    toggle,
    show,
    hide,
    setIsVisible,
  }
}

export default useToggleVisibility
