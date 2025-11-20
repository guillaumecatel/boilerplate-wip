import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type FormEvent } from 'react'

import {
  Button,
  Checkbox,
  FormField,
  Input,
  InputField,
  Label,
  Switch,
} from '@myorg/ui'

const meta = {
  title: 'Components/Form/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'FormField is a semantic wrapper component that renders a native `<fieldset>` element with a `<legend>`. It is used to group related form controls together, providing better semantic structure and accessibility. Unlike InputField which wraps a single input, FormField groups multiple related inputs.',
      },
    },
  },
  argTypes: {
    legend: {
      control: 'text',
      description:
        'The legend text that describes the group of form fields. Rendered as a native <legend> element.',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    children: {
      control: false,
      description:
        'The form fields to group together. Can contain InputField, Checkbox, Switch, or any other form controls.',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    description: {
      control: 'text',
      description:
        'Optional description text displayed below the legend to provide additional context about the field group.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Content',
      },
    },
    error: {
      control: 'text',
      description:
        'Error message to display when validation fails for the field group. Automatically changes the variant to destructive.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Validation',
      },
    },
    required: {
      control: 'boolean',
      description:
        'Whether at least one field in the group is required. Displays an asterisk (*) after the legend.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validation',
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Whether all fields in the group are disabled. Sets the native disabled attribute on the fieldset element.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the legend text.',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
        category: 'Appearance',
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'muted', 'accent', 'destructive'],
      description:
        'Visual style of the fieldset. Automatically set to destructive when error is provided.',
      table: {
        type: { summary: "'default' | 'muted' | 'accent' | 'destructive'" },
        defaultValue: { summary: "'default'" },
        category: 'Appearance',
      },
    },
  },
} satisfies Meta<typeof FormField>

export default meta

type Story = StoryObj<typeof FormField>

export const Playground: Story = {
  args: {
    legend: 'Notification preferences',
    description: 'Choose how you want to be notified',
  },
  render: (args) => (
    <FormField {...args}>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <Checkbox id='email-notif' />
          <Label htmlFor='email-notif'>Email notifications</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='push-notif' />
          <Label htmlFor='push-notif'>Push notifications</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='sms-notif' />
          <Label htmlFor='sms-notif'>SMS notifications</Label>
        </div>
      </div>
    </FormField>
  ),
}

export const WithCheckboxes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'FormField is perfect for grouping related checkboxes together. The legend acts as a group label.',
      },
    },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <FormField
        legend='Features'
        description='Select the features you want to enable'
        required>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='feature-api'
              defaultChecked
            />
            <Label htmlFor='feature-api'>API Access</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox id='feature-analytics' />
            <Label htmlFor='feature-analytics'>Analytics Dashboard</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox id='feature-export' />
            <Label htmlFor='feature-export'>Data Export</Label>
          </div>
        </div>
      </FormField>

      <FormField
        legend='Communication channels'
        variant='accent'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='channel-email'
              defaultChecked
            />
            <Label htmlFor='channel-email'>Email</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='channel-slack'
              defaultChecked
            />
            <Label htmlFor='channel-slack'>Slack</Label>
          </div>
        </div>
      </FormField>
    </div>
  ),
}

export const WithSwitches: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'FormField can also group Switch components for settings panels.',
      },
    },
  },
  render: () => (
    <FormField
      legend='Privacy settings'
      description='Control your privacy and data sharing preferences'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <Label htmlFor='privacy-profile'>Public profile</Label>
            <span className='text-body-small text-base-600 dark:text-base-400'>
              Make your profile visible to everyone
            </span>
          </div>
          <Switch id='privacy-profile' />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <Label htmlFor='privacy-search'>Show in search results</Label>
            <span className='text-body-small text-base-600 dark:text-base-400'>
              Allow others to find you via search
            </span>
          </div>
          <Switch
            id='privacy-search'
            defaultChecked
          />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <Label htmlFor='privacy-analytics'>Analytics</Label>
            <span className='text-body-small text-base-600 dark:text-base-400'>
              Help us improve by sharing usage data
            </span>
          </div>
          <Switch
            id='privacy-analytics'
            defaultChecked
          />
        </div>
      </div>
    </FormField>
  ),
}

export const WithInputFields: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'FormField can group multiple InputField components for related information.',
      },
    },
  },
  render: () => (
    <FormField
      legend='Personal information'
      description='This information will be displayed on your profile'
      required>
      <InputField
        label='First name'
        htmlFor='firstname'
        required>
        <Input
          type='text'
          id='firstname'
          placeholder='John'
        />
      </InputField>

      <InputField
        label='Last name'
        htmlFor='lastname'
        required>
        <Input
          type='text'
          id='lastname'
          placeholder='Doe'
        />
      </InputField>

      <InputField
        label='Email address'
        htmlFor='email'
        description='We will use this to contact you'
        required>
        <Input
          type='email'
          id='email'
          placeholder='john@example.com'
        />
      </InputField>
    </FormField>
  ),
}

