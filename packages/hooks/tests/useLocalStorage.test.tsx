import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { useLocalStorage } from '../src/useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('lit la valeur initiale si rien dans le localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'init'))
    expect(result.current[0]).toBe('init')
  })

  it('lit la valeur du localStorage si présente', () => {
    window.localStorage.setItem('key', JSON.stringify('persist'))
    const { result } = renderHook(() => useLocalStorage('key', 'init'))
    expect(result.current[0]).toBe('persist')
  })

  it('modifie la valeur et la persiste', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'init'))
    act(() => {
      result.current[1]('new')
    })
    expect(result.current[0]).toBe('new')
    expect(window.localStorage.getItem('key')).toBe(JSON.stringify('new'))
  })

  it('supprime la valeur et revient à initialValue', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'init'))
    act(() => {
      result.current[1]('new')
      result.current[2]()
    })
    expect(result.current[0]).toBe('init')
    expect(window.localStorage.getItem('key')).toBeNull()
  })
})
