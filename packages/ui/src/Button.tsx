import { cva, cx, type VariantProps } from 'class-variance-authority'
import type { ElementType, ReactNode } from 'react'

import type { PolymorphicProps } from './Polymorphic'
import { Text, type TextVariant } from './Text'

const variants = cva(
  [
    'inline-flex items-center justify-center',
    'gap-[var(--action-gap)]',
    'rounded-[var(--action-border-radius)]',
    'transition-all duration-200 ease-in-out',
    'focus-visible:outline-none',
    'focus-visible:ring-[var(--action-focus-ring-width)]',
    'focus-visible:ring-offset-[var(--action-focus-ring-offset)]',
    'aria-disabled:opacity-50 aria-disabled:cursor-not-allowed',
    'active:scale-95',
  ],
  {
    variants: {
      variant: {
        'primary': [
          'bg-[var(--action-confirm-background-color-default)]',
          'text-[var(--action-confirm-foreground-color-default)]',
          'hover:bg-[var(--action-confirm-background-color-hover)]',
          'active:bg-[var(--action-confirm-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-confirm)]',
          'shadow-[var(--action-shadow-sm)]',
          'hover:shadow-[var(--action-shadow-md)]',
        ],
        'secondary': [
          'bg-[var(--action-neutral-background-color-default)]',
          'text-[var(--action-neutral-foreground-color-default)]',
          'hover:bg-[var(--action-neutral-background-color-hover)]',
          'active:bg-[var(--action-neutral-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-neutral)]',
          'shadow-[var(--action-shadow-sm)]',
          'hover:shadow-[var(--action-shadow-md)]',
        ],
        'outline': [
          'border-[var(--action-border-width)]',
          'border-[var(--action-neutral-border-color-default)]',
          'bg-transparent',
          'text-[var(--action-neutral-foreground-color-default)]',
          'hover:bg-[var(--action-neutral-background-color-hover)]',
          'hover:border-[var(--action-neutral-border-color-hover)]',
          'focus-visible:ring-[var(--action-focus-ring-color-neutral)]',
        ],
        'ghost': [
          'bg-transparent',
          'text-[var(--action-ghost-foreground-color-default)]',
          'hover:bg-[var(--action-ghost-background-color-hover)]',
          'active:bg-[var(--action-ghost-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-neutral)]',
        ],
        'accent': [
          'bg-[var(--action-accent-background-color-default)]',
          'text-[var(--action-accent-foreground-color-default)]',
          'hover:bg-[var(--action-accent-background-color-hover)]',
          'active:bg-[var(--action-accent-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-confirm)]',
          'shadow-[var(--action-shadow-sm)]',
          'hover:shadow-[var(--action-shadow-md)]',
        ],
        'destructive': [
          'bg-[var(--action-danger-background-color-default)]',
          'text-[var(--action-danger-foreground-color-default)]',
          'hover:bg-[var(--action-danger-background-color-hover)]',
          'active:bg-[var(--action-danger-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-danger)]',
          'shadow-[var(--action-shadow-sm)]',
          'hover:shadow-[var(--action-shadow-md)]',
        ],
        'icon-primary': [
          'bg-[var(--action-confirm-background-color-default)]',
          'text-[var(--action-confirm-foreground-color-default)]',
          'hover:bg-[var(--action-confirm-background-color-hover)]',
          'active:bg-[var(--action-confirm-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-confirm)]',
          'shadow-[var(--action-shadow-sm)]',
          'hover:shadow-[var(--action-shadow-md)]',
        ],
        'icon-secondary': [
          'bg-[var(--action-neutral-background-color-default)]',
          'text-[var(--action-neutral-foreground-color-default)]',
          'hover:bg-[var(--action-neutral-background-color-hover)]',
          'active:bg-[var(--action-neutral-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-neutral)]',
          'shadow-[var(--action-shadow-sm)]',
          'hover:shadow-[var(--action-shadow-md)]',
        ],
        'icon-outline': [
          'border-[var(--action-border-width)]',
          'border-[var(--action-neutral-border-color-default)]',
          'bg-transparent',
          'text-[var(--action-neutral-foreground-color-default)]',
          'hover:bg-[var(--action-neutral-background-color-hover)]',
          'hover:border-[var(--action-neutral-border-color-hover)]',
          'focus-visible:ring-[var(--action-focus-ring-color-neutral)]',
        ],
        'icon-ghost': [
          'bg-transparent',
          'text-[var(--action-ghost-foreground-color-default)]',
          'hover:bg-[var(--action-ghost-background-color-hover)]',
          'active:bg-[var(--action-ghost-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-neutral)]',
        ],
        'icon-accent': [
          'bg-[var(--action-accent-background-color-default)]',
          'text-[var(--action-accent-foreground-color-default)]',
          'hover:bg-[var(--action-accent-background-color-hover)]',
          'active:bg-[var(--action-accent-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-confirm)]',
          'shadow-[var(--action-shadow-sm)]',
          'hover:shadow-[var(--action-shadow-md)]',
        ],
        'icon-destructive': [
          'bg-[var(--action-danger-background-color-default)]',
          'text-[var(--action-danger-foreground-color-default)]',
          'hover:bg-[var(--action-danger-background-color-hover)]',
          'active:bg-[var(--action-danger-background-color-active)]',
          'focus-visible:ring-[var(--action-focus-ring-color-danger)]',
          'shadow-[var(--action-shadow-sm)]',
          'hover:shadow-[var(--action-shadow-md)]',
        ],
      },
      size: {
        sm: 'h-[var(--action-height-sm)]',
        md: 'h-[var(--action-height-md)]',
        lg: 'h-[var(--action-height-lg)]',
      },
      disabled: {
        true: 'pointer-events-none user-select-none',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: [
          'primary',
          'secondary',
          'outline',
          'ghost',
          'accent',
          'destructive',
        ],
        size: 'sm',
        className: 'px-[var(--action-padding-x-sm)]',
      },
      {
        variant: [
          'primary',
          'secondary',
          'outline',
          'ghost',
          'accent',
          'destructive',
        ],
        size: 'md',
        className: 'px-[var(--action-padding-x-md)]',
      },
      {
        variant: [
          'primary',
          'secondary',
          'outline',
          'ghost',
          'accent',
          'destructive',
        ],
        size: 'lg',
        className: 'px-[var(--action-padding-x-lg)]',
      },
      {
        variant: [
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
  },
)

export type DefaultButtonElement = 'button'

export type ButtonProps<Component extends ElementType = DefaultButtonElement> =
  PolymorphicProps<
    Component,
    VariantProps<typeof variants> & {
      icon?: ReactNode
      iconPosition?: 'start' | 'end'
    }
  >

export type ButtonVariant = ButtonProps<DefaultButtonElement>['variant']
export type ButtonSize = ButtonProps<DefaultButtonElement>['size']
export type ButtonIconPosition =
  ButtonProps<DefaultButtonElement>['iconPosition']

function computeTextVariant(size: ButtonSize): TextVariant {
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

function computeIconSize(size: ButtonSize): string {
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

export const Button = <Component extends ElementType = DefaultButtonElement>({
  as,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  iconPosition = 'start',
  children,
  ...props
}: ButtonProps<Component>) => {
  const availableAsElements: ElementType[] = ['button', 'a']
  const isValidAs = availableAsElements.includes(as ?? 'button')

  if (process.env.NODE_ENV !== 'production' && !isValidAs && as) {
    console.warn(
      `Button component: The 'as' prop value '${as}' is not supported. Falling back to 'button' element.`,
    )
  }
  const Comp = (isValidAs ? as : 'button') ?? ('button' as ElementType)

  const isIconVariant = variant?.startsWith('icon-')
  const showIconStart = icon && iconPosition === 'start'
  const showIconEnd = icon && iconPosition === 'end'

  return (
    <Comp
      data-component='Button'
      className={variants({ variant, size, disabled, className })}
      disabled={as !== 'a' && disabled}
      aria-disabled={disabled}
      {...props}>
      {showIconStart && (
        <span className={cx(computeIconSize(size), '[&>svg]:size-full')}>
          {icon}
        </span>
      )}
      <Text<'span'>
        variant={computeTextVariant(size)}
        wrap='nowrap'
        overflow='truncate'
        className={isIconVariant ? 'sr-only' : undefined}
        children={children}
      />
      {showIconEnd && (
        <span className={cx(computeIconSize(size), '[&>svg]:size-full')}>
          {icon}
        </span>
      )}
    </Comp>
  )
}

export default Button