export const WithError: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'When an error is provided, FormField displays it and changes the variant to destructive.',
      },
    },
  },
  render: () => (
    <FormField
      legend='Required information'
      error='Please select at least one option'
      required>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <Checkbox id='error-option1' />
          <Label htmlFor='error-option1'>Option 1</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='error-option2' />
          <Label htmlFor='error-option2'>Option 2</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='error-option3' />
          <Label htmlFor='error-option3'>Option 3</Label>
        </div>
      </div>
    </FormField>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'Disabled state applies to the entire fieldset, disabling all contained form controls.',
      },
    },
  },
  render: () => (
    <FormField
      legend='Premium features'
      description='Available in premium plan only'
      disabled>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <Checkbox id='disabled-feature1' />
          <Label htmlFor='disabled-feature1'>Advanced analytics</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='disabled-feature2' />
          <Label htmlFor='disabled-feature2'>Priority support</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='disabled-feature3' />
          <Label htmlFor='disabled-feature3'>Custom branding</Label>
        </div>
      </div>
    </FormField>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story: 'FormField supports three sizes for the legend text.',
      },
    },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <FormField
        legend='Small legend'
        size='sm'>
        <div className='flex items-center gap-2'>
          <Checkbox id='size-sm' />
          <Label
            htmlFor='size-sm'
            size='sm'>
            Small option
          </Label>
        </div>
      </FormField>

      <FormField
        legend='Medium legend'
        size='md'>
        <div className='flex items-center gap-2'>
          <Checkbox id='size-md' />
          <Label htmlFor='size-md'>Medium option</Label>
        </div>
      </FormField>

      <FormField
        legend='Large legend'
        size='lg'>
        <div className='flex items-center gap-2'>
          <Checkbox id='size-lg' />
          <Label
            htmlFor='size-lg'
            size='lg'>
            Large option
          </Label>
        </div>
      </FormField>
    </div>
  ),
}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story: 'FormField supports different visual variants.',
      },
    },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <FormField
        legend='Default variant'
        variant='default'>
        <div className='flex items-center gap-2'>
          <Checkbox id='variant-default' />
          <Label htmlFor='variant-default'>Default styling</Label>
        </div>
      </FormField>

      <FormField
        legend='Muted variant'
        variant='muted'
        description='With subtle background'>
        <div className='flex items-center gap-2'>
          <Checkbox id='variant-muted' />
          <Label htmlFor='variant-muted'>Muted styling</Label>
        </div>
      </FormField>

      <FormField
        legend='Accent variant'
        variant='accent'
        description='Highlighted for importance'>
        <div className='flex items-center gap-2'>
          <Checkbox
            id='variant-accent'
            defaultChecked
          />
          <Label htmlFor='variant-accent'>Accent styling</Label>
        </div>
      </FormField>

      <FormField
        legend='Destructive variant'
        variant='destructive'
        description='For errors or warnings'>
        <div className='flex items-center gap-2'>
          <Checkbox id='variant-destructive' />
          <Label htmlFor='variant-destructive'>Destructive styling</Label>
        </div>
      </FormField>
    </div>
  ),
}

export const CompleteExample: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'A complete example showing FormField in a multi-section registration form with validation.',
      },
    },
  },
  render: () => {
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [formData, setFormData] = useState({
      features: [] as string[],
      newsletter: false,
      terms: false,
    })

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      const newErrors: Record<string, string> = {}

      if (formData.features.length === 0) {
        newErrors.features = 'Please select at least one feature'
      }
      if (!formData.terms) {
        newErrors.terms = 'You must accept the terms and conditions'
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!')
      }
    }

    return (
      <form
        onSubmit={handleSubmit}
        className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-900 flex flex-col gap-6 rounded-lg border p-6'>
        <h3 className='text-base-900 dark:text-base-100 text-lg font-semibold'>
          Complete your registration
        </h3>

        <FormField
          legend='Select features'
          description='Choose the features you want to activate'
          error={errors.features}
          required>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='feature-1'
                checked={formData.features.includes('api')}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    features: e.target.checked
                      ? [...prev.features, 'api']
                      : prev.features.filter((f) => f !== 'api'),
                  }))
                }}
              />
              <Label htmlFor='feature-1'>API Access</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='feature-2'
                checked={formData.features.includes('analytics')}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    features: e.target.checked
                      ? [...prev.features, 'analytics']
                      : prev.features.filter((f) => f !== 'analytics'),
                  }))
                }}
              />
              <Label htmlFor='feature-2'>Analytics</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='feature-3'
                checked={formData.features.includes('export')}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    features: e.target.checked
                      ? [...prev.features, 'export']
                      : prev.features.filter((f) => f !== 'export'),
                  }))
                }}
              />
              <Label htmlFor='feature-3'>Data Export</Label>
            </div>
          </div>
        </FormField>

        <FormField
          legend='Communication preferences'
          variant='muted'>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='newsletter'
              checked={formData.newsletter}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  newsletter: e.target.checked,
                }))
              }
            />
            <Label htmlFor='newsletter'>
              Subscribe to our newsletter for updates and tips
            </Label>
          </div>
        </FormField>

        <FormField
          legend='Terms and conditions'
          error={errors.terms}
          required>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='terms'
              checked={formData.terms}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, terms: e.target.checked }))
              }
            />
            <Label htmlFor='terms'>
              I agree to the terms and conditions and privacy policy
            </Label>
          </div>
        </FormField>

        <Button
          type='submit'
          variant='primary'
          className='w-full'>
          Complete registration
        </Button>
      </form>
    )
  },
}
