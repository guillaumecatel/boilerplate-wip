import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'

import { Grid } from '@myorg/ui'

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Grid component is a flexible layout system based on CSS Grid. It provides an easy way to create responsive grid layouts with various configurations for columns, rows, gaps, and alignment. It includes a Grid.Item sub-component for controlling individual grid item placement and spanning.',
      },
    },
  },
  argTypes: {
    as: {
      control: false,
      description:
        'Allows you to render the Grid component as a different HTML element or custom component.',
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'div' },
      },
    },
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 12],
      description: 'Defines the number of columns in the grid.',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6 | 12' },
        defaultValue: { summary: '1' },
      },
    },
    rows: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Defines the number of rows in the grid.',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: 'undefined' },
      },
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description:
        'Defines the gap between grid items (both horizontal and vertical).',
      table: {
        type: { summary: 'none | xs | sm | md | lg | xl | 2xl' },
        defaultValue: { summary: 'none' },
      },
    },
    gapX: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Defines the horizontal gap between grid items.',
      table: {
        type: { summary: 'none | xs | sm | md | lg | xl | 2xl' },
        defaultValue: { summary: 'undefined' },
      },
    },
    gapY: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Defines the vertical gap between grid items.',
      table: {
        type: { summary: 'none | xs | sm | md | lg | xl | 2xl' },
        defaultValue: { summary: 'undefined' },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Aligns grid items along the block (column) axis.',
      table: {
        type: { summary: 'start | center | end | stretch | baseline' },
        defaultValue: { summary: 'stretch' },
      },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Aligns grid items along the inline (row) axis.',
      table: {
        type: { summary: 'start | center | end | stretch' },
        defaultValue: { summary: 'stretch' },
      },
    },
    flow: {
      control: 'select',
      options: ['row', 'col', 'dense', 'row-dense', 'col-dense'],
      description: 'Controls how auto-placed items get inserted in the grid.',
      table: {
        type: { summary: 'row | col | dense | row-dense | col-dense' },
        defaultValue: { summary: 'row' },
      },
    },
    children: {
      description: 'The content to be displayed within the Grid component.',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    cols: 3,
    gap: 'md',
    align: 'stretch',
    justify: 'stretch',
    flow: 'row',
  },
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof Grid>

