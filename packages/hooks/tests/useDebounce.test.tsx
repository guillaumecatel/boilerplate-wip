import { renderHook, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useDebounce } from '../src'

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial'))
    expect(result.current).toBe('initial')
  })

  it('debounces value changes with default delay', async () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value), {
      initialProps: { value: 'initial' },
    })
    expect(result.current).toBe('initial')
    rerender({ value: 'updated' })
    expect(result.current).toBe('initial')
    vi.advanceTimersByTime(300)
    await waitFor(() => expect(result.current).toBe('updated'))
  })

  it('debounces with custom delay', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 100 }),
      { initialProps: { value: 'initial' } },
    )
    rerender({ value: 'updated' })
    expect(result.current).toBe('initial')
    vi.advanceTimersByTime(100)
    await waitFor(() => expect(result.current).toBe('updated'))
  })

  it('cancels previous timeout on rapid changes', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 200 }),
      { initialProps: { value: 'initial' } },
    )
    rerender({ value: 'change1' })
    vi.advanceTimersByTime(100)
    rerender({ value: 'change2' })
    vi.advanceTimersByTime(100)
    rerender({ value: 'final' })
    vi.advanceTimersByTime(200)
    await waitFor(() => expect(result.current).toBe('final'))
  })

  it('works with different types', async () => {
    const { result: numberResult, rerender: numberRerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 100 }),
      { initialProps: { value: 0 } },
    )
    numberRerender({ value: 42 })
    vi.advanceTimersByTime(100)
    await waitFor(() => expect(numberResult.current).toBe(42))

    const { result: booleanResult, rerender: booleanRerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 100 }),
      { initialProps: { value: false } },
    )
    booleanRerender({ value: true })
    vi.advanceTimersByTime(100)
    await waitFor(() => expect(booleanResult.current).toBe(true))

    const { result: objectResult, rerender: objectRerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 100 }),
      { initialProps: { value: { id: 1 } } },
    )
    const newObj = { id: 2 }
    objectRerender({ value: newObj })
    vi.advanceTimersByTime(100)
    await waitFor(() => expect(objectResult.current).toEqual(newObj))
  })

  it('cleans up timeout on unmount', () => {
    const { unmount } = renderHook(() => useDebounce('value', { delay: 1000 }))
    unmount()
    vi.advanceTimersByTime(1500)
  })

  it('handles zero delay', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 0 }),
      { initialProps: { value: 'initial' } },
    )
    rerender({ value: 'updated' })
    vi.advanceTimersByTime(0)
    await waitFor(() => expect(result.current).toBe('updated'))
  })
})
