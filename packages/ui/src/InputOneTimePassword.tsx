import { cva, cx, type VariantProps } from 'class-variance-authority'
import { unstable_OneTimePasswordField as OneTimePasswordField } from 'radix-ui'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

// OTP Root Variants
const otpRootVariants = cva('flex items-center gap-2', {
  variants: {
    inputSize: {
      sm: 'gap-1.5',
      md: 'gap-2',
      lg: 'gap-3',
    },
  },
  defaultVariants: {
    inputSize: 'md',
  },
})

// OTP Input Variants
const otpInputVariants = cva(
  'flex items-center justify-center text-center rounded-lg border border-base-300 dark:border-base-700 bg-base-0 dark:bg-base-950 text-base-900 dark:text-base-100 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      inputSize: {
        sm: 'h-10 w-10 text-sm',
        md: 'h-12 w-12 text-base',
        lg: 'h-14 w-14 text-lg',
      },
    },
    defaultVariants: {
      inputSize: 'md',
    },
  },
)

// OTP Separator
const SeparatorIcon = () => (
  <svg
    width='8'
    height='8'
    viewBox='0 0 8 8'
    fill='currentColor'
    className='text-base-400 dark:text-base-600'>
    <circle
      cx='4'
      cy='4'
      r='1'
    />
  </svg>
)

// Root Component
export interface InputOneTimePasswordRootProps
  extends Omit<
      ComponentPropsWithoutRef<typeof OneTimePasswordField.Root>,
      'size'
    >,
    VariantProps<typeof otpRootVariants> {}

export const InputOneTimePasswordRoot = forwardRef<
  HTMLDivElement,
  InputOneTimePasswordRootProps
>(({ className, inputSize, orientation, validationType, ...props }, ref) => {
  return (
    <OneTimePasswordField.Root
      ref={ref}
      orientation={orientation ?? 'horizontal'}
      validationType={validationType ?? 'numeric'}
      className={cx(otpRootVariants({ inputSize }), className)}
      {...props}
    />
  )
})

InputOneTimePasswordRoot.displayName = 'InputOneTimePasswordRoot'

// Input Component
export interface InputOneTimePasswordInputProps
  extends Omit<
      ComponentPropsWithoutRef<typeof OneTimePasswordField.Input>,
      'size'
    >,
    VariantProps<typeof otpInputVariants> {}

export const InputOneTimePasswordInput = forwardRef<
  HTMLInputElement,
  InputOneTimePasswordInputProps
>(({ className, inputSize, ...props }, ref) => {
  return (
    <OneTimePasswordField.Input
      ref={ref}
      className={cx(otpInputVariants({ inputSize }), className)}
      {...props}
    />
  )
})

InputOneTimePasswordInput.displayName = 'InputOneTimePasswordInput'

// HiddenInput Component
export const InputOneTimePasswordHiddenInput = OneTimePasswordField.HiddenInput

// Separator Component
export const InputOneTimePasswordSeparator = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      aria-hidden
      className={cx('flex items-center justify-center', className)}
      {...props}>
      <SeparatorIcon />
    </div>
  )
})

InputOneTimePasswordSeparator.displayName = 'InputOneTimePasswordSeparator'

// Compound export
export const InputOneTimePassword = {
  Root: InputOneTimePasswordRoot,
  Input: InputOneTimePasswordInput,
  HiddenInput: InputOneTimePasswordHiddenInput,
  Separator: InputOneTimePasswordSeparator,
}

export default InputOneTimePassword
