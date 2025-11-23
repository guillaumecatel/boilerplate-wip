import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useControlledState } from '../src'

describe('useControlledState', () => {
  describe('uncontrolled mode', () => {
    it('initializes with default value', () => {
      const { result } = renderHook(() =>
        useControlledState({ defaultValue: 'initial' }),
      )
      expect(result.current.value).toBe('initial')
      expect(result.current.isControlled).toBe(false)
    })

    it('updates internal state when setValue is called', () => {
      const { result } = renderHook(() =>
        useControlledState({ defaultValue: 'initial' }),
      )
      act(() => {
        result.current.setValue('updated')
      })
      expect(result.current.value).toBe('updated')
    })

    it('calls onChange callback in uncontrolled mode', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() =>
        useControlledState({ defaultValue: 'initial', onChange }),
      )
      act(() => {
        result.current.setValue('updated')
      })
      expect(onChange).toHaveBeenCalledWith('updated')
    })

    it('supports function updates', () => {
      const { result } = renderHook(() =>
        useControlledState({ defaultValue: 5 }),
      )
      act(() => {
        result.current.setValue((prev) => prev + 10)
      })
      expect(result.current.value).toBe(15)
    })
  })

  describe('controlled mode', () => {
    it('uses controlled value when provided', () => {
      const { result } = renderHook(() =>
        useControlledState({ value: 'controlled', defaultValue: 'default' }),
      )
      expect(result.current.value).toBe('controlled')
      expect(result.current.isControlled).toBe(true)
    })

    it('does not update internal state in controlled mode', () => {
      const { result } = renderHook(() =>
        useControlledState({ value: 'controlled', defaultValue: 'default' }),
      )
      act(() => {
        result.current.setValue('new value')
      })
      expect(result.current.value).toBe('controlled')
    })

    it('calls onChange callback in controlled mode', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() =>
        useControlledState({
          value: 'controlled',
          defaultValue: 'default',
          onChange,
        }),
      )
      act(() => {
        result.current.setValue('new value')
      })
      expect(onChange).toHaveBeenCalledWith('new value')
    })

    it('syncs with controlled value changes', () => {
      const { result, rerender } = renderHook(
        ({ value }) => useControlledState({ value, defaultValue: 'default' }),
        { initialProps: { value: 'initial' } },
      )
      expect(result.current.value).toBe('initial')

      rerender({ value: 'updated' })
      expect(result.current.value).toBe('updated')
    })

    it('supports function updates in controlled mode', () => {
      const onChange = vi.fn()
      const { result } = renderHook(() =>
        useControlledState({
          value: 10,
          defaultValue: 0,
          onChange,
        }),
      )
      act(() => {
        result.current.setValue((prev) => prev + 5)
      })
      expect(onChange).toHaveBeenCalledWith(15)
    })
  })

  describe('mode switching', () => {
    it('warns when switching from uncontrolled to controlled', () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})
      const { rerender } = renderHook(
        ({ value }: { value?: string }) =>
          useControlledState({ value, defaultValue: 'default' }),
        { initialProps: { value: undefined as string | undefined } },
      )

      rerender({ value: 'controlled' })

      if (process.env.NODE_ENV !== 'production') {
        expect(consoleWarnSpy).toHaveBeenCalled()
      }
      consoleWarnSpy.mockRestore()
    })

    it('warns when switching from controlled to uncontrolled', () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})
      const { rerender } = renderHook(
        ({ value }: { value?: string }) =>
          useControlledState({ value, defaultValue: 'default' }),
        { initialProps: { value: 'controlled' as string | undefined } },
      )

      rerender({ value: undefined })

      if (process.env.NODE_ENV !== 'production') {
        expect(consoleWarnSpy).toHaveBeenCalled()
      }
      consoleWarnSpy.mockRestore()
    })
  })

  describe('types', () => {
    it('works with string type', () => {
      const { result } = renderHook(() =>
        useControlledState({ defaultValue: 'test' }),
      )
      expect(typeof result.current.value).toBe('string')
    })

    it('works with number type', () => {
      const { result } = renderHook(() =>
        useControlledState({ defaultValue: 42 }),
      )
      expect(typeof result.current.value).toBe('number')
    })

    it('works with object type', () => {
      const obj = { id: 1, name: 'test' }
      const { result } = renderHook(() =>
        useControlledState({ defaultValue: obj }),
      )
      expect(result.current.value).toEqual(obj)
    })

    it('works with array type', () => {
      const arr = [1, 2, 3]
      const { result } = renderHook(() =>
        useControlledState({ defaultValue: arr }),
      )
      expect(result.current.value).toEqual(arr)
    })
  })
})
