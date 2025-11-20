import {
  Button,
  Checkbox,
  FormField,
  Input,
  InputField,
  Label,
  Select,
  Text,
  Textarea,
} from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { type FormEvent, useState } from 'react'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    bio: '',
    newsletter: false,
    marketing: false,
    terms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors({})

    const newErrors: Record<string, string> = {}

    if (!formData.firstName) newErrors.firstName = 'First name is required'
    if (!formData.lastName) newErrors.lastName = 'Last name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!formData.email.includes('@'))
      newErrors.email = 'Invalid email address'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 8)
      newErrors.password = 'Password must be at least 8 characters'
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match'
    if (!formData.country) newErrors.country = 'Please select a country'
    if (!formData.terms)
      newErrors.terms = 'You must accept the terms and conditions'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert('Account created successfully!')
  }

  return (
    <div className='bg-base-100 dark:bg-base-900 min-h-screen py-12'>
      <div className='mx-auto max-w-2xl'>
        <div className='mb-8 text-center'>
          <Text
            as='h1'
            variant='display-small'
            weight='bold'
            className='mb-2'>
            Create your account
          </Text>
          <Text
            as='p'
            variant='body-large'
            color='secondary'>
            Join thousands of users already using our platform
          </Text>
        </div>

        <form
          onSubmit={handleSubmit}
          className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-950 flex flex-col gap-8 rounded-xl border p-8 shadow-lg'>
          <FormField
            legend='Personal information'
            description='Tell us a bit about yourself'
            required>
            <div className='grid gap-5 md:grid-cols-2'>
              <InputField
                label='First name'
                htmlFor='reg-firstname'
                error={errors.firstName}
                required>
                <Input
                  type='text'
                  id='reg-firstname'
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder='John'
                  error={!!errors.firstName}
                  disabled={isSubmitting}
                />
              </InputField>

              <InputField
                label='Last name'
                htmlFor='reg-lastname'
                error={errors.lastName}
                required>
                <Input
                  type='text'
                  id='reg-lastname'
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder='Doe'
                  error={!!errors.lastName}
                  disabled={isSubmitting}
                />
              </InputField>
            </div>

            <InputField
              label='Country'
              htmlFor='reg-country'
              error={errors.country}
              required>
              <Select.Root
                value={formData.country}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, country: value })
                }
                disabled={isSubmitting}>
                <Select.Trigger
                  error={!!errors.country}
                  id='reg-country'>
                  <Select.Value placeholder='Select a country' />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value='us'>United States</Select.Item>
                  <Select.Item value='ca'>Canada</Select.Item>
                  <Select.Item value='uk'>United Kingdom</Select.Item>
                  <Select.Item value='fr'>France</Select.Item>
                  <Select.Item value='de'>Germany</Select.Item>
                  <Select.Item value='jp'>Japan</Select.Item>
                </Select.Content>
              </Select.Root>
            </InputField>

            <InputField
              label='Bio'
              htmlFor='reg-bio'
              description='Tell us a bit about yourself (optional)'>
              <Textarea
                id='reg-bio'
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                placeholder='I am a...'
                rows={4}
                disabled={isSubmitting}
              />
            </InputField>
          </FormField>

          <FormField
            legend='Account security'
            description='Choose a strong password to protect your account'
            error={errors.password || errors.confirmPassword}
            required>
            <InputField
              label='Email address'
              htmlFor='reg-email'
              error={errors.email}
              required>
              <Input
                type='email'
                id='reg-email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder='you@example.com'
                error={!!errors.email}
                disabled={isSubmitting}
              />
            </InputField>

            <InputField
              label='Password'
              htmlFor='reg-password'
              description='Must be at least 8 characters'
              error={errors.password}
              required>
              <Input
                type='password'
                id='reg-password'
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder='••••••••'
                error={!!errors.password}
                disabled={isSubmitting}
              />
            </InputField>

            <InputField
              label='Confirm password'
              htmlFor='reg-confirm-password'
              error={errors.confirmPassword}
              required>
              <Input
                type='password'
                id='reg-confirm-password'
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder='••••••••'
                error={!!errors.confirmPassword}
                disabled={isSubmitting}
              />
            </InputField>
          </FormField>

          <FormField
            legend='Preferences'
            description='Customize your experience'
            variant='muted'>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <Checkbox
                  id='reg-newsletter'
                  checked={formData.newsletter}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      newsletter: e.target.checked,
                    })
                  }
                  disabled={isSubmitting}
                />
                <Label htmlFor='reg-newsletter'>
                  Subscribe to our newsletter for updates and tips
                </Label>
              </div>

              <div className='flex items-center gap-2'>
                <Checkbox
                  id='reg-marketing'
                  checked={formData.marketing}
                  onChange={(e) =>
                    setFormData({ ...formData, marketing: e.target.checked })
                  }
                  disabled={isSubmitting}
                />
                <Label htmlFor='reg-marketing'>
                  Receive promotional emails and special offers
                </Label>
              </div>
            </div>
          </FormField>

          <FormField
            legend='Terms and conditions'
            error={errors.terms}
            required>
            <div className='flex items-start gap-2'>
              <Checkbox
                id='reg-terms'
                checked={formData.terms}
                onChange={(e) =>
                  setFormData({ ...formData, terms: e.target.checked })
                }
                disabled={isSubmitting}
              />
              <Label
                htmlFor='reg-terms'
                className='leading-relaxed'>
                I agree to the terms and conditions and privacy policy. I
                understand that my data will be processed according to these
                policies.
              </Label>
            </div>
          </FormField>

          <div className='flex gap-4'>
            <Button
              type='button'
              variant='secondary'
              size='lg'
              className='flex-1'
              disabled={isSubmitting}>
              Cancel
            </Button>
            <Button
              type='submit'
              variant='primary'
              size='lg'
              className='flex-1'
              disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

const meta = {
  title: 'Recipes/Forms/Registration Form',
  component: RegistrationForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete registration form with multiple sections using FormField for semantic grouping. Includes personal information, account security, preferences, and terms acceptance with full validation.',
      },
    },
  },
} satisfies Meta<typeof RegistrationForm>

export default meta

type Story = StoryObj<typeof RegistrationForm>

export const Default: Story = {}
