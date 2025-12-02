import type { ComponentPropsWithoutRef, ElementType } from 'react'

export type PolymorphicProps<C extends ElementType, P = object> = P &
  Omit<ComponentPropsWithoutRef<C>, keyof P> & {
    as?: C
  }
