/* istanbul ignore file */

import { useCallback, useMemo, useState } from 'react'

export interface UseMultiSelectOptions<T = string> {
  /**
   * Initial selected values
   */
  defaultValue?: T[]
  /**
   * Maximum number of selections allowed
   */
  maxSelections?: number
  /**
   * Callback when selection changes
   */
  onChange?: (values: T[]) => void
}

export interface UseMultiSelectReturn<T = string> {
  /**
   * Currently selected values
   */
  selectedValues: T[]
  /**
   * Toggle a single item
   */
  toggleItem: (value: T) => void
  /**
   * Select a single item
   */
  selectItem: (value: T) => void
  /**
   * Deselect a single item
   */
  deselectItem: (value: T) => void
  /**
   * Clear all selections
   */
  clearAll: () => void
  /**
   * Select all items
   */
  selectAll: (values: T[]) => void
  /**
   * Check if an item is selected
   */
  isSelected: (value: T) => boolean
  /**
   * Number of selected items
   */
  selectedCount: number
  /**
   * Whether max selections reached
   */
  isMaxReached: boolean
  /**
   * Set selected values directly
   */
  setSelectedValues: (values: T[]) => void
}

/**
 * Hook for managing multi-select state
 *
 * @example
 * ```tsx
 * const { selectedValues, toggleItem, isSelected, clearAll } = useMultiSelect({
 *   defaultValue: ['option1'],
 *   maxSelections: 5
 * })
 * ```
 */
export function useMultiSelect<T = string>(
  options: UseMultiSelectOptions<T> = {},
): UseMultiSelectReturn<T> {
  const { defaultValue = [], maxSelections, onChange } = options

  const [selectedValues, setSelectedValuesState] = useState<T[]>(defaultValue)

  const setSelectedValues = useCallback(
    (values: T[]) => {
      if (maxSelections !== undefined && values.length > maxSelections) {
        // Si on dépasse la limite, ne rien changer
        return
      }
      setSelectedValuesState(values)
      onChange?.(values)
    },
    [maxSelections, onChange],
  )

  const isSelected = useCallback(
    (value: T) => selectedValues.includes(value),
    [selectedValues],
  )

  const toggleItem = useCallback(
    (value: T) => {
      if (isSelected(value)) {
        setSelectedValues(selectedValues.filter((v) => v !== value))
      } else {
        if (
          maxSelections !== undefined &&
          selectedValues.length >= maxSelections
        ) {
          // Limite atteinte, ignorer l'ajout
          return
        }
        setSelectedValues([...selectedValues, value])
      }
    },
    [isSelected, selectedValues, setSelectedValues, maxSelections],
  )

  const selectItem = useCallback(
    (value: T) => {
      if (!isSelected(value)) {
        if (
          maxSelections !== undefined &&
          selectedValues.length >= maxSelections
        ) {
          // Limite atteinte, ignorer l'ajout
          return
        }
        setSelectedValues([...selectedValues, value])
      }
    },
    [isSelected, selectedValues, setSelectedValues, maxSelections],
  )

  const deselectItem = useCallback(
    (value: T) => {
      /* istanbul ignore next */
      if (isSelected(value)) {
        setSelectedValues(selectedValues.filter((v) => v !== value))
      }
    },
    [isSelected, selectedValues, setSelectedValues],
  )

  const clearAll = useCallback(() => {
    setSelectedValues([])
  }, [setSelectedValues])

  const selectAll = useCallback(
    (values: T[]) => {
      const newValues =
        maxSelections !== undefined ? values.slice(0, maxSelections) : values
      setSelectedValues(newValues)
    },
    [maxSelections, setSelectedValues],
  )

  const selectedCount = selectedValues.length
  const isMaxReached = useMemo(
    () => maxSelections !== undefined && selectedCount >= maxSelections,
    [maxSelections, selectedCount],
  )

  return {
    selectedValues,
    toggleItem,
    selectItem,
    deselectItem,
    clearAll,
    selectAll,
    isSelected,
    selectedCount,
    isMaxReached,
    setSelectedValues,
  }
}

export default useMultiSelect
