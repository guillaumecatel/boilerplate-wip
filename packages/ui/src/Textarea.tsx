import { cva, type VariantProps } from 'class-variance-authority'
import type { TextareaHTMLAttributes } from 'react'

const textareaVariants = cva(
  [
    'w-full rounded-lg border transition-colors duration-200',
    'bg-white dark:bg-base-900',
    'text-base-900 dark:text-base-50',
    'placeholder:text-base-400 dark:placeholder:text-base-500',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-base-50 dark:disabled:bg-base-800',
    'resize-none',
  ],
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-sm min-h-[80px]',
        md: 'px-4 py-2.5 text-base min-h-[100px]',
        lg: 'px-5 py-3 text-lg min-h-[120px]',
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
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      resize: 'none',
    },
  },
)

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {
  error?: boolean
}

export const Textarea = ({
  size = 'md',
  variant,
  error,
  resize = 'none',
  className,
  ...props
}: TextareaProps) => {
  return (
    <textarea
      data-component='Textarea'
      className={textareaVariants({
        size,
        variant: error ? 'error' : variant,
        resize,
        className,
      })}
      {...props}
    />
  )
}

export default Textarea
