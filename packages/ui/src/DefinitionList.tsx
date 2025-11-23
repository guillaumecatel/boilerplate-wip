import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'
import { Grid } from './Grid'
import { Stack } from './Stack'
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

  const gapSize = size === 'sm' ? 'xs' : size === 'lg' ? 'sm' : 'xs'

  return (
    <dl
      data-component='DefinitionList'
      className={definitionListVariants({ layout, size, className })}
      {...props}>
      {items.map((item, index) =>
        layout === 'horizontal' ? (
          <Grid
            key={index}
            cols={1}
            gap={gapSize}
            className='py-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4'>
            <dt>
              <Text
                variant={textVariant}
                weight='semibold'
                color='primary'>
                {item.term}
              </Text>
            </dt>
            <dd className='sm:col-span-2 md:col-span-3'>
              <Text
                variant={textVariant}
                color='secondary'>
                {item.description}
              </Text>
            </dd>
          </Grid>
        ) : (
          <Stack
            key={index}
            as='div'
            direction='column'
            gap={gapSize}>
            <dt>
              <Text
                variant={textVariant}
                weight='semibold'
                color='primary'>
                {item.term}
              </Text>
            </dt>
            <dd>
              <Text
                variant={textVariant}
                color='secondary'>
                {item.description}
              </Text>
            </dd>
          </Stack>
        ),
      )}
    </dl>
  )
}

export default DefinitionList
