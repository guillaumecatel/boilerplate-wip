import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, HTMLAttributes } from 'react'
import type { PolymorphicProps } from './Polymorphic'
import { Text } from './Text'

const badgeVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'whitespace-nowrap',
    'rounded-[var(--status-border-radius)]',
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--status-primary-background-color)]',
          'text-[var(--status-primary-foreground-color)]',
        ],
        secondary: [
          'bg-[var(--status-secondary-background-color)]',
          'text-[var(--status-secondary-foreground-color)]',
        ],
        outline: [
          'border-[var(--status-border-width)]',
          'border-[var(--status-outline-border-color)]',
          'text-[var(--status-outline-foreground-color)]',
        ],
        success: [
          'bg-[var(--status-success-background-color)]',
          'text-[var(--status-success-foreground-color)]',
        ],
        warning: [
          'bg-[var(--status-warning-background-color)]',
          'text-[var(--status-warning-foreground-color)]',
        ],
        destructive: [
          'bg-[var(--status-danger-background-color)]',
          'text-[var(--status-danger-foreground-color)]',
        ],
      },
      size: {
        sm: [
          'px-[var(--status-padding-x-sm)]',
          'py-[var(--status-padding-y-sm)]',
        ],
        md: [
          'px-[var(--status-padding-x-md)]',
          'py-[var(--status-padding-y-md)]',
        ],
        lg: [
          'px-[var(--status-padding-x-lg)]',
          'py-[var(--status-padding-y-lg)]',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface BadgePropsBase
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof badgeVariants> {}

export type BadgeProps<T extends ElementType = 'span'> = PolymorphicProps<
  T,
  BadgePropsBase
>

export type BadgeSize = BadgeProps<'span'>['size']

function computeTextVariant(
  size: BadgeSize,
): 'caption' | 'body-small' | 'body-medium' {
  switch (size) {
    case 'sm':
      return 'caption'
    case 'md':
      return 'body-small'
    case 'lg':
      return 'body-medium'
    default:
      return 'body-small'
  }
}

export const Badge = <T extends ElementType = 'span'>({
  as,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps<T>) => {
  const Component = as || 'span'

  return (
    <Component
      data-component='Badge'
      className={badgeVariants({ variant, size, className })}
      {...props}>
      <Text
        variant={computeTextVariant(size)}
        weight='medium'
        color='inherit'>
        {children}
      </Text>
    </Component>
  )
}

export default Badge
