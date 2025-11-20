import { cva, type VariantProps } from 'class-variance-authority'
import { ToggleGroup as RadixToggleGroup } from 'radix-ui'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

const toggleGroupVariants = cva(['inline-flex'], {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    attached: {
      true: [
        '[&>button]:rounded-none',
        '[&>button:first-child]:rounded-l-full',
        '[&>button:last-child]:rounded-r-full',
        '[&>button:not(:first-child)]:-ml-px',
        '[&>button:hover]:z-10',
        '[&>button:focus-visible]:z-10',
        '[&>button[data-state=on]]:z-10',
      ],
      false: 'gap-2',
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      attached: true,
      className: [
        '[&>button:first-child]:!rounded-tl-full',
        '[&>button:first-child]:!rounded-tr-full',
        '[&>button:first-child]:!rounded-bl-none',
        '[&>button:first-child]:!rounded-br-none',
        '[&>button:last-child]:!rounded-tl-none',
        '[&>button:last-child]:!rounded-tr-none',
        '[&>button:last-child]:!rounded-bl-full',
        '[&>button:last-child]:!rounded-br-full',
        '[&>button:not(:first-child)]:!-mt-px',
        '[&>button:not(:first-child)]:!ml-0',
      ],
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    attached: true,
  },
})

interface BaseToggleGroupProps
  extends VariantProps<typeof toggleGroupVariants> {
  className?: string
}

export interface ToggleGroupSingleProps
  extends Omit<
      ComponentPropsWithoutRef<typeof RadixToggleGroup.Root>,
      'type' | 'asChild' | 'orientation' | 'attached'
    >,
    BaseToggleGroupProps {
  type: 'single'
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export interface ToggleGroupMultipleProps
  extends Omit<
      ComponentPropsWithoutRef<typeof RadixToggleGroup.Root>,
      'type' | 'asChild' | 'orientation' | 'attached'
    >,
    BaseToggleGroupProps {
  type: 'multiple'
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

export type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps

export const ToggleGroup = forwardRef<
  ElementRef<typeof RadixToggleGroup.Root>,
  ToggleGroupProps
>(({ className, orientation, attached, ...props }, ref) => (
  <RadixToggleGroup.Root
    ref={ref}
    className={toggleGroupVariants({ orientation, attached, className })}
    {...props}
  />
))

ToggleGroup.displayName = 'ToggleGroup'

// Re-export ToggleGroupItem from Toggle
export { ToggleGroupItem } from './Toggle'

export default ToggleGroup
