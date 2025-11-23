import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs } from '@myorg/ui'

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs.Root,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    defaultValue: {
      control: 'text',
      description: 'The value of the tab that should be active by default',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Tabs.Root>

export default meta

type Story = StoryObj<typeof Tabs.Root>

export const Playground: Story = {
  render: (args) => (
    <Tabs.Root
      {...args}
      defaultValue='tab1'>
      <Tabs.List>
        <Tabs.Trigger value='tab1'>Account</Tabs.Trigger>
        <Tabs.Trigger value='tab2'>Password</Tabs.Trigger>
        <Tabs.Trigger value='tab3'>Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='tab1'>
        <div className='text-base-900 dark:text-base-100'>
          <h3 className='mb-2 text-lg font-semibold'>Account Settings</h3>
          <p className='text-base-600 dark:text-base-400 text-sm'>
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </Tabs.Content>
      <Tabs.Content value='tab2'>
        <div className='text-base-900 dark:text-base-100'>
          <h3 className='mb-2 text-lg font-semibold'>Password</h3>
          <p className='text-base-600 dark:text-base-400 text-sm'>
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </Tabs.Content>
      <Tabs.Content value='tab3'>
        <div className='text-base-900 dark:text-base-100'>
          <h3 className='mb-2 text-lg font-semibold'>Settings</h3>
          <p className='text-base-600 dark:text-base-400 text-sm'>
            Manage your application settings and preferences.
          </p>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  ),
}

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue='overview'>
      <Tabs.List>
        <Tabs.Trigger value='overview'>Overview</Tabs.Trigger>
        <Tabs.Trigger value='analytics'>Analytics</Tabs.Trigger>
        <Tabs.Trigger value='reports'>Reports</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='overview'>
        <div className='text-base-900 dark:text-base-100'>
          <h3 className='mb-2 text-lg font-semibold'>Overview</h3>
          <p className='text-base-600 dark:text-base-400'>
            View a summary of your dashboard metrics and key performance
            indicators.
          </p>
        </div>
      </Tabs.Content>
      <Tabs.Content value='analytics'>
        <div className='text-base-900 dark:text-base-100'>
          <h3 className='mb-2 text-lg font-semibold'>Analytics</h3>
          <p className='text-base-600 dark:text-base-400'>
            Detailed analytics and insights about your data.
          </p>
        </div>
      </Tabs.Content>
      <Tabs.Content value='reports'>
        <div className='text-base-900 dark:text-base-100'>
          <h3 className='mb-2 text-lg font-semibold'>Reports</h3>
          <p className='text-base-600 dark:text-base-400'>
            Generate and view custom reports for your business.
          </p>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className='space-y-12'>
      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
          Line Variant (Default)
        </h3>
        <Tabs.Root defaultValue='tab1'>
          <Tabs.List variant='line'>
            <Tabs.Trigger
              variant='line'
              value='tab1'>
              Dashboard
            </Tabs.Trigger>
            <Tabs.Trigger
              variant='line'
              value='tab2'>
              Team
            </Tabs.Trigger>
            <Tabs.Trigger
              variant='line'
              value='tab3'>
              Projects
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value='tab1'>
            <p className='text-base-600 dark:text-base-400'>
              Dashboard content with line variant styling.
            </p>
          </Tabs.Content>
          <Tabs.Content value='tab2'>
            <p className='text-base-600 dark:text-base-400'>
              Team content with line variant styling.
            </p>
          </Tabs.Content>
          <Tabs.Content value='tab3'>
            <p className='text-base-600 dark:text-base-400'>
              Projects content with line variant styling.
            </p>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
          Enclosed Variant
        </h3>
        <Tabs.Root defaultValue='tab1'>
          <Tabs.List variant='enclosed'>
            <Tabs.Trigger
              variant='enclosed'
              value='tab1'>
              Dashboard
            </Tabs.Trigger>
            <Tabs.Trigger
              variant='enclosed'
              value='tab2'>
              Team
            </Tabs.Trigger>
            <Tabs.Trigger
              variant='enclosed'
              value='tab3'>
              Projects
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value='tab1'>
            <p className='text-base-600 dark:text-base-400'>
              Dashboard content with enclosed variant styling.
            </p>
          </Tabs.Content>
          <Tabs.Content value='tab2'>
            <p className='text-base-600 dark:text-base-400'>
              Team content with enclosed variant styling.
            </p>
          </Tabs.Content>
          <Tabs.Content value='tab3'>
            <p className='text-base-600 dark:text-base-400'>
              Projects content with enclosed variant styling.
            </p>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-12'>
      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-4 text-base font-semibold'>
          Small
        </h3>
        <Tabs.Root defaultValue='tab1'>
          <Tabs.List>
            <Tabs.Trigger
              size='sm'
              value='tab1'>
              Tab 1
            </Tabs.Trigger>
            <Tabs.Trigger
              size='sm'
              value='tab2'>
              Tab 2
            </Tabs.Trigger>
            <Tabs.Trigger
              size='sm'
              value='tab3'>
              Tab 3
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            size='sm'
            value='tab1'>
            <p className='text-base-600 dark:text-base-400 text-sm'>
              Small size tab content
            </p>
          </Tabs.Content>
          <Tabs.Content
            size='sm'
            value='tab2'>
            <p className='text-base-600 dark:text-base-400 text-sm'>
              Small size tab content
            </p>
          </Tabs.Content>
          <Tabs.Content
            size='sm'
            value='tab3'>
            <p className='text-base-600 dark:text-base-400 text-sm'>
              Small size tab content
            </p>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
          Medium (Default)
        </h3>
        <Tabs.Root defaultValue='tab1'>
          <Tabs.List>
            <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
            <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
            <Tabs.Trigger value='tab3'>Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value='tab1'>
            <p className='text-base-600 dark:text-base-400'>
              Medium size tab content
            </p>
          </Tabs.Content>
          <Tabs.Content value='tab2'>
            <p className='text-base-600 dark:text-base-400'>
              Medium size tab content
            </p>
          </Tabs.Content>
          <Tabs.Content value='tab3'>
            <p className='text-base-600 dark:text-base-400'>
              Medium size tab content
            </p>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-4 text-xl font-semibold'>
          Large
        </h3>
        <Tabs.Root defaultValue='tab1'>
          <Tabs.List>
            <Tabs.Trigger
              size='lg'
              value='tab1'>
              Tab 1
            </Tabs.Trigger>
            <Tabs.Trigger
              size='lg'
              value='tab2'>
              Tab 2
            </Tabs.Trigger>
            <Tabs.Trigger
              size='lg'
              value='tab3'>
              Tab 3
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            size='lg'
            value='tab1'>
            <p className='text-base-600 dark:text-base-400 text-lg'>
              Large size tab content
            </p>
          </Tabs.Content>
          <Tabs.Content
            size='lg'
            value='tab2'>
            <p className='text-base-600 dark:text-base-400 text-lg'>
              Large size tab content
            </p>
          </Tabs.Content>
          <Tabs.Content
            size='lg'
            value='tab3'>
            <p className='text-base-600 dark:text-base-400 text-lg'>
              Large size tab content
            </p>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs.Root
      defaultValue='profile'
      orientation='vertical'>
      <Tabs.List
        orientation='vertical'
        className='w-48'>
        <Tabs.Trigger
          orientation='vertical'
          value='profile'>
          Profile
        </Tabs.Trigger>
        <Tabs.Trigger
          orientation='vertical'
          value='notifications'>
          Notifications
        </Tabs.Trigger>
        <Tabs.Trigger
          orientation='vertical'
          value='security'>
          Security
        </Tabs.Trigger>
        <Tabs.Trigger
          orientation='vertical'
          value='billing'>
          Billing
        </Tabs.Trigger>
      </Tabs.List>
      <div className='flex-1 pl-6'>
        <Tabs.Content value='profile'>
          <div className='text-base-900 dark:text-base-100'>
            <h3 className='mb-2 text-lg font-semibold'>Profile Settings</h3>
            <p className='text-base-600 dark:text-base-400'>
              Manage your profile information and public visibility.
            </p>
          </div>
        </Tabs.Content>
        <Tabs.Content value='notifications'>
          <div className='text-base-900 dark:text-base-100'>
            <h3 className='mb-2 text-lg font-semibold'>
              Notification Preferences
            </h3>
            <p className='text-base-600 dark:text-base-400'>
              Choose what notifications you want to receive.
            </p>
          </div>
        </Tabs.Content>
        <Tabs.Content value='security'>
          <div className='text-base-900 dark:text-base-100'>
            <h3 className='mb-2 text-lg font-semibold'>Security Settings</h3>
            <p className='text-base-600 dark:text-base-400'>
              Manage your security preferences and two-factor authentication.
            </p>
          </div>
        </Tabs.Content>
        <Tabs.Content value='billing'>
          <div className='text-base-900 dark:text-base-100'>
            <h3 className='mb-2 text-lg font-semibold'>Billing Information</h3>
            <p className='text-base-600 dark:text-base-400'>
              View and manage your billing information and subscriptions.
            </p>
          </div>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tabs.Root defaultValue='tab1'>
      <Tabs.List>
        <Tabs.Trigger value='tab1'>Active Tab</Tabs.Trigger>
        <Tabs.Trigger
          value='tab2'
          disabled>
          Disabled Tab
        </Tabs.Trigger>
        <Tabs.Trigger value='tab3'>Another Tab</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='tab1'>
        <p className='text-base-600 dark:text-base-400'>
          This tab is active and accessible.
        </p>
      </Tabs.Content>
      <Tabs.Content value='tab2'>
        <p className='text-base-600 dark:text-base-400'>
          This content won't be shown as the tab is disabled.
        </p>
      </Tabs.Content>
      <Tabs.Content value='tab3'>
        <p className='text-base-600 dark:text-base-400'>
          Another active tab content.
        </p>
      </Tabs.Content>
    </Tabs.Root>
  ),
}

