import { cva, cx, type VariantProps } from 'class-variance-authority'
import { ToggleGroup as RadixToggleGroup } from 'radix-ui'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

const attachedVariants = cva([], {
  variants: {
    orientation: {
      horizontal: [
        '[&>button]:rounded-none',
        '[&>button:first-child]:rounded-l-full',
        '[&>button:last-child]:rounded-r-full',
        '[&>button:not(:first-child)]:-ml-px',
        '[&>button:hover]:z-10',
        '[&>button:focus-visible]:z-10',
        '[&>button[data-state=on]]:z-10',
      ],
      vertical: [
        '[&>button]:rounded-none',
        '[&>button:first-child]:rounded-t-full',
        '[&>button:last-child]:rounded-b-full',
        '[&>button:not(:first-child)]:-mt-px',
        '[&>button:hover]:z-10',
        '[&>button:focus-visible]:z-10',
        '[&>button[data-state=on]]:z-10',
      ],
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

interface BaseToggleGroupProps extends VariantProps<typeof attachedVariants> {
  className?: string
  /**
   * Whether toggles are attached together (no gap)
   * @default true
   */
  attached?: boolean
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
>(
  (
    { className, orientation = 'horizontal', attached = true, ...props },
    ref,
  ) => (
    <RadixToggleGroup.Root
      ref={ref}
      className={cx(
        'inline-flex',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        attached ? attachedVariants({ orientation }) : 'gap-2',
        className,
      )}
      {...props}
    />
  ),
)

ToggleGroup.displayName = 'ToggleGroup'

// Re-export ToggleGroupItem from Toggle
export { ToggleGroupItem } from './Toggle'

export default ToggleGroup
