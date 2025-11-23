import { useCounter } from '@myorg/hooks'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import {
  forwardRef,
  useEffect,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
} from 'react'
import { Stack } from './Stack'

// Icons
const MinusIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path d='M5 12h14' />
  </svg>
)

const PlusIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path d='M5 12h14' />
    <path d='M12 5v14' />
  </svg>
)

// InputQuantity Container Variants
const inputQuantityVariants = cva(
  [
    'rounded-lg',
    'border',
    'border-base-300',
    'dark:border-base-700',
    'bg-base-0',
    'dark:bg-base-950',
  ],
  {
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

// Button Variants
const buttonVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'border-base-300',
    'dark:border-base-700',
    'text-base-700',
    'dark:text-base-300',
    'transition-colors',
    'hover:bg-base-100',
    'dark:hover:bg-base-900',
    'active:bg-base-200',
    'dark:active:bg-base-800',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:hover:bg-transparent',
  ],
  {
    variants: {
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
      position: {
        left: ['rounded-l-lg', 'border-r'],
        right: ['rounded-r-lg', 'border-l'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

// Input Variants
const inputVariants = cva(
  [
    'flex-1',
    'text-center',
    'bg-transparent',
    'text-base-900',
    'dark:text-base-100',
    'outline-none',
    'appearance-none',
    '[&::-webkit-inner-spin-button]:appearance-none',
    '[&::-webkit-outer-spin-button]:appearance-none',
  ],
  {
    variants: {
      size: {
        sm: ['text-sm', 'px-2', 'min-w-[40px]'],
        md: ['text-base', 'px-3', 'min-w-[48px]'],
        lg: ['text-lg', 'px-4', 'min-w-[56px]'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface InputQuantityProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'size'>,
    VariantProps<typeof inputQuantityVariants> {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number) => void
  showButtons?: boolean
}

export const InputQuantity = forwardRef<HTMLInputElement, InputQuantityProps>(
  (
    {
      className,
      size,
      value: controlledValue,
      defaultValue = 0,
      min = 0,
      max,
      step = 1,
      disabled,
      onValueChange,
      onChange,
      showButtons = true,
      ...props
    },
    ref,
  ) => {
    const { value, increment, decrement, setValue, isMin, isMax } = useCounter({
      defaultValue,
      min,
      max,
      step,
      onValueChange,
    })

    // Sync with controlled value if provided
    useEffect(() => {
      if (controlledValue !== undefined && controlledValue !== value) {
        setValue(controlledValue)
      }
    }, [controlledValue, value, setValue])

    const handleDecrement = () => {
      if (!disabled) {
        decrement()
      }
    }

    const handleIncrement = () => {
      if (!disabled) {
        increment()
      }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value === '' ? min : Number(e.target.value)

      if (!isNaN(newValue)) {
        setValue(newValue)
      }

      onChange?.(e)
    }

    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16

    return (
      <Stack
        as='div'
        direction='row'
        align='center'
        gap='none'
        className={cx(
          inputQuantityVariants({ size }),
          disabled && 'cursor-not-allowed opacity-50',
          className,
        )}>
        {showButtons && (
          <button
            type='button'
            onClick={handleDecrement}
            disabled={disabled || isMin}
            className={cx(buttonVariants({ size, position: 'left' }))}
            aria-label='Decrease value'>
            <MinusIcon size={iconSize} />
          </button>
        )}

        <input
          ref={ref}
          type='number'
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={handleInputChange}
          className={cx(inputVariants({ size }))}
          {...props}
        />

        {showButtons && (
          <button
            type='button'
            onClick={handleIncrement}
            disabled={disabled || isMax}
            className={cx(buttonVariants({ size, position: 'right' }))}
            aria-label='Increase value'>
            <PlusIcon size={iconSize} />
          </button>
        )}
      </Stack>
    )
  },
)

InputQuantity.displayName = 'InputQuantity'

export default InputQuantity
