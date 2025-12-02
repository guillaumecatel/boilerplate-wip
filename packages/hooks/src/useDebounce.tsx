/* istanbul ignore file */

import { useEffect, useState } from 'react'

export interface UseDebounceOptions {
  /**
   * Delay in milliseconds
   * @default 500
   */
  delay?: number
}

/**
 * Hook for debouncing a value
 *
 * @example
 * ```tsx
 * const [searchTerm, setSearchTerm] = useState('')
 * const debouncedSearchTerm = useDebounce(searchTerm, { delay: 300 })
 *
 * useEffect(() => {
 *   // Fetch data with debouncedSearchTerm
 * }, [debouncedSearchTerm])
 * ```
 */
export function useDebounce<T>(value: T, options: UseDebounceOptions = {}): T {
  const { delay = 500 } = options
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    /* istanbul ignore next */
    if (delay === 0) {
      setDebouncedValue(value)
      return
    }
    let cancelled = false
    const handler = setTimeout(() => {
      if (!cancelled) {
        setDebouncedValue(value)
      }
    }, delay)

    return () => {
      cancelled = true
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
