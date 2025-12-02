import { renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useOnce } from '../src/useOnce'

describe('useOnce', () => {
  beforeEach(() => {
    vi.useRealTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('exécute la callback une seule fois', () => {
    const fn = vi.fn()

    const { rerender, unmount } = renderHook(() => useOnce(fn))

    expect(fn).toHaveBeenCalledTimes(1)

    // rerender ne doit pas exécuter à nouveau
    rerender()
    expect(fn).toHaveBeenCalledTimes(1)

    unmount()
  })

  it('utilise le cleanup retourné', () => {
    const cleanup = vi.fn()
    const fn = vi.fn(() => cleanup)

    const { unmount } = renderHook(() => useOnce(fn))

    expect(fn).toHaveBeenCalledTimes(1)
    expect(cleanup).toHaveBeenCalledTimes(0)

    unmount()

    expect(cleanup).toHaveBeenCalledTimes(1)
  })
})
