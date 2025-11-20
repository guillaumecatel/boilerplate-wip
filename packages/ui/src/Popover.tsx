import { cva, type VariantProps } from 'class-variance-authority'
import { Popover as RadixPopover } from 'radix-ui'
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef } from 'react'

const popoverContentVariants = cva(
  [
    'z-50 rounded-lg border shadow-lg outline-none',
    'bg-white dark:bg-base-900',
    'border-base-200 dark:border-base-700',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
  ],
  {
    variants: {
      size: {
        sm: 'w-64 p-3',
        md: 'w-80 p-4',
        lg: 'w-96 p-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const PopoverRoot = RadixPopover.Root
const PopoverTrigger = RadixPopover.Trigger
const PopoverAnchor = RadixPopover.Anchor
const PopoverPortal = RadixPopover.Portal

interface PopoverContentProps
  extends ComponentPropsWithoutRef<typeof RadixPopover.Content>,
    VariantProps<typeof popoverContentVariants> {
  container?: HTMLElement | null
}

const PopoverContent = forwardRef<
  ElementRef<typeof RadixPopover.Content>,
  PopoverContentProps
>(({ className, size, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPortal>
    <RadixPopover.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={popoverContentVariants({ size, className })}
      {...props}
    />
  </PopoverPortal>
))

PopoverContent.displayName = RadixPopover.Content.displayName

const PopoverClose = RadixPopover.Close

export interface PopoverProps {
  children: ReactNode
}

export const Popover = Object.assign(
  ({ children }: PopoverProps) => {
    return <div data-component='Popover'>{children}</div>
  },
  {
    Root: PopoverRoot,
    Trigger: PopoverTrigger,
    Content: PopoverContent,
    Anchor: PopoverAnchor,
    Close: PopoverClose,
    Portal: PopoverPortal,
  },
)

export default Popover
