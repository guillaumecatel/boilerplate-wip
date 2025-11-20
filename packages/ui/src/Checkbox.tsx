import { cva, type VariantProps } from 'class-variance-authority'
import type { InputHTMLAttributes } from 'react'

const checkboxVariants = cva(
  'rounded border shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'size-4',
        md: 'size-5',
        lg: 'size-6',
      },
      variant: {
        primary:
          'border-base-300 text-accent-600 focus-visible:ring-accent-500 dark:border-base-600 dark:bg-base-800',
        destructive:
          'border-base-300 text-red-600 focus-visible:ring-red-500 dark:border-base-600 dark:bg-base-800',
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
