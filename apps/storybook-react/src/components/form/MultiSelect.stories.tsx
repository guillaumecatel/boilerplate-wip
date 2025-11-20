import { Label, MultiSelect, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  title: 'Components/Form/MultiSelect',
  component: MultiSelect.Root,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'object',
      description:
        'The controlled value of the multi-select (array of strings)',
    },
    defaultValue: {
      control: 'object',
      description: 'The value when initially rendered (array of strings)',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Event handler called when the value changes',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the multi-select is disabled',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the multi-select',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no items are selected',
    },
    maxDisplay: {
      control: 'number',
      description: 'Maximum number of items to display before showing count',
    },
  },
} satisfies Meta<typeof MultiSelect.Root>

export default meta

type Story = StoryObj<typeof MultiSelect.Root>

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'pineapple', label: 'Pineapple' },
]

export const Playground: Story = {
  args: {
    options: fruitOptions,
    defaultValue: ['apple', 'banana'],
    placeholder: 'Select fruits...',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label
          htmlFor='multi-sm'
          size='sm'>
          Small Multi-Select
        </Label>
        <MultiSelect.Root
          id='multi-sm'
          options={fruitOptions}
          size='sm'
          defaultValue={['apple']}
        />
      </div>

      <div>
        <Label htmlFor='multi-md'>Medium Multi-Select</Label>
        <MultiSelect.Root
          id='multi-md'
          options={fruitOptions}
          defaultValue={['apple', 'banana']}
        />
      </div>

      <div>
        <Label
          htmlFor='multi-lg'
          size='lg'>
          Large Multi-Select
        </Label>
        <MultiSelect.Root
          id='multi-lg'
          options={fruitOptions}
          size='lg'
          defaultValue={['apple', 'banana', 'orange']}
        />
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='default'>Default State</Label>
        <MultiSelect.Root
          id='default'
          options={fruitOptions}
          placeholder='Select fruits...'
        />
      </div>

      <div>
        <Label htmlFor='with-selection'>With Selection</Label>
        <MultiSelect.Root
          id='with-selection'
          options={fruitOptions}
          defaultValue={['apple', 'banana', 'orange']}
        />
      </div>

      <div>
        <Label htmlFor='error'>Error State</Label>
        <MultiSelect.Root
          id='error'
          options={fruitOptions}
          error
          variant='error'
        />
        <Text
          variant='caption'
          color='inherit'
          className='mt-1 text-red-600'>
          Please select at least one option
        </Text>
      </div>

      <div>
        <Label htmlFor='disabled'>Disabled State</Label>
        <MultiSelect.Root
          id='disabled'
          options={fruitOptions}
          disabled
          defaultValue={['apple']}
        />
      </div>
    </div>
  ),
}

export const WithDisabledOptions: Story = {
  render: () => (
    <div>
      <Label htmlFor='disabled-options'>With Disabled Options</Label>
      <MultiSelect.Root
        id='disabled-options'
        options={[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana (Out of stock)', disabled: true },
          { value: 'orange', label: 'Orange' },
          { value: 'grape', label: 'Grape (Unavailable)', disabled: true },
          { value: 'mango', label: 'Mango' },
        ]}
        defaultValue={['apple']}
      />
    </div>
  ),
}

export const MaxDisplayItems: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='max-3'>Max 3 items displayed</Label>
        <MultiSelect.Root
          id='max-3'
          options={fruitOptions}
          maxDisplay={3}
          defaultValue={['apple', 'banana', 'orange']}
        />
        <Text
          variant='caption'
          color='secondary'
          className='mt-1'>
          Shows individual items when ≤ 3, otherwise shows count
        </Text>
      </div>

      <div>
        <Label htmlFor='max-3-many'>Max 3 items (with 5 selected)</Label>
        <MultiSelect.Root
          id='max-3-many'
          options={fruitOptions}
          maxDisplay={3}
          defaultValue={['apple', 'banana', 'orange', 'grape', 'mango']}
        />
        <Text
          variant='caption'
          color='secondary'
          className='mt-1'>
          Shows "5 selected" when more than 3 items
        </Text>
      </div>

      <div>
        <Label htmlFor='max-1'>Max 1 item displayed</Label>
        <MultiSelect.Root
          id='max-1'
          options={fruitOptions}
          maxDisplay={1}
          defaultValue={['apple', 'banana']}
        />
        <Text
          variant='caption'
          color='secondary'
          className='mt-1'>
          Shows "2 selected" immediately
        </Text>
      </div>
    </div>
  ),
}

