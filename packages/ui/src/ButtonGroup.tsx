import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes } from 'react'
import { Stack } from './Stack'

const attachedVariants = cva([], {
  variants: {
    orientation: {
      horizontal: [
        '[&>*]:rounded-none',
        '[&>*:first-child]:rounded-l-full',
        '[&>*:last-child]:rounded-r-full',
        '[&>*:not(:first-child)]:-ml-px',
        '[&>*:hover]:z-10',
        '[&>*:focus-visible]:z-10',
      ],
      vertical: [
        '[&>*]:rounded-none',
        '[&>*:first-child]:rounded-t-full',
        '[&>*:last-child]:rounded-b-full',
        '[&>*:not(:first-child)]:-mt-px',
        '[&>*:hover]:z-10',
        '[&>*:focus-visible]:z-10',
      ],
    },
  },
})

export interface ButtonGroupProps
  extends Omit<ButtonHTMLAttributes<HTMLDivElement>, 'role'>,
    VariantProps<typeof attachedVariants> {
  /**
   * Accessible label for the button group
   * Required for screen readers to announce the group's purpose
   */
  label: string
  /**
   * Role of the group
   * @default 'group'
   * - 'group': General group of buttons
   * - 'toolbar': Group of frequently used controls
   * - 'radiogroup': Group where only one can be selected (manage aria-checked on buttons)
   */
  role?: 'group' | 'toolbar' | 'radiogroup'
  /**
   * Whether buttons are attached together (no gap)
   * @default true
   */
  attached?: boolean
}

export const ButtonGroup = ({
  children,
  className,
  orientation = 'horizontal',
  attached = true,
  role = 'group',
  label,
  ...props
}: ButtonGroupProps) => {
  // aria-orientation is only allowed for specific roles (toolbar, radiogroup, etc.)
  // Not allowed for 'group' role
  const shouldIncludeOrientation = role !== 'group'

  return (
    <Stack
      as='div'
      data-component='ButtonGroup'
      role={role}
      aria-orientation={
        shouldIncludeOrientation ? (orientation ?? undefined) : undefined
      }
      aria-label={label}
      direction={orientation === 'horizontal' ? 'row' : 'column'}
      gap={attached ? 'none' : 'sm'}
      className={cx(attached && attachedVariants({ orientation }), className)}
      {...props}>
      {children}
    </Stack>
  )
}

export default ButtonGroup
