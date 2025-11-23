import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, HTMLAttributes } from 'react'
import type { PolymorphicProps } from './Polymorphic'

const variants = cva(['grid'], {
  variants: {
    cols: {
      1: ['grid-cols-1'],
      2: ['grid-cols-2'],
      3: ['grid-cols-3'],
      4: ['grid-cols-4'],
      5: ['grid-cols-5'],
      6: ['grid-cols-6'],
      12: ['grid-cols-12'],
    },
    rows: {
      1: ['grid-rows-1'],
      2: ['grid-rows-2'],
      3: ['grid-rows-3'],
      4: ['grid-rows-4'],
      5: ['grid-rows-5'],
      6: ['grid-rows-6'],
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
    gapX: {
      'none': ['gap-x-0'],
      'xs': ['gap-x-1'],
      'sm': ['gap-x-2'],
      'md': ['gap-x-4'],
      'lg': ['gap-x-6'],
      'xl': ['gap-x-8'],
      '2xl': ['gap-x-12'],
    },
    gapY: {
      'none': ['gap-y-0'],
      'xs': ['gap-y-1'],
      'sm': ['gap-y-2'],
      'md': ['gap-y-4'],
      'lg': ['gap-y-6'],
      'xl': ['gap-y-8'],
      '2xl': ['gap-y-12'],
    },
    align: {
      start: ['items-start'],
      center: ['items-center'],
      end: ['items-end'],
      stretch: ['items-stretch'],
      baseline: ['items-baseline'],
    },
    justify: {
      start: ['justify-items-start'],
      center: ['justify-items-center'],
      end: ['justify-items-end'],
      stretch: ['justify-items-stretch'],
    },
    flow: {
      'row': ['grid-flow-row'],
      'col': ['grid-flow-col'],
      'dense': ['grid-flow-dense'],
      'row-dense': ['grid-flow-row-dense'],
      'col-dense': ['grid-flow-col-dense'],
    },
  },
  defaultVariants: {
    cols: 1,
    gap: 'none',
    align: 'stretch',
    justify: 'stretch',
    flow: 'row',
  },
})

export interface GridPropsBase
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof variants> {}

export type GridProps<T extends ElementType = 'div'> = PolymorphicProps<
  T,
  GridPropsBase
>

export const Grid = <T extends ElementType = 'div'>({
  as,
  cols,
  rows,
  gap,
  gapX,
  gapY,
  align,
  justify,
  flow,
  className,
  children,
  ...props
}: GridProps<T>) => {
  const Component = as || 'div'

  return (
    <Component
      data-component='Grid'
      className={variants({
        cols,
        rows,
        gap,
        gapX,
        gapY,
        align,
        justify,
        flow,
        className,
      })}
      {...props}>
      {children}
    </Component>
  )
}

export default Grid
