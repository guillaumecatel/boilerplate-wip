import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from '@myorg/ui'

const meta = {
  title: 'Components/Navigation/Divider',
  component: Divider,
  tags: ['autodocs'],
  args: {
    label: 'Divider',
  },
  argTypes: {
    label: { control: 'text' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    labelPosition: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
  },
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof Divider>

export const Playground: Story = {}

export const Orientations: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='mb-4 text-sm font-semibold'>Horizontal</h3>
        <Divider label='Section' />
      </div>
      <div className='flex gap-8'>
        <div>
          <h3 className='mb-4 text-sm font-semibold'>Vertical</h3>
          <div className='flex items-center gap-4'>
            <span>Item 1</span>
            <Divider
              orientation='vertical'
              label='or'
              className='h-16'
            />
            <span>Item 2</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='mb-4 text-sm font-semibold'>Solid</h3>
        <Divider
          variant='solid'
          label='Solid line'
        />
      </div>
      <div>
        <h3 className='mb-4 text-sm font-semibold'>Dashed</h3>
        <Divider
          variant='dashed'
          label='Dashed line'
        />
      </div>
      <div>
        <h3 className='mb-4 text-sm font-semibold'>Dotted</h3>
        <Divider
          variant='dotted'
          label='Dotted line'
        />
      </div>
    </div>
  ),
}

export const LabelPositions: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='mb-4 text-sm font-semibold'>Start</h3>
        <Divider
          label='Start position'
          labelPosition='start'
        />
      </div>
      <div>
        <h3 className='mb-4 text-sm font-semibold'>Center (default)</h3>
        <Divider
          label='Center position'
          labelPosition='center'
        />
      </div>
      <div>
        <h3 className='mb-4 text-sm font-semibold'>End</h3>
        <Divider
          label='End position'
          labelPosition='end'
        />
      </div>
    </div>
  ),
}

export const WithoutLabel: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='mb-4 text-sm font-semibold'>Horizontal</h3>
        <Divider />
      </div>
      <div>
        <h3 className='mb-4 text-sm font-semibold'>Vertical</h3>
        <div className='flex items-center gap-4'>
          <span>Item 1</span>
          <Divider
            orientation='vertical'
            className='h-16'
          />
          <span>Item 2</span>
          <Divider
            orientation='vertical'
            variant='dashed'
            className='h-16'
          />
          <span>Item 3</span>
        </div>
      </div>
    </div>
  ),
}

export const InContent: Story = {
  render: () => (
    <div className='max-w-2xl'>
      <div className='space-y-4'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Divider label='Section Break' />

        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>

        <Divider variant='dashed' />

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  ),
}

export const FormSeparator: Story = {
  render: () => (
    <div className='max-w-md rounded-lg border p-6'>
      <h2 className='mb-4 text-lg font-semibold'>Account Settings</h2>

      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium'>Username</label>
          <input
            type='text'
            className='mt-1 w-full rounded border px-3 py-2'
            placeholder='john.doe'
          />
        </div>

        <div>
          <label className='block text-sm font-medium'>Email</label>
          <input
            type='email'
            className='mt-1 w-full rounded border px-3 py-2'
            placeholder='john@example.com'
          />
        </div>
      </div>

      <Divider
        label='Security'
        className='my-6'
      />

      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium'>Current Password</label>
          <input
            type='password'
            className='mt-1 w-full rounded border px-3 py-2'
          />
        </div>

        <div>
          <label className='block text-sm font-medium'>New Password</label>
          <input
            type='password'
            className='mt-1 w-full rounded border px-3 py-2'
          />
        </div>
      </div>
    </div>
  ),
}
