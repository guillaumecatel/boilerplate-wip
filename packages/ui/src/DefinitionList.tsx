import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'
import { Text } from './Text'

const definitionListVariants = cva('', {
  variants: {
    layout: {
      horizontal: 'divide-y divide-base-200 dark:divide-base-800',
      vertical: 'space-y-4',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
    size: 'md',
  },
})

const itemVariants = cva('', {
  variants: {
    layout: {
      horizontal:
        'grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4',
      vertical: 'flex flex-col gap-1',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  compoundVariants: [
    {
      layout: 'horizontal',
      size: 'sm',
      className: 'py-2',
    },
    {
      layout: 'horizontal',
      size: 'lg',
      className: 'py-4',
    },
    {
      layout: 'vertical',
      size: 'sm',
      className: 'gap-0.5',
    },
    {
      layout: 'vertical',
      size: 'lg',
      className: 'gap-2',
    },
  ],
  defaultVariants: {
    layout: 'horizontal',
    size: 'md',
  },
})

export interface DefinitionListItem {
  term: ReactNode
  description: ReactNode
}

export interface DefinitionListProps
  extends HTMLAttributes<HTMLDListElement>,
    VariantProps<typeof definitionListVariants> {
  items: DefinitionListItem[]
}

export const DefinitionList = ({
  items,
  layout = 'horizontal',
  size = 'md',
  className,
  ...props
}: DefinitionListProps) => {
  const textVariant =
    size === 'sm' ? 'body-small' : size === 'md' ? 'body-medium' : 'body-large'

  return (
    <dl
      data-component='DefinitionList'
      className={definitionListVariants({ layout, size, className })}
      {...props}>
      {items.map((item, index) => (
        <div
          key={index}
          className={itemVariants({ layout, size })}>
          <dt>
            <Text
              variant={textVariant}
              weight='semibold'
              color='primary'>
              {item.term}
            </Text>
          </dt>
          <dd
            className={
              layout === 'horizontal' ? 'sm:col-span-2 md:col-span-3' : ''
            }>
            <Text
              variant={textVariant}
              color='secondary'>
              {item.description}
            </Text>
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default DefinitionList
