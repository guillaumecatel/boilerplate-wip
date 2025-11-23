import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'

import { Badge, Stack } from '@myorg/ui'

const meta = {
  title: 'Components/Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
  },
} satisfies Meta<typeof Stack>

export default meta

type Story = StoryObj<typeof Stack>

const BoxExample = ({ children }: { children?: ReactNode }) => (
  <div className='bg-base-200 dark:bg-base-700 rounded-lg p-4'>
    {children || 'Item'}
  </div>
)

export const Playground: Story = {
  args: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    gap: 'md',
    wrap: 'nowrap',
  },
  render: (args) => (
    <Stack {...args}>
      <BoxExample>Item 1</BoxExample>
      <BoxExample>Item 2</BoxExample>
      <BoxExample>Item 3</BoxExample>
    </Stack>
  ),
}

export const HorizontalRow: Story = {
  render: () => (
    <Stack
      direction='row'
      gap='md'>
      <BoxExample>First</BoxExample>
      <BoxExample>Second</BoxExample>
      <BoxExample>Third</BoxExample>
    </Stack>
  ),
}

export const VerticalColumn: Story = {
  render: () => (
    <Stack
      direction='column'
      gap='md'>
      <BoxExample>First</BoxExample>
      <BoxExample>Second</BoxExample>
      <BoxExample>Third</BoxExample>
    </Stack>
  ),
}

export const CenteredContent: Story = {
  render: () => (
    <Stack
      direction='column'
      align='center'
      justify='center'
      gap='md'
      className='min-h-[300px]'>
      <BoxExample>Centered</BoxExample>
      <BoxExample>Content</BoxExample>
    </Stack>
  ),
}

export const SpaceBetween: Story = {
  render: () => (
    <Stack
      direction='row'
      justify='between'
      className='w-full'>
      <BoxExample>Left</BoxExample>
      <BoxExample>Center</BoxExample>
      <BoxExample>Right</BoxExample>
    </Stack>
  ),
}

export const WithWrap: Story = {
  render: () => (
    <Stack
      direction='row'
      wrap='wrap'
      gap='md'
      className='max-w-[500px]'>
      {Array.from({ length: 12 }, (_, i) => (
        <BoxExample key={i}>Item {i + 1}</BoxExample>
      ))}
    </Stack>
  ),
}

export const WithBadges: Story = {
  render: () => (
    <Stack
      direction='row'
      gap='sm'
      wrap='wrap'>
      <Badge variant='primary'>Primary</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='outline'>Outline</Badge>
    </Stack>
  ),
}

export const GapVariants: Story = {
  render: () => (
    <Stack
      direction='column'
      gap='lg'>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
          Gap: none
        </p>
        <Stack
          direction='row'
          gap='none'>
          <BoxExample />
          <BoxExample />
          <BoxExample />
        </Stack>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>Gap: xs</p>
        <Stack
          direction='row'
          gap='xs'>
          <BoxExample />
          <BoxExample />
          <BoxExample />
        </Stack>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>Gap: sm</p>
        <Stack
          direction='row'
          gap='sm'>
          <BoxExample />
          <BoxExample />
          <BoxExample />
        </Stack>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>Gap: md</p>
        <Stack
          direction='row'
          gap='md'>
          <BoxExample />
          <BoxExample />
          <BoxExample />
        </Stack>
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>Gap: lg</p>
        <Stack
          direction='row'
          gap='lg'>
          <BoxExample />
          <BoxExample />
          <BoxExample />
        </Stack>
      </div>
    </Stack>
  ),
}
