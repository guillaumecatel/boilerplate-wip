import { cva, type VariantProps } from 'class-variance-authority'
import { Switch as RadixSwitch } from 'radix-ui'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

const switchVariants = cva(
  [
    'group relative inline-flex shrink-0 cursor-pointer items-center',
    'rounded-full border-2 border-transparent',
    'transition-colors duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-base-300',
          'data-[state=checked]:bg-accent-500',
          'dark:bg-base-700',
          'dark:data-[state=checked]:bg-accent-400',
          'focus-visible:ring-base-400',
        ],
        primary: [
          'bg-base-300',
          'data-[state=checked]:bg-accent-500',
          'dark:bg-base-700',
          'dark:data-[state=checked]:bg-accent-400',
          'focus-visible:ring-accent-500',
        ],
        secondary: [
          'bg-base-300',
          'data-[state=checked]:bg-base-600',
          'dark:bg-base-700',
          'dark:data-[state=checked]:bg-base-400',
          'focus-visible:ring-base-400',
        ],
        accent: [
          'bg-base-300',
          'data-[state=checked]:bg-accent-300',
          'dark:bg-base-700',
          'dark:data-[state=checked]:bg-accent-600',
          'focus-visible:ring-accent-400',
        ],
        success: [
          'bg-base-300',
          'data-[state=checked]:bg-success-500',
          'dark:bg-base-700',
          'dark:data-[state=checked]:bg-success-400',
          'focus-visible:ring-success-500',
        ],
        destructive: [
          'bg-base-300',
          'data-[state=checked]:bg-destructive-500',
          'dark:bg-base-700',
          'dark:data-[state=checked]:bg-destructive-400',
          'focus-visible:ring-destructive-500',
        ],
      },
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

const switchThumbVariants = cva(
  [
    'pointer-events-none block rounded-full bg-base-50 shadow-lg',
    'transition-transform duration-200 ease-in-out',
    'dark:bg-base-950',
  ],
  {
    variants: {
      size: {
        sm: 'size-4 data-[state=checked]:translate-x-4',
        md: 'size-5 data-[state=checked]:translate-x-5',
        lg: 'size-6 data-[state=checked]:translate-x-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type SwitchSize = VariantProps<typeof switchVariants>['size']
export type SwitchVariant = VariantProps<typeof switchVariants>['variant']

export interface SwitchProps
  extends Omit<ComponentPropsWithoutRef<typeof RadixSwitch.Root>, 'asChild'>,
    VariantProps<typeof switchVariants> {}

export const Switch = forwardRef<
  ElementRef<typeof RadixSwitch.Root>,
  SwitchProps
>(({ className, variant = 'default', size = 'md', ...props }, ref) => (
  <RadixSwitch.Root
    ref={ref}
    className={switchVariants({ variant, size, className })}
    {...props}>
    <RadixSwitch.Thumb className={switchThumbVariants({ size })} />
  </RadixSwitch.Root>
))

Switch.displayName = 'Switch'

export default Switch
