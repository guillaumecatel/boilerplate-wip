import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import * as useLocalStorage from '../src/useLocalStorage'
import { useTheme } from '../src/useTheme'

describe('useTheme', () => {
  let useLocalStorageSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    window.localStorage.clear()
    // restore default matchMedia if present
    const w = window as unknown as Record<string, unknown>
    if (w.__originalMatchMedia) {
      window.matchMedia = w.__originalMatchMedia as unknown as (
        query: string,
      ) => MediaQueryList
      delete w.__originalMatchMedia
    }

    // spy on useLocalStorage to ensure useTheme delegates persistence to it
    useLocalStorageSpy = vi.spyOn(useLocalStorage, 'useLocalStorage')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('applique la classe dark si localStorage contient "dark"', () => {
    window.localStorage.setItem('theme', JSON.stringify('dark'))
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
    expect(useLocalStorageSpy).toHaveBeenCalled()
    // premier argument doit être la clé 'theme'
    const mockCalls = useLocalStorageSpy!.mock.calls
    expect(mockCalls[0][0]).toBe('theme')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggle inverse le thème et persiste dans localStorage', () => {
    window.localStorage.setItem('theme', JSON.stringify('light'))
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')

    act(() => {
      result.current.toggle()
    })

    expect(result.current.theme).toBe('dark')
    expect(window.localStorage.getItem('theme')).toBe(JSON.stringify('dark'))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('utilise la préférence système si pas de localStorage', () => {
    // stub matchMedia
    ;(window as unknown as Record<string, unknown>).__originalMatchMedia =
      window.matchMedia
    window.matchMedia = () => ({ matches: true }) as MediaQueryList
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('setDark et setLight modifient la classe sur document.documentElement', () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.setDark()
    })
    expect(result.current.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    act(() => {
      result.current.setLight()
    })
    expect(result.current.theme).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
