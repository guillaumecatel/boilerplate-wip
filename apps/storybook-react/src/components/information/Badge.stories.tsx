import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@myorg/ui'

const meta = {
  title: 'Components/Information/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'success',
        'warning',
        'destructive',
      ],
      description: 'The visual style variant of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the badge',
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
    },
    as: {
      control: 'select',
      options: ['span', 'div', 'a'],
      description: 'The HTML element to render',
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof Badge>

export const Playground: Story = {
  args: {
    children: 'Badge',
  },
}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-wrap gap-3'>
      <Badge variant='primary'>Primary</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='destructive'>Destructive</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-wrap items-center gap-3'>
      <Badge size='sm'>Small</Badge>
      <Badge size='md'>Medium</Badge>
      <Badge size='lg'>Large</Badge>
    </div>
  ),
}

export const WithNumbers: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-wrap gap-3'>
      <Badge variant='primary'>1</Badge>
      <Badge variant='secondary'>99+</Badge>
      <Badge variant='destructive'>3</Badge>
      <Badge variant='success'>NEW</Badge>
    </div>
  ),
}

export const AsLink: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-wrap gap-3'>
      <Badge
        as='a'
        href='#'
        variant='primary'
        className='cursor-pointer hover:opacity-80'>
        Clickable Badge
      </Badge>
      <Badge
        as='a'
        href='#'
        variant='outline'
        className='cursor-pointer hover:opacity-80'>
        Link Badge
      </Badge>
    </div>
  ),
}

export const InContext: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      {/* With text */}
      <div className='flex items-center gap-2'>
        <span className='text-base-700 dark:text-base-300'>Status:</span>
        <Badge variant='success'>Active</Badge>
      </div>

      {/* In a list */}
      <div className='flex flex-col gap-3'>
        <div className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-900 flex items-center justify-between rounded-lg border p-3'>
          <span className='text-base-700 dark:text-base-300 font-medium'>
            Feature Request
          </span>
          <Badge
            variant='warning'
            size='sm'>
            Pending
          </Badge>
        </div>
        <div className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-900 flex items-center justify-between rounded-lg border p-3'>
          <span className='text-base-700 dark:text-base-300 font-medium'>
            Bug Fix
          </span>
          <Badge
            variant='destructive'
            size='sm'>
            Urgent
          </Badge>
        </div>
        <div className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-900 flex items-center justify-between rounded-lg border p-3'>
          <span className='text-base-700 dark:text-base-300 font-medium'>
            Documentation
          </span>
          <Badge
            variant='success'
            size='sm'>
            Completed
          </Badge>
        </div>
      </div>

      {/* Multiple badges */}
      <div className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-900 rounded-lg border p-4'>
        <h3 className='text-base-900 dark:text-base-100 mb-3 font-semibold'>
          Premium Features
        </h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='primary'>Analytics</Badge>
          <Badge variant='primary'>API Access</Badge>
          <Badge variant='primary'>Priority Support</Badge>
          <Badge variant='primary'>Custom Branding</Badge>
          <Badge variant='success'>NEW</Badge>
        </div>
      </div>
    </div>
  ),
}
