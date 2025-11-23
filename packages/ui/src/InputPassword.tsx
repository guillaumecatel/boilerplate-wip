import { cva, cx, type VariantProps } from 'class-variance-authority'
import { unstable_PasswordToggleField as PasswordToggleField } from 'radix-ui'
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

// Icons
const EyeIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
    <circle
      cx='12'
      cy='12'
      r='3'
    />
  </svg>
)

const EyeOffIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
    <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
    <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
    <line
      x1='2'
      x2='22'
      y1='2'
      y2='22'
    />
  </svg>
)

// Container Variants
const passwordContainerVariants = cva(
  'relative inline-flex w-full items-center',
  {
    variants: {
      inputSize: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      inputSize: 'md',
    },
  },
)

// Input Variants
const passwordInputVariants = cva(
  'w-full rounded-lg border border-base-300 dark:border-base-700 bg-base-0 dark:bg-base-950 text-base-900 dark:text-base-100 transition-colors placeholder:text-base-500 dark:placeholder:text-base-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      inputSize: {
        sm: 'h-8 px-3 pr-9 text-sm',
        md: 'h-10 px-4 pr-10 text-base',
        lg: 'h-12 px-5 pr-12 text-lg',
      },
    },
    defaultVariants: {
      inputSize: 'md',
    },
  },
)

// Toggle Button Variants
const passwordToggleVariants = cva(
  'absolute right-0 top-0 flex items-center justify-center text-base-600 dark:text-base-400 transition-colors hover:text-base-900 dark:hover:text-base-100 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-lg',
  {
    variants: {
      inputSize: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
      },
    },
    defaultVariants: {
      inputSize: 'md',
    },
  },
)

// Root Component
export interface InputPasswordRootProps
  extends Omit<
      ComponentPropsWithoutRef<typeof PasswordToggleField.Root>,
      'size'
    >,
    VariantProps<typeof passwordContainerVariants> {
  children?: ReactNode
}

export const InputPasswordRoot = forwardRef<
  HTMLDivElement,
  InputPasswordRootProps
>(({ inputSize, children, ...props }, ref) => {
  return (
    <PasswordToggleField.Root {...props}>
      <div
        ref={ref}
        className={cx(passwordContainerVariants({ inputSize }))}>
        {children}
      </div>
    </PasswordToggleField.Root>
  )
})

InputPasswordRoot.displayName = 'InputPasswordRoot'

// Input Component
export interface InputPasswordInputProps
  extends Omit<
      ComponentPropsWithoutRef<typeof PasswordToggleField.Input>,
      'size'
    >,
    VariantProps<typeof passwordInputVariants> {}

export const InputPasswordInput = forwardRef<
  HTMLInputElement,
  InputPasswordInputProps
>(({ className, inputSize, ...props }, ref) => {
  return (
    <PasswordToggleField.Input
      ref={ref}
      className={cx(passwordInputVariants({ inputSize }), className)}
      {...props}
    />
  )
})

InputPasswordInput.displayName = 'InputPasswordInput'

// Toggle Component
export interface InputPasswordToggleProps
  extends Omit<
      ComponentPropsWithoutRef<typeof PasswordToggleField.Toggle>,
      'size'
    >,
    VariantProps<typeof passwordToggleVariants> {
  children?: ReactNode
}

export const InputPasswordToggle = forwardRef<
  HTMLButtonElement,
  InputPasswordToggleProps
>(({ className, inputSize, children, ...props }, ref) => {
  const iconSize = inputSize === 'sm' ? 14 : inputSize === 'lg' ? 18 : 16

  return (
    <PasswordToggleField.Toggle
      ref={ref}
      className={cx(passwordToggleVariants({ inputSize }), className)}
      {...props}>
      {children || (
        <PasswordToggleField.Icon
          visible={<EyeIcon size={iconSize} />}
          hidden={<EyeOffIcon size={iconSize} />}
        />
      )}
    </PasswordToggleField.Toggle>
  )
})

InputPasswordToggle.displayName = 'InputPasswordToggle'

// Icon Component (re-export)
export const InputPasswordIcon = PasswordToggleField.Icon

// Slot Component (re-export)
export const InputPasswordSlot = PasswordToggleField.Slot

// Compound export
export const InputPassword = {
  Root: InputPasswordRoot,
  Input: InputPasswordInput,
  Toggle: InputPasswordToggle,
  Icon: InputPasswordIcon,
  Slot: InputPasswordSlot,
}

export default InputPassword
