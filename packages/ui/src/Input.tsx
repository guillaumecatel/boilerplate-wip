import { useControlledState } from '@myorg/hooks'
import { isArray } from '@myorg/shared'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ChangeEvent, InputHTMLAttributes } from 'react'

console.log(isArray)

const inputVariants = cva(
  [
    'w-full rounded-[var(--control-border-radius)] border-[var(--control-border-width)] transition-colors duration-200',
    'bg-[var(--control-background-color-default)]',
    'text-[var(--control-foreground-color-default)]',
    'placeholder:text-[var(--control-placeholder-color-default)]',
    'focus:outline-none focus:ring-[var(--control-focus-ring-width)] focus:ring-offset-[var(--control-focus-ring-offset)]',
    'disabled:cursor-not-allowed disabled:opacity-[var(--control-opacity-disabled)] disabled:bg-[var(--control-background-color-disabled)]',
  ],
  {
    variants: {
      size: {
        sm: 'h-[var(--control-height-sm)] px-[var(--control-padding-x-sm)] text-sm',
        md: 'h-[var(--control-height-md)] px-[var(--control-padding-x-md)] text-base',
        lg: 'h-[var(--control-height-lg)] px-[var(--control-padding-x-lg)] text-lg',
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
  value: valueProp,
  defaultValue = '',
  onChange: onChangeProp,
  className,
  ...props
}: InputProps) => {
  const { value, setValue } = useControlledState<string>({
    value: valueProp as string | undefined,
    defaultValue: defaultValue as string,
    onChange: (newValue) => {
      if (onChangeProp) {
        const event = {
          target: { value: newValue },
        } as ChangeEvent<HTMLInputElement>
        onChangeProp(event)
      }
    },
  })

  return (
    <input
      data-component='Input'
      value={value}
      onChange={(e) => setValue(e.target.value)}
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
