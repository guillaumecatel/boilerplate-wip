import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Stack } from './Stack'
import { Text } from './Text'

const formFieldVariants = cva(['p-2', 'transition-colors duration-200'], {
  variants: {
    variant: {
      default: ['border-base-300', 'dark:border-base-700'],
      muted: [
        'border-base-200',
        'bg-base-50',
        'dark:border-base-800',
        'dark:bg-base-950',
      ],
      accent: [
        'border-accent-300',
        'bg-accent-50',
        'dark:border-accent-700',
        'dark:bg-accent-950',
      ],
      destructive: [
        'border-destructive-300',
        'bg-destructive-50',
        'dark:border-destructive-700',
        'dark:bg-destructive-950',
      ],
    },
    disabled: {
      true: ['opacity-50', 'cursor-not-allowed'],
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    disabled: false,
  },
})

const legendVariants = cva(['font-medium', 'transition-colors duration-200'], {
  variants: {
    variant: {
      default: ['text-base-900', 'dark:text-base-100'],
      muted: ['text-base-600', 'dark:text-base-400'],
      accent: ['text-accent-700', 'dark:text-accent-300'],
      destructive: ['text-destructive-700', 'dark:text-destructive-300'],
    },
    size: {
      sm: 'text-body-small',
      md: 'text-body-medium',
      lg: 'text-body-large',
    },
    disabled: {
      true: 'text-base-400 dark:text-base-600',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    disabled: false,
  },
})

export interface FormFieldProps
  extends Omit<ComponentPropsWithoutRef<'fieldset'>, 'disabled'>,
    VariantProps<typeof formFieldVariants> {
  /**
   * The legend/title text for the fieldset
   */
  legend: string
  /**
   * The form fields to group together
   */
  children: ReactNode
  /**
   * Optional description text displayed below the legend
   */
  description?: string
  /**
   * Error message to display
   */
  error?: string
  /**
   * Whether the fieldset is required
   */
  required?: boolean
  /**
   * Whether the fieldset is disabled
   */
  disabled?: boolean
  /**
   * Size of the legend text
   */
  size?: 'sm' | 'md' | 'lg'
}

export const FormField = ({
  legend,
  children,
  description,
  error,
  required = false,
  disabled = false,
  size = 'md',
  variant = 'default',
  className,
  ...props
}: FormFieldProps) => {
  const effectiveVariant = error ? 'destructive' : variant

  return (
    <Stack
      as='fieldset'
      data-component='FormField'
      disabled={disabled}
      direction='column'
      gap='md'
      className={formFieldVariants({
        variant: effectiveVariant,
        disabled,
        className,
      })}
      {...props}>
      <legend
        className={legendVariants({
          variant: effectiveVariant,
          size,
          disabled,
        })}>
        {legend}
        {required && (
          <span
            className='text-destructive-500 ml-1'
            aria-label='required'>
            *
          </span>
        )}
      </legend>

      {description && (
        <Text
          variant='body-small'
          color={effectiveVariant === 'destructive' ? 'error' : 'secondary'}
          className='-mt-2'>
          {description}
        </Text>
      )}

      {children}

      {error && (
        <Text
          variant='body-small'
          color='error'
          role='alert'>
          {error}
        </Text>
      )}
    </Stack>
  )
}

export default FormField
