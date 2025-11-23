import {
  Button,
  Form,
  FormField,
  Input,
  InputField,
  InputUpload,
  Select,
  Text,
  Textarea,
} from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const ProfileForm = () => {
  return (
    <div className='bg-base-100 dark:bg-base-900 min-h-screen py-12'>
      <div className='mx-auto max-w-3xl'>
        <div className='mb-8'>
          <Text
            as='h1'
            variant='display-small'
            weight='bold'
            className='mb-2'>
            Edit Profile
          </Text>
          <Text
            as='p'
            variant='body-large'
            color='secondary'>
            Update your profile information and public presence
          </Text>
        </div>

        <Form
          initialValues={{
            avatar: null,
            username: 'johndoe',
            displayName: 'John Doe',
            email: 'john.doe@example.com',
            bio: '',
            website: '',
            location: '',
            timezone: '',
            language: 'en',
            publicEmail: false,
          }}
          validationSchema={{
            username: {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters',
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message:
                  'Username can only contain letters, numbers, and underscores',
              },
            },
            displayName: {
              required: 'Display name is required',
            },
            email: {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            },
            website: {
              pattern: {
                value: /^https?:\/\/.+/,
                message:
                  'Website must be a valid URL starting with http:// or https://',
              },
            },
          }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            alert('Profile updated successfully!')
            console.log('Form values:', values)
          }}
          spacing='none'
          className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-950 flex flex-col gap-8 rounded-xl border p-8 shadow-lg'>
          {({
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
          }) => (
            <>
              <FormField
                legend='Profile Picture'
                description='Upload a profile picture. Recommended size: 400x400px'>
                <InputUpload
                  id='avatar-upload'
                  name='avatar'
                  accept='image/*'
                  onChange={(file) => setFieldValue('avatar', file)}
                  maxSize={5 * 1024 * 1024}
                  disabled={isSubmitting}
                />
                <Text
                  variant='body-small'
                  color='secondary'
                  className='mt-1'>
                  PNG, JPG or GIF (Max. 5MB)
                </Text>
              </FormField>

              <FormField
                legend='Basic Information'
                description='Your public identity on the platform'
                required>
                <div className='grid gap-5 md:grid-cols-2'>
                  <InputField
                    label='Username'
                    htmlFor='profile-username'
                    description='This is your unique identifier'
                    error={touched.username ? errors.username : undefined}
                    required>
                    <Input
                      type='text'
                      id='profile-username'
                      value={(values.username as string) || ''}
                      onChange={(e) =>
                        setFieldValue('username', e.target.value)
                      }
                      onBlur={() => setFieldTouched('username', true)}
                      placeholder='johndoe'
                      error={!!(touched.username && errors.username)}
                      disabled={isSubmitting}
                    />
                  </InputField>

                  <InputField
                    label='Display Name'
                    htmlFor='profile-displayname'
                    description='This is how others will see you'
                    error={touched.displayName ? errors.displayName : undefined}
                    required>
                    <Input
                      type='text'
                      id='profile-displayname'
                      value={(values.displayName as string) || ''}
                      onChange={(e) =>
                        setFieldValue('displayName', e.target.value)
                      }
                      onBlur={() => setFieldTouched('displayName', true)}
                      placeholder='John Doe'
                      error={!!(touched.displayName && errors.displayName)}
                      disabled={isSubmitting}
                    />
                  </InputField>
                </div>

                <InputField
                  label='Email Address'
                  htmlFor='profile-email'
                  error={touched.email ? errors.email : undefined}
                  required>
                  <Input
                    type='email'
                    id='profile-email'
                    value={(values.email as string) || ''}
                    onChange={(e) => setFieldValue('email', e.target.value)}
                    onBlur={() => setFieldTouched('email', true)}
                    placeholder='john.doe@example.com'
                    error={!!(touched.email && errors.email)}
                    disabled={isSubmitting}
                  />
                </InputField>

                <InputField
                  label='Bio'
                  htmlFor='profile-bio'
                  description='Tell others about yourself'>
                  <Textarea
                    id='profile-bio'
                    value={(values.bio as string) || ''}
                    onChange={(e) => setFieldValue('bio', e.target.value)}
                    placeholder='Software developer, coffee enthusiast, and avid reader...'
                    rows={4}
                    disabled={isSubmitting}
                  />
                </InputField>
              </FormField>

              <FormField
                legend='Contact & Location'
                description='Help others know where to find you'
                variant='muted'>
                <div className='grid gap-5 md:grid-cols-2'>
                  <InputField
                    label='Website'
                    htmlFor='profile-website'
                    error={touched.website ? errors.website : undefined}>
                    <Input
                      type='url'
                      id='profile-website'
                      value={(values.website as string) || ''}
                      onChange={(e) => setFieldValue('website', e.target.value)}
                      onBlur={() => setFieldTouched('website', true)}
                      placeholder='https://example.com'
                      error={!!(touched.website && errors.website)}
                      disabled={isSubmitting}
                    />
                  </InputField>

                  <InputField
                    label='Location'
                    htmlFor='profile-location'>
                    <Input
                      type='text'
                      id='profile-location'
                      value={(values.location as string) || ''}
                      onChange={(e) =>
                        setFieldValue('location', e.target.value)
                      }
                      placeholder='San Francisco, CA'
                      disabled={isSubmitting}
                    />
                  </InputField>
                </div>
              </FormField>

              <FormField
                legend='Preferences'
                description='Customize your experience'
                variant='muted'>
                <div className='grid gap-5 md:grid-cols-2'>
                  <InputField
                    label='Timezone'
                    htmlFor='profile-timezone'>
                    <Select.Root
                      value={(values.timezone as string) || ''}
                      onValueChange={(value: string) =>
                        setFieldValue('timezone', value)
                      }
                      disabled={isSubmitting}>
                      <Select.Trigger id='profile-timezone'>
                        <Select.Value placeholder='Select your timezone' />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Item value='America/New_York'>
                          Eastern Time (ET)
                        </Select.Item>
                        <Select.Item value='America/Chicago'>
                          Central Time (CT)
                        </Select.Item>
                        <Select.Item value='America/Denver'>
                          Mountain Time (MT)
                        </Select.Item>
                        <Select.Item value='America/Los_Angeles'>
                          Pacific Time (PT)
                        </Select.Item>
                        <Select.Item value='Europe/London'>
                          GMT (London)
                        </Select.Item>
                        <Select.Item value='Europe/Paris'>
                          CET (Paris)
                        </Select.Item>
                        <Select.Item value='Asia/Tokyo'>
                          JST (Tokyo)
                        </Select.Item>
                        <Select.Item value='Australia/Sydney'>
                          AEST (Sydney)
                        </Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </InputField>

                  <InputField
                    label='Language'
                    htmlFor='profile-language'>
                    <Select.Root
                      value={(values.language as string) || 'en'}
                      onValueChange={(value: string) =>
                        setFieldValue('language', value)
                      }
                      disabled={isSubmitting}>
                      <Select.Trigger id='profile-language'>
                        <Select.Value />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Item value='en'>English</Select.Item>
                        <Select.Item value='fr'>Français</Select.Item>
                        <Select.Item value='de'>Deutsch</Select.Item>
                        <Select.Item value='es'>Español</Select.Item>
                        <Select.Item value='ja'>日本語</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </InputField>
                </div>
              </FormField>

              <div className='flex justify-end gap-4'>
                <Button
                  type='button'
                  variant='secondary'
                  size='lg'
                  disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  disabled={isSubmitting}>
                  {isSubmitting ? 'Saving changes...' : 'Save changes'}
                </Button>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}

const meta = {
  title: 'Recipes/Forms/Profile Form',
  component: ProfileForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A comprehensive profile editing form using Form controller with FormField grouping. Demonstrates file upload (avatar), text inputs, textarea, and select dropdowns. Features semantic grouping with different FormField variants for visual hierarchy.',
      },
    },
  },
} satisfies Meta<typeof ProfileForm>

export default meta

type Story = StoryObj<typeof ProfileForm>

export const Default: Story = {}
