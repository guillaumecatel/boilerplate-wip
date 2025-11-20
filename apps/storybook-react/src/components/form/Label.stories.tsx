import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@myorg/ui'

const meta = {
  title: 'Components/Form/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'muted', 'accent', 'destructive'],
      description: 'The visual style variant of the label',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the label',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    children: {
      control: 'text',
      description: 'The label text',
    },
    description: {
      control: 'text',
      description: 'Optional description text below the label',
    },
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof Label>

export const Playground: Story = {
  args: {
    children: 'Email address',
    description: 'We will never share your email',
    htmlFor: 'email-input',
  },
}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <Label variant='default'>Default variant</Label>
      <Label variant='muted'>Muted variant</Label>
      <Label variant='accent'>Accent variant</Label>
      <Label variant='destructive'>Destructive variant</Label>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <Label size='sm'>Small label</Label>
      <Label size='md'>Medium label</Label>
      <Label size='lg'>Large label</Label>
    </div>
  ),
}

export const Required: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <Label required>Required field</Label>
      <Label
        required
        description='This field is mandatory'>
        Username
      </Label>
      <Label
        required
        variant='destructive'>
        Password
      </Label>
    </div>
  ),
}

export const WithDescription: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <Label description='Your email will be used for account recovery'>
        Email address
      </Label>
      <Label
        description='Choose a unique username between 3-20 characters'
        variant='accent'>
        Username
      </Label>
      <Label
        description='Must be at least 8 characters'
        size='lg'>
        Password
      </Label>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <Label disabled>Disabled label</Label>
      <Label
        disabled
        description='This field is not available'>
        Premium feature
      </Label>
      <Label
        disabled
        required>
        Required but disabled
      </Label>
    </div>
  ),
}

export const FormExample: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <form className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-900 flex flex-col gap-6 rounded-lg border p-6'>
      <h3 className='text-base-900 dark:text-base-100 text-lg font-semibold'>
        User Profile
      </h3>

      <div className='flex flex-col gap-2'>
        <Label
          htmlFor='name'
          required
          description='Your full legal name'>
          Full name
        </Label>
        <input
          type='text'
          id='name'
          className='border-base-300 focus:border-accent-500 focus:ring-accent-500 dark:border-base-600 dark:bg-base-800 dark:text-base-100 rounded-lg border bg-white px-4 py-2 transition-colors focus:ring-2 focus:outline-none'
          placeholder='John Doe'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <Label
          htmlFor='email'
          required
          variant='accent'
          description='We will send you a verification email'>
          Email address
        </Label>
        <input
          type='email'
          id='email'
          className='border-base-300 focus:border-accent-500 focus:ring-accent-500 dark:border-base-600 dark:bg-base-800 dark:text-base-100 rounded-lg border bg-white px-4 py-2 transition-colors focus:ring-2 focus:outline-none'
          placeholder='john@example.com'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <Label
          htmlFor='bio'
          variant='muted'
          description='Tell us a bit about yourself'>
          Biography
        </Label>
        <textarea
          id='bio'
          rows={4}
          className='border-base-300 focus:border-accent-500 focus:ring-accent-500 dark:border-base-600 dark:bg-base-800 dark:text-base-100 rounded-lg border bg-white px-4 py-2 transition-colors focus:ring-2 focus:outline-none'
          placeholder='I am a...'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <Label
          htmlFor='premium'
          disabled
          description='Available in premium plan only'>
          Premium feature
        </Label>
        <input
          type='text'
          id='premium'
          disabled
          className='border-base-300 bg-base-100 dark:border-base-600 dark:bg-base-900 cursor-not-allowed rounded-lg border px-4 py-2 opacity-50'
          placeholder='Unavailable'
        />
      </div>
    </form>
  ),
}
