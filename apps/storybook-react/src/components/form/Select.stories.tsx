import { Label, Select, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  title: 'Components/Form/Select',
  component: Select.Root,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The controlled value of the select',
    },
    defaultValue: {
      control: 'text',
      description: 'The value when initially rendered',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Event handler called when the value changes',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
    },
  },
} satisfies Meta<typeof Select.Root>

export default meta

type Story = StoryObj<typeof Select.Root>

export const Playground: Story = {
  args: {
    defaultValue: 'apple',
  },
  render: (args) => (
    <Select.Root {...args}>
      <Select.Trigger>
        <Select.Value placeholder='Select a fruit' />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value='apple'>Apple</Select.Item>
        <Select.Item value='banana'>Banana</Select.Item>
        <Select.Item value='orange'>Orange</Select.Item>
        <Select.Item value='grape'>Grape</Select.Item>
        <Select.Item value='mango'>Mango</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label
          htmlFor='select-sm'
          size='sm'>
          Small Select
        </Label>
        <Select.Root defaultValue='sm'>
          <Select.Trigger
            id='select-sm'
            size='sm'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content size='sm'>
            <Select.Item
              value='sm'
              size='sm'>
              Small size
            </Select.Item>
            <Select.Item
              value='option2'
              size='sm'>
              Another option
            </Select.Item>
            <Select.Item
              value='option3'
              size='sm'>
              Third option
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div>
        <Label htmlFor='select-md'>Medium Select</Label>
        <Select.Root defaultValue='md'>
          <Select.Trigger id='select-md'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='md'>Medium size (default)</Select.Item>
            <Select.Item value='option2'>Another option</Select.Item>
            <Select.Item value='option3'>Third option</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div>
        <Label
          htmlFor='select-lg'
          size='lg'>
          Large Select
        </Label>
        <Select.Root defaultValue='lg'>
          <Select.Trigger
            id='select-lg'
            size='lg'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content size='lg'>
            <Select.Item
              value='lg'
              size='lg'>
              Large size
            </Select.Item>
            <Select.Item
              value='option2'
              size='lg'>
              Another option
            </Select.Item>
            <Select.Item
              value='option3'
              size='lg'>
              Third option
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='default'>Default State</Label>
        <Select.Root>
          <Select.Trigger id='default'>
            <Select.Value placeholder='Select an option' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='option1'>Option 1</Select.Item>
            <Select.Item value='option2'>Option 2</Select.Item>
            <Select.Item value='option3'>Option 3</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div>
        <Label htmlFor='error'>Error State</Label>
        <Select.Root>
          <Select.Trigger
            id='error'
            error>
            <Select.Value placeholder='Select an option' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='option1'>Option 1</Select.Item>
            <Select.Item value='option2'>Option 2</Select.Item>
            <Select.Item value='option3'>Option 3</Select.Item>
          </Select.Content>
        </Select.Root>
        <Text
          variant='caption'
          color='inherit'
          className='mt-1 text-red-600'>
          This field is required
        </Text>
      </div>

      <div>
        <Label htmlFor='disabled'>Disabled State</Label>
        <Select.Root
          disabled
          defaultValue='option1'>
          <Select.Trigger id='disabled'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='option1'>Option 1</Select.Item>
            <Select.Item value='option2'>Option 2</Select.Item>
            <Select.Item value='option3'>Option 3</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <div>
      <Label htmlFor='grouped'>Grouped Options</Label>
      <Select.Root>
        <Select.Trigger id='grouped'>
          <Select.Value placeholder='Select a musician' />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Blues</Select.Label>
            <Select.Item value='bb'>B.B. King</Select.Item>
            <Select.Item value='srv'>Stevie Ray Vaughan</Select.Item>
            <Select.Item value='bg'>Buddy Guy</Select.Item>
          </Select.Group>
          <Select.Separator />
          <Select.Group>
            <Select.Label>Rock</Select.Label>
            <Select.Item value='jh'>Jimi Hendrix</Select.Item>
            <Select.Item value='ec'>Eric Clapton</Select.Item>
            <Select.Item value='jm'>John Mayer</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  ),
}

export const WithDisabledItems: Story = {
  render: () => (
    <div>
      <Label htmlFor='disabled-items'>With Disabled Items</Label>
      <Select.Root>
        <Select.Trigger id='disabled-items'>
          <Select.Value placeholder='Select an option' />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value='available1'>Available Option 1</Select.Item>
          <Select.Item
            value='unavailable1'
            disabled>
            Unavailable Option
          </Select.Item>
          <Select.Item value='available2'>Available Option 2</Select.Item>
          <Select.Item
            value='unavailable2'
            disabled>
            Out of Stock
          </Select.Item>
          <Select.Item value='available3'>Available Option 3</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
}

export const ControlledState: Story = {
  render: () => {
    const [value, setValue] = React.useState('apple')

    return (
      <div className='space-y-4'>
        <div className='flex gap-2'>
          <button
            onClick={() => setValue('apple')}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Set Apple
          </button>
          <button
            onClick={() => setValue('banana')}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Set Banana
          </button>
          <button
            onClick={() => setValue('orange')}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Set Orange
          </button>
        </div>

        <div>
          <Label htmlFor='controlled'>Controlled Select</Label>
          <Select.Root
            value={value}
            onValueChange={setValue}>
            <Select.Trigger id='controlled'>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='apple'>Apple</Select.Item>
              <Select.Item value='banana'>Banana</Select.Item>
              <Select.Item value='orange'>Orange</Select.Item>
              <Select.Item value='grape'>Grape</Select.Item>
            </Select.Content>
          </Select.Root>
          <Text
            variant='caption'
            color='secondary'
            className='mt-1'>
            Current value: {value}
          </Text>
        </div>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => (
    <form className='max-w-md space-y-6 rounded-lg border p-6'>
      <div>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          User Preferences
        </Text>
      </div>

      <div>
        <Label
          htmlFor='country'
          required>
          Country
        </Label>
        <Select.Root required>
          <Select.Trigger id='country'>
            <Select.Value placeholder='Select your country' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='us'>United States</Select.Item>
            <Select.Item value='uk'>United Kingdom</Select.Item>
            <Select.Item value='ca'>Canada</Select.Item>
            <Select.Item value='au'>Australia</Select.Item>
            <Select.Item value='fr'>France</Select.Item>
            <Select.Item value='de'>Germany</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div>
        <Label
          htmlFor='language'
          required>
          Preferred Language
        </Label>
        <Select.Root
          required
          defaultValue='en'>
          <Select.Trigger id='language'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='en'>English</Select.Item>
            <Select.Item value='es'>Spanish</Select.Item>
            <Select.Item value='fr'>French</Select.Item>
            <Select.Item value='de'>German</Select.Item>
            <Select.Item value='zh'>Chinese</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div>
        <Label htmlFor='timezone'>Timezone</Label>
        <Select.Root defaultValue='utc'>
          <Select.Trigger id='timezone'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>America</Select.Label>
              <Select.Item value='est'>Eastern Time (EST)</Select.Item>
              <Select.Item value='cst'>Central Time (CST)</Select.Item>
              <Select.Item value='pst'>Pacific Time (PST)</Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Europe</Select.Label>
              <Select.Item value='utc'>UTC</Select.Item>
              <Select.Item value='cet'>Central European Time</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </form>
  ),
}
