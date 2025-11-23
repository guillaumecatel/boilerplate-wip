import {
  Button,
  Checkbox,
  Form,
  Input,
  InputField,
  Label,
  Text,
} from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const LoginForm = () => {
  return (
    <div className='bg-base-100 dark:bg-base-900 flex min-h-[600px] items-center justify-center'>
      <div className='w-full max-w-md'>
        <div className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-950 rounded-xl border p-8 shadow-lg'>
          <div className='mb-6 text-center'>
            <Text
              as='h1'
              variant='heading-large'
              weight='bold'
              className='mb-2'>
              Welcome back
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='secondary'>
              Sign in to your account to continue
            </Text>
          </div>

          <Form
            initialValues={{
              email: '',
              password: '',
              rememberMe: false,
            }}
            validationSchema={{
              email: {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email',
                },
              },
              password: {
                required: 'Password is required',
              },
            }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 1500))
              alert(
                `Login successful!\nEmail: ${values.email}\nRemember me: ${values.rememberMe}`,
              )
            }}
            spacing='lg'>
            {({
              values,
              errors,
              touched,
              setFieldValue,
              setFieldTouched,
              isSubmitting,
            }) => (
              <>
                <InputField
                  label='Email address'
                  htmlFor='login-email'
                  error={touched.email ? errors.email : undefined}
                  required>
                  <Input
                    type='email'
                    id='login-email'
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
                  htmlFor='login-password'
                  error={touched.password ? errors.password : undefined}
                  required>
                  <Input
                    type='password'
                    id='login-password'
                    value={(values.password as string) || ''}
                    onChange={(e) => setFieldValue('password', e.target.value)}
                    onBlur={() => setFieldTouched('password', true)}
                    placeholder='••••••••'
                    error={!!(touched.password && errors.password)}
                    disabled={isSubmitting}
                  />
                </InputField>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Checkbox
                      id='remember-me'
                      checked={values.rememberMe as boolean}
                      onChange={(e) =>
                        setFieldValue('rememberMe', e.target.checked)
                      }
                      disabled={isSubmitting}
                    />
                    <Label htmlFor='remember-me'>Remember me</Label>
                  </div>
                  <Button
                    as='a'
                    href='#'
                    variant='ghost'
                    size='sm'
                    type='button'
                    disabled={isSubmitting}>
                    Forgot password?
                  </Button>
                </div>

                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  className='w-full'
                  disabled={isSubmitting}>
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </Button>

                <Text
                  variant='body-small'
                  color='secondary'
                  className='text-center'>
                  Don't have an account?{' '}
                  <Button
                    as='a'
                    href='#'
                    variant='ghost'
                    size='sm'
                    type='button'
                    disabled={isSubmitting}>
                    Sign up
                  </Button>
                </Text>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Recipes/Forms/Login Form',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A simple and elegant login form with email and password fields, remember me checkbox, and forgot password link. Features real-time validation and loading states.',
      },
    },
  },
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof LoginForm>

export const Default: Story = {}
