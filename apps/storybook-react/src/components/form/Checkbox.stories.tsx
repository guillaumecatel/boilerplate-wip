import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Checkbox } from '@myorg/ui'

const meta = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'destructive'],
      description: 'The visual style variant of the checkbox',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof Checkbox>

export const Playground: Story = {}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-4'>
      <Checkbox variant='primary' />
      <Checkbox variant='destructive' />
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-4'>
      <Checkbox size='sm' />
      <Checkbox size='md' />
      <Checkbox size='lg' />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-4'>
      <Checkbox disabled />
      <Checkbox
        disabled
        defaultChecked
      />
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div className='flex items-center gap-4'>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className='text-base-600 dark:text-base-400 text-sm'>
          Currently: {checked ? 'checked' : 'unchecked'}
        </span>
      </div>
    )
  },
}
