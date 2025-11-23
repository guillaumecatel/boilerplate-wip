import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type FormEvent } from 'react'

import { InputOneTimePassword } from '@myorg/ui'

const meta = {
  title: 'Components/Form/InputOneTimePassword',
  component: InputOneTimePassword.Root,
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the OTP inputs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all inputs',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autoSubmit: {
      control: 'boolean',
      description: 'Auto-submit form when all inputs are filled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof InputOneTimePassword.Root>

export default meta

type Story = StoryObj<typeof InputOneTimePassword.Root>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div className='space-y-4'>
        <InputOneTimePassword.Root
          {...args}
          onValueChange={setValue}>
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.HiddenInput />
        </InputOneTimePassword.Root>
        <p className='text-base-600 dark:text-base-400 text-sm'>
          Value: {value || '(empty)'}
        </p>
      </div>
    )
  },
}

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className='space-y-4'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Enter verification code
          </label>
          <InputOneTimePassword.Root
            value={value}
            onValueChange={setValue}>
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.HiddenInput />
          </InputOneTimePassword.Root>
        </div>
        <p className='text-base-600 dark:text-base-400 text-sm'>
          Current value: {value || '(empty)'} (length: {value.length})
        </p>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [valueSm, setValueSm] = useState('')
    const [valueMd, setValueMd] = useState('')
    const [valueLg, setValueLg] = useState('')

    return (
      <div className='space-y-8'>
        <div>
          <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
            Small
          </h3>
          <InputOneTimePassword.Root
            inputSize='sm'
            value={valueSm}
            onValueChange={setValueSm}>
            <InputOneTimePassword.Input inputSize='sm' />
            <InputOneTimePassword.Input inputSize='sm' />
            <InputOneTimePassword.Input inputSize='sm' />
            <InputOneTimePassword.Input inputSize='sm' />
            <InputOneTimePassword.HiddenInput />
          </InputOneTimePassword.Root>
        </div>

        <div>
          <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
            Medium (Default)
          </h3>
          <InputOneTimePassword.Root
            inputSize='md'
            value={valueMd}
            onValueChange={setValueMd}>
            <InputOneTimePassword.Input inputSize='md' />
            <InputOneTimePassword.Input inputSize='md' />
            <InputOneTimePassword.Input inputSize='md' />
            <InputOneTimePassword.Input inputSize='md' />
            <InputOneTimePassword.HiddenInput />
          </InputOneTimePassword.Root>
        </div>

        <div>
          <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
            Large
          </h3>
          <InputOneTimePassword.Root
            inputSize='lg'
            value={valueLg}
            onValueChange={setValueLg}>
            <InputOneTimePassword.Input inputSize='lg' />
            <InputOneTimePassword.Input inputSize='lg' />
            <InputOneTimePassword.Input inputSize='lg' />
            <InputOneTimePassword.Input inputSize='lg' />
            <InputOneTimePassword.HiddenInput />
          </InputOneTimePassword.Root>
        </div>
      </div>
    )
  },
}

export const WithSeparators: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className='space-y-4'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Enter code (with separators)
          </label>
          <InputOneTimePassword.Root
            value={value}
            onValueChange={setValue}>
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Separator />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.HiddenInput />
          </InputOneTimePassword.Root>
        </div>
        <p className='text-base-600 dark:text-base-400 text-sm'>
          Current value: {value || '(empty)'}
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
          Verification code (Disabled)
        </label>
        <InputOneTimePassword.Root
          value='123456'
          disabled>
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.Input />
          <InputOneTimePassword.HiddenInput />
        </InputOneTimePassword.Root>
      </div>
    )
  },
}

export const InForm: Story = {
  render: () => {
    const [otp, setOtp] = useState('')
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
            Verify Your Account
          </h3>
          <p className='text-base-600 dark:text-base-400 mt-2 text-sm'>
            We've sent a verification code to your email
          </p>
        </div>

        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Enter 6-digit code
          </label>
          <InputOneTimePassword.Root
            name='otp'
            value={otp}
            onValueChange={setOtp}>
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Separator />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.HiddenInput />
          </InputOneTimePassword.Root>
        </div>

        <button
          type='submit'
          disabled={otp.length !== 6}
          className='bg-accent-600 hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600 w-full rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50'>
          {submitted ? 'Verified! ✓' : 'Verify Code'}
        </button>

        <div className='text-center'>
          <button
            type='button'
            className='text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 text-sm'>
            Resend code
          </button>
        </div>
      </form>
    )
  },
}

export const All: Story = {
  render: () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')

    return (
      <div className='space-y-12'>
        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            Sizes
          </h2>
          <div className='space-y-6'>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Small
              </p>
              <InputOneTimePassword.Root
                inputSize='sm'
                value={value1}
                onValueChange={setValue1}>
                <InputOneTimePassword.Input inputSize='sm' />
                <InputOneTimePassword.Input inputSize='sm' />
                <InputOneTimePassword.Input inputSize='sm' />
                <InputOneTimePassword.Input inputSize='sm' />
                <InputOneTimePassword.HiddenInput />
              </InputOneTimePassword.Root>
            </div>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Medium
              </p>
              <InputOneTimePassword.Root
                value={value2}
                onValueChange={setValue2}>
                <InputOneTimePassword.Input />
                <InputOneTimePassword.Input />
                <InputOneTimePassword.Input />
                <InputOneTimePassword.Input />
                <InputOneTimePassword.HiddenInput />
              </InputOneTimePassword.Root>
            </div>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Large
              </p>
              <InputOneTimePassword.Root
                inputSize='lg'
                value={value3}
                onValueChange={setValue3}>
                <InputOneTimePassword.Input inputSize='lg' />
                <InputOneTimePassword.Input inputSize='lg' />
                <InputOneTimePassword.Input inputSize='lg' />
                <InputOneTimePassword.Input inputSize='lg' />
                <InputOneTimePassword.HiddenInput />
              </InputOneTimePassword.Root>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            With Separators
          </h2>
          <InputOneTimePassword.Root>
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Separator />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.Input />
            <InputOneTimePassword.HiddenInput />
          </InputOneTimePassword.Root>
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
              <InputOneTimePassword.Root
                value='123456'
                disabled>
                <InputOneTimePassword.Input />
                <InputOneTimePassword.Input />
                <InputOneTimePassword.Input />
                <InputOneTimePassword.Input />
                <InputOneTimePassword.Input />
                <InputOneTimePassword.Input />
                <InputOneTimePassword.HiddenInput />
              </InputOneTimePassword.Root>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
