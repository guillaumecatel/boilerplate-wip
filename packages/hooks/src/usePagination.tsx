import { useCallback, useMemo } from 'react'

export interface UsePaginationOptions {
  /**
   * Current page number (1-indexed)
   */
  currentPage: number
  /**
   * Total number of pages
   */
  totalPages: number
  /**
   * Number of pages to show on each side of current page
   * @default 1
   */
  siblingCount?: number
  /**
   * Number of pages to show at start and end
   * @default 1
   */
  boundaryCount?: number
  /**
   * Callback when page changes
   */
  onPageChange?: (page: number) => void
}

export interface UsePaginationReturn {
  /**
   * Array of page numbers and ellipses to display
   */
  pages: (number | 'ellipsis')[]
  /**
   * Go to specific page
   */
  goToPage: (page: number) => void
  /**
   * Go to next page
   */
  goToNext: () => void
  /**
   * Go to previous page
   */
  goToPrev: () => void
  /**
   * Go to first page
   */
  goToFirst: () => void
  /**
   * Go to last page
   */
  goToLast: () => void
  /**
   * Whether can go to next page
   */
  canGoNext: boolean
  /**
   * Whether can go to previous page
   */
  canGoPrev: boolean
  /**
   * Current page
   */
  currentPage: number
  /**
   * Total pages
   */
  totalPages: number
}

function getPageRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
  boundaryCount: number,
): (number | 'ellipsis')[] {
  const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(
    currentPage - siblingCount,
    boundaryCount + 1,
  )
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPages - boundaryCount,
  )

  const shouldShowLeftEllipsis = leftSiblingIndex > boundaryCount + 2
  const shouldShowRightEllipsis =
    rightSiblingIndex < totalPages - boundaryCount - 1

  const items: (number | 'ellipsis')[] = []

  // First pages
  for (let i = 1; i <= boundaryCount; i++) {
    items.push(i)
  }

  // Left ellipsis
  if (shouldShowLeftEllipsis) {
    items.push('ellipsis')
  } else if (boundaryCount + 1 < leftSiblingIndex) {
    for (let i = boundaryCount + 1; i < leftSiblingIndex; i++) {
      items.push(i)
    }
  }

  // Sibling pages
  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    items.push(i)
  }

  // Right ellipsis
  if (shouldShowRightEllipsis) {
    items.push('ellipsis')
  } else if (rightSiblingIndex < totalPages - boundaryCount) {
    for (let i = rightSiblingIndex + 1; i <= totalPages - boundaryCount; i++) {
      items.push(i)
    }
  }

  // Last pages
  for (let i = totalPages - boundaryCount + 1; i <= totalPages; i++) {
    items.push(i)
  }

  return items
}

/**
 * Hook for managing pagination with page range calculation
 *
 * @example
 * ```tsx
 * const { pages, goToPage, goToNext, canGoNext } = usePagination({
 *   currentPage: 1,
 *   totalPages: 20,
 *   siblingCount: 1,
 *   boundaryCount: 1
 * })
 * ```
 */
export function usePagination(
  options: UsePaginationOptions,
): UsePaginationReturn {
  const {
    currentPage,
    totalPages,
    siblingCount = 1,
    boundaryCount = 1,
    onPageChange,
  } = options

  const pages = useMemo(
    () => getPageRange(currentPage, totalPages, siblingCount, boundaryCount),
    [currentPage, totalPages, siblingCount, boundaryCount],
  )

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return
      onPageChange?.(page)
    },
    [totalPages, onPageChange],
  )

  const goToNext = useCallback(() => {
    goToPage(currentPage + 1)
  }, [currentPage, goToPage])

  const goToPrev = useCallback(() => {
    goToPage(currentPage - 1)
  }, [currentPage, goToPage])

  const goToFirst = useCallback(() => {
    goToPage(1)
  }, [goToPage])

  const goToLast = useCallback(() => {
    goToPage(totalPages)
  }, [totalPages, goToPage])

  const canGoNext = currentPage < totalPages
  const canGoPrev = currentPage > 1

  return {
    pages,
    goToPage,
    goToNext,
    goToPrev,
    goToFirst,
    goToLast,
    canGoNext,
    canGoPrev,
    currentPage,
    totalPages,
  }
}

export default usePagination
