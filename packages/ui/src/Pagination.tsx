import { cva, cx, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

const paginationVariants = cva('flex items-center gap-1', {
  variants: {
    align: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    },
    size: {
      sm: 'gap-0.5',
      md: 'gap-1',
      lg: 'gap-1.5',
    },
  },
  defaultVariants: {
    align: 'center',
    size: 'md',
  },
})

const paginationItemVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border border-base-300 bg-base-50 text-base-700 hover:bg-base-100 hover:border-base-400 dark:border-base-700 dark:bg-base-900 dark:text-base-300 dark:hover:bg-base-800 dark:hover:border-base-600',
        active:
          'border border-accent-600 bg-accent-600 text-white hover:bg-accent-700 hover:border-accent-700 dark:border-accent-500 dark:bg-accent-500',
        ghost:
          'text-base-700 hover:bg-base-100 dark:text-base-300 dark:hover:bg-base-800',
      },
      size: {
        sm: 'h-7 min-w-7 rounded px-2 text-xs',
        md: 'h-9 min-w-9 rounded-md px-3 text-sm',
        lg: 'h-10 min-w-10 rounded-lg px-4 text-base',
      },
      shape: {
        default: '',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      shape: 'default',
    },
  },
)

const paginationEllipsisVariants = cva(
  'inline-flex items-center justify-center text-base-500 dark:text-base-500',
  {
    variants: {
      size: {
        sm: 'h-7 w-7 text-xs',
        md: 'h-9 w-9 text-sm',
        lg: 'h-10 w-10 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface PaginationProps
  extends ComponentPropsWithoutRef<'nav'>,
    VariantProps<typeof paginationVariants> {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
  showFirstLast?: boolean
  showPrevNext?: boolean
  siblingCount?: number
  boundaryCount?: number
  disabled?: boolean
  itemSize?: VariantProps<typeof paginationItemVariants>['size']
  itemShape?: VariantProps<typeof paginationItemVariants>['shape']
}

const ChevronLeftIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'>
    <path
      fillRule='evenodd'
      d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
      clipRule='evenodd'
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'>
    <path
      fillRule='evenodd'
      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
      clipRule='evenodd'
    />
  </svg>
)

const ChevronsLeftIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'>
    <path
      fillRule='evenodd'
      d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
      clipRule='evenodd'
    />
  </svg>
)

const ChevronsRightIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-4 w-4'>
    <path
      fillRule='evenodd'
      d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0zm-6 0a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
      clipRule='evenodd'
    />
  </svg>
)

const getPageRange = (
  currentPage: number,
  totalPages: number,
  siblingCount: number,
  boundaryCount: number,
): (number | 'ellipsis')[] => {
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

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      showFirstLast = false,
      showPrevNext = true,
      siblingCount = 1,
      boundaryCount = 1,
      disabled = false,
      align,
      size,
      itemSize,
      itemShape,
      className,
      ...props
    },
    ref,
  ) => {
    const handlePageChange = (page: number) => {
      if (page < 1 || page > totalPages || disabled) return
      onPageChange?.(page)
    }

    const pages = getPageRange(
      currentPage,
      totalPages,
      siblingCount,
      boundaryCount,
    )
    const effectiveItemSize = itemSize || size

    return (
      <nav
        ref={ref}
        role='navigation'
        aria-label='Pagination'
        data-component='Pagination'
        {...props}>
        <ul className={cx(paginationVariants({ align, size }), className)}>
          {showFirstLast && (
            <li>
              <button
                type='button'
                onClick={() => handlePageChange(1)}
                disabled={disabled || currentPage === 1}
                className={cx(
                  paginationItemVariants({
                    variant: 'ghost',
                    size: effectiveItemSize,
                    shape: itemShape,
                  }),
                )}
                aria-label='First page'>
                <ChevronsLeftIcon />
              </button>
            </li>
          )}

          {showPrevNext && (
            <li>
              <button
                type='button'
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={disabled || currentPage === 1}
                className={cx(
                  paginationItemVariants({
                    variant: 'ghost',
                    size: effectiveItemSize,
                    shape: itemShape,
                  }),
                )}
                aria-label='Previous page'>
                <ChevronLeftIcon />
              </button>
            </li>
          )}

          {pages.map((page, index) =>
            page === 'ellipsis' ? (
              <li
                key={`ellipsis-${index}`}
                className={cx(
                  paginationEllipsisVariants({ size: effectiveItemSize }),
                )}
                aria-hidden='true'>
                ···
              </li>
            ) : (
              <li key={page}>
                <button
                  type='button'
                  onClick={() => handlePageChange(page)}
                  disabled={disabled}
                  className={cx(
                    paginationItemVariants({
                      variant: currentPage === page ? 'active' : 'default',
                      size: effectiveItemSize,
                      shape: itemShape,
                    }),
                  )}
                  aria-label={`Page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}>
                  {page}
                </button>
              </li>
            ),
          )}

          {showPrevNext && (
            <li>
              <button
                type='button'
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={disabled || currentPage === totalPages}
                className={cx(
                  paginationItemVariants({
                    variant: 'ghost',
                    size: effectiveItemSize,
                    shape: itemShape,
                  }),
                )}
                aria-label='Next page'>
                <ChevronRightIcon />
              </button>
            </li>
          )}

          {showFirstLast && (
            <li>
              <button
                type='button'
                onClick={() => handlePageChange(totalPages)}
                disabled={disabled || currentPage === totalPages}
                className={cx(
                  paginationItemVariants({
                    variant: 'ghost',
                    size: effectiveItemSize,
                    shape: itemShape,
                  }),
                )}
                aria-label='Last page'>
                <ChevronsRightIcon />
              </button>
            </li>
          )}
        </ul>
      </nav>
    )
  },
)

Pagination.displayName = 'Pagination'

export default Pagination
