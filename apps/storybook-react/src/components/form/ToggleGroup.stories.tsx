import { Label, Text, ToggleGroup, ToggleGroupItem } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  title: 'Components/Form/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description:
        "Selection mode: 'single' allows one selection at a time (radio behavior), 'multiple' allows multiple selections (checkbox behavior)",
      table: {
        type: { summary: "'single' | 'multiple'" },
      },
    },
    value: {
      control: false,
      description:
        "The controlled value. Type depends on 'type' prop: string for 'single', string[] for 'multiple'",
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    defaultValue: {
      control: false,
      description:
        "The value when initially rendered. Type depends on 'type' prop: string for 'single', string[] for 'multiple'",
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    onValueChange: {
      action: 'valueChanged',
      description:
        "Event handler called when the value changes. Signature depends on 'type' prop",
      table: {
        type: {
          summary: '(value: string) => void | (value: string[]) => void',
        },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the toggle group',
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "'horizontal'" },
      },
    },
    attached: {
      control: 'boolean',
      description:
        'Whether buttons are visually attached (no gap) or separated',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire group is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
} satisfies Meta<typeof ToggleGroup>

export default meta

type Story = StoryObj<typeof ToggleGroup>

export const Playground: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value='left'>Left</ToggleGroupItem>
      <ToggleGroupItem value='center'>Center</ToggleGroupItem>
      <ToggleGroupItem value='right'>Right</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const SingleSelection: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='align-single'>Text Alignment (Single)</Label>
        <div className='mt-2'>
          <ToggleGroup
            type='single'
            defaultValue='center'>
            <ToggleGroupItem value='left'>Left</ToggleGroupItem>
            <ToggleGroupItem value='center'>Center</ToggleGroupItem>
            <ToggleGroupItem value='right'>Right</ToggleGroupItem>
            <ToggleGroupItem value='justify'>Justify</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  ),
}

export const MultipleSelection: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='formatting'>Text Formatting (Multiple)</Label>
        <div className='mt-2'>
          <ToggleGroup
            type='multiple'
            defaultValue={['bold']}>
            <ToggleGroupItem
              value='bold'
              variant='icon-outline'
              aria-label='Bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M14 12a4 4 0 0 0 0-8H6v8'></path>
                <path d='M15 20a4 4 0 0 0 0-8H6v8Z'></path>
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem
              value='italic'
              variant='icon-outline'
              aria-label='Italic'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <line
                  x1='19'
                  y1='4'
                  x2='10'
                  y2='4'></line>
                <line
                  x1='14'
                  y1='20'
                  x2='5'
                  y2='20'></line>
                <line
                  x1='15'
                  y1='4'
                  x2='9'
                  y2='20'></line>
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem
              value='underline'
              variant='icon-outline'
              aria-label='Underline'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M6 4v6a6 6 0 0 0 12 0V4'></path>
                <line
                  x1='4'
                  y1='20'
                  x2='20'
                  y2='20'></line>
              </svg>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  ),
}

export const Orientations: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <Label>Horizontal (Default)</Label>
        <div className='mt-2'>
          <ToggleGroup type='single'>
            <ToggleGroupItem value='1'>Option 1</ToggleGroupItem>
            <ToggleGroupItem value='2'>Option 2</ToggleGroupItem>
            <ToggleGroupItem value='3'>Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <Label>Vertical</Label>
        <div className='mt-2'>
          <ToggleGroup
            type='single'
            orientation='vertical'>
            <ToggleGroupItem value='1'>Option 1</ToggleGroupItem>
            <ToggleGroupItem value='2'>Option 2</ToggleGroupItem>
            <ToggleGroupItem value='3'>Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  ),
}

export const AttachedVsDetached: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <Label>Attached (Default)</Label>
        <div className='mt-2'>
          <ToggleGroup
            type='single'
            attached>
            <ToggleGroupItem value='1'>Option 1</ToggleGroupItem>
            <ToggleGroupItem value='2'>Option 2</ToggleGroupItem>
            <ToggleGroupItem value='3'>Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <Label>Detached</Label>
        <div className='mt-2'>
          <ToggleGroup
            type='single'
            attached={false}>
            <ToggleGroupItem value='1'>Option 1</ToggleGroupItem>
            <ToggleGroupItem value='2'>Option 2</ToggleGroupItem>
            <ToggleGroupItem value='3'>Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  ),
}

export const WithVariants: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <Label>Default Variant</Label>
        <div className='mt-2'>
          <ToggleGroup
            type='single'
            defaultValue='2'>
            <ToggleGroupItem
              value='1'
              variant='default'>
              Option 1
            </ToggleGroupItem>
            <ToggleGroupItem
              value='2'
              variant='default'>
              Option 2
            </ToggleGroupItem>
            <ToggleGroupItem
              value='3'
              variant='default'>
              Option 3
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <Label>Outline Variant</Label>
        <div className='mt-2'>
          <ToggleGroup
            type='single'
            defaultValue='2'>
            <ToggleGroupItem
              value='1'
              variant='outline'>
              Option 1
            </ToggleGroupItem>
            <ToggleGroupItem
              value='2'
              variant='outline'>
              Option 2
            </ToggleGroupItem>
            <ToggleGroupItem
              value='3'
              variant='outline'>
              Option 3
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div>
        <Label>Primary Variant</Label>
        <div className='mt-2'>
          <ToggleGroup
            type='single'
            defaultValue='2'>
            <ToggleGroupItem
              value='1'
              variant='primary'>
              Option 1
            </ToggleGroupItem>
            <ToggleGroupItem
              value='2'
              variant='primary'>
              Option 2
            </ToggleGroupItem>
            <ToggleGroupItem
              value='3'
              variant='primary'>
              Option 3
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  ),
}

