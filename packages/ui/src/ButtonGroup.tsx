import { cva, type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes } from 'react'

const variants = cva(['inline-flex'], {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    attached: {
      true: '[&>*]:rounded-none [&>*:first-child]:rounded-l-full [&>*:last-child]:rounded-r-full [&>*:not(:first-child)]:-ml-px [&>*:hover]:z-10 [&>*:focus-visible]:z-10',
      false: 'gap-2',
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      attached: true,
      className:
        '[&>*:first-child]:!rounded-tl-full [&>*:first-child]:!rounded-tr-full [&>*:first-child]:!rounded-bl-none [&>*:first-child]:!rounded-br-none [&>*:last-child]:!rounded-tl-none [&>*:last-child]:!rounded-tr-none [&>*:last-child]:!rounded-bl-full [&>*:last-child]:!rounded-br-full [&>*:not(:first-child)]:-mt-px',
    },
  ],
})

export interface ButtonGroupProps
  extends Omit<ButtonHTMLAttributes<HTMLDivElement>, 'role'>,
    VariantProps<typeof variants> {
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
    <div
      data-component='ButtonGroup'
      role={role}
      aria-orientation={
        shouldIncludeOrientation ? (orientation ?? undefined) : undefined
      }
      aria-label={label}
      className={variants({ orientation, attached, className })}
      {...props}>
      {children}
    </div>
  )
}

export default ButtonGroup
