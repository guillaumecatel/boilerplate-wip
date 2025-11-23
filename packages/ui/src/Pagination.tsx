import { usePagination } from '@myorg/hooks'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { Stack } from './Stack'

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

export interface PaginationProps extends ComponentPropsWithoutRef<'nav'> {
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
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
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
    const {
      pages,
      goToPage,
      goToNext,
      goToPrev,
      goToFirst,
      goToLast,
      canGoNext,
      canGoPrev,
    } = usePagination({
      currentPage,
      totalPages,
      siblingCount,
      boundaryCount,
      onPageChange,
    })

    const effectiveItemSize = itemSize || size

    const gapSize = size === 'sm' ? 'xs' : size === 'lg' ? 'sm' : 'xs'
    const justifyContent =
      align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'

    return (
      <nav
        ref={ref}
        role='navigation'
        aria-label='Pagination'
        data-component='Pagination'
        {...props}>
        <Stack
          as='ul'
          direction='row'
          align='center'
          justify={justifyContent}
          gap={gapSize}
          className={className}>
          {showFirstLast && (
            <li>
              <button
                type='button'
                onClick={goToFirst}
                disabled={disabled || !canGoPrev}
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
                onClick={goToPrev}
                disabled={disabled || !canGoPrev}
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
                  onClick={() => goToPage(page)}
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
                onClick={goToNext}
                disabled={disabled || !canGoNext}
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
                onClick={goToLast}
                disabled={disabled || !canGoNext}
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
        </Stack>
      </nav>
    )
  },
)

Pagination.displayName = 'Pagination'

export default Pagination
