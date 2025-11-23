import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { InputSearch } from '@myorg/ui'

const meta = {
  title: 'Components/Form/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the search input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the search icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
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
    showIcon: {
      control: 'boolean',
      description: 'Show search icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show clear button when input has value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof InputSearch>

export default meta

type Story = StoryObj<typeof InputSearch>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div className='w-80'>
        <InputSearch
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          placeholder='Search...'
        />
      </div>
    )
  },
}

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className='w-80'>
        <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
          Search
        </label>
        <InputSearch
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          placeholder='Search...'
        />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [valueSm, setValueSm] = useState('')
    const [valueMd, setValueMd] = useState('')
    const [valueLg, setValueLg] = useState('')

    return (
      <div className='w-80 space-y-6'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-xs font-medium'>
            Small
          </label>
          <InputSearch
            size='sm'
            value={valueSm}
            onChange={(e) => setValueSm(e.target.value)}
            onClear={() => setValueSm('')}
            placeholder='Search...'
          />
        </div>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Medium (Default)
          </label>
          <InputSearch
            size='md'
            value={valueMd}
            onChange={(e) => setValueMd(e.target.value)}
            onClear={() => setValueMd('')}
            placeholder='Search...'
          />
        </div>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-base font-medium'>
            Large
          </label>
          <InputSearch
            size='lg'
            value={valueLg}
            onChange={(e) => setValueLg(e.target.value)}
            onClear={() => setValueLg('')}
            placeholder='Search...'
          />
        </div>
      </div>
    )
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('React hooks')
    return (
      <div className='w-80'>
        <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
          Search with initial value
        </label>
        <InputSearch
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          placeholder='Search...'
        />
      </div>
    )
  },
}

export const IconPositions: Story = {
  render: () => {
    const [valueStart, setValueStart] = useState('')
    const [valueEnd, setValueEnd] = useState('')
    const [valueNone, setValueNone] = useState('')

    return (
      <div className='w-80 space-y-6'>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Icon at start (default)
          </label>
          <InputSearch
            iconPosition='start'
            value={valueStart}
            onChange={(e) => setValueStart(e.target.value)}
            onClear={() => setValueStart('')}
            placeholder='Search...'
          />
        </div>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Icon at end
          </label>
          <InputSearch
            iconPosition='end'
            value={valueEnd}
            onChange={(e) => setValueEnd(e.target.value)}
            onClear={() => setValueEnd('')}
            placeholder='Search...'
          />
        </div>
        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            No icon
          </label>
          <InputSearch
            showIcon={false}
            value={valueNone}
            onChange={(e) => setValueNone(e.target.value)}
            onClear={() => setValueNone('')}
            placeholder='Search...'
          />
        </div>
      </div>
    )
  },
}

export const WithoutClearButton: Story = {
  render: () => {
    const [value, setValue] = useState('React hooks')
    return (
      <div className='w-80'>
        <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
          Search without clear button
        </label>
        <InputSearch
          value={value}
          onChange={(e) => setValue(e.target.value)}
          showClearButton={false}
          placeholder='Search...'
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <div className='w-80'>
        <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
          Disabled search
        </label>
        <InputSearch
          value='Cannot edit'
          disabled
          placeholder='Search...'
        />
      </div>
    )
  },
}

export const InForm: Story = {
  render: () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<string[]>([])

    const handleSearch = (value: string) => {
      setQuery(value)
      // Simulate search
      if (value) {
        const mockResults = [
          'React documentation',
          'React hooks guide',
          'React performance',
          'React best practices',
          'React components',
        ].filter((item) => item.toLowerCase().includes(value.toLowerCase()))
        setResults(mockResults)
      } else {
        setResults([])
      }
    }

    return (
      <div className='border-base-300 bg-base-0 dark:border-base-700 dark:bg-base-950 w-96 rounded-lg border p-6'>
        <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-bold'>
          Documentation Search
        </h3>
        <InputSearch
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onClear={() => {
            setQuery('')
            setResults([])
          }}
          placeholder='Search documentation...'
        />
        {results.length > 0 && (
          <div className='border-base-200 dark:border-base-800 mt-4 space-y-2 rounded-lg border p-4'>
            <p className='text-base-600 dark:text-base-400 text-xs font-medium'>
              {results.length} results found
            </p>
            <ul className='space-y-2'>
              {results.map((result, index) => (
                <li
                  key={index}
                  className='text-base-700 dark:text-base-300 hover:text-accent-600 dark:hover:text-accent-400 cursor-pointer text-sm transition-colors'>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  },
}

export const All: Story = {
  render: () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('Search term')
    const [value3, setValue3] = useState('No clear button')

    return (
      <div className='w-96 space-y-12'>
        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            Sizes
          </h2>
          <div className='space-y-4'>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Small
              </p>
              <InputSearch
                size='sm'
                placeholder='Search...'
              />
            </div>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Medium
              </p>
              <InputSearch placeholder='Search...' />
            </div>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Large
              </p>
              <InputSearch
                size='lg'
                placeholder='Search...'
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            Icon Positions
          </h2>
          <div className='space-y-4'>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Icon at start
              </p>
              <InputSearch
                iconPosition='start'
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                onClear={() => setValue1('')}
                placeholder='Search...'
              />
            </div>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Icon at end
              </p>
              <InputSearch
                iconPosition='end'
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                onClear={() => setValue2('')}
                placeholder='Search...'
              />
            </div>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                No icon
              </p>
              <InputSearch
                showIcon={false}
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
                onClear={() => setValue3('')}
                placeholder='Search...'
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
            States
          </h2>
          <div className='space-y-4'>
            <div>
              <p className='text-base-600 dark:text-base-400 mb-2 text-sm'>
                Disabled
              </p>
              <InputSearch
                value='Disabled input'
                disabled
                placeholder='Search...'
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
}
