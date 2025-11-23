import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { InputQuantity } from '@myorg/ui'

const meta = {
  title: 'Components/Form/InputQuantity',
  component: InputQuantity,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    min: {
      control: 'number',
      description: 'Minimum value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: {
        type: { summary: 'number' },
      },
    },
    step: {
      control: 'number',
      description: 'Step increment/decrement value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showButtons: {
      control: 'boolean',
      description: 'Show increment/decrement buttons',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof InputQuantity>

export default meta

type Story = StoryObj<typeof InputQuantity>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(5)
    return (
      <InputQuantity
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
}

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <div className='space-y-4'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Quantity
          </label>
          <InputQuantity
            value={value}
            onValueChange={setValue}
          />
        </div>
        <p className='text-base-600 dark:text-base-400 text-sm'>
          Current value: {value}
        </p>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [valueSm, setValueSm] = useState(1)
    const [valueMd, setValueMd] = useState(5)
    const [valueLg, setValueLg] = useState(10)

    return (
      <div className='space-y-8'>
        <div>
          <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
            Small
          </h3>
          <InputQuantity
            size='sm'
            value={valueSm}
            onValueChange={setValueSm}
          />
        </div>

        <div>
          <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
            Medium (Default)
          </h3>
          <InputQuantity
            size='md'
            value={valueMd}
            onValueChange={setValueMd}
          />
        </div>

        <div>
          <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
            Large
          </h3>
          <InputQuantity
            size='lg'
            value={valueLg}
            onValueChange={setValueLg}
          />
        </div>
      </div>
    )
  },
}

export const WithMinMax: Story = {
  render: () => {
    const [value, setValue] = useState(5)
    return (
      <div className='space-y-4'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Quantity (Min: 0, Max: 10)
          </label>
          <InputQuantity
            value={value}
            onValueChange={setValue}
            min={0}
            max={10}
          />
        </div>
        <p className='text-base-600 dark:text-base-400 text-sm'>
          Current value: {value}
        </p>
      </div>
    )
  },
}

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <div className='space-y-4'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Quantity (Step: 5)
          </label>
          <InputQuantity
            value={value}
            onValueChange={setValue}
            step={5}
            min={0}
            max={100}
          />
        </div>
        <p className='text-base-600 dark:text-base-400 text-sm'>
          Current value: {value}
        </p>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState(5)
    return (
      <div className='space-y-4'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Quantity (Disabled)
          </label>
          <InputQuantity
            value={value}
            onValueChange={setValue}
            disabled
          />
        </div>
      </div>
    )
  },
}

export const WithoutButtons: Story = {
  render: () => {
    const [value, setValue] = useState(5)
    return (
      <div className='space-y-4'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Quantity (No Buttons)
          </label>
          <InputQuantity
            value={value}
            onValueChange={setValue}
            showButtons={false}
          />
        </div>
        <p className='text-base-600 dark:text-base-400 text-sm'>
          Current value: {value}
        </p>
      </div>
    )
  },
}

export const InForm: Story = {
  render: () => {
    const [quantity1, setQuantity1] = useState(1)
    const [quantity2, setQuantity2] = useState(2)
    const [quantity3, setQuantity3] = useState(1)

    const total = quantity1 * 29.99 + quantity2 * 49.99 + quantity3 * 19.99

    return (
      <div className='border-base-300 bg-base-0 dark:border-base-700 dark:bg-base-950 mx-auto max-w-md space-y-6 rounded-lg border p-6'>
        <h3 className='text-base-900 dark:text-base-100 text-xl font-bold'>
          Shopping Cart
        </h3>

        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='flex-1'>
              <p className='text-base-900 dark:text-base-100 font-medium'>
                Product A
              </p>
              <p className='text-base-600 dark:text-base-400 text-sm'>$29.99</p>
            </div>
            <InputQuantity
              size='sm'
              value={quantity1}
              onValueChange={setQuantity1}
              min={0}
              max={99}
            />
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex-1'>
              <p className='text-base-900 dark:text-base-100 font-medium'>
                Product B
              </p>
              <p className='text-base-600 dark:text-base-400 text-sm'>$49.99</p>
            </div>
            <InputQuantity
              size='sm'
              value={quantity2}
              onValueChange={setQuantity2}
              min={0}
              max={99}
            />
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex-1'>
              <p className='text-base-900 dark:text-base-100 font-medium'>
                Product C
              </p>
              <p className='text-base-600 dark:text-base-400 text-sm'>$19.99</p>
            </div>
            <InputQuantity
              size='sm'
              value={quantity3}
              onValueChange={setQuantity3}
              min={0}
              max={99}
            />
          </div>
        </div>

        <div className='border-base-300 dark:border-base-700 border-t pt-4'>
          <div className='flex items-center justify-between'>
            <p className='text-base-900 dark:text-base-100 text-lg font-bold'>
              Total
            </p>
            <p className='text-accent-600 dark:text-accent-400 text-lg font-bold'>
              ${total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    )
  },
}

export const All: Story = {
  render: () => {
    const [value1, setValue1] = useState(5)
    const [value2, setValue2] = useState(10)
    const [value3, setValue3] = useState(50)
    const [value4, setValue4] = useState(3)
    const [value5, setValue5] = useState(7)

    return (
      <div className='space-y-12'>
        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            Sizes
          </h2>
          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <span className='text-base-600 dark:text-base-400 w-20 text-sm'>
                Small:
              </span>
              <InputQuantity
                size='sm'
                value={value1}
                onValueChange={setValue1}
              />
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-base-600 dark:text-base-400 w-20 text-sm'>
                Medium:
              </span>
              <InputQuantity
                size='md'
                value={value2}
                onValueChange={setValue2}
              />
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-base-600 dark:text-base-400 w-20 text-sm'>
                Large:
              </span>
              <InputQuantity
                size='lg'
                value={value3}
                onValueChange={setValue3}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            With Constraints
          </h2>
          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <span className='text-base-600 dark:text-base-400 w-48 text-sm'>
                Min: 0, Max: 10:
              </span>
              <InputQuantity
                value={value4}
                onValueChange={setValue4}
                min={0}
                max={10}
              />
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-base-600 dark:text-base-400 w-48 text-sm'>
                Step: 5:
              </span>
              <InputQuantity
                value={value5}
                onValueChange={setValue5}
                step={5}
                min={0}
                max={100}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            States
          </h2>
          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <span className='text-base-600 dark:text-base-400 w-48 text-sm'>
                Disabled:
              </span>
              <InputQuantity
                value={5}
                disabled
              />
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-base-600 dark:text-base-400 w-48 text-sm'>
                Without Buttons:
              </span>
              <InputQuantity
                value={5}
                showButtons={false}
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
}
