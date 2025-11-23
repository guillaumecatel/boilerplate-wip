import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useDebounce } from '../src'

describe('useDebounce', () => {
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
    expect(result.current).toBe('initial') // Still old value

    await waitFor(
      () => {
        expect(result.current).toBe('updated')
      },
      { timeout: 600 },
    )
  })

  it('debounces with custom delay', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 100 }),
      { initialProps: { value: 'initial' } },
    )

    rerender({ value: 'updated' })
    expect(result.current).toBe('initial')

    await waitFor(
      () => {
        expect(result.current).toBe('updated')
      },
      { timeout: 200 },
    )
  })

  it('cancels previous timeout on rapid changes', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 200 }),
      { initialProps: { value: 'initial' } },
    )

    rerender({ value: 'change1' })
    await new Promise((resolve) => setTimeout(resolve, 100))

    rerender({ value: 'change2' })
    await new Promise((resolve) => setTimeout(resolve, 100))

    rerender({ value: 'final' })

    await waitFor(
      () => {
        expect(result.current).toBe('final')
      },
      { timeout: 250 },
    )
  })

  it('works with different types', async () => {
    const { result: numberResult, rerender: numberRerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 100 }),
      { initialProps: { value: 0 } },
    )

    numberRerender({ value: 42 })
    await waitFor(() => expect(numberResult.current).toBe(42), {
      timeout: 200,
    })

    const { result: booleanResult, rerender: booleanRerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 100 }),
      { initialProps: { value: false } },
    )

    booleanRerender({ value: true })
    await waitFor(() => expect(booleanResult.current).toBe(true), {
      timeout: 200,
    })

    const { result: objectResult, rerender: objectRerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 100 }),
      { initialProps: { value: { id: 1 } } },
    )

    const newObj = { id: 2 }
    objectRerender({ value: newObj })
    await waitFor(() => expect(objectResult.current).toEqual(newObj), {
      timeout: 200,
    })
  })

  it('cleans up timeout on unmount', () => {
    vi.useFakeTimers()

    const { unmount } = renderHook(() => useDebounce('value', { delay: 1000 }))

    unmount()

    // Advance timers to see if any errors occur
    vi.advanceTimersByTime(1500)

    vi.useRealTimers()
  })

  it('handles zero delay', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, { delay: 0 }),
      { initialProps: { value: 'initial' } },
    )

    rerender({ value: 'updated' })

    await waitFor(() => expect(result.current).toBe('updated'), {
      timeout: 50,
    })
  })
})
