import type { VariantProps } from 'class-variance-authority'
import { cva, cx } from 'class-variance-authority'
import { Tooltip as RadixTooltip } from 'radix-ui'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

// Variants for Tooltip Content
const tooltipContentVariants = cva(
  [
    'z-50',
    'overflow-hidden',
    'rounded-md',
    'px-3',
    'py-1.5',
    'text-sm',
    'shadow-md',
    'animate-in',
    'fade-in-0',
    'zoom-in-95',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-base-900',
          'text-base-50',
          'dark:bg-base-50',
          'dark:text-base-900',
        ],
        inverse: [
          'bg-base-50',
          'text-base-900',
          'border',
          'border-base-200',
          'dark:bg-base-900',
          'dark:text-base-50',
          'dark:border-base-700',
        ],
        accent: [
          'bg-accent-500',
          'text-base-0',
          'dark:bg-accent-600',
          'dark:text-base-0',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const tooltipArrowVariants = cva([], {
  variants: {
    variant: {
      default: ['fill-base-900', 'dark:fill-base-50'],
      inverse: ['fill-base-50', 'dark:fill-base-900'],
      accent: ['fill-accent-500', 'dark:fill-accent-600'],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

// TooltipProvider
export const TooltipProvider = RadixTooltip.TooltipProvider

// TooltipRoot (Radix calls it just "Tooltip")
export const TooltipRoot = RadixTooltip.Tooltip

// TooltipTrigger
export const TooltipTrigger = RadixTooltip.TooltipTrigger

// TooltipContent
export interface TooltipContentProps
  extends ComponentPropsWithoutRef<typeof RadixTooltip.TooltipContent>,
    VariantProps<typeof tooltipContentVariants> {
  showArrow?: boolean
}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    {
      className,
      sideOffset = 4,
      variant = 'default',
      showArrow = true,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <RadixTooltip.TooltipContent
        ref={ref}
        sideOffset={sideOffset}
        className={cx(tooltipContentVariants({ variant }), className)}
        {...props}>
        {children}
        {showArrow && (
          <RadixTooltip.TooltipArrow
            className={tooltipArrowVariants({ variant })}
          />
        )}
      </RadixTooltip.TooltipContent>
    )
  },
)

TooltipContent.displayName = 'TooltipContent'

// TooltipPortal
export const TooltipPortal = RadixTooltip.TooltipPortal

// Compound export
export const Tooltip = {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Portal: TooltipPortal,
}

export default Tooltip
