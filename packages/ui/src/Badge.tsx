import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, HTMLAttributes } from 'react'
import type { PolymorphicProps } from './Polymorphic'
import { Text } from './Text'

const badgeVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300',
        secondary:
          'bg-base-100 text-base-700 dark:bg-base-800 dark:text-base-300',
        outline:
          'border border-base-300 text-base-700 dark:border-base-600 dark:text-base-300',
        success:
          'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
        warning:
          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
        destructive:
          'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      },
      size: {
        sm: 'px-2 py-0.5',
        md: 'px-2.5 py-0.5',
        lg: 'px-3 py-1',
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
