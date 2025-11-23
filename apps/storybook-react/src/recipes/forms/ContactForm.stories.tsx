import {
  Button,
  Form,
  Input,
  InputField,
  Select,
  Text,
  Textarea,
} from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return (
      <div className='bg-base-100 dark:bg-base-900 flex min-h-[600px] items-center justify-center'>
        <div className='w-full max-w-md text-center'>
          <div className='border-success-300 bg-success-50 dark:border-success-700 dark:bg-success-950 rounded-xl border p-8'>
            <div className='mb-4 text-6xl'>✅</div>
            <Text
              as='div'
              variant='heading-medium'
              weight='bold'
              className='mb-2'>
              Message sent!
            </Text>
            <Text
              variant='body-medium'
              color='secondary'
              className='mb-6'>
              Thank you for contacting us. We'll get back to you within 24
              hours.
            </Text>
            <Button
              variant='primary'
              onClick={() => setIsSubmitted(false)}>
              Send another message
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-base-100 dark:bg-base-900 flex min-h-[700px] items-center justify-center py-12'>
      <div className='w-full max-w-2xl'>
        <div className='mb-6 text-center'>
          <Text
            as='h1'
            variant='heading-large'
            weight='bold'
            className='mb-2'>
            Get in touch
          </Text>
          <Text
            as='p'
            variant='body-medium'
            color='secondary'>
            Have a question or feedback? We'd love to hear from you.
          </Text>
        </div>

        <Form
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          validationSchema={{
            name: { required: 'Name is required' },
            email: {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            },
            subject: { required: 'Subject is required' },
            message: {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            },
          }}
          onSubmit={async () => {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setIsSubmitted(true)
          }}
          spacing='lg'
          className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-950 rounded-xl border p-8 shadow-lg'>
          {({
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
          }) => (
            <>
              <div className='grid gap-5 md:grid-cols-2'>
                <InputField
                  label='Your name'
                  htmlFor='contact-name'
                  error={touched.name ? errors.name : undefined}
                  required>
                  <Input
                    type='text'
                    id='contact-name'
                    value={(values.name as string) || ''}
                    onChange={(e) => setFieldValue('name', e.target.value)}
                    onBlur={() => setFieldTouched('name', true)}
                    placeholder='John Doe'
                    error={!!(touched.name && errors.name)}
                    disabled={isSubmitting}
                  />
                </InputField>

                <InputField
                  label='Email address'
                  htmlFor='contact-email'
                  error={touched.email ? errors.email : undefined}
                  required>
                  <Input
                    type='email'
                    id='contact-email'
                    value={(values.email as string) || ''}
                    onChange={(e) => setFieldValue('email', e.target.value)}
                    onBlur={() => setFieldTouched('email', true)}
                    placeholder='you@example.com'
                    error={!!(touched.email && errors.email)}
                    disabled={isSubmitting}
                  />
                </InputField>
              </div>

              <InputField
                label='Subject'
                htmlFor='contact-subject'
                error={touched.subject ? errors.subject : undefined}
                required>
                <Select.Root
                  value={(values.subject as string) || ''}
                  onValueChange={(value: string) =>
                    setFieldValue('subject', value)
                  }
                  disabled={isSubmitting}>
                  <Select.Trigger
                    error={!!(touched.subject && errors.subject)}
                    id='contact-subject'
                    onBlur={() => setFieldTouched('subject', true)}>
                    <Select.Value placeholder='Select a subject' />
                  </Select.Trigger>
                  <Select.Content
                    onCloseAutoFocus={() => setFieldTouched('subject', true)}>
                    <Select.Item value='general'>General inquiry</Select.Item>
                    <Select.Item value='support'>Technical support</Select.Item>
                    <Select.Item value='billing'>Billing question</Select.Item>
                    <Select.Item value='feature'>Feature request</Select.Item>
                    <Select.Item value='bug'>Bug report</Select.Item>
                    <Select.Item value='other'>Other</Select.Item>
                  </Select.Content>
                </Select.Root>
              </InputField>

              <InputField
                label='Message'
                htmlFor='contact-message'
                description='Please provide as much detail as possible'
                error={touched.message ? errors.message : undefined}
                required>
                <Textarea
                  id='contact-message'
                  value={(values.message as string) || ''}
                  onChange={(e) => setFieldValue('message', e.target.value)}
                  onBlur={() => setFieldTouched('message', true)}
                  placeholder='Tell us more about your inquiry...'
                  rows={6}
                  error={!!(touched.message && errors.message)}
                  disabled={isSubmitting}
                />
              </InputField>

              <div className='flex gap-4'>
                <Button
                  type='button'
                  variant='secondary'
                  size='lg'
                  className='flex-1'
                  disabled={isSubmitting}
                  onClick={() => {
                    setFieldValue('name', '')
                    setFieldValue('email', '')
                    setFieldValue('subject', '')
                    setFieldValue('message', '')
                  }}>
                  Clear
                </Button>
                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  className='flex-1'
                  disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send message'}
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
  title: 'Recipes/Forms/Contact Form',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A contact form using Form controller with InputField components. Includes name, email, subject dropdown, and message textarea with validation. Features a success screen after submission with the ability to send another message.',
      },
    },
  },
} satisfies Meta<typeof ContactForm>

export default meta

type Story = StoryObj<typeof ContactForm>

export const Default: Story = {}
