import { Button, Checkbox, Input, InputField, Label, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { type FormEvent, useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors({})

    const newErrors: Record<string, string> = {}
    if (!email) newErrors.email = 'Email is required'
    else if (!email.includes('@'))
      newErrors.email = 'Please enter a valid email'
    if (!password) newErrors.password = 'Password is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    alert(`Login successful!\nEmail: ${email}\nRemember me: ${rememberMe}`)
  }

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

          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-5'>
            <InputField
              label='Email address'
              htmlFor='login-email'
              error={errors.email}
              required>
              <Input
                type='email'
                id='login-email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='you@example.com'
                error={!!errors.email}
                disabled={isLoading}
              />
            </InputField>

            <InputField
              label='Password'
              htmlFor='login-password'
              error={errors.password}
              required>
              <Input
                type='password'
                id='login-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••'
                error={!!errors.password}
                disabled={isLoading}
              />
            </InputField>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Checkbox
                  id='remember-me'
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading}
                />
                <Label htmlFor='remember-me'>Remember me</Label>
              </div>
              <Button
                as='a'
                href='#'
                variant='ghost'
                size='sm'
                type='button'
                disabled={isLoading}>
                Forgot password?
              </Button>
            </div>

            <Button
              type='submit'
              variant='primary'
              size='lg'
              className='w-full'
              disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
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
                disabled={isLoading}>
                Sign up
              </Button>
            </Text>
          </form>
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
