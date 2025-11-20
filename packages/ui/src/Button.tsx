import { cva, cx, type VariantProps } from 'class-variance-authority'
import type { ElementType, ReactNode } from 'react'

import type { PolymorphicProps } from './Polymorphic'
import { Text, type TextVariant } from './Text'

const variants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'rounded-full font-medium',
    'transition-all duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'aria-disabled:opacity-50 aria-disabled:cursor-not-allowed',
    'active:scale-95',
  ],
  {
    variants: {
      variant: {
        'primary': [
          'bg-[var(--color-accent-500)] text-white',
          'hover:bg-[var(--color-accent-600)]',
          'dark:bg-[var(--color-accent-400)] dark:text-[var(--color-accent-950)]',
          'dark:hover:bg-[var(--color-accent-300)]',
          'focus-visible:ring-[var(--color-accent-500)]',
          'shadow-sm hover:shadow-md',
        ],
        'secondary': [
          'bg-[var(--color-base-100)] text-[var(--color-base-900)]',
          'hover:bg-[var(--color-base-200)]',
          'dark:bg-[var(--color-base-800)] dark:text-[var(--color-base-50)]',
          'dark:hover:bg-[var(--color-base-700)]',
          'focus-visible:ring-[var(--color-base-400)]',
          'shadow-sm hover:shadow-md',
        ],
        'outline': [
          'border-2 border-[var(--color-base-300)] bg-transparent',
          'text-[var(--color-base-900)]',
          'hover:bg-[var(--color-base-50)]',
          'hover:border-[var(--color-base-400)]',
          'dark:border-[var(--color-base-700)] dark:text-[var(--color-base-50)]',
          'dark:hover:bg-[var(--color-base-900)]',
          'dark:hover:border-[var(--color-base-600)]',
          'focus-visible:ring-[var(--color-base-400)]',
        ],
        'ghost': [
          'bg-transparent text-[var(--color-base-900)]',
          'hover:bg-[var(--color-base-100)]',
          'dark:text-[var(--color-base-50)]',
          'dark:hover:bg-[var(--color-base-800)]',
          'focus-visible:ring-[var(--color-base-400)]',
        ],
        'accent': [
          'bg-[var(--color-accent-200)] text-[var(--color-accent-950)]',
          'hover:bg-[var(--color-accent-300)]',
          'dark:bg-[var(--color-accent-700)] dark:text-[var(--color-accent-50)]',
          'dark:hover:bg-[var(--color-accent-600)]',
          'focus-visible:ring-[var(--color-accent-400)]',
          'shadow-sm hover:shadow-md',
        ],
        'destructive': [
          'bg-red-600 text-white',
          'hover:bg-red-700',
          'dark:bg-red-700',
          'dark:hover:bg-red-600',
          'focus-visible:ring-red-600',
          'shadow-sm hover:shadow-md',
        ],
        'icon-primary': [
          'bg-[var(--color-accent-500)] text-white',
          'hover:bg-[var(--color-accent-600)]',
          'dark:bg-[var(--color-accent-400)] dark:text-[var(--color-accent-950)]',
          'dark:hover:bg-[var(--color-accent-300)]',
          'focus-visible:ring-[var(--color-accent-500)]',
          'shadow-sm hover:shadow-md',
        ],
        'icon-secondary': [
          'bg-[var(--color-base-100)] text-[var(--color-base-900)]',
          'hover:bg-[var(--color-base-200)]',
          'dark:bg-[var(--color-base-800)] dark:text-[var(--color-base-50)]',
          'dark:hover:bg-[var(--color-base-700)]',
          'focus-visible:ring-[var(--color-base-400)]',
          'shadow-sm hover:shadow-md',
        ],

        'icon-outline': [
          'border-2 border-[var(--color-base-300)] bg-transparent',
          'text-[var(--color-base-900)]',
          'hover:bg-[var(--color-base-50)]',
          'hover:border-[var(--color-base-400)]',
          'dark:border-[var(--color-base-700)] dark:text-[var(--color-base-50)]',
          'dark:hover:bg-[var(--color-base-900)]',
          'dark:hover:border-[var(--color-base-600)]',
          'focus-visible:ring-[var(--color-base-400)]',
        ],
        'icon-ghost': [
          'bg-transparent text-[var(--color-base-900)]',
          'hover:bg-[var(--color-base-100)]',
          'dark:text-[var(--color-base-50)]',
          'dark:hover:bg-[var(--color-base-800)]',
          'focus-visible:ring-[var(--color-base-400)]',
        ],
        'icon-accent': [
          'bg-[var(--color-accent-200)] text-[var(--color-accent-950)]',
          'hover:bg-[var(--color-accent-300)]',
          'dark:bg-[var(--color-accent-700)] dark:text-[var(--color-accent-50)]',
          'dark:hover:bg-[var(--color-accent-600)]',
          'focus-visible:ring-[var(--color-accent-400)]',
          'shadow-sm hover:shadow-md',
        ],
        'icon-destructive': [
          'bg-red-600 text-white',
          'hover:bg-red-700',
          'dark:bg-red-700',
          'dark:hover:bg-red-600',
          'focus-visible:ring-red-600',
          'shadow-sm hover:shadow-md',
        ],
      },
      size: {
        sm: 'h-9',
        md: 'h-10',
        lg: 'h-11',
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
        className: 'px-4',
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
        className: 'px-5',
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
        className: 'px-6',
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