export const All: Story = {
  render: () => (
    <div className='space-y-12'>
      <div>
        <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
          Variants
        </h2>
        <div className='space-y-8'>
          <div>
            <p className='text-base-600 dark:text-base-400 mb-3 text-sm'>
              Line
            </p>
            <Tabs.Root defaultValue='tab1'>
              <Tabs.List variant='line'>
                <Tabs.Trigger
                  variant='line'
                  value='tab1'>
                  Home
                </Tabs.Trigger>
                <Tabs.Trigger
                  variant='line'
                  value='tab2'>
                  About
                </Tabs.Trigger>
                <Tabs.Trigger
                  variant='line'
                  value='tab3'>
                  Contact
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value='tab1'>
                <p className='text-base-600 dark:text-base-400 text-sm'>
                  Line variant content
                </p>
              </Tabs.Content>
              <Tabs.Content value='tab2'>
                <p className='text-base-600 dark:text-base-400 text-sm'>
                  Line variant content
                </p>
              </Tabs.Content>
              <Tabs.Content value='tab3'>
                <p className='text-base-600 dark:text-base-400 text-sm'>
                  Line variant content
                </p>
              </Tabs.Content>
            </Tabs.Root>
          </div>

          <div>
            <p className='text-base-600 dark:text-base-400 mb-3 text-sm'>
              Enclosed
            </p>
            <Tabs.Root defaultValue='tab1'>
              <Tabs.List variant='enclosed'>
                <Tabs.Trigger
                  variant='enclosed'
                  value='tab1'>
                  Home
                </Tabs.Trigger>
                <Tabs.Trigger
                  variant='enclosed'
                  value='tab2'>
                  About
                </Tabs.Trigger>
                <Tabs.Trigger
                  variant='enclosed'
                  value='tab3'>
                  Contact
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value='tab1'>
                <p className='text-base-600 dark:text-base-400 text-sm'>
                  Enclosed variant content
                </p>
              </Tabs.Content>
              <Tabs.Content value='tab2'>
                <p className='text-base-600 dark:text-base-400 text-sm'>
                  Enclosed variant content
                </p>
              </Tabs.Content>
              <Tabs.Content value='tab3'>
                <p className='text-base-600 dark:text-base-400 text-sm'>
                  Enclosed variant content
                </p>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
          Orientation
        </h2>
        <Tabs.Root
          defaultValue='tab1'
          orientation='vertical'>
          <Tabs.List
            orientation='vertical'
            className='w-32'>
            <Tabs.Trigger
              orientation='vertical'
              value='tab1'>
              Tab 1
            </Tabs.Trigger>
            <Tabs.Trigger
              orientation='vertical'
              value='tab2'>
              Tab 2
            </Tabs.Trigger>
            <Tabs.Trigger
              orientation='vertical'
              value='tab3'>
              Tab 3
            </Tabs.Trigger>
          </Tabs.List>
          <div className='flex-1 pl-6'>
            <Tabs.Content value='tab1'>
              <p className='text-base-600 dark:text-base-400 text-sm'>
                Vertical tabs content
              </p>
            </Tabs.Content>
            <Tabs.Content value='tab2'>
              <p className='text-base-600 dark:text-base-400 text-sm'>
                Vertical tabs content
              </p>
            </Tabs.Content>
            <Tabs.Content value='tab3'>
              <p className='text-base-600 dark:text-base-400 text-sm'>
                Vertical tabs content
              </p>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>

      <div>
        <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
          States
        </h2>
        <Tabs.Root defaultValue='tab1'>
          <Tabs.List>
            <Tabs.Trigger value='tab1'>Active</Tabs.Trigger>
            <Tabs.Trigger
              value='tab2'
              disabled>
              Disabled
            </Tabs.Trigger>
            <Tabs.Trigger value='tab3'>Normal</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value='tab1'>
            <p className='text-base-600 dark:text-base-400 text-sm'>
              Active tab content
            </p>
          </Tabs.Content>
          <Tabs.Content value='tab2'>
            <p className='text-base-600 dark:text-base-400 text-sm'>
              Disabled tab content
            </p>
          </Tabs.Content>
          <Tabs.Content value='tab3'>
            <p className='text-base-600 dark:text-base-400 text-sm'>
              Normal tab content
            </p>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  ),
}