export const ControlledState: Story = {
  render: () => {
    const [selectedFruits, setSelectedFruits] = React.useState<string[]>([
      'apple',
      'banana',
    ])

    return (
      <div className='space-y-4'>
        <div className='flex flex-wrap gap-2'>
          <button
            onClick={() => setSelectedFruits([])}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Clear All
          </button>
          <button
            onClick={() => setSelectedFruits(['apple'])}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Select Apple
          </button>
          <button
            onClick={() => setSelectedFruits(['apple', 'banana', 'orange'])}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Select 3 Items
          </button>
          <button
            onClick={() => setSelectedFruits(fruitOptions.map((f) => f.value))}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Select All
          </button>
        </div>

        <div>
          <Label htmlFor='controlled'>Controlled Multi-Select</Label>
          <MultiSelect.Root
            id='controlled'
            options={fruitOptions}
            value={selectedFruits}
            onValueChange={setSelectedFruits}
          />
          <Text
            variant='caption'
            color='secondary'
            className='mt-1'>
            Selected:{' '}
            {selectedFruits.length === 0 ? 'None' : selectedFruits.join(', ')}
          </Text>
        </div>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [skills, setSkills] = React.useState<string[]>([])
    const [languages, setLanguages] = React.useState<string[]>(['en'])

    return (
      <form className='max-w-md space-y-6 rounded-lg border p-6'>
        <div>
          <Text
            variant='heading-small'
            weight='semibold'
            className='mb-4'>
            Developer Profile
          </Text>
        </div>

        <div>
          <Label
            htmlFor='skills'
            required>
            Skills
          </Label>
          <MultiSelect.Root
            id='skills'
            options={[
              { value: 'react', label: 'React' },
              { value: 'vue', label: 'Vue.js' },
              { value: 'angular', label: 'Angular' },
              { value: 'typescript', label: 'TypeScript' },
              { value: 'javascript', label: 'JavaScript' },
              { value: 'python', label: 'Python' },
              { value: 'go', label: 'Go' },
              { value: 'rust', label: 'Rust' },
            ]}
            value={skills}
            onValueChange={setSkills}
            placeholder='Select your skills...'
            maxDisplay={2}
          />
          {skills.length === 0 && (
            <Text
              variant='caption'
              color='inherit'
              className='mt-1 text-red-600'>
              Please select at least one skill
            </Text>
          )}
        </div>

        <div>
          <Label
            htmlFor='languages'
            required>
            Languages
          </Label>
          <MultiSelect.Root
            id='languages'
            options={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Spanish' },
              { value: 'fr', label: 'French' },
              { value: 'de', label: 'German' },
              { value: 'zh', label: 'Chinese' },
              { value: 'ja', label: 'Japanese' },
            ]}
            value={languages}
            onValueChange={setLanguages}
            maxDisplay={3}
          />
        </div>

        <div>
          <Label htmlFor='frameworks'>Frameworks (Optional)</Label>
          <MultiSelect.Root
            id='frameworks'
            options={[
              { value: 'next', label: 'Next.js' },
              { value: 'nuxt', label: 'Nuxt.js' },
              { value: 'remix', label: 'Remix' },
              { value: 'astro', label: 'Astro' },
              { value: 'svelte', label: 'SvelteKit' },
            ]}
            placeholder='Select frameworks...'
            maxDisplay={2}
          />
        </div>

        <div className='bg-base-50 dark:bg-base-900 rounded-lg p-4'>
          <Text
            variant='caption'
            weight='semibold'
            className='mb-2'>
            Summary:
          </Text>
          <Text
            variant='caption'
            color='secondary'>
            Skills: {skills.length === 0 ? 'None' : skills.join(', ')}
          </Text>
          <Text
            variant='caption'
            color='secondary'>
            Languages: {languages.join(', ')}
          </Text>
        </div>
      </form>
    )
  },
}
