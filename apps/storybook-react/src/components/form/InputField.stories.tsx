import type { Meta, StoryObj } from '@storybook/react-vite'
import { type FormEvent, useState } from 'react'

import { Button, Checkbox, Input, InputField, Textarea } from '@myorg/ui'

const meta = {
  title: 'Components/Form/InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'InputField is a wrapper component that combines a label, input element, description, and error message. It provides a consistent layout and styling for form fields, with support for required fields, disabled states, and error validation.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the input field',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    htmlFor: {
      control: 'text',
      description:
        'The ID of the input element. Must match the id prop of the child input component for accessibility.',
      table: {
        type: { summary: 'string' },
        category: 'Accessibility',
      },
    },
    children: {
      control: false,
      description:
        'The input element to render (Input, Checkbox, Textarea, etc.). This should be a form control component.',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    description: {
      control: 'text',
      description:
        'Optional description or helper text displayed below the label to provide additional context.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Content',
      },
    },
    error: {
      control: 'text',
      description:
        'Error message to display when validation fails. When provided, automatically changes the variant to destructive.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Validation',
      },
    },
    required: {
      control: 'boolean',
      description:
        'Whether the field is required. Displays an asterisk (*) after the label.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validation',
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Whether the field is disabled. Applies disabled styling to the label.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Size of the label text. Should typically match the size of the input component.',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
        category: 'Appearance',
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'muted', 'accent', 'destructive'],
      description:
        'Visual style of the label. Automatically set to destructive when error is provided.',
      table: {
        type: { summary: "'default' | 'muted' | 'accent' | 'destructive'" },
        defaultValue: { summary: "'default'" },
        category: 'Appearance',
      },
    },
  },
} satisfies Meta<typeof InputField>

export default meta

type Story = StoryObj<typeof InputField>

export const Playground: Story = {
  args: {
    label: 'Email address',
    htmlFor: 'email',
    description: 'We will never share your email',
    required: true,
  },
  render: (args) => (
    <InputField {...args}>
      <Input
        type='email'
        id='email'
        placeholder='john@example.com'
      />
    </InputField>
  ),
}

export const WithTextInput: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'InputField works seamlessly with the Input component. The htmlFor prop connects the label to the input for accessibility.',
      },
    },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <InputField
        label='Username'
        htmlFor='username'
        description='Choose a unique username'
        required>
        <Input
          type='text'
          id='username'
          placeholder='johndoe'
        />
      </InputField>

      <InputField
        label='Full name'
        htmlFor='fullname'
        variant='accent'>
        <Input
          type='text'
          id='fullname'
          placeholder='John Doe'
        />
      </InputField>
    </div>
  ),
}

export const WithTextarea: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'InputField supports multi-line text inputs using the Textarea component.',
      },
    },
  },
  render: () => (
    <InputField
      label='Biography'
      htmlFor='bio'
      description='Tell us about yourself'
      variant='muted'>
      <Textarea
        id='bio'
        rows={4}
        placeholder='I am a...'
      />
    </InputField>
  ),
}

export const WithCheckbox: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'InputField can wrap checkbox inputs, providing a consistent layout with label and description.',
      },
    },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <InputField
        label='Notifications'
        htmlFor='notifications'
        description='Configure your notification preferences'
        required>
        <Checkbox id='notifications' />
      </InputField>

      <InputField
        label='Marketing'
        htmlFor='marketing'
        description='Receive promotional emails'>
        <Checkbox id='marketing' />
      </InputField>
    </div>
  ),
}

