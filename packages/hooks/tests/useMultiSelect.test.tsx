import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useMultiSelect } from '../src'

describe('useMultiSelect', () => {
  it('initializes with default values', () => {
    const { result } = renderHook(() =>
      useMultiSelect({ defaultValue: ['a', 'b'] }),
    )
    expect(result.current.selectedValues).toEqual(['a', 'b'])
    expect(result.current.selectedCount).toBe(2)
  })

  it('initializes with empty array when no default provided', () => {
    const { result } = renderHook(() => useMultiSelect())
    expect(result.current.selectedValues).toEqual([])
    expect(result.current.selectedCount).toBe(0)
  })

  it('toggles item selection', () => {
    const { result } = renderHook(() => useMultiSelect<string>())
    act(() => {
      result.current.toggleItem('a')
    })
    expect(result.current.selectedValues).toContain('a')
    act(() => {
      result.current.toggleItem('a')
    })
    expect(result.current.selectedValues).not.toContain('a')
  })

  it('selects a single item', () => {
    const { result } = renderHook(() => useMultiSelect<string>())
    act(() => {
      result.current.selectItem('a')
    })
    expect(result.current.selectedValues).toContain('a')
  })

  it('does not duplicate when selecting already selected item', () => {
    const { result } = renderHook(() => useMultiSelect({ defaultValue: ['a'] }))
    act(() => {
      result.current.selectItem('a')
    })
    expect(result.current.selectedValues).toEqual(['a'])
  })

  it('deselects a single item', () => {
    const { result } = renderHook(() =>
      useMultiSelect({ defaultValue: ['a', 'b'] }),
    )
    act(() => {
      result.current.deselectItem('a')
    })
    expect(result.current.selectedValues).toEqual(['b'])
  })

  it('clears all selections', () => {
    const { result } = renderHook(() =>
      useMultiSelect({ defaultValue: ['a', 'b', 'c'] }),
    )
    act(() => {
      result.current.clearAll()
    })
    expect(result.current.selectedValues).toEqual([])
  })

  it('selects all items', () => {
    const { result } = renderHook(() => useMultiSelect<string>())
    act(() => {
      result.current.selectAll(['a', 'b', 'c'])
    })
    expect(result.current.selectedValues).toEqual(['a', 'b', 'c'])
  })

  it('checks if item is selected', () => {
    const { result } = renderHook(() =>
      useMultiSelect({ defaultValue: ['a', 'b'] }),
    )
    expect(result.current.isSelected('a')).toBe(true)
    expect(result.current.isSelected('c')).toBe(false)
  })

  it('respects maxSelections limit', () => {
    const { result } = renderHook(() =>
      useMultiSelect<string>({ maxSelections: 2 }),
    )
    act(() => {
      result.current.selectItem('a')
    })
    act(() => {
      result.current.selectItem('b')
    })
    act(() => {
      result.current.selectItem('c')
    })
    expect(result.current.selectedValues).toEqual(['a', 'b'])
    expect(result.current.selectedCount).toBe(2)
  })

  it('sets isMaxReached correctly', () => {
    const { result } = renderHook(() =>
      useMultiSelect<string>({ maxSelections: 2 }),
    )
    expect(result.current.isMaxReached).toBe(false)
    act(() => {
      result.current.selectItem('a')
    })
    expect(result.current.isMaxReached).toBe(false)
    act(() => {
      result.current.selectItem('b')
    })
    // Le hook considère la limite atteinte après le dernier ajout
    expect(result.current.isMaxReached).toBe(true)
  })

  it('truncates selectAll to maxSelections', () => {
    const { result } = renderHook(() =>
      useMultiSelect<string>({ maxSelections: 2 }),
    )
    act(() => {
      result.current.selectAll(['a', 'b', 'c', 'd'])
    })
    expect(result.current.selectedValues).toEqual(['a', 'b'])
  })

  it('calls onChange callback', () => {
    const onChange = vi.fn()
    const { result } = renderHook(() => useMultiSelect<string>({ onChange }))
    act(() => {
      result.current.selectItem('a')
    })
    expect(onChange).toHaveBeenCalledWith(['a'])
  })

  it('sets selected values directly', () => {
    const { result } = renderHook(() => useMultiSelect<string>())
    act(() => {
      result.current.setSelectedValues(['x', 'y', 'z'])
    })
    expect(result.current.selectedValues).toEqual(['x', 'y', 'z'])
  })

  it('works with custom types', () => {
    type Item = { id: number; name: string }
    const items: Item[] = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
    ]
    const { result } = renderHook(() => useMultiSelect<Item>())
    act(() => {
      result.current.selectItem(items[0])
    })
    expect(result.current.selectedValues).toContain(items[0])
  })
})
