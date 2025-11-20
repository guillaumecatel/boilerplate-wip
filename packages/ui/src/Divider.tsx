import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'
import { Text } from './Text'

const dividerVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'flex w-full items-center',
      vertical: 'inline-flex h-full flex-col items-center',
    },
    variant: {
      solid: '',
      dashed: '',
      dotted: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
  },
})

const lineVariants = cva('bg-base-300 dark:bg-base-700', {
  variants: {
    orientation: {
      horizontal: 'h-px flex-1',
      vertical: 'w-px h-full',
    },
    variant: {
      solid: '',
      dashed: 'bg-transparent border-current',
      dotted: 'bg-transparent border-current',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      variant: 'dashed',
      className: 'border-t border-dashed',
    },
    {
      orientation: 'horizontal',
      variant: 'dotted',
      className: 'border-t border-dotted',
    },
    {
      orientation: 'vertical',
      variant: 'dashed',
      className: 'border-l border-dashed',
    },
    {
      orientation: 'vertical',
      variant: 'dotted',
      className: 'border-l border-dotted',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
  },
})

export interface DividerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof dividerVariants> {
  label?: ReactNode
  labelPosition?: 'start' | 'center' | 'end'
}

export const Divider = ({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  labelPosition = 'center',
  className,
  ...props
}: DividerProps) => {
  const showStartLine = labelPosition !== 'start'
  const showEndLine = labelPosition !== 'end'

  if (!label) {
    return (
      <div
        data-component='Divider'
        role='separator'
        aria-orientation={orientation || undefined}
        className={dividerVariants({ orientation, className })}
        {...props}>
        <span className={lineVariants({ orientation, variant })} />
      </div>
    )
  }

  return (
    <div
      data-component='Divider'
      role='separator'
      aria-orientation={orientation || undefined}
      className={dividerVariants({ orientation, className })}
      {...props}>
      {showStartLine && (
        <span className={lineVariants({ orientation, variant })} />
      )}
      <span
        className={
          orientation === 'horizontal' ? 'shrink-0 px-4' : 'shrink-0 py-4'
        }>
        <Text
          variant='body-small'
          color='secondary'>
          {label}
        </Text>
      </span>
      {showEndLine && (
        <span className={lineVariants({ orientation, variant })} />
      )}
    </div>
  )
}

export default Divider
