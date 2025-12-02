import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, HTMLAttributes } from 'react'
import type { PolymorphicProps } from './Polymorphic'

const variants = cva(['flex'], {
  variants: {
    direction: {
      'row': ['flex-row'],
      'column': ['flex-col'],
      'row-reverse': ['flex-row-reverse'],
      'column-reverse': ['flex-col-reverse'],
    },
    align: {
      start: ['items-start'],
      center: ['items-center'],
      end: ['items-end'],
      stretch: ['items-stretch'],
      baseline: ['items-baseline'],
    },
    justify: {
      start: ['justify-start'],
      center: ['justify-center'],
      end: ['justify-end'],
      between: ['justify-between'],
      around: ['justify-around'],
      evenly: ['justify-evenly'],
    },
    gap: {
      'none': ['gap-0'],
      'xs': ['gap-1'],
      'sm': ['gap-2'],
      'md': ['gap-4'],
      'lg': ['gap-6'],
      'xl': ['gap-8'],
      '2xl': ['gap-12'],
    },
    wrap: {
      'nowrap': ['flex-nowrap'],
      'wrap': ['flex-wrap'],
      'wrap-reverse': ['flex-wrap-reverse'],
    },
    grow: {
      true: ['flex-grow'],
      false: ['flex-grow-0'],
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    gap: 'none',
    wrap: 'nowrap',
  },
})

export interface StackPropsBase
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof variants> {}

export type StackProps<T extends ElementType = 'div'> = PolymorphicProps<
  T,
  StackPropsBase
>

export const Stack = <T extends ElementType = 'div'>({
  as,
  direction,
  align,
  justify,
  gap,
  wrap,
  className,
  children,
  ...props
}: StackProps<T>) => {
  const Component = as || 'div'

  return (
    <Component
      data-component='Stack'
      className={variants({
        direction,
        align,
        justify,
        gap,
        wrap,
        className,
      })}
      {...props}>
      {children}
    </Component>
  )
}

export default Stack
