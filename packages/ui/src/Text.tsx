import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import type { HtmlHTMLAttributes, ReactNode } from 'react'

const text = cva('text', {
  variants: {
    type: {
      'display-large': ['text-display-large'],
      'display-medium': ['text-display-medium'],
      'display-small': ['text-display-small'],
      'heading-large': ['text-heading-large'],
      'heading-medium': ['text-heading-medium'],
      'heading-small': ['text-heading-small'],
      'body-large': ['text-body-large'],
      'body-medium': ['text-body-medium'],
      'body-small': ['text-body-small'],
      'caption': ['text-caption'],
    },
    pretty: {
      true: ['text-pretty'],
      false: [],
    },
  },
})

export interface TextProps
  extends HtmlHTMLAttributes<HTMLElement>,
    VariantProps<typeof text> {
  children?: ReactNode
  asChild?: boolean
}

export const Text = ({
  className,
  type = 'body-medium',
  pretty = true,
  children,
  asChild,
  ...props
}: TextProps) => {
  const Comp = asChild ? Slot.Root : 'div'

  return (
    <Comp className={text({ type, pretty, className })} {...props}>
      {children}
    </Comp>
  )
}
