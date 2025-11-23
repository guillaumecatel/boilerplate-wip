import {
  Button,
  Checkbox,
  Form,
  Input,
  Label,
  Select,
  Switch,
  Textarea,
} from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Form/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Spacing between form elements',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    validateOnChange: {
      control: 'boolean',
      description: 'Validate fields on change',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    validateOnBlur: {
      control: 'boolean',
      description: 'Validate fields on blur',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Form>

export default meta

type Story = StoryObj<typeof Form>

export const Playground: Story = {
  render: (args) => (
    <Form
      {...args}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={{
        email: {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        },
        password: {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        },
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}>
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <>
          <div className='space-y-1'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='you@example.com'
              value={(values.email as string) || ''}
              onChange={(e) => setFieldValue('email', e.target.value)}
              onBlur={() => setFieldTouched('email', true)}
              className={
                errors.email && touched.email
                  ? 'border-destructive-500 focus:ring-destructive-500'
                  : ''
              }
            />
            {errors.email && touched.email && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.email}
              </p>
            )}
          </div>

          <div className='space-y-1'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              name='password'
              type='password'
              placeholder='••••••••'
              value={(values.password as string) || ''}
              onChange={(e) => setFieldValue('password', e.target.value)}
              onBlur={() => setFieldTouched('password', true)}
              className={
                errors.password && touched.password
                  ? 'border-destructive-500 focus:ring-destructive-500'
                  : ''
              }
            />
            {errors.password && touched.password && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.password}
              </p>
            )}
          </div>

          <Button type='submit'>Submit</Button>
        </>
      )}
    </Form>
  ),
}

export const WithRenderFunction: Story = {
  render: () => (
    <Form
      initialValues={{
        username: '',
        email: '',
        age: '',
      }}
      validationSchema={{
        username: {
          required: 'Username is required',
          minLength: 3,
          maxLength: 20,
        },
        email: {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Please enter a valid email',
          },
        },
        age: {
          required: 'Age is required',
          min: { value: 18, message: 'You must be at least 18 years old' },
          max: { value: 120, message: 'Please enter a valid age' },
        },
      }}
      onSubmit={(values) => {
        console.log('Form submitted:', values)
        alert('Form submitted successfully!')
      }}>
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <>
          <div className='space-y-1'>
            <Label htmlFor='username'>Username</Label>
            <Input
              id='username'
              name='username'
              placeholder='Enter username'
              value={(values.username as string) || ''}
              onChange={(e) => setFieldValue('username', e.target.value)}
              onBlur={() => setFieldTouched('username', true)}
              className={
                errors.username && touched.username
                  ? 'border-destructive-500 focus:ring-destructive-500'
                  : ''
              }
            />
            {errors.username && touched.username && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.username}
              </p>
            )}
          </div>

          <div className='space-y-1'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='your@email.com'
              value={(values.email as string) || ''}
              onChange={(e) => setFieldValue('email', e.target.value)}
              onBlur={() => setFieldTouched('email', true)}
              className={
                errors.email && touched.email
                  ? 'border-destructive-500 focus:ring-destructive-500'
                  : ''
              }
            />
            {errors.email && touched.email && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.email}
              </p>
            )}
          </div>

          <div className='space-y-1'>
            <Label htmlFor='age'>Age</Label>
            <Input
              id='age'
              name='age'
              type='number'
              placeholder='18'
              value={(values.age as string) || ''}
              onChange={(e) => setFieldValue('age', Number(e.target.value))}
              onBlur={() => setFieldTouched('age', true)}
              className={
                errors.age && touched.age
                  ? 'border-destructive-500 focus:ring-destructive-500'
                  : ''
              }
            />
            {errors.age && touched.age && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.age}
              </p>
            )}
          </div>

          <Button type='submit'>Register</Button>
        </>
      )}
    </Form>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <Form
      initialValues={{
        title: '',
        description: '',
      }}
      validationSchema={{
        title: {
          required: 'Title is required',
          minLength: {
            value: 5,
            message: 'Title must be at least 5 characters',
          },
        },
        description: {
          required: 'Description is required',
          minLength: {
            value: 20,
            message: 'Description must be at least 20 characters',
          },
        },
      }}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}>
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <>
          <div className='space-y-1'>
            <Label htmlFor='title'>Title</Label>
            <Input
              id='title'
              name='title'
              placeholder='Enter title'
              value={(values.title as string) || ''}
              onChange={(e) => setFieldValue('title', e.target.value)}
              onBlur={() => setFieldTouched('title', true)}
              className={
                errors.title && touched.title
                  ? 'border-destructive-500 focus:ring-destructive-500'
                  : ''
              }
            />
            {errors.title && touched.title && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.title}
              </p>
            )}
          </div>

          <div className='space-y-1'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              name='description'
              placeholder='Enter description'
              rows={4}
              value={(values.description as string) || ''}
              onChange={(e) => setFieldValue('description', e.target.value)}
              onBlur={() => setFieldTouched('description', true)}
              className={
                errors.description && touched.description
                  ? 'border-destructive-500 focus:ring-destructive-500'
                  : ''
              }
            />
            {errors.description && touched.description && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.description}
              </p>
            )}
          </div>

          <Button type='submit'>Submit</Button>
        </>
      )}
    </Form>
  ),
}

