import { cva, type VariantProps } from 'class-variance-authority'
import type { LabelHTMLAttributes, ReactNode } from 'react'
import { Text } from './Text'

const labelVariants = cva(
  'font-medium transition-colors select-none cursor-pointer',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      variant: {
        default: 'text-base-700 dark:text-base-300',
        muted: 'text-base-500 dark:text-base-400',
        accent: 'text-accent-700 dark:text-accent-300',
        destructive: 'text-red-700 dark:text-red-300',
      },
      required: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      required: false,
      disabled: false,
    },
  },
)

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  /**
   * The label text
   */
  children: ReactNode
  /**
   * The ID of the input element this label is for
   */
  htmlFor?: string
  /**
   * Optional description text displayed below the label
   */
  description?: string
  /**
   * Whether the field is required
   */
  required?: boolean
  /**
   * Whether the field is disabled
   */
  disabled?: boolean
}

export const Label = ({
  children,
  description,
  size = 'md',
  variant = 'default',
  required = false,
  disabled = false,
  className,
  htmlFor,
  ...props
}: LabelProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label
        data-component='Label'
        htmlFor={htmlFor}
        className={labelVariants({
          size,
          variant,
          required,
          disabled,
          className,
        })}
        {...props}>
        {children}
        {required && (
          <>
            {' '}
            <span
              className='text-red-600 dark:text-red-400'
              aria-hidden='true'>
              *
            </span>
            <span className='sr-only'>(required)</span>
          </>
        )}
      </label>

      {description && (
        <Text
          variant='body-small'
          color='secondary'
          id={htmlFor ? `${htmlFor}-description` : undefined}>
          {description}
        </Text>
      )}
    </div>
  )
}

export default Label