export const ControlledSingle: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>('center')

    return (
      <div className='space-y-4'>
        <div className='flex flex-wrap gap-2'>
          <button
            onClick={() => setValue('left')}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Select Left
          </button>
          <button
            onClick={() => setValue('center')}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Select Center
          </button>
          <button
            onClick={() => setValue('right')}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Select Right
          </button>
        </div>

        <div>
          <Label>Controlled Single Selection</Label>
          <div className='mt-2'>
            <ToggleGroup
              type='single'
              value={value}
              onValueChange={(val) => val && setValue(val)}>
              <ToggleGroupItem value='left'>Left</ToggleGroupItem>
              <ToggleGroupItem value='center'>Center</ToggleGroupItem>
              <ToggleGroupItem value='right'>Right</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <Text
            variant='caption'
            color='secondary'
            className='mt-1'>
            Selected: {value}
          </Text>
        </div>
      </div>
    )
  },
}

export const ControlledMultiple: Story = {
  render: () => {
    const [values, setValues] = React.useState<string[]>(['bold'])

    return (
      <div className='space-y-4'>
        <div className='flex flex-wrap gap-2'>
          <button
            onClick={() => setValues([])}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Clear All
          </button>
          <button
            onClick={() => setValues(['bold'])}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Bold Only
          </button>
          <button
            onClick={() => setValues(['bold', 'italic', 'underline'])}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Select All
          </button>
        </div>

        <div>
          <Label>Controlled Multiple Selection</Label>
          <div className='mt-2'>
            <ToggleGroup
              type='multiple'
              value={values}
              onValueChange={setValues}>
              <ToggleGroupItem
                value='bold'
                variant='outline'>
                Bold
              </ToggleGroupItem>
              <ToggleGroupItem
                value='italic'
                variant='outline'>
                Italic
              </ToggleGroupItem>
              <ToggleGroupItem
                value='underline'
                variant='outline'>
                Underline
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <Text
            variant='caption'
            color='secondary'
            className='mt-1'>
            Selected: {values.length === 0 ? 'None' : values.join(', ')}
          </Text>
        </div>
      </div>
    )
  },
}

export const RichTextEditor: Story = {
  render: () => {
    const [alignment, setAlignment] = React.useState('left')
    const [formatting, setFormatting] = React.useState<string[]>([])

    return (
      <div className='max-w-3xl space-y-4 rounded-lg border p-6'>
        <Text
          variant='heading-small'
          weight='semibold'>
          Rich Text Editor
        </Text>

        <div className='flex flex-wrap gap-4 rounded-lg border p-2'>
          <div className='flex items-center gap-2'>
            <Text
              variant='caption'
              color='secondary'>
              Format:
            </Text>
            <ToggleGroup
              type='multiple'
              value={formatting}
              onValueChange={setFormatting}>
              <ToggleGroupItem
                value='bold'
                variant='icon-outline'
                size='sm'
                aria-label='Bold'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M14 12a4 4 0 0 0 0-8H6v8'></path>
                  <path d='M15 20a4 4 0 0 0 0-8H6v8Z'></path>
                </svg>
              </ToggleGroupItem>
              <ToggleGroupItem
                value='italic'
                variant='icon-outline'
                size='sm'
                aria-label='Italic'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <line
                    x1='19'
                    y1='4'
                    x2='10'
                    y2='4'></line>
                  <line
                    x1='14'
                    y1='20'
                    x2='5'
                    y2='20'></line>
                  <line
                    x1='15'
                    y1='4'
                    x2='9'
                    y2='20'></line>
                </svg>
              </ToggleGroupItem>
              <ToggleGroupItem
                value='underline'
                variant='icon-outline'
                size='sm'
                aria-label='Underline'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M6 4v6a6 6 0 0 0 12 0V4'></path>
                  <line
                    x1='4'
                    y1='20'
                    x2='20'
                    y2='20'></line>
                </svg>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className='bg-base-200 h-6 w-px'></div>

          <div className='flex items-center gap-2'>
            <Text
              variant='caption'
              color='secondary'>
              Align:
            </Text>
            <ToggleGroup
              type='single'
              value={alignment}
              onValueChange={(val) => val && setAlignment(val)}>
              <ToggleGroupItem
                value='left'
                variant='icon-outline'
                size='sm'
                aria-label='Align left'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <line
                    x1='21'
                    y1='6'
                    x2='3'
                    y2='6'></line>
                  <line
                    x1='15'
                    y1='12'
                    x2='3'
                    y2='12'></line>
                  <line
                    x1='17'
                    y1='18'
                    x2='3'
                    y2='18'></line>
                </svg>
              </ToggleGroupItem>
              <ToggleGroupItem
                value='center'
                variant='icon-outline'
                size='sm'
                aria-label='Align center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <line
                    x1='21'
                    y1='6'
                    x2='3'
                    y2='6'></line>
                  <line
                    x1='17'
                    y1='12'
                    x2='7'
                    y2='12'></line>
                  <line
                    x1='19'
                    y1='18'
                    x2='5'
                    y2='18'></line>
                </svg>
              </ToggleGroupItem>
              <ToggleGroupItem
                value='right'
                variant='icon-outline'
                size='sm'
                aria-label='Align right'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <line
                    x1='21'
                    y1='6'
                    x2='3'
                    y2='6'></line>
                  <line
                    x1='21'
                    y1='12'
                    x2='9'
                    y2='12'></line>
                  <line
                    x1='21'
                    y1='18'
                    x2='7'
                    y2='18'></line>
                </svg>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div className='min-h-[200px] rounded-lg border p-4'>
          <Text
            as='div'
            variant='body-medium'
            className={` ${formatting.includes('bold') ? 'font-bold' : ''} ${formatting.includes('italic') ? 'italic' : ''} ${formatting.includes('underline') ? 'underline' : ''} ${alignment === 'center' ? 'text-center' : ''} ${alignment === 'right' ? 'text-right' : ''} `}>
            Your text content here with formatting applied.
          </Text>
        </div>
      </div>
    )
  },
}

