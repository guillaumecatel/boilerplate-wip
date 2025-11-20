import { Label, Switch, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  title: 'Components/Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The controlled checked state',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The checked state when initially rendered',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onCheckedChange: {
      action: 'checkedChanged',
      description: 'Event handler called when the checked state changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the switch is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      control: 'text',
      description: 'The name of the switch (for form submission)',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'The value given as data when submitted with a name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'on'" },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the switch',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
      },
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'accent',
        'success',
        'destructive',
      ],
      description: 'Visual style variant',
      table: {
        type: {
          summary:
            "'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'destructive'",
        },
        defaultValue: { summary: "'default'" },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof Switch>

export const Playground: Story = {
  args: {
    defaultChecked: false,
  },
  render: (args) => (
    <div className='flex items-center gap-2'>
      <Switch
        id='airplane-mode'
        {...args}
      />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className='space-y-6'>
      <div className='space-y-4'>
        <Text
          variant='heading-small'
          weight='semibold'>
          Switch Variants (Unchecked)
        </Text>

        <div className='space-y-4'>
          <div className='flex items-center gap-2'>
            <Switch
              id='default-variant-off'
              variant='default'
            />
            <Label htmlFor='default-variant-off'>Default</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='primary-variant-off'
              variant='primary'
            />
            <Label htmlFor='primary-variant-off'>Primary</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='secondary-variant-off'
              variant='secondary'
            />
            <Label htmlFor='secondary-variant-off'>Secondary</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='accent-variant-off'
              variant='accent'
            />
            <Label htmlFor='accent-variant-off'>Accent</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='success-variant-off'
              variant='success'
            />
            <Label htmlFor='success-variant-off'>Success</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='destructive-variant-off'
              variant='destructive'
            />
            <Label htmlFor='destructive-variant-off'>Destructive</Label>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <Text
          variant='heading-small'
          weight='semibold'>
          Switch Variants (Checked)
        </Text>

        <div className='space-y-4'>
          <div className='flex items-center gap-2'>
            <Switch
              id='default-variant'
              variant='default'
              defaultChecked
            />
            <Label htmlFor='default-variant'>Default</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='primary-variant'
              variant='primary'
              defaultChecked
            />
            <Label htmlFor='primary-variant'>Primary</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='secondary-variant'
              variant='secondary'
              defaultChecked
            />
            <Label htmlFor='secondary-variant'>Secondary</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='accent-variant'
              variant='accent'
              defaultChecked
            />
            <Label htmlFor='accent-variant'>Accent</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='success-variant'
              variant='success'
              defaultChecked
            />
            <Label htmlFor='success-variant'>Success</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Switch
              id='destructive-variant'
              variant='destructive'
              defaultChecked
            />
            <Label htmlFor='destructive-variant'>Destructive</Label>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <Switch
          id='switch-sm'
          size='sm'
        />
        <Label
          htmlFor='switch-sm'
          size='sm'>
          Small Switch
        </Label>
      </div>

      <div className='flex items-center gap-2'>
        <Switch id='switch-md' />
        <Label htmlFor='switch-md'>Medium Switch</Label>
      </div>

      <div className='flex items-center gap-2'>
        <Switch
          id='switch-lg'
          size='lg'
        />
        <Label
          htmlFor='switch-lg'
          size='lg'>
          Large Switch
        </Label>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <Switch
          id='unchecked'
          checked={false}
        />
        <Label htmlFor='unchecked'>Unchecked</Label>
      </div>

      <div className='flex items-center gap-2'>
        <Switch
          id='checked'
          checked={true}
        />
        <Label htmlFor='checked'>Checked</Label>
      </div>

      <div className='flex items-center gap-2'>
        <Switch
          id='disabled'
          disabled
        />
        <Label htmlFor='disabled'>Disabled</Label>
      </div>

      <div className='flex items-center gap-2'>
        <Switch
          id='disabled-checked'
          disabled
          checked={true}
        />
        <Label htmlFor='disabled-checked'>Disabled & Checked</Label>
      </div>
    </div>
  ),
}

export const ControlledState: Story = {
  render: () => {
    const [isChecked, setIsChecked] = React.useState(false)

    return (
      <div className='space-y-4'>
        <div className='flex gap-2'>
          <button
            onClick={() => setIsChecked(false)}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Set Off
          </button>
          <button
            onClick={() => setIsChecked(true)}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Set On
          </button>
          <button
            onClick={() => setIsChecked((prev) => !prev)}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Toggle
          </button>
        </div>

        <div className='flex items-center gap-2'>
          <Switch
            id='controlled'
            checked={isChecked}
            onCheckedChange={setIsChecked}
          />
          <Label htmlFor='controlled'>Controlled Switch</Label>
        </div>

        <Text
          variant='caption'
          color='secondary'>
          State: {isChecked ? 'On' : 'Off'}
        </Text>
      </div>
    )
  },
}

export const WithLabels: Story = {
  render: () => (
    <div className='space-y-6'>
      <div className='space-y-4'>
        <div className='flex items-center justify-between rounded-lg border p-4'>
          <div className='space-y-0.5'>
            <Label htmlFor='notifications'>Notifications</Label>
            <Text
              variant='caption'
              color='secondary'>
              Receive notifications about activity
            </Text>
          </div>
          <Switch id='notifications' />
        </div>

        <div className='flex items-center justify-between rounded-lg border p-4'>
          <div className='space-y-0.5'>
            <Label htmlFor='marketing'>Marketing emails</Label>
            <Text
              variant='caption'
              color='secondary'>
              Receive emails about new products and features
            </Text>
          </div>
          <Switch id='marketing' />
        </div>

        <div className='flex items-center justify-between rounded-lg border p-4'>
          <div className='space-y-0.5'>
            <Label htmlFor='security'>Security emails</Label>
            <Text
              variant='caption'
              color='secondary'>
              Receive emails about your account security
            </Text>
          </div>
          <Switch
            id='security'
            defaultChecked
          />
        </div>
      </div>
    </div>
  ),
}

export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      emailUpdates: false,
      darkMode: true,
      analytics: false,
      autoSave: true,
    })

    return (
      <div className='max-w-md space-y-6 rounded-lg border p-6'>
        <Text
          variant='heading-small'
          weight='semibold'>
          Settings
        </Text>

        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='space-y-0.5'>
              <Label htmlFor='notifications-setting'>Push Notifications</Label>
              <Text
                variant='caption'
                color='secondary'>
                Receive push notifications
              </Text>
            </div>
            <Switch
              id='notifications-setting'
              checked={settings.notifications}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, notifications: checked }))
              }
            />
          </div>

          <div className='flex items-center justify-between'>
            <div className='space-y-0.5'>
              <Label htmlFor='email-setting'>Email Updates</Label>
              <Text
                variant='caption'
                color='secondary'>
                Get updates via email
              </Text>
            </div>
            <Switch
              id='email-setting'
              checked={settings.emailUpdates}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, emailUpdates: checked }))
              }
            />
          </div>

          <div className='flex items-center justify-between'>
            <div className='space-y-0.5'>
              <Label htmlFor='dark-mode-setting'>Dark Mode</Label>
              <Text
                variant='caption'
                color='secondary'>
                Use dark theme
              </Text>
            </div>
            <Switch
              id='dark-mode-setting'
              variant='primary'
              checked={settings.darkMode}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, darkMode: checked }))
              }
            />
          </div>

          <div className='flex items-center justify-between'>
            <div className='space-y-0.5'>
              <Label htmlFor='analytics-setting'>Analytics</Label>
              <Text
                variant='caption'
                color='secondary'>
                Help improve the app
              </Text>
            </div>
            <Switch
              id='analytics-setting'
              checked={settings.analytics}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, analytics: checked }))
              }
            />
          </div>

          <div className='flex items-center justify-between'>
            <div className='space-y-0.5'>
              <Label htmlFor='auto-save-setting'>Auto Save</Label>
              <Text
                variant='caption'
                color='secondary'>
                Save changes automatically
              </Text>
            </div>
            <Switch
              id='auto-save-setting'
              variant='success'
              checked={settings.autoSave}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, autoSave: checked }))
              }
            />
          </div>
        </div>

        <div className='bg-base-50 dark:bg-base-900 rounded-lg p-4'>
          <Text
            variant='caption'
            weight='semibold'
            className='mb-2'>
            Active Settings:
          </Text>
          <Text
            variant='caption'
            color='secondary'>
            {Object.entries(settings)
              .filter(([, value]) => value)
              .map(([key]) => key)
              .join(', ') || 'None'}
          </Text>
        </div>
      </div>
    )
  },
}