export const WithError: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'When an error message is provided, InputField automatically displays it in red below the input and changes the label variant to destructive. Make sure to also set error state on the input component and add aria-invalid for accessibility.',
      },
    },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <InputField
        label='Email address'
        htmlFor='email-error'
        error='Please enter a valid email address'
        required>
        <Input
          type='email'
          id='email-error'
          error
          placeholder='john@example.com'
          aria-invalid='true'
        />
      </InputField>

      <InputField
        label='Password'
        htmlFor='password-error'
        error='Password must be at least 8 characters'
        required>
        <Input
          type='password'
          id='password-error'
          error
          placeholder='••••••••'
          aria-invalid='true'
        />
      </InputField>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'Disabled state applies muted styling to the label. Remember to also set the disabled prop on the input component.',
      },
    },
  },
  render: () => (
    <InputField
      label='Premium feature'
      htmlFor='premium'
      description='Available in premium plan only'
      disabled>
      <Input
        type='text'
        id='premium'
        disabled
        placeholder='Unavailable'
      />
    </InputField>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'InputField supports three sizes (sm, md, lg) that control the label text size. Match the size prop with your input component for a cohesive appearance.',
      },
    },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <InputField
        label='Small field'
        htmlFor='small'
        size='sm'>
        <Input
          type='text'
          id='small'
          size='sm'
        />
      </InputField>

      <InputField
        label='Medium field'
        htmlFor='medium'
        size='md'>
        <Input
          type='text'
          id='medium'
          size='md'
        />
      </InputField>

      <InputField
        label='Large field'
        htmlFor='large'
        size='lg'>
        <Input
          type='text'
          id='large'
          size='lg'
        />
      </InputField>
    </div>
  ),
}

export const CompleteForm: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'A complete registration form demonstrating InputField with validation, error handling, and different input types. This example shows how to manage form state and display validation errors.',
      },
    },
  },
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      name: '',
      bio: '',
      terms: false,
      newsletter: false,
    })
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      const newErrors: Record<string, string> = {}

      if (!formData.email || !formData.email.includes('@')) {
        newErrors.email = 'Please enter a valid email address'
      }
      if (!formData.password || formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters'
      }
      if (!formData.name) {
        newErrors.name = 'Name is required'
      }
      if (!formData.terms) {
        newErrors.terms = 'You must accept the terms and conditions'
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!')
      }
    }

    return (
      <form
        onSubmit={handleSubmit}
        className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-900 flex flex-col gap-6 rounded-lg border p-6'>
        <h3 className='text-base-900 dark:text-base-100 text-lg font-semibold'>
          Create your account
        </h3>

        <InputField
          label='Full name'
          htmlFor='name'
          required
          error={errors.name}>
          <Input
            type='text'
            id='name'
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            error={!!errors.name}
            placeholder='John Doe'
            aria-invalid={!!errors.name}
          />
        </InputField>

        <InputField
          label='Email address'
          htmlFor='email'
          description='We will send you a verification email'
          required
          error={errors.email}>
          <Input
            type='email'
            id='email'
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            error={!!errors.email}
            placeholder='john@example.com'
            aria-invalid={!!errors.email}
          />
        </InputField>

        <InputField
          label='Password'
          htmlFor='password'
          description='Must be at least 8 characters'
          required
          error={errors.password}>
          <Input
            type='password'
            id='password'
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            error={!!errors.password}
            placeholder='••••••••'
            aria-invalid={!!errors.password}
          />
        </InputField>

        <InputField
          label='Biography'
          htmlFor='bio'
          description='Tell us a bit about yourself'
          variant='muted'>
          <Textarea
            id='bio'
            rows={4}
            value={formData.bio}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, bio: e.target.value }))
            }
            placeholder='I am a...'
          />
        </InputField>

        <InputField
          label='Terms and conditions'
          htmlFor='terms'
          required
          error={errors.terms}
          variant='destructive'>
          <Checkbox
            id='terms'
            checked={formData.terms}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, terms: e.target.checked }))
            }
          />
        </InputField>

        <InputField
          label='Newsletter'
          htmlFor='newsletter'
          description='Receive updates about new features'>
          <Checkbox
            id='newsletter'
            checked={formData.newsletter}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, newsletter: e.target.checked }))
            }
          />
        </InputField>

        <Button
          type='submit'
          variant='primary'
          className='mt-2 w-full'>
          Create account
        </Button>
      </form>
    )
  },
}
