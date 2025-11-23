import { useCallback, useEffect, useRef, useState } from 'react'

export interface UseControlledStateOptions<T> {
  /**
   * Controlled value from props
   */
  value?: T
  /**
   * Default value for uncontrolled mode
   */
  defaultValue: T
  /**
   * Callback when value changes
   */
  onChange?: (value: T) => void
}

export interface UseControlledStateReturn<T> {
  /**
   * Current value (controlled or uncontrolled)
   */
  value: T
  /**
   * Set the value
   */
  setValue: (value: T | ((prev: T) => T)) => void
  /**
   * Whether the component is controlled
   */
  isControlled: boolean
}

/**
 * Hook for managing controlled/uncontrolled component state
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * const { value, setValue } = useControlledState({
 *   defaultValue: ''
 * })
 *
 * // Controlled
 * const { value, setValue } = useControlledState({
 *   value: propValue,
 *   defaultValue: '',
 *   onChange: setPropValue
 * })
 * ```
 */
export function useControlledState<T>(
  options: UseControlledStateOptions<T>,
): UseControlledStateReturn<T> {
  const { value: controlledValue, defaultValue, onChange } = options

  const isControlled = controlledValue !== undefined
  const { current: wasControlled } = useRef(isControlled)

  // Warn if controlled/uncontrolled mode changes
  if (process.env.NODE_ENV !== 'production') {
    if (wasControlled !== isControlled) {
      console.warn(
        'Component is changing from ' +
          (wasControlled ? 'controlled' : 'uncontrolled') +
          ' to ' +
          (isControlled ? 'controlled' : 'uncontrolled') +
          '. This is likely a bug.',
      )
    }
  }

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)

  // Use controlled value if provided, otherwise use internal state
  const value = isControlled ? controlledValue : uncontrolledValue

  const setValue = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      const resolvedValue =
        typeof newValue === 'function'
          ? (newValue as (prev: T) => T)(value)
          : newValue

      if (!isControlled) {
        setUncontrolledValue(resolvedValue)
      }

      onChange?.(resolvedValue)
    },
    [isControlled, onChange, value],
  )

  // Sync internal state with controlled value when it changes
  useEffect(() => {
    if (isControlled && controlledValue !== uncontrolledValue) {
      setUncontrolledValue(controlledValue)
    }
  }, [isControlled, controlledValue, uncontrolledValue])

  return {
    value,
    setValue,
    isControlled,
  }
}

export default useControlledState
