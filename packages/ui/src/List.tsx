import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type ElementType, type ReactNode } from 'react'
import type { PolymorphicProps } from './Polymorphic'
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './Tooltip'

const listVariants = cva(['flex'], {
  variants: {
    orientation: {
      vertical: 'flex-col',
      horizontal: 'flex-row flex-wrap',
    },
    spacing: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    divider: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      divider: true,
      className: 'divide-y divide-gray-200 dark:divide-gray-800',
    },
    {
      orientation: 'horizontal',
      divider: true,
      className: 'divide-x divide-gray-200 dark:divide-gray-800',
    },
  ],
  defaultVariants: {
    orientation: 'vertical',
    spacing: 'none',
    divider: false,
  },
})

export type ListProps<C extends ElementType = 'ul'> = PolymorphicProps<
  C,
  VariantProps<typeof listVariants>
>

const List = <C extends ElementType = 'ul'>({
  children,
  className,
  orientation,
  spacing,
  divider,
  as,
  ...props
}: ListProps<C>) => {
  const Component = as || 'ul'

  return (
    <Component
      className={cx(listVariants({ orientation, spacing, divider }), className)}
      {...props}>
      {children}
    </Component>
  )
}

List.displayName = 'List'

// List Item Component
const listItemVariants = cva(
  [
    'flex items-center gap-3',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600',
  ],
  {
    variants: {
      variant: {
        default: '',
        interactive: [
          'cursor-pointer',
          'hover:bg-gray-50 dark:hover:bg-gray-900',
          'active:bg-gray-100 dark:active:bg-gray-800',
        ],
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-6 py-4 text-lg',
      },
      selected: {
        true: 'bg-gray-100 dark:bg-gray-800',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      selected: false,
      disabled: false,
    },
  },
)

export type ListItemProps<C extends ElementType = 'li'> = PolymorphicProps<
  C,
  VariantProps<typeof listItemVariants> & {
    icon?: ReactNode
    iconPosition?: 'start' | 'end'
    subtitle?: ReactNode
    badge?: ReactNode
    iconOnly?: boolean
    tooltip?: ReactNode
    tooltipSide?: 'top' | 'right' | 'bottom' | 'left'
  }
>

const ListItem = <C extends ElementType = 'li'>({
  children,
  className,
  variant,
  size,
  selected,
  disabled,
  as,
  icon,
  iconPosition = 'start',
  subtitle,
  badge,
  onClick,
  iconOnly = false,
  tooltip,
  tooltipSide = 'right',
  ...props
}: ListItemProps<C>) => {
  const Component = as || (onClick ? 'button' : 'li')
  const isInteractive = onClick && !disabled

  const content = (
    <Component
      className={cx(
        listItemVariants({
          variant: isInteractive ? 'interactive' : variant,
          size,
          selected,
          disabled,
        }),
        iconOnly && 'aspect-square justify-center p-0',
        className,
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled && Component === 'button' ? true : undefined}
      aria-disabled={disabled || undefined}
      aria-selected={selected || undefined}
      aria-label={iconOnly ? (children as string) : undefined}
      {...props}>
      {icon && iconPosition === 'start' && (
        <span className='shrink-0'>{icon}</span>
      )}
      {!iconOnly && (
        <div className='flex min-w-0 flex-1 flex-col'>
          <div className='flex items-center justify-between gap-2'>
            <span className='flex-1 truncate'>{children}</span>
            {badge && <span className='shrink-0'>{badge}</span>}
          </div>
          {subtitle && (
            <span className='text-sm text-gray-600 dark:text-gray-400'>
              {subtitle}
            </span>
          )}
        </div>
      )}
      {iconOnly && <span className='sr-only'>{children}</span>}
      {icon && iconPosition === 'end' && !iconOnly && (
        <span className='shrink-0'>{icon}</span>
      )}
    </Component>
  )

  if (iconOnly && (tooltip || children)) {
    return (
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent side={tooltipSide}>
            {tooltip || children}
          </TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    )
  }

  return content
}

ListItem.displayName = 'List.Item'

// Export as compound component
export { List, ListItem }
export default List
