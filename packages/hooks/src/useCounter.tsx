import { useCallback, useState } from 'react'

export interface UseCounterOptions {
  /**
   * Initial value
   */
  defaultValue?: number
  /**
   * Minimum value
   */
  min?: number
  /**
   * Maximum value
   */
  max?: number
  /**
   * Step increment/decrement
   */
  step?: number
  /**
   * Callback when value changes
   */
  onValueChange?: (value: number) => void
}

export interface UseCounterReturn {
  /**
   * Current counter value
   */
  value: number
  /**
   * Increment the counter
   */
  increment: () => void
  /**
   * Decrement the counter
   */
  decrement: () => void
  /**
   * Set a specific value
   */
  setValue: (value: number) => void
  /**
   * Reset to default value
   */
  reset: () => void
  /**
   * Whether the counter is at minimum
   */
  isMin: boolean
  /**
   * Whether the counter is at maximum
   */
  isMax: boolean
}

/**
 * Hook for managing a counter with min/max bounds and step increment
 *
 * @example
 * ```tsx
 * const { value, increment, decrement, isMin, isMax } = useCounter({
 *   defaultValue: 0,
 *   min: 0,
 *   max: 10,
 *   step: 1
 * })
 * ```
 */
export function useCounter(options: UseCounterOptions = {}): UseCounterReturn {
  const {
    defaultValue = 0,
    min = -Infinity,
    max = Infinity,
    step = 1,
    onValueChange,
  } = options

  const [value, setValueState] = useState(defaultValue)

  const clamp = useCallback(
    (val: number) => {
      return Math.min(Math.max(val, min), max)
    },
    [min, max],
  )

  const setValue = useCallback(
    (newValue: number) => {
      const clampedValue = clamp(newValue)
      setValueState(clampedValue)
      onValueChange?.(clampedValue)
    },
    [clamp, onValueChange],
  )

  const increment = useCallback(() => {
    setValue(value + step)
  }, [value, step, setValue])

  const decrement = useCallback(() => {
    setValue(value - step)
  }, [value, step, setValue])

  const reset = useCallback(() => {
    setValue(defaultValue)
  }, [defaultValue, setValue])

  const isMin = value <= min
  const isMax = value >= max

  return {
    value,
    increment,
    decrement,
    setValue,
    reset,
    isMin,
    isMax,
  }
}

export default useCounter
