import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useCounter } from '../src'

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter({ defaultValue: 5 }))
    expect(result.current.value).toBe(5)
  })

  it('initializes with 0 when no default value provided', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.value).toBe(0)
  })

  it('increments the counter by step', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 0, step: 2 }),
    )
    act(() => {
      result.current.increment()
    })
    expect(result.current.value).toBe(2)
  })

  it('decrements the counter by step', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 10, step: 3 }),
    )
    act(() => {
      result.current.decrement()
    })
    expect(result.current.value).toBe(7)
  })

  it('sets a specific value', () => {
    const { result } = renderHook(() => useCounter({ defaultValue: 0 }))
    act(() => {
      result.current.setValue(42)
    })
    expect(result.current.value).toBe(42)
  })

  it('resets to default value', () => {
    const { result } = renderHook(() => useCounter({ defaultValue: 10 }))
    act(() => {
      result.current.setValue(50)
    })
    expect(result.current.value).toBe(50)
    act(() => {
      result.current.reset()
    })
    expect(result.current.value).toBe(10)
  })

  it('respects minimum boundary', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 5, min: 0, step: 10 }),
    )
    act(() => {
      result.current.decrement()
    })
    expect(result.current.value).toBe(0)
  })

  it('respects maximum boundary', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 5, max: 10, step: 10 }),
    )
    act(() => {
      result.current.increment()
    })
    expect(result.current.value).toBe(10)
  })

  it('clamps setValue to min/max', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 5, min: 0, max: 10 }),
    )
    act(() => {
      result.current.setValue(20)
    })
    expect(result.current.value).toBe(10)
    act(() => {
      result.current.setValue(-5)
    })
    expect(result.current.value).toBe(0)
  })

  it('sets isMin correctly', () => {
    const { result } = renderHook(() => useCounter({ defaultValue: 0, min: 0 }))
    expect(result.current.isMin).toBe(true)
    act(() => {
      result.current.increment()
    })
    expect(result.current.isMin).toBe(false)
  })

  it('sets isMax correctly', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 10, max: 10 }),
    )
    expect(result.current.isMax).toBe(true)
    act(() => {
      result.current.decrement()
    })
    expect(result.current.isMax).toBe(false)
  })

  it('calls onValueChange callback', () => {
    const onValueChange = vi.fn()
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 0, onValueChange }),
    )
    act(() => {
      result.current.increment()
    })
    expect(onValueChange).toHaveBeenCalledWith(1)
  })
})
