import { Label, Text, Textarea } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
    rows: 4,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the textarea',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'The visual variant of the textarea',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Whether the textarea is in an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof Textarea>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label
          htmlFor='textarea-sm'
          size='sm'>
          Small Textarea
        </Label>
        <Textarea
          id='textarea-sm'
          size='sm'
          placeholder='Small size'
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor='textarea-md'>Medium Textarea</Label>
        <Textarea
          id='textarea-md'
          size='md'
          placeholder='Medium size (default)'
          rows={4}
        />
      </div>
      <div>
        <Label
          htmlFor='textarea-lg'
          size='lg'>
          Large Textarea
        </Label>
        <Textarea
          id='textarea-lg'
          size='lg'
          placeholder='Large size'
          rows={5}
        />
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='default'>Default State</Label>
        <Textarea
          id='default'
          placeholder='Normal textarea'
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor='error'>Error State</Label>
        <Textarea
          id='error'
          error
          placeholder='Error textarea'
          rows={4}
        />
        <Text
          variant='caption'
          color='inherit'
          className='mt-1 text-red-600'>
          This field is required
        </Text>
      </div>
      <div>
        <Label htmlFor='disabled'>Disabled State</Label>
        <Textarea
          id='disabled'
          disabled
          placeholder='Disabled textarea'
          defaultValue='Cannot edit this'
          rows={4}
        />
      </div>
    </div>
  ),
}

export const ResizeBehavior: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='resize-none'>None (default)</Label>
        <Textarea
          id='resize-none'
          resize='none'
          placeholder='Cannot be resized'
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor='resize-vertical'>Vertical</Label>
        <Textarea
          id='resize-vertical'
          resize='vertical'
          placeholder='Can be resized vertically'
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor='resize-horizontal'>Horizontal</Label>
        <Textarea
          id='resize-horizontal'
          resize='horizontal'
          placeholder='Can be resized horizontally'
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor='resize-both'>Both</Label>
        <Textarea
          id='resize-both'
          resize='both'
          placeholder='Can be resized in both directions'
          rows={4}
        />
      </div>
    </div>
  ),
}

export const WithValue: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='with-value'>With Value</Label>
        <Textarea
          id='with-value'
          defaultValue='This is some initial text content that spans multiple lines.
It demonstrates how the textarea handles longer content.'
          rows={5}
        />
      </div>
      <div>
        <Label htmlFor='readonly'>Read Only</Label>
        <Textarea
          id='readonly'
          readOnly
          defaultValue='This textarea is read only and cannot be edited.'
          rows={3}
        />
      </div>
    </div>
  ),
}

export const WithHelpText: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='description'>Description</Label>
        <Textarea
          id='description'
          placeholder='Describe your project...'
          rows={4}
        />
        <Text
          variant='caption'
          color='secondary'
          className='mt-1'>
          Provide a brief description (max 500 characters)
        </Text>
      </div>
      <div>
        <Label htmlFor='feedback-error'>Feedback</Label>
        <Textarea
          id='feedback-error'
          error
          placeholder='Share your thoughts...'
          rows={4}
        />
        <Text
          variant='caption'
          color='inherit'
          className='mt-1 text-red-600'>
          Please provide feedback before submitting
        </Text>
      </div>
    </div>
  ),
}

export const CharacterCounter: Story = {
  render: () => {
    const [value, setValue] = React.useState('')
    const maxLength = 200

    return (
      <div>
        <Label htmlFor='bio'>Biography</Label>
        <Textarea
          id='bio'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Tell us about yourself...'
          rows={5}
          maxLength={maxLength}
        />
        <div className='mt-1 flex justify-between'>
          <Text
            variant='caption'
            color='secondary'>
            Brief bio for your profile
          </Text>
          <Text
            variant='caption'
            color={value.length >= maxLength ? 'inherit' : 'secondary'}
            className={value.length >= maxLength ? 'text-red-600' : ''}>
            {value.length}/{maxLength}
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
          Feedback Form
        </Text>
      </div>

      <div>
        <Label
          htmlFor='subject'
          required>
          Subject
        </Label>
        <input
          id='subject'
          type='text'
          className='border-base-300 focus:border-accent-500 focus:ring-accent-500/20 dark:border-base-700 dark:bg-base-900 dark:text-base-50 w-full rounded-lg border px-4 py-2 text-base focus:ring-2 focus:outline-none'
          placeholder='Brief subject line'
          required
        />
      </div>

      <div>
        <Label
          htmlFor='message'
          required>
          Message
        </Label>
        <Textarea
          id='message'
          placeholder='Your detailed feedback...'
          rows={6}
          required
        />
        <Text
          variant='caption'
          color='secondary'
          className='mt-1'>
          Please be as detailed as possible
        </Text>
      </div>

      <div>
        <Label htmlFor='additional'>Additional Comments</Label>
        <Textarea
          id='additional'
          placeholder='Any other comments? (optional)'
          rows={4}
          resize='vertical'
        />
      </div>
    </form>
  ),
}

// Import React for the CharacterCounter story
import React from 'react'
