import { act, renderHook } from '@testing-library/react'
import { type KeyboardEvent } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { useKeyboardNavigation } from '../src'

describe('useKeyboardNavigation', () => {
  const items = ['item1', 'item2', 'item3', 'item4', 'item5']

  it('initializes with default focused index', () => {
    const { result } = renderHook(() => useKeyboardNavigation({ items }))
    expect(result.current.focusedIndex).toBe(-1)
  })

  it('initializes with custom default focused index', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 2 }),
    )
    expect(result.current.focusedIndex).toBe(2)
  })

  it('focuses next item', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 0 }),
    )
    act(() => {
      result.current.focusNext()
    })
    expect(result.current.focusedIndex).toBe(1)
  })

  it('focuses previous item', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 2 }),
    )
    act(() => {
      result.current.focusPrevious()
    })
    expect(result.current.focusedIndex).toBe(1)
  })

  it('focuses first item', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 3 }),
    )
    act(() => {
      result.current.focusFirst()
    })
    expect(result.current.focusedIndex).toBe(0)
  })

  it('focuses last item', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 0 }),
    )
    act(() => {
      result.current.focusLast()
    })
    expect(result.current.focusedIndex).toBe(items.length - 1)
  })

  it('loops from last to first when loop is enabled', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({
        items,
        defaultFocusedIndex: items.length - 1,
        loop: true,
      }),
    )
    act(() => {
      result.current.focusNext()
    })
    expect(result.current.focusedIndex).toBe(0)
  })

  it('loops from first to last when loop is enabled', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 0, loop: true }),
    )
    act(() => {
      result.current.focusPrevious()
    })
    expect(result.current.focusedIndex).toBe(items.length - 1)
  })

  it('does not loop when loop is disabled', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({
        items,
        defaultFocusedIndex: items.length - 1,
        loop: false,
      }),
    )
    act(() => {
      result.current.focusNext()
    })
    expect(result.current.focusedIndex).toBe(items.length - 1)

    // Test focusPrevious with loop disabled
    const { result: result2 } = renderHook(() =>
      useKeyboardNavigation({
        items,
        defaultFocusedIndex: 0,
        loop: false,
      }),
    )
    act(() => {
      result2.current.focusPrevious()
    })
    expect(result2.current.focusedIndex).toBe(0)
  })

  it('resets focus to default index', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 0 }),
    )
    act(() => {
      result.current.setFocusedIndex(3)
    })
    expect(result.current.focusedIndex).toBe(3)
    act(() => {
      result.current.resetFocus()
    })
    expect(result.current.focusedIndex).toBe(0)
  })

  it('calls onFocusChange when focus changes', () => {
    const onFocusChange = vi.fn()
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, onFocusChange }),
    )
    act(() => {
      result.current.setFocusedIndex(2)
    })
    expect(onFocusChange).toHaveBeenCalledWith(2, items[2])
  })

  it('calls onSelect when Enter is pressed', () => {
    const onSelect = vi.fn()
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 1, onSelect }),
    )
    act(() => {
      result.current.handleKeyDown({
        key: 'Enter',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })
    expect(onSelect).toHaveBeenCalledWith(1, items[1])
  })

  it('calls onSelect when Space is pressed', () => {
    const onSelect = vi.fn()
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 2, onSelect }),
    )
    act(() => {
      result.current.handleKeyDown({
        key: ' ',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })
    expect(onSelect).toHaveBeenCalledWith(2, items[2])
  })

  it('does not call onSelect when Enter is pressed with invalid focusedIndex', () => {
    const onSelect = vi.fn()
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, onSelect }),
    )
    act(() => {
      result.current.handleKeyDown({
        key: 'Enter',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })
    expect(onSelect).not.toHaveBeenCalled()
  })

  it('handles ArrowDown key', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 0 }),
    )
    const preventDefault = vi.fn()
    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowDown',
        preventDefault,
      } as unknown as KeyboardEvent)
    })
    expect(preventDefault).toHaveBeenCalled()
    expect(result.current.focusedIndex).toBe(1)
  })

  it('handles ArrowUp key', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 2 }),
    )
    const preventDefault = vi.fn()
    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowUp',
        preventDefault,
      } as unknown as KeyboardEvent)
    })
    expect(preventDefault).toHaveBeenCalled()
    expect(result.current.focusedIndex).toBe(1)
  })

  it('handles Home key', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 3 }),
    )
    const preventDefault = vi.fn()
    act(() => {
      result.current.handleKeyDown({
        key: 'Home',
        preventDefault,
      } as unknown as KeyboardEvent)
    })
    expect(preventDefault).toHaveBeenCalled()
    expect(result.current.focusedIndex).toBe(0)
  })

  it('handles End key', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 0 }),
    )
    const preventDefault = vi.fn()
    act(() => {
      result.current.handleKeyDown({
        key: 'End',
        preventDefault,
      } as unknown as KeyboardEvent)
    })
    expect(preventDefault).toHaveBeenCalled()
    expect(result.current.focusedIndex).toBe(items.length - 1)
  })

  it('handles Escape key', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, defaultFocusedIndex: 0 }),
    )
    act(() => {
      result.current.setFocusedIndex(3)
    })
    const preventDefault = vi.fn()
    act(() => {
      result.current.handleKeyDown({
        key: 'Escape',
        preventDefault,
      } as unknown as KeyboardEvent)
    })
    expect(preventDefault).toHaveBeenCalled()
    expect(result.current.focusedIndex).toBe(0)
  })

  it('does not navigate when disabled', () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation({ items, enabled: false, defaultFocusedIndex: 0 }),
    )
    act(() => {
      result.current.focusNext()
    })
    expect(result.current.focusedIndex).toBe(0)
  })

  it('handles empty items array', () => {
    const { result } = renderHook(() => useKeyboardNavigation({ items: [] }))
    act(() => {
      result.current.focusNext()
    })
    expect(result.current.focusedIndex).toBe(-1)
  })

  it('clamps index to valid range', () => {
    const { result } = renderHook(() => useKeyboardNavigation({ items }))
    act(() => {
      result.current.setFocusedIndex(100)
    })
    expect(result.current.focusedIndex).toBe(items.length - 1)

    act(() => {
      result.current.setFocusedIndex(-10)
    })
    expect(result.current.focusedIndex).toBe(-1)
  })

  it('works with custom item types', () => {
    type Item = { id: number; name: string }
    const customItems: Item[] = [
      { id: 1, name: 'one' },
      { id: 2, name: 'two' },
      { id: 3, name: 'three' },
    ]

    const onSelect = vi.fn()
    const { result } = renderHook(() =>
      useKeyboardNavigation({
        items: customItems,
        defaultFocusedIndex: 0,
        onSelect,
      }),
    )

    act(() => {
      result.current.handleKeyDown({
        key: 'Enter',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

    expect(onSelect).toHaveBeenCalledWith(0, customItems[0])
  })
})
