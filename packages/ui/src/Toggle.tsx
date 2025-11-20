import { cva, cx, type VariantProps } from 'class-variance-authority'
import {
  Toggle as RadixToggle,
  ToggleGroup as RadixToggleGroup,
} from 'radix-ui'
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef } from 'react'

import { Text, type TextVariant } from './Text'

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'rounded-full font-medium',
    'transition-all duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'data-[state=on]:shadow-inner',
  ],
  {
    variants: {
      variant: {
        'default': [
          'bg-transparent text-base-900',
          'hover:bg-base-100',
          'dark:text-base-50',
          'dark:hover:bg-base-800',
          'data-[state=on]:bg-accent-100 data-[state=on]:text-accent-900',
          'dark:data-[state=on]:bg-accent-900 dark:data-[state=on]:text-accent-50',
          'focus-visible:ring-base-400',
        ],
        'outline': [
          'border-2 border-base-300 bg-transparent',
          'text-base-900',
          'hover:bg-base-50',
          'hover:border-base-400',
          'dark:border-base-700 dark:text-base-50',
          'dark:hover:bg-base-900',
          'dark:hover:border-base-600',
          'data-[state=on]:border-accent-500 data-[state=on]:bg-accent-50 data-[state=on]:text-accent-900',
          'dark:data-[state=on]:border-accent-600 dark:data-[state=on]:bg-accent-950 dark:data-[state=on]:text-accent-50',
          'focus-visible:ring-base-400',
        ],
        'primary': [
          'bg-accent-500 text-white',
          'hover:bg-accent-600',
          'dark:bg-accent-400 dark:text-accent-950',
          'dark:hover:bg-accent-300',
          'data-[state=on]:bg-accent-600 data-[state=on]:shadow-inner',
          'dark:data-[state=on]:bg-accent-300',
          'focus-visible:ring-accent-500',
          'shadow-sm hover:shadow-md',
        ],
        'secondary': [
          'bg-base-100 text-base-900',
          'hover:bg-base-200',
          'dark:bg-base-800 dark:text-base-50',
          'dark:hover:bg-base-700',
          'data-[state=on]:bg-base-200',
          'dark:data-[state=on]:bg-base-700',
          'focus-visible:ring-base-400',
          'shadow-sm hover:shadow-md',
        ],
        'ghost': [
          'bg-transparent text-base-900',
          'hover:bg-base-100',
          'dark:text-base-50',
          'dark:hover:bg-base-800',
          'data-[state=on]:bg-base-100',
          'dark:data-[state=on]:bg-base-800',
          'focus-visible:ring-base-400',
        ],
        'accent': [
          'bg-accent-200 text-accent-950',
          'hover:bg-accent-300',
          'dark:bg-accent-700 dark:text-accent-50',
          'dark:hover:bg-accent-600',
          'data-[state=on]:bg-accent-300',
          'dark:data-[state=on]:bg-accent-600',
          'focus-visible:ring-accent-400',
          'shadow-sm hover:shadow-md',
        ],
        'destructive': [
          'bg-red-600 text-white',
          'hover:bg-red-700',
          'dark:bg-red-700',
          'dark:hover:bg-red-600',
          'data-[state=on]:bg-red-700',
          'dark:data-[state=on]:bg-red-600',
          'focus-visible:ring-red-600',
          'shadow-sm hover:shadow-md',
        ],
        'icon-default': [
          'bg-transparent text-base-900',
          'hover:bg-base-100',
          'dark:text-base-50',
          'dark:hover:bg-base-800',
          'data-[state=on]:bg-accent-100 data-[state=on]:text-accent-900',
          'dark:data-[state=on]:bg-accent-900 dark:data-[state=on]:text-accent-50',
          'focus-visible:ring-base-400',
        ],
        'icon-primary': [
          'bg-accent-500 text-white',
          'hover:bg-accent-600',
          'dark:bg-accent-400 dark:text-accent-950',
          'dark:hover:bg-accent-300',
          'data-[state=on]:bg-accent-600 data-[state=on]:shadow-inner',
          'dark:data-[state=on]:bg-accent-300',
          'focus-visible:ring-accent-500',
          'shadow-sm hover:shadow-md',
        ],
        'icon-secondary': [
          'bg-base-100 text-base-900',
          'hover:bg-base-200',
          'dark:bg-base-800 dark:text-base-50',
          'dark:hover:bg-base-700',
          'data-[state=on]:bg-base-200',
          'dark:data-[state=on]:bg-base-700',
          'focus-visible:ring-base-400',
          'shadow-sm hover:shadow-md',
        ],
        'icon-outline': [
          'border-2 border-base-300 bg-transparent',
          'text-base-900',
          'hover:bg-base-50',
          'hover:border-base-400',
          'dark:border-base-700 dark:text-base-50',
          'dark:hover:bg-base-900',
          'dark:hover:border-base-600',
          'data-[state=on]:border-accent-500 data-[state=on]:bg-accent-50 data-[state=on]:text-accent-900',
          'dark:data-[state=on]:border-accent-600 dark:data-[state=on]:bg-accent-950 dark:data-[state=on]:text-accent-50',
          'focus-visible:ring-base-400',
        ],
        'icon-ghost': [
          'bg-transparent text-base-900',
          'hover:bg-base-100',
          'dark:text-base-50',
          'dark:hover:bg-base-800',
          'data-[state=on]:bg-base-100',
          'dark:data-[state=on]:bg-base-800',
          'focus-visible:ring-base-400',
        ],
        'icon-accent': [
          'bg-accent-200 text-accent-950',
          'hover:bg-accent-300',
          'dark:bg-accent-700 dark:text-accent-50',
          'dark:hover:bg-accent-600',
          'data-[state=on]:bg-accent-300',
          'dark:data-[state=on]:bg-accent-600',
          'focus-visible:ring-accent-400',
          'shadow-sm hover:shadow-md',
        ],
        'icon-destructive': [
          'bg-red-600 text-white',
          'hover:bg-red-700',
          'dark:bg-red-700',
          'dark:hover:bg-red-600',
          'data-[state=on]:bg-red-700',
          'dark:data-[state=on]:bg-red-600',
          'focus-visible:ring-red-600',
          'shadow-sm hover:shadow-md',
        ],
      },
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
    },
    compoundVariants: [
      {
        variant: [
          'default',
          'outline',
          'primary',
          'secondary',
          'ghost',
          'accent',
          'destructive',
        ],
        size: 'sm',
        className: 'px-2.5 text-sm',
      },
      {
        variant: [
          'default',
          'outline',
          'primary',
          'secondary',
          'ghost',
          'accent',
          'destructive',
        ],
        size: 'md',
        className: 'px-4 text-base',
      },
      {
        variant: [
          'default',
          'outline',
          'primary',
          'secondary',
          'ghost',
          'accent',
          'destructive',
        ],
        size: 'lg',
        className: 'px-5 text-lg',
      },
      {
        variant: [
          'icon-default',
          'icon-primary',
          'icon-secondary',
          'icon-outline',
          'icon-ghost',
          'icon-accent',
          'icon-destructive',
        ],
        className: 'p-0 aspect-square',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export type ToggleSize = VariantProps<typeof toggleVariants>['size']
export type ToggleVariant = VariantProps<typeof toggleVariants>['variant']

function computeTextVariant(size: ToggleSize): TextVariant {
  switch (size) {
    case 'sm':
      return 'body-small'
    case 'md':
      return 'body-medium'
    case 'lg':
      return 'body-large'
    default:
      return 'body-medium'
  }
}

function computeIconSize(size: ToggleSize): string {
  switch (size) {
    case 'sm':
      return 'size-4'
    case 'md':
      return 'size-5'
    case 'lg':
      return 'size-6'
    default:
      return 'size-5'
  }
}

export interface ToggleProps
  extends Omit<ComponentPropsWithoutRef<typeof RadixToggle.Root>, 'asChild'>,
    VariantProps<typeof toggleVariants> {
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
}

export const Toggle = forwardRef<
  ElementRef<typeof RadixToggle.Root>,
  ToggleProps
>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      icon,
      iconPosition = 'start',
      children,
      ...props
    },
    ref,
  ) => {
    const isIconVariant = variant?.startsWith('icon-')
    const showIconStart = icon && iconPosition === 'start' && !isIconVariant
    const showIconEnd = icon && iconPosition === 'end' && !isIconVariant

    return (
      <RadixToggle.Root
        ref={ref}
        className={toggleVariants({ variant, size, className })}
        {...props}>
        {showIconStart && (
          <span className={cx(computeIconSize(size), '[&>svg]:size-full')}>
            {icon}
          </span>
        )}
        {isIconVariant ? (
          children
        ) : (
          <Text<'span'>
            variant={computeTextVariant(size)}
            wrap='nowrap'
            overflow='truncate'
            children={children}
          />
        )}
        {showIconEnd && (
          <span className={cx(computeIconSize(size), '[&>svg]:size-full')}>
            {icon}
          </span>
        )}
      </RadixToggle.Root>
    )
  },
)

