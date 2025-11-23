import { useDebounce } from '@myorg/hooks'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import {
  forwardRef,
  useEffect,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
} from 'react'

// Search Icon
const SearchIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <circle
      cx='11'
      cy='11'
      r='8'
    />
    <path d='m21 21-4.35-4.35' />
  </svg>
)

// X Icon for clear button
const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path d='M18 6 6 18' />
    <path d='m6 6 12 12' />
  </svg>
)

// InputSearch Container Variants
const inputSearchContainerVariants = cva('relative inline-flex w-full', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

// InputSearch Input Variants
const inputSearchInputVariants = cva(
  'w-full rounded-lg border border-base-300 dark:border-base-700 bg-base-0 dark:bg-base-950 text-base-900 dark:text-base-100 placeholder:text-base-400 dark:placeholder:text-base-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'h-8 text-sm',
        md: 'h-10 text-base',
        lg: 'h-12 text-lg',
      },
      iconPosition: {
        start: '',
        end: '',
        none: '',
      },
    },
    compoundVariants: [
      // Icon at start (clear button on right if present)
      { iconPosition: 'start', size: 'sm', class: 'pl-8 pr-8' },
      { iconPosition: 'start', size: 'md', class: 'pl-10 pr-10' },
      { iconPosition: 'start', size: 'lg', class: 'pl-12 pr-12' },
      // Icon at end (clear button on left if present)
      { iconPosition: 'end', size: 'sm', class: 'pl-8 pr-8' },
      { iconPosition: 'end', size: 'md', class: 'pl-10 pr-10' },
      { iconPosition: 'end', size: 'lg', class: 'pl-12 pr-12' },
      // No icon (clear button on right if present)
      { iconPosition: 'none', size: 'sm', class: 'px-3' },
      { iconPosition: 'none', size: 'md', class: 'px-4' },
      { iconPosition: 'none', size: 'lg', class: 'px-4' },
    ],
    defaultVariants: {
      size: 'md',
      iconPosition: 'start',
    },
  },
)

// InputSearch Icon Variants
const inputSearchIconVariants = cva(
  'absolute top-0 flex items-center justify-center text-base-400 dark:text-base-600 pointer-events-none',
  {
    variants: {
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
      position: {
        start: 'left-0',
        end: 'right-0',
      },
    },
    defaultVariants: {
      size: 'md',
      position: 'start',
    },
  },
)

// InputSearch Clear Button Variants
const inputSearchClearButtonVariants = cva(
  'absolute top-0 flex items-center justify-center text-base-400 dark:text-base-600 hover:text-base-600 dark:hover:text-base-400 transition-colors',
  {
    variants: {
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
      iconPosition: {
        start: 'right-0',
        end: 'left-0',
        none: 'right-0',
      },
    },
    defaultVariants: {
      size: 'md',
      iconPosition: 'start',
    },
  },
)

// InputSearch Component
export interface InputSearchProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
    VariantProps<typeof inputSearchInputVariants> {
  onClear?: () => void
  showClearButton?: boolean
  showIcon?: boolean
  iconPosition?: 'start' | 'end' | 'none'
  /**
   * Debounce delay in milliseconds
   * @default 300
   */
  debounceDelay?: number
  /**
   * Callback when debounced value changes
   */
  onDebouncedValueChange?: (value: string) => void
}

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  (
    {
      className,
      size = 'md',
      iconPosition = 'start',
      showIcon = true,
      onClear,
      showClearButton = true,
      value: controlledValue,
      onChange,
      debounceDelay = 300,
      onDebouncedValueChange,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState<string>('')
    const value =
      controlledValue !== undefined ? controlledValue : internalValue

    // Debounce the search value
    const debouncedValue = useDebounce(String(value), { delay: debounceDelay })

    // Call callback when debounced value changes
    useEffect(() => {
      if (onDebouncedValueChange) {
        onDebouncedValueChange(debouncedValue)
      }
    }, [debouncedValue, onDebouncedValueChange])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (controlledValue === undefined) {
        setInternalValue(e.target.value)
      }
      onChange?.(e)
    }

    const handleClear = () => {
      if (controlledValue === undefined) {
        setInternalValue('')
      }
      onClear?.()
    }

    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16

    const showClear = showClearButton && value && String(value).length > 0
    const effectiveIconPosition = showIcon ? iconPosition : 'none'

    return (
      <div className={cx(inputSearchContainerVariants({ size }))}>
        {showIcon && iconPosition !== 'none' && (
          <div
            className={cx(
              inputSearchIconVariants({ size, position: iconPosition }),
            )}>
            <SearchIcon size={iconSize} />
          </div>
        )}
        <input
          ref={ref}
          type='search'
          value={value}
          onChange={handleChange}
          className={cx(
            inputSearchInputVariants({
              size,
              iconPosition: effectiveIconPosition,
            }),
            className,
          )}
          {...props}
        />
        {showClear && (
          <button
            type='button'
            onClick={handleClear}
            className={cx(
              inputSearchClearButtonVariants({
                size,
                iconPosition: effectiveIconPosition,
              }),
            )}
            aria-label='Clear search'>
            <XIcon size={iconSize} />
          </button>
        )}
      </div>
    )
  },
)

InputSearch.displayName = 'InputSearch'

export default InputSearch
