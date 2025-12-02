import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack, Text } from '@myorg/ui'

const meta = {
  title: 'Components/Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Stack component is a flexible layout primitive that arranges its children in a row or column direction using flexbox. It provides a simple and consistent way to create vertical or horizontal layouts with configurable spacing, alignment, and wrapping behavior.',
      },
    },
  },
  argTypes: {
    as: {
      control: false,
      description:
        'Allows you to render the Stack component as a different HTML element or custom component.',
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'div' },
      },
    },
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'col', 'col-reverse'],
      description: 'Defines the direction in which children are laid out.',
      table: {
        type: { summary: 'row | row-reverse | col | col-reverse' },
        defaultValue: { summary: 'col' },
      },
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Defines the gap between children using design tokens.',
      table: {
        type: { summary: 'none | xs | sm | md | lg | xl | 2xl' },
        defaultValue: { summary: 'none' },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Defines the alignment of children along the cross axis.',
      table: {
        type: { summary: 'start | center | end | stretch | baseline' },
        defaultValue: { summary: 'stretch' },
      },
    },
    justify: {
      control: 'select',
      options: [
        'start',
        'center',
        'end',
        'between',
        'around',
        'evenly',
        'stretch',
      ],
      description: 'Defines the alignment of children along the main axis.',
      table: {
        type: {
          summary: 'start | center | end | between | around | evenly | stretch',
        },
        defaultValue: { summary: 'start' },
      },
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description:
        'Defines how children wrap when they overflow the container.',
      table: {
        type: { summary: 'nowrap | wrap | wrap-reverse' },
        defaultValue: { summary: 'nowrap' },
      },
    },
    children: {
      description: 'The content to be displayed within the Stack component.',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    direction: 'col',
    gap: 'md',
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
  },
} satisfies Meta<typeof Stack>

export default meta

type Story = StoryObj<typeof Stack>

export const Playground: Story = {
  render: (args) => (
    <Stack {...args}>
      <div className='bg-accent-100 dark:bg-accent-900 rounded-lg p-4'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Item 1
        </Text>
      </div>
      <div className='bg-accent-100 dark:bg-accent-900 rounded-lg p-4'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Item 2
        </Text>
      </div>
      <div className='bg-accent-100 dark:bg-accent-900 rounded-lg p-4'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Item 3
        </Text>
      </div>
    </Stack>
  ),
}

export const VerticalStack: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A vertical stack (column) with medium gap between items.',
      },
    },
  },
  render: () => (
    <Stack
      direction='col'
      gap='md'>
      <div className='bg-accent-100 dark:bg-accent-900 rounded-lg p-4'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          First Item
        </Text>
      </div>
      <div className='bg-accent-100 dark:bg-accent-900 rounded-lg p-4'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Second Item
        </Text>
      </div>
      <div className='bg-accent-100 dark:bg-accent-900 rounded-lg p-4'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Third Item
        </Text>
      </div>
    </Stack>
  ),
}

export const HorizontalStack: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A horizontal stack (row) with medium gap between items.',
      },
    },
  },
  render: () => (
    <Stack
      direction='row'
      gap='md'>
      <div className='bg-accent-100 dark:bg-accent-900 rounded-lg p-4'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Item A
        </Text>
      </div>
      <div className='bg-accent-100 dark:bg-accent-900 rounded-lg p-4'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Item B
        </Text>
      </div>
      <div className='bg-accent-100 dark:bg-accent-900 rounded-lg p-4'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Item C
        </Text>
      </div>
    </Stack>
  ),
}

export const WithAlignment: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Stack with centered alignment along both axes.',
      },
    },
  },
  render: () => (
    <Stack
      direction='col'
      gap='lg'
      align='center'
      justify='center'
      className='bg-base-50 dark:bg-base-900 min-h-[300px] rounded-lg'>
      <div className='bg-accent-600 rounded-lg p-4 text-white'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Centered Content
        </Text>
      </div>
      <div className='bg-accent-600 rounded-lg p-4 text-white'>
        <Text
          as='p'
          variant='body-medium'
          weight='medium'>
          Also Centered
        </Text>
      </div>
    </Stack>
  ),
}

export const SpaceBetween: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Horizontal stack with space-between justification.',
      },
    },
  },
  render: () => (
    <Stack
      direction='row'
      justify='between'
      align='center'
      className='bg-base-50 dark:bg-base-900 rounded-lg p-6'>
      <Text
        as='p'
        variant='heading-small'
        weight='bold'>
        Logo
      </Text>
      <Stack
        direction='row'
        gap='md'>
        <Text
          as='span'
          variant='body-medium'>
          Home
        </Text>
        <Text
          as='span'
          variant='body-medium'>
          About
        </Text>
        <Text
          as='span'
          variant='body-medium'>
          Contact
        </Text>
      </Stack>
    </Stack>
  ),
}

export const WithWrap: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Stack with wrapping enabled for overflow content.',
      },
    },
  },
  render: () => (
    <Stack
      direction='row'
      gap='sm'
      wrap='wrap'
      className='max-w-md'>
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className='bg-accent-100 dark:bg-accent-900 rounded-lg px-4 py-2'>
          <Text
            as='span'
            variant='body-small'
            weight='medium'>
            Tag {i + 1}
          </Text>
        </div>
      ))}
    </Stack>
  ),
}

export const GapSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of different gap sizes.',
      },
    },
  },
  render: () => (
    <Stack
      direction='col'
      gap='xl'>
      <div>
        <Text
          as='p'
          variant='caption'
          color='secondary'
          className='mb-2'>
          Gap: xs
        </Text>
        <Stack
          direction='row'
          gap='xs'>
          <div className='bg-accent-100 dark:bg-accent-900 rounded p-3' />
          <div className='bg-accent-100 dark:bg-accent-900 rounded p-3' />
          <div className='bg-accent-100 dark:bg-accent-900 rounded p-3' />
        </Stack>
      </div>
      <div>
        <Text
          as='p'
          variant='caption'
          color='secondary'
          className='mb-2'>
          Gap: md
        </Text>
        <Stack
          direction='row'
          gap='md'>
          <div className='bg-accent-100 dark:bg-accent-900 rounded p-3' />
          <div className='bg-accent-100 dark:bg-accent-900 rounded p-3' />
          <div className='bg-accent-100 dark:bg-accent-900 rounded p-3' />
        </Stack>
      </div>
      <div>
        <Text
          as='p'
          variant='caption'
          color='secondary'
          className='mb-2'>
          Gap: xl
        </Text>
        <Stack
          direction='row'
          gap='xl'>
          <div className='bg-accent-100 dark:bg-accent-900 rounded p-3' />
          <div className='bg-accent-100 dark:bg-accent-900 rounded p-3' />
          <div className='bg-accent-100 dark:bg-accent-900 rounded p-3' />
        </Stack>
      </div>
    </Stack>
  ),
}
