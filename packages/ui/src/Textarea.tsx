import { cva, type VariantProps } from 'class-variance-authority'
import type { TextareaHTMLAttributes } from 'react'

const textareaVariants = cva(
  [
    'w-full rounded-[var(--control-border-radius)] border-[var(--control-border-width)] transition-colors duration-200',
    'bg-[var(--control-background-color-default)]',
    'text-[var(--control-foreground-color-default)]',
    'placeholder:text-[var(--control-placeholder-color-default)]',
    'focus:outline-none focus:ring-[var(--control-focus-ring-width)] focus:ring-offset-[var(--control-focus-ring-offset)]',
    'disabled:cursor-not-allowed disabled:opacity-[var(--control-opacity-disabled)] disabled:bg-[var(--control-background-color-disabled)]',
    'resize-none',
  ],
  {
    variants: {
      size: {
        sm: 'px-[var(--control-padding-x-sm)] py-[var(--control-padding-y-sm)] text-sm min-h-[80px]',
        md: 'px-[var(--control-padding-x-md)] py-[var(--control-padding-y-md)] text-base min-h-[100px]',
        lg: 'px-[var(--control-padding-x-lg)] py-[var(--control-padding-y-lg)] text-lg min-h-[120px]',
      },
      variant: {
        default: [
          'border-[var(--control-border-color-default)]',
          'focus:border-[var(--control-border-color-focus)]',
          'focus:ring-[var(--control-focus-ring-color)]/[var(--control-focus-ring-opacity)]',
          'hover:border-[var(--control-border-color-hover)]',
        ],
        error: [
          'border-[var(--control-border-color-error)]',
          'focus:border-[var(--control-border-color-error)]',
          'focus:ring-[var(--control-focus-ring-color-error)]/[var(--control-focus-ring-opacity)]',
          'text-[var(--control-foreground-color-error)]',
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