export const WithTextAndIcons: Story = {
  render: () => {
    const [view, setView] = React.useState('grid')

    return (
      <div className='space-y-8'>
        <div className='space-y-4'>
          <Text
            variant='body-large'
            weight='semibold'>
            View Switcher with Icons and Text
          </Text>
          <ToggleGroup
            type='single'
            value={view}
            onValueChange={(val) => val && setView(val)}>
            <ToggleGroupItem
              value='grid'
              variant='outline'
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <rect
                    width='7'
                    height='7'
                    x='3'
                    y='3'
                    rx='1'></rect>
                  <rect
                    width='7'
                    height='7'
                    x='14'
                    y='3'
                    rx='1'></rect>
                  <rect
                    width='7'
                    height='7'
                    x='14'
                    y='14'
                    rx='1'></rect>
                  <rect
                    width='7'
                    height='7'
                    x='3'
                    y='14'
                    rx='1'></rect>
                </svg>
              }>
              Grid
            </ToggleGroupItem>
            <ToggleGroupItem
              value='list'
              variant='outline'
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <line
                    x1='8'
                    x2='21'
                    y1='6'
                    y2='6'></line>
                  <line
                    x1='8'
                    x2='21'
                    y1='12'
                    y2='12'></line>
                  <line
                    x1='8'
                    x2='21'
                    y1='18'
                    y2='18'></line>
                  <line
                    x1='3'
                    x2='3.01'
                    y1='6'
                    y2='6'></line>
                  <line
                    x1='3'
                    x2='3.01'
                    y1='12'
                    y2='12'></line>
                  <line
                    x1='3'
                    x2='3.01'
                    y1='18'
                    y2='18'></line>
                </svg>
              }>
              List
            </ToggleGroupItem>
            <ToggleGroupItem
              value='table'
              variant='outline'
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <rect
                    width='18'
                    height='18'
                    x='3'
                    y='3'
                    rx='2'></rect>
                  <path d='M3 9h18'></path>
                  <path d='M3 15h18'></path>
                  <path d='M9 3v18'></path>
                  <path d='M15 3v18'></path>
                </svg>
              }>
              Table
            </ToggleGroupItem>
          </ToggleGroup>

          <div className='bg-base-50 dark:bg-base-900 rounded-lg p-4'>
            <Text variant='caption'>
              Current view: <strong>{view}</strong>
            </Text>
          </div>
        </div>

        <div className='space-y-4'>
          <Text
            variant='body-large'
            weight='semibold'>
            Actions with Icons (Icon at End)
          </Text>
          <ToggleGroup
            type='multiple'
            attached={false}>
            <ToggleGroupItem
              value='download'
              variant='primary'
              iconPosition='end'
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                  <polyline points='7 10 12 15 17 10'></polyline>
                  <line
                    x1='12'
                    y1='15'
                    x2='12'
                    y2='3'></line>
                </svg>
              }>
              Download
            </ToggleGroupItem>
            <ToggleGroupItem
              value='share'
              variant='secondary'
              iconPosition='end'
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'></path>
                  <polyline points='16 6 12 2 8 6'></polyline>
                  <line
                    x1='12'
                    y1='2'
                    x2='12'
                    y2='15'></line>
                </svg>
              }>
              Share
            </ToggleGroupItem>
            <ToggleGroupItem
              value='bookmark'
              variant='outline'
              iconPosition='end'
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z'></path>
                </svg>
              }>
              Bookmark
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    )
  },
}