export const WithSelect: Story = {
  render: () => (
    <Form
      initialValues={{
        country: '',
        language: '',
      }}
      validationSchema={{
        country: { required: 'Please select a country' },
        language: { required: 'Please select a language' },
      }}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}>
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <>
          <div className='space-y-1'>
            <Label htmlFor='country'>Country</Label>
            <Select.Root
              value={(values.country as string) || ''}
              onValueChange={(value) => setFieldValue('country', value)}
              onOpenChange={(open) => {
                if (!open) setFieldTouched('country', true)
              }}>
              <Select.Trigger
                id='country'
                className={
                  errors.country && touched.country
                    ? 'border-destructive-500 focus:ring-destructive-500'
                    : ''
                }>
                <Select.Value placeholder='Select a country' />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value='fr'>France</Select.Item>
                <Select.Item value='us'>United States</Select.Item>
                <Select.Item value='uk'>United Kingdom</Select.Item>
                <Select.Item value='de'>Germany</Select.Item>
              </Select.Content>
            </Select.Root>
            {errors.country && touched.country && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.country}
              </p>
            )}
          </div>

          <div className='space-y-1'>
            <Label htmlFor='language'>Language</Label>
            <Select.Root
              value={(values.language as string) || ''}
              onValueChange={(value) => setFieldValue('language', value)}
              onOpenChange={(open) => {
                if (!open) setFieldTouched('language', true)
              }}>
              <Select.Trigger
                id='language'
                className={
                  errors.language && touched.language
                    ? 'border-destructive-500 focus:ring-destructive-500'
                    : ''
                }>
                <Select.Value placeholder='Select a language' />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value='en'>English</Select.Item>
                <Select.Item value='fr'>Français</Select.Item>
                <Select.Item value='de'>Deutsch</Select.Item>
                <Select.Item value='es'>Español</Select.Item>
              </Select.Content>
            </Select.Root>
            {errors.language && touched.language && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.language}
              </p>
            )}
          </div>

          <Button type='submit'>Submit</Button>
        </>
      )}
    </Form>
  ),
}

export const WithCheckboxAndSwitch: Story = {
  render: () => (
    <Form
      initialValues={{
        terms: false,
        newsletter: false,
        notifications: true,
      }}
      validationSchema={{
        terms: {
          validate: (value) => value === true || 'You must accept the terms',
        },
      }}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}>
      {({ values, errors, touched, setFieldValue }) => (
        <>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='terms'
                checked={(values.terms as boolean) || false}
                onChange={(checked) => setFieldValue('terms', checked)}
              />
              <Label
                htmlFor='terms'
                className='cursor-pointer'>
                I accept the terms and conditions
              </Label>
            </div>
            {errors.terms && touched.terms && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.terms}
              </p>
            )}

            <div className='flex items-center gap-2'>
              <Checkbox
                id='newsletter'
                checked={(values.newsletter as boolean) || false}
                onChange={(checked) => setFieldValue('newsletter', checked)}
              />
              <Label
                htmlFor='newsletter'
                className='cursor-pointer'>
                Subscribe to newsletter
              </Label>
            </div>

            <div className='flex items-center justify-between'>
              <Label htmlFor='notifications'>Enable notifications</Label>
              <Switch
                id='notifications'
                checked={(values.notifications as boolean) || false}
                onChange={(checked) => setFieldValue('notifications', checked)}
              />
            </div>
          </div>

          <Button type='submit'>Submit</Button>
        </>
      )}
    </Form>
  ),
}

