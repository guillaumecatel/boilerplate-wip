import {
  Button,
  Checkbox,
  Form,
  FormField,
  Input,
  InputField,
  Label,
  Select,
  Text,
  Textarea,
} from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const RegistrationForm = () => {
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

        <Form
          initialValues={{
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
          }}
          validationSchema={{
            firstName: { required: 'First name is required' },
            lastName: { required: 'Last name is required' },
            email: {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            },
            password: {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            },
            confirmPassword: {
              required: 'Please confirm your password',
            },
            country: { required: 'Please select a country' },
            terms: { required: 'You must accept the terms and conditions' },
          }}
          onSubmit={async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            alert('Account created successfully!')
          }}
          spacing='none'
          className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-950 flex flex-col gap-8 rounded-xl border p-8 shadow-lg'>
          {({
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            setFieldError,
            isSubmitting,
          }) => {
            // Custom validation for confirmPassword
            const handleConfirmPasswordChange = (value: string) => {
              setFieldValue('confirmPassword', value)
              if (value && value !== values.password) {
                setFieldError('confirmPassword', 'Passwords do not match')
              } else {
                setFieldError('confirmPassword', '')
              }
            }

            return (
              <>
                <FormField
                  legend='Personal information'
                  description='Tell us a bit about yourself'
                  required>
                  <div className='grid gap-5 md:grid-cols-2'>
                    <InputField
                      label='First name'
                      htmlFor='reg-firstname'
                      error={touched.firstName ? errors.firstName : undefined}
                      required>
                      <Input
                        type='text'
                        id='reg-firstname'
                        value={(values.firstName as string) || ''}
                        onChange={(e) =>
                          setFieldValue('firstName', e.target.value)
                        }
                        onBlur={() => setFieldTouched('firstName', true)}
                        placeholder='John'
                        error={!!(touched.firstName && errors.firstName)}
                        disabled={isSubmitting}
                      />
                    </InputField>

                    <InputField
                      label='Last name'
                      htmlFor='reg-lastname'
                      error={touched.lastName ? errors.lastName : undefined}
                      required>
                      <Input
                        type='text'
                        id='reg-lastname'
                        value={(values.lastName as string) || ''}
                        onChange={(e) =>
                          setFieldValue('lastName', e.target.value)
                        }
                        onBlur={() => setFieldTouched('lastName', true)}
                        placeholder='Doe'
                        error={!!(touched.lastName && errors.lastName)}
                        disabled={isSubmitting}
                      />
                    </InputField>
                  </div>

                  <InputField
                    label='Country'
                    htmlFor='reg-country'
                    error={touched.country ? errors.country : undefined}
                    required>
                    <Select.Root
                      value={(values.country as string) || ''}
                      onValueChange={(value: string) =>
                        setFieldValue('country', value)
                      }
                      disabled={isSubmitting}>
                      <Select.Trigger
                        error={!!(touched.country && errors.country)}
                        id='reg-country'
                        onBlur={() => setFieldTouched('country', true)}>
                        <Select.Value placeholder='Select a country' />
                      </Select.Trigger>
                      <Select.Content
                        onCloseAutoFocus={() =>
                          setFieldTouched('country', true)
                        }>
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
                      value={(values.bio as string) || ''}
                      onChange={(e) => setFieldValue('bio', e.target.value)}
                      placeholder='I am a...'
                      rows={4}
                      disabled={isSubmitting}
                    />
                  </InputField>
                </FormField>

                <FormField
                  legend='Account security'
                  description='Choose a strong password to protect your account'
                  error={
                    (touched.password && errors.password) ||
                    (touched.confirmPassword && errors.confirmPassword)
                      ? errors.password || errors.confirmPassword
                      : undefined
                  }
                  required>
                  <InputField
                    label='Email address'
                    htmlFor='reg-email'
                    error={touched.email ? errors.email : undefined}
                    required>
                    <Input
                      type='email'
                      id='reg-email'
                      value={(values.email as string) || ''}
                      onChange={(e) => setFieldValue('email', e.target.value)}
                      onBlur={() => setFieldTouched('email', true)}
                      placeholder='you@example.com'
                      error={!!(touched.email && errors.email)}
                      disabled={isSubmitting}
                    />
                  </InputField>

                  <InputField
                    label='Password'
                    htmlFor='reg-password'
                    description='Must be at least 8 characters'
                    error={touched.password ? errors.password : undefined}
                    required>
                    <Input
                      type='password'
                      id='reg-password'
                      value={(values.password as string) || ''}
                      onChange={(e) =>
                        setFieldValue('password', e.target.value)
                      }
                      onBlur={() => setFieldTouched('password', true)}
                      placeholder='••••••••'
                      error={!!(touched.password && errors.password)}
                      disabled={isSubmitting}
                    />
                  </InputField>

                  <InputField
                    label='Confirm password'
                    htmlFor='reg-confirm-password'
                    error={
                      touched.confirmPassword
                        ? errors.confirmPassword
                        : undefined
                    }
                    required>
                    <Input
                      type='password'
                      id='reg-confirm-password'
                      value={(values.confirmPassword as string) || ''}
                      onChange={(e) =>
                        handleConfirmPasswordChange(e.target.value)
                      }
                      onBlur={() => setFieldTouched('confirmPassword', true)}
                      placeholder='••••••••'
                      error={
                        !!(touched.confirmPassword && errors.confirmPassword)
                      }
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
                        checked={values.newsletter as boolean}
                        onChange={(e) =>
                          setFieldValue('newsletter', e.target.checked)
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
                        checked={values.marketing as boolean}
                        onChange={(e) =>
                          setFieldValue('marketing', e.target.checked)
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
                  error={touched.terms ? errors.terms : undefined}
                  required>
                  <div className='flex items-start gap-2'>
                    <Checkbox
                      id='reg-terms'
                      checked={values.terms as boolean}
                      onChange={(e) => setFieldValue('terms', e.target.checked)}
                      disabled={isSubmitting}
                    />
                    <Label
                      htmlFor='reg-terms'
                      className='leading-relaxed'>
                      I agree to the terms and conditions and privacy policy. I
                      understand that my data will be processed according to
                      these policies.
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
              </>
            )
          }}
        </Form>
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
          'A complete registration form with multiple sections using Form controller and FormField for semantic grouping. Includes personal information, account security, preferences, and terms acceptance with comprehensive validation.',
      },
    },
  },
} satisfies Meta<typeof RegistrationForm>

export default meta

type Story = StoryObj<typeof RegistrationForm>

export const Default: Story = {}
