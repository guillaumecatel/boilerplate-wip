import { cva, type VariantProps } from 'class-variance-authority'
import type { InputHTMLAttributes } from 'react'

const inputVariants = cva(
  [
    'w-full rounded-lg border transition-colors duration-200',
    'bg-white dark:bg-base-900',
    'text-base-900 dark:text-base-50',
    'placeholder:text-base-400 dark:placeholder:text-base-500',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-base-50 dark:disabled:bg-base-800',
  ],
  {
    variants: {
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
      },
      variant: {
        default: [
          'border-base-300 dark:border-base-700',
          'focus:border-accent-500 focus:ring-accent-500/20',
          'hover:border-base-400 dark:hover:border-base-600',
        ],
        error: [
          'border-red-500 dark:border-red-600',
          'focus:border-red-500 focus:ring-red-500/20',
          'text-red-900 dark:text-red-100',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
)

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  error?: boolean
}

export const Input = ({
  size = 'md',
  variant,
  error,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      data-component='Input'
      className={inputVariants({
        size,
        variant: error ? 'error' : variant,
        className,
      })}
      {...props}
    />
  )
}

export default Input
