import { Button, Input, InputField, Select, Text, Textarea } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { type FormEvent, useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors({})

    const newErrors: Record<string, string> = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!formData.email.includes('@'))
      newErrors.email = 'Invalid email address'
    if (!formData.subject) newErrors.subject = 'Subject is required'
    if (!formData.message) newErrors.message = 'Message is required'
    else if (formData.message.length < 10)
      newErrors.message = 'Message must be at least 10 characters'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: '', email: '', subject: '', message: '' })
              }}>
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

        <form
          onSubmit={handleSubmit}
          className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-950 flex flex-col gap-6 rounded-xl border p-8 shadow-lg'>
          <div className='grid gap-5 md:grid-cols-2'>
            <InputField
              label='Your name'
              htmlFor='contact-name'
              error={errors.name}
              required>
              <Input
                type='text'
                id='contact-name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder='John Doe'
                error={!!errors.name}
                disabled={isSubmitting}
              />
            </InputField>

            <InputField
              label='Email address'
              htmlFor='contact-email'
              error={errors.email}
              required>
              <Input
                type='email'
                id='contact-email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder='you@example.com'
                error={!!errors.email}
                disabled={isSubmitting}
              />
            </InputField>
          </div>

          <InputField
            label='Subject'
            htmlFor='contact-subject'
            error={errors.subject}
            required>
            <Select.Root
              value={formData.subject}
              onValueChange={(value: string) =>
                setFormData({ ...formData, subject: value })
              }
              disabled={isSubmitting}>
              <Select.Trigger
                error={!!errors.subject}
                id='contact-subject'>
                <Select.Value placeholder='Select a subject' />
              </Select.Trigger>
              <Select.Content>
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
            error={errors.message}
            required>
            <Textarea
              id='contact-message'
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder='Tell us more about your inquiry...'
              rows={6}
              error={!!errors.message}
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
              onClick={() =>
                setFormData({ name: '', email: '', subject: '', message: '' })
              }>
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
        </form>
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
          'A contact form with name, email, subject dropdown, and message textarea. Features a success screen after submission with the ability to send another message.',
      },
    },
  },
} satisfies Meta<typeof ContactForm>

export default meta

type Story = StoryObj<typeof ContactForm>

export const Default: Story = {}
