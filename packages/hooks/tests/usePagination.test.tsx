import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { usePagination } from '../src'

describe('usePagination', () => {
  it('generates correct page range for small total', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 1, totalPages: 5 }),
    )
    expect(result.current.pages).toEqual([1, 2, 3, 4, 5])
  })

  it('includes ellipses for large page count', () => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 10,
        totalPages: 20,
        siblingCount: 1,
        boundaryCount: 1,
      }),
    )
    expect(result.current.pages).toContain('ellipsis')
  })

  it('shows correct pages around current page', () => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 10,
        totalPages: 20,
        siblingCount: 1,
        boundaryCount: 1,
      }),
    )
    expect(result.current.pages).toContain(9)
    expect(result.current.pages).toContain(10)
    expect(result.current.pages).toContain(11)
  })

  it('shows boundary pages at start and end', () => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 10,
        totalPages: 20,
        siblingCount: 1,
        boundaryCount: 1,
      }),
    )
    expect(result.current.pages[0]).toBe(1)
    expect(result.current.pages[result.current.pages.length - 1]).toBe(20)
  })

  it('calls onPageChange when going to page', () => {
    const onPageChange = vi.fn()
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 5,
        totalPages: 10,
        onPageChange,
      }),
    )
    act(() => {
      result.current.goToPage(7)
    })
    expect(onPageChange).toHaveBeenCalledWith(7)
  })

  it('does not call onPageChange for invalid page', () => {
    const onPageChange = vi.fn()
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 5,
        totalPages: 10,
        onPageChange,
      }),
    )
    act(() => {
      result.current.goToPage(0)
    })
    expect(onPageChange).not.toHaveBeenCalled()
    act(() => {
      result.current.goToPage(11)
    })
    expect(onPageChange).not.toHaveBeenCalled()
  })

  it('navigates to next page', () => {
    const onPageChange = vi.fn()
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 5,
        totalPages: 10,
        onPageChange,
      }),
    )
    act(() => {
      result.current.goToNext()
    })
    expect(onPageChange).toHaveBeenCalledWith(6)
  })

  it('navigates to previous page', () => {
    const onPageChange = vi.fn()
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 5,
        totalPages: 10,
        onPageChange,
      }),
    )
    act(() => {
      result.current.goToPrev()
    })
    expect(onPageChange).toHaveBeenCalledWith(4)
  })

  it('navigates to first page', () => {
    const onPageChange = vi.fn()
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 5,
        totalPages: 10,
        onPageChange,
      }),
    )
    act(() => {
      result.current.goToFirst()
    })
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('navigates to last page', () => {
    const onPageChange = vi.fn()
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 5,
        totalPages: 10,
        onPageChange,
      }),
    )
    act(() => {
      result.current.goToLast()
    })
    expect(onPageChange).toHaveBeenCalledWith(10)
  })

  it('sets canGoNext correctly', () => {
    const { result: result1 } = renderHook(() =>
      usePagination({ currentPage: 5, totalPages: 10 }),
    )
    expect(result1.current.canGoNext).toBe(true)

    const { result: result2 } = renderHook(() =>
      usePagination({ currentPage: 10, totalPages: 10 }),
    )
    expect(result2.current.canGoNext).toBe(false)
  })

  it('sets canGoPrev correctly', () => {
    const { result: result1 } = renderHook(() =>
      usePagination({ currentPage: 5, totalPages: 10 }),
    )
    expect(result1.current.canGoPrev).toBe(true)

    const { result: result2 } = renderHook(() =>
      usePagination({ currentPage: 1, totalPages: 10 }),
    )
    expect(result2.current.canGoPrev).toBe(false)
  })

  it('respects siblingCount parameter', () => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 10,
        totalPages: 20,
        siblingCount: 2,
        boundaryCount: 1,
      }),
    )
    expect(result.current.pages).toContain(8)
    expect(result.current.pages).toContain(9)
    expect(result.current.pages).toContain(10)
    expect(result.current.pages).toContain(11)
    expect(result.current.pages).toContain(12)
  })

  it('respects boundaryCount parameter', () => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 10,
        totalPages: 20,
        siblingCount: 1,
        boundaryCount: 2,
      }),
    )
    expect(result.current.pages).toContain(1)
    expect(result.current.pages).toContain(2)
    expect(result.current.pages).toContain(19)
    expect(result.current.pages).toContain(20)
  })
})
