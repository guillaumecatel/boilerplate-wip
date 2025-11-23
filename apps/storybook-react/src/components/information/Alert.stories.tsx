import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Alert } from '@myorg/ui'

const meta = {
  title: 'Components/Information/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A flexible alert component for displaying important messages. Supports multiple variants (info, success, warning, error), optional dismissible functionality, and custom icons.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style variant of the alert',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the alert',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof Alert>

export const Playground: Story = {
  args: {
    title: 'Notification',
    description: 'This is an informational alert message.',
  },
}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-4'>
      <Alert
        variant='info'
        title='Information'
        description='This is an informational message.'
      />
      <Alert
        variant='success'
        title='Success'
        description='Your changes have been saved successfully!'
      />
      <Alert
        variant='warning'
        title='Warning'
        description='This action cannot be undone. Please proceed with caution.'
      />
      <Alert
        variant='error'
        title='Error'
        description='An error occurred while processing your request.'
      />
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-4'>
      <Alert
        size='sm'
        title='Small Alert'
        description='This is a small-sized alert.'
      />
      <Alert
        size='md'
        title='Medium Alert'
        description='This is a medium-sized alert (default).'
      />
      <Alert
        size='lg'
        title='Large Alert'
        description='This is a large-sized alert.'
      />
    </div>
  ),
}

export const Dismissible: Story = {
  render: () => {
    const DismissibleExample = () => {
      const [show1, setShow1] = useState(true)
      const [show2, setShow2] = useState(true)
      const [show3, setShow3] = useState(true)

      return (
        <div className='flex flex-col gap-4'>
          {show1 && (
            <Alert
              variant='success'
              title='Success'
              description='This alert can be dismissed.'
              dismissible
              onDismiss={() => setShow1(false)}
            />
          )}
          {show2 && (
            <Alert
              variant='warning'
              title='Warning'
              description='Click the close button to dismiss this warning.'
              dismissible
              onDismiss={() => setShow2(false)}
            />
          )}
          {show3 && (
            <Alert
              variant='error'
              title='Error'
              description='You can dismiss this error message.'
              dismissible
              onDismiss={() => setShow3(false)}
            />
          )}
        </div>
      )
    }

    return <DismissibleExample />
  },
}

export const WithoutTitle: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-4'>
      <Alert
        variant='info'
        description='This alert has no title, only a description.'
      />
      <Alert
        variant='success'
        description='Your changes have been saved.'
      />
      <Alert
        variant='warning'
        description='Please review your information before submitting.'
      />
    </div>
  ),
}

export const WithoutIcon: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-4'>
      <Alert
        variant='info'
        title='No Icon'
        description='This alert does not display an icon.'
        icon={false}
      />
      <Alert
        variant='success'
        title='Success Without Icon'
        description='Icon can be hidden when needed.'
        icon={false}
      />
    </div>
  ),
}

export const LongContent: Story = {
  args: {
    variant: 'info',
    title: 'Important Update',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    dismissible: true,
  },
}
