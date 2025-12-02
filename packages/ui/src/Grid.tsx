import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType } from 'react'

import type { PolymorphicProps } from './utils/polymorphic'

const gridVariants = cva(['grid'], {
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
      'xs': ['gap-[var(--grid-gap-xs)]'],
      'sm': ['gap-[var(--grid-gap-sm)]'],
      'md': ['gap-[var(--grid-gap-md)]'],
      'lg': ['gap-[var(--grid-gap-lg)]'],
      'xl': ['gap-[var(--grid-gap-xl)]'],
      '2xl': ['gap-[var(--grid-gap-2xl)]'],
    },
    gapX: {
      'none': ['gap-x-0'],
      'xs': ['gap-x-[var(--grid-gap-xs)]'],
      'sm': ['gap-x-[var(--grid-gap-sm)]'],
      'md': ['gap-x-[var(--grid-gap-md)]'],
      'lg': ['gap-x-[var(--grid-gap-lg)]'],
      'xl': ['gap-x-[var(--grid-gap-xl)]'],
      '2xl': ['gap-x-[var(--grid-gap-2xl)]'],
    },
    gapY: {
      'none': ['gap-y-0'],
      'xs': ['gap-y-[var(--grid-gap-xs)]'],
      'sm': ['gap-y-[var(--grid-gap-sm)]'],
      'md': ['gap-y-[var(--grid-gap-md)]'],
      'lg': ['gap-y-[var(--grid-gap-lg)]'],
      'xl': ['gap-y-[var(--grid-gap-xl)]'],
      '2xl': ['gap-y-[var(--grid-gap-2xl)]'],
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

const gridItemVariants = cva([], {
  variants: {
    colSpan: {
      1: ['col-span-1'],
      2: ['col-span-2'],
      3: ['col-span-3'],
      4: ['col-span-4'],
      5: ['col-span-5'],
      6: ['col-span-6'],
      7: ['col-span-7'],
      8: ['col-span-8'],
      9: ['col-span-9'],
      10: ['col-span-10'],
      11: ['col-span-11'],
      12: ['col-span-12'],
      full: ['col-span-full'],
    },
    rowSpan: {
      1: ['row-span-1'],
      2: ['row-span-2'],
      3: ['row-span-3'],
      4: ['row-span-4'],
      5: ['row-span-5'],
      6: ['row-span-6'],
      full: ['row-span-full'],
    },
    colStart: {
      1: ['col-start-1'],
      2: ['col-start-2'],
      3: ['col-start-3'],
      4: ['col-start-4'],
      5: ['col-start-5'],
      6: ['col-start-6'],
      7: ['col-start-7'],
      8: ['col-start-8'],
      9: ['col-start-9'],
      10: ['col-start-10'],
      11: ['col-start-11'],
      12: ['col-start-12'],
      13: ['col-start-13'],
      auto: ['col-start-auto'],
    },
    colEnd: {
      1: ['col-end-1'],
      2: ['col-end-2'],
      3: ['col-end-3'],
      4: ['col-end-4'],
      5: ['col-end-5'],
      6: ['col-end-6'],
      7: ['col-end-7'],
      8: ['col-end-8'],
      9: ['col-end-9'],
      10: ['col-end-10'],
      11: ['col-end-11'],
      12: ['col-end-12'],
      13: ['col-end-13'],
      auto: ['col-end-auto'],
    },
    rowStart: {
      1: ['row-start-1'],
      2: ['row-start-2'],
      3: ['row-start-3'],
      4: ['row-start-4'],
      5: ['row-start-5'],
      6: ['row-start-6'],
      7: ['row-start-7'],
      auto: ['row-start-auto'],
    },
    rowEnd: {
      1: ['row-end-1'],
      2: ['row-end-2'],
      3: ['row-end-3'],
      4: ['row-end-4'],
      5: ['row-end-5'],
      6: ['row-end-6'],
      7: ['row-end-7'],
      auto: ['row-end-auto'],
    },
  },
})

export type DefaultGridElement = 'div'

export type GridProps<Component extends ElementType = DefaultGridElement> =
  PolymorphicProps<Component, VariantProps<typeof gridVariants>>

export type GridCols = GridProps<DefaultGridElement>['cols']
export type GridRows = GridProps<DefaultGridElement>['rows']
export type GridGap = GridProps<DefaultGridElement>['gap']
export type GridGapX = GridProps<DefaultGridElement>['gapX']
export type GridGapY = GridProps<DefaultGridElement>['gapY']
export type GridAlign = GridProps<DefaultGridElement>['align']
export type GridJustify = GridProps<DefaultGridElement>['justify']
export type GridFlow = GridProps<DefaultGridElement>['flow']

export type DefaultGridItemElement = 'div'

export type GridItemProps<
  Component extends ElementType = DefaultGridItemElement,
> = PolymorphicProps<Component, VariantProps<typeof gridItemVariants>>

export type GridItemColSpan = GridItemProps<DefaultGridItemElement>['colSpan']
export type GridItemRowSpan = GridItemProps<DefaultGridItemElement>['rowSpan']
export type GridItemColStart = GridItemProps<DefaultGridItemElement>['colStart']
export type GridItemColEnd = GridItemProps<DefaultGridItemElement>['colEnd']
export type GridItemRowStart = GridItemProps<DefaultGridItemElement>['rowStart']
export type GridItemRowEnd = GridItemProps<DefaultGridItemElement>['rowEnd']

const GridItem = <T extends ElementType = 'div'>({
  as,
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  className,
  children,
  ...props
}: GridItemProps<T>) => {
  const Component = as || 'div'

  return (
    <Component
      data-component='Grid.Item'
      className={gridItemVariants({
        colSpan,
        rowSpan,
        colStart,
        colEnd,
        rowStart,
        rowEnd,
        className,
      })}
      {...props}>
      {children}
    </Component>
  )
}

const GridRoot = <T extends ElementType = 'div'>({
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
      className={gridVariants({
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

export const Grid = Object.assign(GridRoot, {
  Item: GridItem,
})

export default Grid
