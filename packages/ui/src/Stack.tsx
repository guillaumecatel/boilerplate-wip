import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType } from 'react'

import type { PolymorphicProps } from './utils/polymorphic'

const stackVariants = cva(['flex'], {
  variants: {
    direction: {
      'row': ['flex-row'],
      'row-reverse': ['flex-row-reverse'],
      'col': ['flex-col'],
      'col-reverse': ['flex-col-reverse'],
    },
    gap: {
      'none': ['gap-0'],
      'xs': ['gap-[var(--stack-gap-xs)]'],
      'sm': ['gap-[var(--stack-gap-sm)]'],
      'md': ['gap-[var(--stack-gap-md)]'],
      'lg': ['gap-[var(--stack-gap-lg)]'],
      'xl': ['gap-[var(--stack-gap-xl)]'],
      '2xl': ['gap-[var(--stack-gap-2xl)]'],
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
      stretch: ['justify-stretch'],
    },
    wrap: {
      'nowrap': ['flex-nowrap'],
      'wrap': ['flex-wrap'],
      'wrap-reverse': ['flex-wrap-reverse'],
    },
  },
  defaultVariants: {
    direction: 'col',
    gap: 'none',
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
  },
})

export type DefaultStackElement = 'div'

export type StackProps<Component extends ElementType = DefaultStackElement> =
  PolymorphicProps<Component, VariantProps<typeof stackVariants>>

export type StackDirection = StackProps<DefaultStackElement>['direction']
export type StackGap = StackProps<DefaultStackElement>['gap']
export type StackAlign = StackProps<DefaultStackElement>['align']
export type StackJustify = StackProps<DefaultStackElement>['justify']
export type StackWrap = StackProps<DefaultStackElement>['wrap']

export const Stack = <Component extends ElementType = DefaultStackElement>({
  as,
  direction = 'col',
  gap = 'none',
  align = 'stretch',
  justify = 'start',
  wrap = 'nowrap',
  className,
  children,
  ...props
}: StackProps<Component>) => {
  const Comp = (as ?? 'div') as ElementType

  return (
    <Comp
      data-component='Stack'
      className={stackVariants({
        direction,
        gap,
        align,
        justify,
        wrap,
        className,
      })}
      {...props}>
      {children}
    </Comp>
  )
}

export default Stack
