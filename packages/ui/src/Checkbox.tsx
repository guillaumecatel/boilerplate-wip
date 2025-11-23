import { cva, type VariantProps } from 'class-variance-authority'
import type { InputHTMLAttributes } from 'react'

const checkboxVariants = cva(
  [
    'rounded-[var(--control-checkbox-border-radius)]',
    'border-[var(--control-border-width)]',
    'shadow-[var(--control-shadow)]',
    'transition-colors',
    'focus-visible:outline-none',
    'focus-visible:ring-[var(--control-focus-ring-width)]',
    'focus-visible:ring-offset-[var(--control-focus-ring-offset)]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-[var(--control-opacity-disabled)]',
    'cursor-pointer',
  ],
  {
    variants: {
      size: {
        sm: 'size-[var(--control-checkbox-size-sm)]',
        md: 'size-[var(--control-checkbox-size-md)]',
        lg: 'size-[var(--control-checkbox-size-lg)]',
      },
      variant: {
        primary: [
          'accent-[var(--control-checkbox-checked-background)]',
          'focus-visible:ring-[var(--control-focus-ring-color)]',
        ],
        destructive: [
          'accent-[var(--control-border-color-error)]',
          'focus-visible:ring-[var(--control-focus-ring-color-error)]',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
)

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = ({
  size = 'md',
  variant = 'primary',
  disabled,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <input
      data-component='Checkbox'
      type='checkbox'
      disabled={disabled}
      className={checkboxVariants({ size, variant, className })}
      {...props}
    />
  )
}

export default Checkbox
