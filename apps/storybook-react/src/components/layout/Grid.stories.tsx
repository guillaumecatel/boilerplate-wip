import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'

import { Grid } from '@myorg/ui'

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 12],
    },
    rows: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    gapX: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    gapY: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    flow: {
      control: 'select',
      options: ['row', 'col', 'dense', 'row-dense', 'col-dense'],
    },
  },
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof Grid>

const GridItem = ({
  children,
  className = '',
}: {
  children?: ReactNode
  className?: string
}) => (
  <div
    className={`bg-accent-100 text-accent-700 dark:bg-accent-800 dark:text-accent-200 rounded-lg p-6 text-center ${className}`}>
    {children || 'Item'}
  </div>
)

export const Playground: Story = {
  args: {
    cols: 3,
    gap: 'md',
    align: 'stretch',
    justify: 'stretch',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
    </Grid>
  ),
}

export const TwoColumns: Story = {
  render: () => (
    <Grid
      cols={2}
      gap='md'>
      <GridItem>Column 1</GridItem>
      <GridItem>Column 2</GridItem>
      <GridItem>Column 1</GridItem>
      <GridItem>Column 2</GridItem>
    </Grid>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <Grid
      cols={3}
      gap='lg'>
      {Array.from({ length: 9 }, (_, i) => (
        <GridItem key={i}>{i + 1}</GridItem>
      ))}
    </Grid>
  ),
}

export const FourColumns: Story = {
  render: () => (
    <Grid
      cols={4}
      gap='md'>
      {Array.from({ length: 8 }, (_, i) => (
        <GridItem key={i}>{i + 1}</GridItem>
      ))}
    </Grid>
  ),
}

export const WithRows: Story = {
  render: () => (
    <Grid
      cols={3}
      rows={2}
      gap='md'>
      {Array.from({ length: 6 }, (_, i) => (
        <GridItem key={i}>{i + 1}</GridItem>
      ))}
    </Grid>
  ),
}

export const SeparateGaps: Story = {
  render: () => (
    <Grid
      cols={3}
      gapX='lg'
      gapY='sm'>
      {Array.from({ length: 9 }, (_, i) => (
        <GridItem key={i}>{i + 1}</GridItem>
      ))}
    </Grid>
  ),
}

export const CenteredItems: Story = {
  render: () => (
    <Grid
      cols={3}
      gap='md'
      align='center'
      justify='center'
      className='min-h-[300px]'>
      <GridItem>Centered</GridItem>
      <GridItem>Content</GridItem>
      <GridItem>Items</GridItem>
    </Grid>
  ),
}

export const DashboardLayout: Story = {
  render: () => (
    <Grid
      cols={4}
      gap='md'>
      <GridItem className='col-span-4'>Header</GridItem>
      <GridItem className='col-span-1 row-span-2'>Sidebar</GridItem>
      <GridItem className='col-span-3'>Main Content</GridItem>
      <GridItem className='col-span-3'>Secondary Content</GridItem>
      <GridItem className='col-span-4'>Footer</GridItem>
    </Grid>
  ),
}

export const CardGrid: Story = {
  render: () => (
    <Grid
      cols={3}
      gap='lg'>
      {Array.from({ length: 6 }, (_, i) => (
        <GridItem
          key={i}
          className='p-8'>
          <div className='mb-2 text-lg font-semibold'>Card {i + 1}</div>
          <p className='text-sm opacity-75'>This is a card with some content</p>
        </GridItem>
      ))}
    </Grid>
  ),
}

export const GapVariants: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
          Gap: none
        </p>
        <Grid
          cols={3}
          gap='none'>
          {Array.from({ length: 3 }, (_, i) => (
            <GridItem key={i}>{i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>Gap: xs</p>
        <Grid
          cols={3}
          gap='xs'>
          {Array.from({ length: 3 }, (_, i) => (
            <GridItem key={i}>{i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>Gap: sm</p>
        <Grid
          cols={3}
          gap='sm'>
          {Array.from({ length: 3 }, (_, i) => (
            <GridItem key={i}>{i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>Gap: md</p>
        <Grid
          cols={3}
          gap='md'>
          {Array.from({ length: 3 }, (_, i) => (
            <GridItem key={i}>{i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>Gap: lg</p>
        <Grid
          cols={3}
          gap='lg'>
          {Array.from({ length: 3 }, (_, i) => (
            <GridItem key={i}>{i + 1}</GridItem>
          ))}
        </Grid>
      </div>
    </div>
  ),
}