export const CompleteForm: Story = {
  render: () => (
    <div className='mx-auto max-w-2xl'>
      <div className='mb-6'>
        <h2 className='text-base-900 dark:text-base-100 text-2xl font-bold'>
          Create Account
        </h2>
        <p className='text-base-600 dark:text-base-400 mt-1 text-sm'>
          Fill in the information below to register
        </p>
      </div>

      <Form
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          country: '',
          terms: false,
        }}
        validationSchema={{
          firstName: {
            required: 'First name is required',
            minLength: 2,
          },
          lastName: {
            required: 'Last name is required',
            minLength: 2,
          },
          email: {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
          country: { required: 'Please select a country' },
          terms: {
            validate: (value) => value === true || 'You must accept the terms',
          },
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Submitting:', values)
          setTimeout(() => {
            alert(`Account created for ${values.firstName} ${values.lastName}!`)
            setSubmitting(false)
          }, 1500)
        }}>
        {({
          values,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
          isSubmitting,
        }) => (
          <>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-1'>
                <Label htmlFor='firstName'>First Name</Label>
                <Input
                  id='firstName'
                  placeholder='John'
                  value={(values.firstName as string) || ''}
                  onChange={(e) => setFieldValue('firstName', e.target.value)}
                  onBlur={() => setFieldTouched('firstName', true)}
                  className={
                    errors.firstName && touched.firstName
                      ? 'border-destructive-500 focus:ring-destructive-500'
                      : ''
                  }
                />
                {errors.firstName && touched.firstName && (
                  <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className='space-y-1'>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                  id='lastName'
                  placeholder='Doe'
                  value={(values.lastName as string) || ''}
                  onChange={(e) => setFieldValue('lastName', e.target.value)}
                  onBlur={() => setFieldTouched('lastName', true)}
                  className={
                    errors.lastName && touched.lastName
                      ? 'border-destructive-500 focus:ring-destructive-500'
                      : ''
                  }
                />
                {errors.lastName && touched.lastName && (
                  <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className='space-y-1'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                type='email'
                placeholder='john.doe@example.com'
                value={(values.email as string) || ''}
                onChange={(e) => setFieldValue('email', e.target.value)}
                onBlur={() => setFieldTouched('email', true)}
                className={
                  errors.email && touched.email
                    ? 'border-destructive-500 focus:ring-destructive-500'
                    : ''
                }
              />
              {errors.email && touched.email && (
                <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                  {errors.email}
                </p>
              )}
            </div>

            <div className='space-y-1'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                value={(values.password as string) || ''}
                onChange={(e) => setFieldValue('password', e.target.value)}
                onBlur={() => setFieldTouched('password', true)}
                className={
                  errors.password && touched.password
                    ? 'border-destructive-500 focus:ring-destructive-500'
                    : ''
                }
              />
              {errors.password && touched.password && (
                <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                  {errors.password}
                </p>
              )}
            </div>

            <div className='space-y-1'>
              <Label htmlFor='country'>Country</Label>
              <Select.Root
                value={(values.country as string) || ''}
                onValueChange={(value) => setFieldValue('country', value)}
                onOpenChange={(open) => {
                  if (!open) setFieldTouched('country', true)
                }}>
                <Select.Trigger
                  id='country'
                  className={
                    errors.country && touched.country
                      ? 'border-destructive-500 focus:ring-destructive-500'
                      : ''
                  }>
                  <Select.Value placeholder='Select a country' />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value='fr'>France</Select.Item>
                  <Select.Item value='us'>United States</Select.Item>
                  <Select.Item value='uk'>United Kingdom</Select.Item>
                </Select.Content>
              </Select.Root>
              {errors.country && touched.country && (
                <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                  {errors.country}
                </p>
              )}
            </div>

            <div className='flex items-center gap-2'>
              <Checkbox
                id='terms'
                checked={(values.terms as boolean) || false}
                onChange={(checked) => setFieldValue('terms', checked)}
              />
              <Label
                htmlFor='terms'
                className='cursor-pointer'>
                I accept the terms and conditions
              </Label>
            </div>
            {errors.terms && touched.terms && (
              <p className='text-destructive-600 dark:text-destructive-400 text-sm'>
                {errors.terms}
              </p>
            )}

            <div className='flex gap-3'>
              <Button
                type='submit'
                className='flex-1'
                disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create Account'}
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={() => alert('Cancelled')}>
                Cancel
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  ),
}
