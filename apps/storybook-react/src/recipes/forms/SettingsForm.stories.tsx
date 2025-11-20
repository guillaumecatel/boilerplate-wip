import { Button, FormField, Label, Switch, Text } from '@myorg/ui'
import type { StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

const meta = {
  title: 'Recipes/Forms/Settings Panel',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A comprehensive settings panel using Switch components grouped by category with FormField. Demonstrates notification preferences, privacy controls, and security options with different variants for visual hierarchy.',
      },
    },
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      emailNotifications: true,
      pushNotifications: false,
      smsNotifications: false,
      weeklyDigest: true,
      productUpdates: true,
      publicProfile: false,
      showEmail: false,
      showActivity: true,
      twoFactor: false,
      sessionTimeout: true,
    })
    const [isSaving, setIsSaving] = useState(false)

    const handleSave = async () => {
      setIsSaving(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSaving(false)
      alert('Settings saved successfully!')
    }

    return (
      <div className='bg-base-100 dark:bg-base-900 min-h-screen py-12'>
        <div className='mx-auto max-w-3xl'>
          <div className='mb-6'>
            <Text
              as='h1'
              color='primary'
              variant='display-small'
              weight='bold'
              className='mb-2'>
              Account Settings
            </Text>
            <Text
              as='p'
              variant='body-large'
              color='secondary'>
              Manage your account preferences and privacy settings
            </Text>
          </div>

          <div className='flex flex-col gap-6'>
            <FormField
              legend='Notifications'
              description='Choose how you want to be notified about updates'>
              <div className='flex flex-col gap-5'>
                <div className='border-base-300 dark:border-base-700 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-email-notif'>
                      Email notifications
                    </Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Receive notifications via email
                    </Text>
                  </div>
                  <Switch
                    id='setting-email-notif'
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, emailNotifications: checked })
                    }
                    variant='primary'
                  />
                </div>

                <div className='border-base-300 dark:border-base-700 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-push-notif'>
                      Push notifications
                    </Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Receive push notifications on your device
                    </Text>
                  </div>
                  <Switch
                    id='setting-push-notif'
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, pushNotifications: checked })
                    }
                    variant='primary'
                  />
                </div>

                <div className='border-base-300 dark:border-base-700 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-sms-notif'>SMS notifications</Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Receive important alerts via SMS
                    </Text>
                  </div>
                  <Switch
                    id='setting-sms-notif'
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, smsNotifications: checked })
                    }
                    variant='primary'
                  />
                </div>

                <div className='border-base-300 dark:border-base-700 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-weekly'>Weekly digest</Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Get a weekly summary of your activity
                    </Text>
                  </div>
                  <Switch
                    id='setting-weekly'
                    checked={settings.weeklyDigest}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, weeklyDigest: checked })
                    }
                    variant='accent'
                  />
                </div>

                <div className='border-base-300 dark:border-base-700 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-updates'>Product updates</Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Stay informed about new features
                    </Text>
                  </div>
                  <Switch
                    id='setting-updates'
                    checked={settings.productUpdates}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, productUpdates: checked })
                    }
                    variant='accent'
                  />
                </div>
              </div>
            </FormField>

            <FormField
              legend='Privacy'
              description='Control what information is visible to others'
              variant='muted'>
              <div className='flex flex-col gap-5'>
                <div className='border-base-300 dark:border-base-700 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-public'>Public profile</Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Make your profile visible to everyone
                    </Text>
                  </div>
                  <Switch
                    id='setting-public'
                    checked={settings.publicProfile}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, publicProfile: checked })
                    }
                  />
                </div>

                <div className='border-base-300 dark:border-base-700 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-show-email'>Show email</Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Display your email on your profile
                    </Text>
                  </div>
                  <Switch
                    id='setting-show-email'
                    checked={settings.showEmail}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, showEmail: checked })
                    }
                  />
                </div>

                <div className='border-base-300 dark:border-base-700 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-activity'>Show activity</Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Let others see your recent activity
                    </Text>
                  </div>
                  <Switch
                    id='setting-activity'
                    checked={settings.showActivity}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, showActivity: checked })
                    }
                  />
                </div>
              </div>
            </FormField>

            <FormField
              legend='Security'
              description='Enhanced security options for your account'
              variant='accent'>
              <div className='flex flex-col gap-5'>
                <div className='border-accent-300 bg-accent-50 dark:border-accent-700 dark:bg-accent-950 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-2fa'>
                      Two-factor authentication
                    </Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Add an extra layer of security to your account
                    </Text>
                  </div>
                  <Switch
                    id='setting-2fa'
                    checked={settings.twoFactor}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, twoFactor: checked })
                    }
                    variant='success'
                  />
                </div>

                <div className='border-accent-300 bg-accent-50 dark:border-accent-700 dark:bg-accent-950 flex items-center justify-between rounded-lg border p-4'>
                  <div className='flex-1'>
                    <Label htmlFor='setting-timeout'>
                      Automatic session timeout
                    </Label>
                    <Text
                      variant='body-small'
                      color='secondary'>
                      Sign out after 30 minutes of inactivity
                    </Text>
                  </div>
                  <Switch
                    id='setting-timeout'
                    checked={settings.sessionTimeout}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, sessionTimeout: checked })
                    }
                    variant='success'
                  />
                </div>
              </div>
            </FormField>

            <div className='flex justify-end gap-4'>
              <Button
                variant='secondary'
                size='lg'
                disabled={isSaving}>
                Cancel
              </Button>
              <Button
                variant='primary'
                size='lg'
                onClick={handleSave}
                disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save changes'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