Toggle.displayName = 'Toggle'

// ToggleGroupItem utilise les mêmes styles que Toggle mais est destiné à être utilisé dans un ToggleGroup
export interface ToggleGroupItemProps
  extends ComponentPropsWithoutRef<typeof RadixToggleGroup.Item>,
    VariantProps<typeof toggleVariants> {
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
}

const ToggleGroupItem = forwardRef<
  ElementRef<typeof RadixToggleGroup.Item>,
  ToggleGroupItemProps
>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      icon,
      iconPosition = 'start',
      children,
      ...props
    },
    ref,
  ) => {
    const isIconVariant = variant?.startsWith('icon-')
    const showIconStart = icon && iconPosition === 'start' && !isIconVariant
    const showIconEnd = icon && iconPosition === 'end' && !isIconVariant

    return (
      <RadixToggleGroup.Item
        ref={ref}
        className={toggleVariants({ variant, size, className })}
        {...props}>
        {showIconStart && (
          <span className={cx(computeIconSize(size), '[&>svg]:size-full')}>
            {icon}
          </span>
        )}
        {isIconVariant ? (
          children
        ) : (
          <Text<'span'>
            variant={computeTextVariant(size)}
            wrap='nowrap'
            overflow='truncate'
            children={children}
          />
        )}
        {showIconEnd && (
          <span className={cx(computeIconSize(size), '[&>svg]:size-full')}>
            {icon}
          </span>
        )}
      </RadixToggleGroup.Item>
    )
  },
)

ToggleGroupItem.displayName = 'ToggleGroupItem'

export { ToggleGroupItem }
export default Toggle
