import { cva, type VariantProps } from 'class-variance-authority'
import { Switch as RadixSwitch } from 'radix-ui'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

const switchVariants = cva(
  [
    'group relative inline-flex shrink-0 cursor-pointer items-center',
    'rounded-full border-2 border-transparent',
    'transition-colors duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-[var(--control-focus-ring-width)] focus-visible:ring-offset-[var(--control-focus-ring-offset)]',
    'disabled:cursor-not-allowed disabled:opacity-[var(--control-opacity-disabled)]',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-[var(--control-switch-background-default)]',
          'data-[state=checked]:bg-[var(--control-switch-background-checked)]',
          'focus-visible:ring-[var(--control-focus-ring-color)]',
        ],
        primary: [
          'bg-[var(--control-switch-background-default)]',
          'data-[state=checked]:bg-[var(--control-switch-background-checked)]',
          'focus-visible:ring-[var(--control-focus-ring-color)]',
        ],
        secondary: [
          'bg-[var(--control-switch-background-default)]',
          'data-[state=checked]:bg-[var(--control-border-color-default)]',
          'focus-visible:ring-[var(--control-focus-ring-color)]',
        ],
        accent: [
          'bg-[var(--control-switch-background-default)]',
          'data-[state=checked]:bg-[var(--color-accent-300)]',
          'focus-visible:ring-[var(--color-accent-400)]',
        ],
        success: [
          'bg-[var(--control-switch-background-default)]',
          'data-[state=checked]:bg-[var(--control-border-color-success)]',
          'focus-visible:ring-[var(--control-focus-ring-color-success)]',
        ],
        destructive: [
          'bg-[var(--control-switch-background-default)]',
          'data-[state=checked]:bg-[var(--control-border-color-error)]',
          'focus-visible:ring-[var(--control-focus-ring-color-error)]',
        ],
      },
      size: {
        sm: 'h-[var(--control-switch-height-sm)] w-[var(--control-switch-width-sm)]',
        md: 'h-[var(--control-switch-height-md)] w-[var(--control-switch-width-md)]',
        lg: 'h-[var(--control-switch-height-lg)] w-[var(--control-switch-width-lg)]',
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
    'pointer-events-none block rounded-full bg-[var(--control-switch-thumb-background)] shadow-lg',
    'transition-transform duration-200 ease-in-out',
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
