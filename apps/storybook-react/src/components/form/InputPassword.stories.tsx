import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type FormEvent } from 'react'

import { InputPassword } from '@myorg/ui'

const meta = {
  title: 'Components/Form/InputPassword',
  component: InputPassword.Root,
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the password input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof InputPassword.Root>

export default meta

type Story = StoryObj<typeof InputPassword.Root>

export const Playground: Story = {
  render: (args) => {
    return (
      <InputPassword.Root {...args}>
        <InputPassword.Input placeholder='Enter your password' />
        <InputPassword.Toggle />
      </InputPassword.Root>
    )
  },
}

export const Default: Story = {
  render: () => {
    return (
      <div className='space-y-4'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Password
          </label>
          <InputPassword.Root>
            <InputPassword.Input placeholder='Enter your password' />
            <InputPassword.Toggle />
          </InputPassword.Root>
        </div>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    return (
      <div className='space-y-8'>
        <div>
          <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
            Small
          </h3>
          <InputPassword.Root inputSize='sm'>
            <InputPassword.Input
              inputSize='sm'
              placeholder='Enter password'
            />
            <InputPassword.Toggle inputSize='sm' />
          </InputPassword.Root>
        </div>

        <div>
          <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
            Medium (Default)
          </h3>
          <InputPassword.Root inputSize='md'>
            <InputPassword.Input
              inputSize='md'
              placeholder='Enter password'
            />
            <InputPassword.Toggle inputSize='md' />
          </InputPassword.Root>
        </div>

        <div>
          <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
            Large
          </h3>
          <InputPassword.Root inputSize='lg'>
            <InputPassword.Input
              inputSize='lg'
              placeholder='Enter password'
            />
            <InputPassword.Toggle inputSize='lg' />
          </InputPassword.Root>
        </div>
      </div>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)
    return (
      <div className='space-y-4'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Password (Controlled visibility)
          </label>
          <InputPassword.Root
            visible={visible}
            onVisiblityChange={setVisible}>
            <InputPassword.Input placeholder='Enter your password' />
            <InputPassword.Toggle />
          </InputPassword.Root>
        </div>
        <p className='text-base-600 dark:text-base-400 text-sm'>
          Password is currently: {visible ? 'visible' : 'hidden'}
        </p>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <div>
        <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
          Password (Disabled)
        </label>
        <InputPassword.Root>
          <InputPassword.Input
            placeholder='Enter your password'
            disabled
          />
          <InputPassword.Toggle disabled />
        </InputPassword.Root>
      </div>
    )
  },
}

export const InForm: Story = {
  render: () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 2000)
    }

    return (
      <form
        onSubmit={handleSubmit}
        className='border-base-300 bg-base-0 dark:border-base-700 dark:bg-base-950 mx-auto max-w-md space-y-6 rounded-lg border p-6'>
        <div>
          <h3 className='text-base-900 dark:text-base-100 text-xl font-bold'>
            Sign In
          </h3>
          <p className='text-base-600 dark:text-base-400 mt-2 text-sm'>
            Enter your credentials to access your account
          </p>
        </div>

        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Email
          </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='you@example.com'
            className='border-base-300 bg-base-0 text-base-900 placeholder:text-base-500 focus:ring-accent-500 dark:border-base-700 dark:bg-base-950 dark:text-base-100 dark:placeholder:text-base-500 w-full rounded-lg border px-4 py-2 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none'
            required
          />
        </div>

        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Password
          </label>
          <InputPassword.Root>
            <InputPassword.Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              required
            />
            <InputPassword.Toggle />
          </InputPassword.Root>
        </div>

        <div className='flex items-center justify-between'>
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              className='border-base-300 text-accent-600 focus:ring-accent-500 h-4 w-4 rounded focus:ring-2 focus:ring-offset-2'
            />
            <span className='text-base-600 dark:text-base-400 text-sm'>
              Remember me
            </span>
          </label>
          <button
            type='button'
            className='text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 text-sm'>
            Forgot password?
          </button>
        </div>

        <button
          type='submit'
          className='bg-accent-600 hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600 w-full rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors'>
          {submitted ? 'Signed In! ✓' : 'Sign In'}
        </button>
      </form>
    )
  },
}

export const All: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)

    return (
      <div className='space-y-12'>
        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            Sizes
          </h2>
          <div className='space-y-4'>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Small
              </p>
              <InputPassword.Root inputSize='sm'>
                <InputPassword.Input
                  inputSize='sm'
                  placeholder='Password'
                />
                <InputPassword.Toggle inputSize='sm' />
              </InputPassword.Root>
            </div>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Medium
              </p>
              <InputPassword.Root inputSize='md'>
                <InputPassword.Input
                  inputSize='md'
                  placeholder='Password'
                />
                <InputPassword.Toggle inputSize='md' />
              </InputPassword.Root>
            </div>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Large
              </p>
              <InputPassword.Root inputSize='lg'>
                <InputPassword.Input
                  inputSize='lg'
                  placeholder='Password'
                />
                <InputPassword.Toggle inputSize='lg' />
              </InputPassword.Root>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            Controlled Visibility
          </h2>
          <div className='space-y-4'>
            <InputPassword.Root
              visible={visible}
              onVisiblityChange={setVisible}>
              <InputPassword.Input placeholder='Enter your password' />
              <InputPassword.Toggle />
            </InputPassword.Root>
            <p className='text-base-600 dark:text-base-400 text-sm'>
              Currently: {visible ? 'visible' : 'hidden'}
            </p>
          </div>
        </div>

        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            States
          </h2>
          <div className='space-y-4'>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Disabled
              </p>
              <InputPassword.Root>
                <InputPassword.Input
                  placeholder='Password'
                  disabled
                />
                <InputPassword.Toggle disabled />
              </InputPassword.Root>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
