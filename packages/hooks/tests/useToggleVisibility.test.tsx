import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useToggleVisibility } from '../src'

describe('useToggleVisibility', () => {
  it('initializes with false by default', () => {
    const { result } = renderHook(() => useToggleVisibility())
    expect(result.current.isVisible).toBe(false)
  })

  it('initializes with provided default value', () => {
    const { result } = renderHook(() =>
      useToggleVisibility({ defaultVisible: true }),
    )
    expect(result.current.isVisible).toBe(true)
  })

  it('toggles visibility from false to true', () => {
    const { result } = renderHook(() => useToggleVisibility())
    act(() => {
      result.current.toggle()
    })
    expect(result.current.isVisible).toBe(true)
  })

  it('toggles visibility from true to false', () => {
    const { result } = renderHook(() =>
      useToggleVisibility({ defaultVisible: true }),
    )
    act(() => {
      result.current.toggle()
    })
    expect(result.current.isVisible).toBe(false)
  })

  it('shows (sets to visible)', () => {
    const { result } = renderHook(() => useToggleVisibility())
    act(() => {
      result.current.show()
    })
    expect(result.current.isVisible).toBe(true)
  })

  it('hides (sets to not visible)', () => {
    const { result } = renderHook(() =>
      useToggleVisibility({ defaultVisible: true }),
    )
    act(() => {
      result.current.hide()
    })
    expect(result.current.isVisible).toBe(false)
  })

  it('sets visibility directly to true', () => {
    const { result } = renderHook(() => useToggleVisibility())
    act(() => {
      result.current.setIsVisible(true)
    })
    expect(result.current.isVisible).toBe(true)
  })

  it('sets visibility directly to false', () => {
    const { result } = renderHook(() =>
      useToggleVisibility({ defaultVisible: true }),
    )
    act(() => {
      result.current.setIsVisible(false)
    })
    expect(result.current.isVisible).toBe(false)
  })

  it('calls onToggle callback when toggling', () => {
    const onToggle = vi.fn()
    const { result } = renderHook(() => useToggleVisibility({ onToggle }))
    act(() => {
      result.current.toggle()
    })
    expect(onToggle).toHaveBeenCalledWith(true)
  })

  it('calls onToggle callback when showing', () => {
    const onToggle = vi.fn()
    const { result } = renderHook(() => useToggleVisibility({ onToggle }))
    act(() => {
      result.current.show()
    })
    expect(onToggle).toHaveBeenCalledWith(true)
  })

  it('calls onToggle callback when hiding', () => {
    const onToggle = vi.fn()
    const { result } = renderHook(() =>
      useToggleVisibility({ defaultVisible: true, onToggle }),
    )
    act(() => {
      result.current.hide()
    })
    expect(onToggle).toHaveBeenCalledWith(false)
  })

  it('calls onToggle callback when setting visibility', () => {
    const onToggle = vi.fn()
    const { result } = renderHook(() => useToggleVisibility({ onToggle }))
    act(() => {
      result.current.setIsVisible(true)
    })
    expect(onToggle).toHaveBeenCalledWith(true)
  })
})
