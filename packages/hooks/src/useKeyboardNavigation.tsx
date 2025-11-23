import { useCallback, useState, type KeyboardEvent } from 'react'

export interface UseKeyboardNavigationOptions<T = unknown> {
  /**
   * Array of items to navigate through
   */
  items: T[]
  /**
   * Initial focused index
   * @default -1
   */
  defaultFocusedIndex?: number
  /**
   * Whether navigation is enabled
   * @default true
   */
  enabled?: boolean
  /**
   * Whether to loop from last to first item
   * @default true
   */
  loop?: boolean
  /**
   * Callback when focused item changes
   */
  onFocusChange?: (index: number, item: T | null) => void
  /**
   * Callback when Enter key is pressed
   */
  onSelect?: (index: number, item: T) => void
}

export interface UseKeyboardNavigationReturn {
  /**
   * Current focused index
   */
  focusedIndex: number
  /**
   * Set focused index
   */
  setFocusedIndex: (index: number) => void
  /**
   * Move focus to next item
   */
  focusNext: () => void
  /**
   * Move focus to previous item
   */
  focusPrevious: () => void
  /**
   * Move focus to first item
   */
  focusFirst: () => void
  /**
   * Move focus to last item
   */
  focusLast: () => void
  /**
   * Reset focus to initial state
   */
  resetFocus: () => void
  /**
   * Keyboard event handler
   */
  handleKeyDown: (event: KeyboardEvent) => void
}

/**
 * Hook for keyboard navigation in lists
 *
 * @example
 * ```tsx
 * const { focusedIndex, handleKeyDown } = useKeyboardNavigation({
 *   items: options,
 *   onSelect: (index, item) => selectItem(item)
 * })
 *
 * return (
 *   <div onKeyDown={handleKeyDown}>
 *     {options.map((option, index) => (
 *       <div
 *         key={index}
 *         data-focused={index === focusedIndex}
 *       >
 *         {option}
 *       </div>
 *     ))}
 *   </div>
 * )
 * ```
 */
export function useKeyboardNavigation<T = unknown>(
  options: UseKeyboardNavigationOptions<T>,
): UseKeyboardNavigationReturn {
  const {
    items,
    defaultFocusedIndex = -1,
    enabled = true,
    loop = true,
    onFocusChange,
    onSelect,
  } = options

  const [focusedIndex, setFocusedIndexState] = useState(defaultFocusedIndex)

  const setFocusedIndex = useCallback(
    (index: number) => {
      if (!enabled || items.length === 0) return

      const clampedIndex = Math.max(-1, Math.min(index, items.length - 1))
      setFocusedIndexState(clampedIndex)
      onFocusChange?.(clampedIndex, items[clampedIndex] ?? null)
    },
    [enabled, items, onFocusChange],
  )

  const focusNext = useCallback(() => {
    if (!enabled || items.length === 0) return

    setFocusedIndex(
      focusedIndex === items.length - 1
        ? loop
          ? 0
          : focusedIndex
        : focusedIndex + 1,
    )
  }, [enabled, items.length, focusedIndex, loop, setFocusedIndex])

  const focusPrevious = useCallback(() => {
    if (!enabled || items.length === 0) return

    setFocusedIndex(
      focusedIndex <= 0
        ? loop
          ? items.length - 1
          : focusedIndex
        : focusedIndex - 1,
    )
  }, [enabled, items.length, focusedIndex, loop, setFocusedIndex])

  const focusFirst = useCallback(() => {
    if (!enabled || items.length === 0) return
    setFocusedIndex(0)
  }, [enabled, items.length, setFocusedIndex])

  const focusLast = useCallback(() => {
    if (!enabled || items.length === 0) return
    setFocusedIndex(items.length - 1)
  }, [enabled, items.length, setFocusedIndex])

  const resetFocus = useCallback(() => {
    setFocusedIndex(defaultFocusedIndex)
  }, [defaultFocusedIndex, setFocusedIndex])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled || items.length === 0) return

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          focusNext()
          break
        case 'ArrowUp':
          event.preventDefault()
          focusPrevious()
          break
        case 'Home':
          event.preventDefault()
          focusFirst()
          break
        case 'End':
          event.preventDefault()
          focusLast()
          break
        case 'Enter':
        case ' ':
          event.preventDefault()
          if (focusedIndex >= 0 && focusedIndex < items.length) {
            onSelect?.(focusedIndex, items[focusedIndex])
          }
          break
        case 'Escape':
          event.preventDefault()
          resetFocus()
          break
      }
    },
    [
      enabled,
      items,
      focusedIndex,
      focusNext,
      focusPrevious,
      focusFirst,
      focusLast,
      resetFocus,
      onSelect,
    ],
  )

  return {
    focusedIndex,
    setFocusedIndex,
    focusNext,
    focusPrevious,
    focusFirst,
    focusLast,
    resetFocus,
    handleKeyDown,
  }
}

export default useKeyboardNavigation
