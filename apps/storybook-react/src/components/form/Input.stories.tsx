import { Button, Input, Label, Text, Textarea } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'The visual variant of the input',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Whether the input is in an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The type of input',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof Input>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label
          htmlFor='input-sm'
          size='sm'>
          Small Input
        </Label>
        <Input
          id='input-sm'
          size='sm'
          placeholder='Small size'
        />
      </div>
      <div>
        <Label htmlFor='input-md'>Medium Input</Label>
        <Input
          id='input-md'
          size='md'
          placeholder='Medium size (default)'
        />
      </div>
      <div>
        <Label
          htmlFor='input-lg'
          size='lg'>
          Large Input
        </Label>
        <Input
          id='input-lg'
          size='lg'
          placeholder='Large size'
        />
      </div>
    </div>
  ),
}

export const Types: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='text'>Text</Label>
        <Input
          id='text'
          type='text'
          placeholder='Enter text'
        />
      </div>
      <div>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          placeholder='Enter email'
        />
      </div>
      <div>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          type='password'
          placeholder='Enter password'
        />
      </div>
      <div>
        <Label htmlFor='number'>Number</Label>
        <Input
          id='number'
          type='number'
          placeholder='Enter number'
        />
      </div>
      <div>
        <Label htmlFor='tel'>Telephone</Label>
        <Input
          id='tel'
          type='tel'
          placeholder='Enter phone number'
        />
      </div>
      <div>
        <Label htmlFor='url'>URL</Label>
        <Input
          id='url'
          type='url'
          placeholder='https://example.com'
        />
      </div>
      <div>
        <Label htmlFor='search'>Search</Label>
        <Input
          id='search'
          type='search'
          placeholder='Search...'
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
        <Input
          id='default'
          placeholder='Normal input'
        />
      </div>
      <div>
        <Label htmlFor='error'>Error State</Label>
        <Input
          id='error'
          error
          placeholder='Error input'
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
        <Input
          id='disabled'
          disabled
          placeholder='Disabled input'
          defaultValue='Cannot edit this'
        />
      </div>
    </div>
  ),
}

export const WithValues: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='with-value'>With Value</Label>
        <Input
          id='with-value'
          defaultValue='This input has a value'
        />
      </div>
      <div>
        <Label htmlFor='readonly'>Read Only</Label>
        <Input
          id='readonly'
          readOnly
          defaultValue='This input is read only'
        />
      </div>
    </div>
  ),
}

export const WithHelpText: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='username'>Username</Label>
        <Input
          id='username'
          placeholder='johndoe'
        />
        <Text
          variant='caption'
          color='secondary'
          className='mt-1'>
          Choose a unique username
        </Text>
      </div>
      <div>
        <Label htmlFor='email-help'>Email</Label>
        <Input
          id='email-help'
          type='email'
          error
          placeholder='john@example.com'
        />
        <Text
          variant='caption'
          color='inherit'
          className='mt-1 text-red-600'>
          Please enter a valid email address
        </Text>
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className='max-w-md space-y-6 rounded-lg border p-6'>
      <div>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Contact Form
        </Text>
      </div>

      <div>
        <Label
          htmlFor='name'
          required>
          Full Name
        </Label>
        <Input
          id='name'
          type='text'
          placeholder='John Doe'
          required
        />
      </div>

      <div>
        <Label
          htmlFor='email-form'
          required>
          Email Address
        </Label>
        <Input
          id='email-form'
          type='email'
          placeholder='john@example.com'
          required
        />
        <Text
          variant='caption'
          color='secondary'
          className='mt-1'>
          We'll never share your email with anyone else
        </Text>
      </div>

      <div>
        <Label htmlFor='phone'>Phone Number</Label>
        <Input
          id='phone'
          type='tel'
          placeholder='+1 (555) 000-0000'
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
          rows={4}
          placeholder='Your message...'
          required
        />
      </div>

      <Button
        type='submit'
        variant='primary'
        className='w-full'>
        Submit
      </Button>
    </form>
  ),
}