const DemoItem = ({
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
  render: (args) => (
    <Grid {...args}>
      <Grid.Item>
        <DemoItem>1</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>2</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>3</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>4</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>5</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>6</DemoItem>
      </Grid.Item>
    </Grid>
  ),
}

export const BasicLayout: Story = {
  render: () => (
    <Grid
      cols={3}
      gap='md'>
      <Grid.Item>
        <DemoItem>Item 1</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>Item 2</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>Item 3</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>Item 4</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>Item 5</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>Item 6</DemoItem>
      </Grid.Item>
    </Grid>
  ),
}

export const WithColSpan: Story = {
  render: () => (
    <Grid
      cols={4}
      gap='md'>
      <Grid.Item colSpan={4}>
        <DemoItem>Full Width (colSpan=4)</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={2}>
        <DemoItem>Half Width (colSpan=2)</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={2}>
        <DemoItem>Half Width (colSpan=2)</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={3}>
        <DemoItem>3/4 Width (colSpan=3)</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>1/4 Width</DemoItem>
      </Grid.Item>
    </Grid>
  ),
}

export const WithRowSpan: Story = {
  render: () => (
    <Grid
      cols={3}
      rows={3}
      gap='md'>
      <Grid.Item
        colSpan={2}
        rowSpan={2}>
        <DemoItem className='flex h-full items-center justify-center'>
          Large Item
          <br />
          (colSpan=2, rowSpan=2)
        </DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>1</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>2</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>3</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>4</DemoItem>
      </Grid.Item>
      <Grid.Item>
        <DemoItem>5</DemoItem>
      </Grid.Item>
    </Grid>
  ),
}

export const DashboardLayout: Story = {
  render: () => (
    <Grid
      cols={12}
      gap='md'>
      <Grid.Item colSpan={12}>
        <DemoItem>Header</DemoItem>
      </Grid.Item>
      <Grid.Item
        colSpan={3}
        rowSpan={2}>
        <DemoItem className='flex h-full items-center justify-center'>
          Sidebar
        </DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={9}>
        <DemoItem>Main Content</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={9}>
        <DemoItem>Secondary Content</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={12}>
        <DemoItem>Footer</DemoItem>
      </Grid.Item>
    </Grid>
  ),
}

export const CardGrid: Story = {
  render: () => (
    <Grid
      cols={3}
      gap='lg'>
      {Array.from({ length: 6 }, (_, i) => (
        <Grid.Item key={i}>
          <DemoItem className='p-8'>
            <div className='mb-2 text-lg font-semibold'>Card {i + 1}</div>
            <p className='text-sm opacity-75'>
              This is a card with some content
            </p>
          </DemoItem>
        </Grid.Item>
      ))}
    </Grid>
  ),
}

export const ResponsiveLayout: Story = {
  render: () => (
    <Grid
      cols={4}
      gap='md'>
      <Grid.Item colSpan={4}>
        <DemoItem>Header - Full Width</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={1}>
        <DemoItem>Nav</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={2}>
        <DemoItem>Main Content</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={1}>
        <DemoItem>Aside</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DemoItem>Footer - Full Width</DemoItem>
      </Grid.Item>
    </Grid>
  ),
}

export const GapVariants: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Gap: none
        </p>
        <Grid
          cols={3}
          gap='none'>
          {Array.from({ length: 3 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Gap: xs
        </p>
        <Grid
          cols={3}
          gap='xs'>
          {Array.from({ length: 3 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Gap: sm
        </p>
        <Grid
          cols={3}
          gap='sm'>
          {Array.from({ length: 3 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Gap: md
        </p>
        <Grid
          cols={3}
          gap='md'>
          {Array.from({ length: 3 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Gap: lg
        </p>
        <Grid
          cols={3}
          gap='lg'>
          {Array.from({ length: 3 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Gap: xl
        </p>
        <Grid
          cols={3}
          gap='xl'>
          {Array.from({ length: 3 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
    </div>
  ),
}

export const SeparateGaps: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          gapX: lg, gapY: sm
        </p>
        <Grid
          cols={3}
          gapX='lg'
          gapY='sm'>
          {Array.from({ length: 9 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          gapX: sm, gapY: xl
        </p>
        <Grid
          cols={3}
          gapX='sm'
          gapY='xl'>
          {Array.from({ length: 9 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
    </div>
  ),
}

export const AlignmentVariants: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Align: start
        </p>
        <Grid
          cols={3}
          gap='md'
          align='start'
          className='min-h-[200px]'>
          {Array.from({ length: 3 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Align: center
        </p>
        <Grid
          cols={3}
          gap='md'
          align='center'
          className='min-h-[200px]'>
          {Array.from({ length: 3 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Align: end
        </p>
        <Grid
          cols={3}
          gap='md'
          align='end'
          className='min-h-[200px]'>
          {Array.from({ length: 3 }, (_, i) => (
            <Grid.Item key={i}>
              <DemoItem>{i + 1}</DemoItem>
            </Grid.Item>
          ))}
        </Grid>
      </div>
    </div>
  ),
}

export const ComplexLayout: Story = {
  render: () => (
    <Grid
      cols={6}
      gap='md'>
      <Grid.Item
        colSpan={6}
        className='from-primary-500 to-primary-700 bg-gradient-to-r'>
        <DemoItem className='bg-transparent font-semibold text-white'>
          Hero Section - Full Width
        </DemoItem>
      </Grid.Item>
      <Grid.Item
        colSpan={2}
        rowSpan={3}>
        <DemoItem className='flex h-full items-center justify-center'>
          Sidebar
          <br />
          Navigation
        </DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DemoItem>Featured Content</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={2}>
        <DemoItem>Card 1</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={2}>
        <DemoItem>Card 2</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={2}>
        <DemoItem>Card 3</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={2}>
        <DemoItem>Card 4</DemoItem>
      </Grid.Item>
      <Grid.Item colSpan={6}>
        <DemoItem>Footer</DemoItem>
      </Grid.Item>
    </Grid>
  ),
}
