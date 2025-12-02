import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType } from 'react'

import type { PolymorphicProps } from './utils/polymorphic'

const textVariants = cva([], {
  variants: {
    breakKeep: {
      true: 'break-keep',
    },
    clamp: {
      none: '',
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      6: 'line-clamp-6',
    },
    color: {
      none: '',
      inherit: 'text-inherit',
      primary:
        'text-[var(--text-color-primary)] dark:text-[var(--text-color-primary-dark)]',
      secondary:
        'text-[var(--text-color-secondary)] dark:text-[var(--text-color-secondary-dark)]',
      disabled:
        'text-[var(--text-color-disabled)] dark:text-[var(--text-color-disabled-dark)]',
      success:
        'text-[var(--text-color-success)] dark:text-[var(--text-color-success-dark)]',
      warning:
        'text-[var(--text-color-warning)] dark:text-[var(--text-color-warning-dark)]',
      error:
        'text-[var(--text-color-error)] dark:text-[var(--text-color-error-dark)]',
      info: 'text-[var(--text-color-info)] dark:text-[var(--text-color-info-dark)]',
    },
    variant: {
      'display-large': 'text-[length:var(--text-variant-display-large)]',
      'display-medium': 'text-[length:var(--text-variant-display-medium)]',
      'display-small': 'text-[length:var(--text-variant-display-small)]',
      'heading-large': 'text-[length:var(--text-variant-heading-large)]',
      'heading-medium': 'text-[length:var(--text-variant-heading-medium)]',
      'heading-small': 'text-[length:var(--text-variant-heading-small)]',
      'body-large': 'text-[length:var(--text-variant-body-large)]',
      'body-medium': 'text-[length:var(--text-variant-body-medium)]',
      'body-small': 'text-[length:var(--text-variant-body-small)]',
      'caption': 'text-[length:var(--text-variant-caption)]',
    },
    weight: {
      none: '',
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    italic: {
      none: '',
      true: 'italic',
      false: 'not-italic',
    },
    decoration: {
      'none': '',
      'underline': 'underline',
      'overline': 'overline',
      'line-through': 'line-through',
    },
    transform: {
      none: '',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
    },
    wrap: {
      none: '',
      nowrap: 'text-nowrap',
      pretty: 'text-pretty',
      balance: 'text-balance',
    },
    overflow: {
      none: '',
      truncate: 'truncate',
      ellipsis: 'text-ellipsis',
      clip: 'text-clip',
    },
    hyphen: {
      none: '',
      true: 'hyphens-auto',
    },
  },
})

export type DefaultTextElement = 'span'

export type TextProps<Component extends ElementType = DefaultTextElement> =
  PolymorphicProps<Component, VariantProps<typeof textVariants>>

export type TextVariant = TextProps<DefaultTextElement>['variant']
export type TextColor = TextProps<DefaultTextElement>['color']
export type TextWeight = TextProps<DefaultTextElement>['weight']
export type TextDecoration = TextProps<DefaultTextElement>['decoration']
export type TextTransform = TextProps<DefaultTextElement>['transform']
export type TextWrap = TextProps<DefaultTextElement>['wrap']
export type TextOverflow = TextProps<DefaultTextElement>['overflow']
export type TextClamp = TextProps<DefaultTextElement>['clamp']
export type TextHyphen = TextProps<DefaultTextElement>['hyphen']
export type TextItalic = TextProps<DefaultTextElement>['italic']
export type TextBreakKeep = TextProps<DefaultTextElement>['breakKeep']

export const Text = <Component extends ElementType = DefaultTextElement>({
  as,
  color = 'none',
  clamp = 'none',
  variant = 'body-medium',
  weight = 'none',
  italic = 'none',
  decoration = 'none',
  transform = 'none',
  wrap = 'none',
  overflow = 'none',
  breakKeep = false,
  hyphen = 'none',
  className,
  children,
  ...props
}: TextProps<Component>) => {
  const Comp = (as ?? 'span') as ElementType

  return (
    <Comp
      data-component='Text'
      className={textVariants({
        color,
        variant,
        weight,
        italic,
        decoration,
        transform,
        wrap,
        breakKeep,
        overflow,
        clamp,
        hyphen,
        className,
      })}
      {...props}>
      {children}
    </Comp>
  )
}

export default Text
