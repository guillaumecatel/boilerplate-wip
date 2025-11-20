import { Label, Text, Toggle } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  title: 'Components/Form/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: {
    children: 'Toggle me',
    defaultPressed: false,
    pressed: false,
    disabled: false,
    size: 'md',
    variant: 'default',
    icon: undefined,
    iconPosition: 'start',
  },
  argTypes: {
    pressed: {
      control: 'boolean',
      description: 'The controlled pressed state',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultPressed: {
      control: 'boolean',
      description: 'The pressed state when initially rendered',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onPressedChange: {
      action: 'pressedChanged',
      description: 'Event handler called when the pressed state changes',
      table: {
        type: { summary: '(pressed: boolean) => void' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the toggle',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
      },
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'primary',
        'secondary',
        'ghost',
        'accent',
        'destructive',
        'icon-default',
        'icon-outline',
        'icon-primary',
        'icon-secondary',
        'icon-ghost',
        'icon-accent',
        'icon-destructive',
      ],
      description:
        'Visual style variant. Use icon-* variants for icon-only toggles.',
      table: {
        type: {
          summary:
            "'default' | 'outline' | 'primary' | 'secondary' | 'ghost' | 'accent' | 'destructive' | 'icon-default' | 'icon-outline' | 'icon-primary' | 'icon-secondary' | 'icon-ghost' | 'icon-accent' | 'icon-destructive'",
        },
        defaultValue: { summary: "'default'" },
      },
    },
    icon: {
      control: false,
      description:
        'Icon element to display alongside text. Not used with icon-* variants.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the icon relative to the text',
      table: {
        type: { summary: "'start' | 'end'" },
        defaultValue: { summary: "'start'" },
      },
    },
    children: {
      control: 'text',
      description:
        'Content of the toggle. For icon-* variants, pass the SVG icon directly. For text variants, pass the text label.',
      table: {
        type: { summary: 'ReactNode' },
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
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof Toggle>

export const Playground: Story = {
  args: {
    children: 'Toggle me',
    defaultPressed: false,
  },
}

export const Variants: Story = {
  render: () => (
    <div className='space-y-6'>
      <div className='space-y-4'>
        <Text
          variant='heading-small'
          weight='semibold'>
          Text Variants
        </Text>

        <div className='space-y-4'>
          <div>
            <Label htmlFor='default-variant'>Default</Label>
            <div className='mt-2'>
              <Toggle
                id='default-variant'
                variant='default'>
                Default
              </Toggle>
            </div>
          </div>

          <div>
            <Label htmlFor='outline-variant'>Outline</Label>
            <div className='mt-2'>
              <Toggle
                id='outline-variant'
                variant='outline'>
                Outline
              </Toggle>
            </div>
          </div>

          <div>
            <Label htmlFor='primary-variant'>Primary</Label>
            <div className='mt-2'>
              <Toggle
                id='primary-variant'
                variant='primary'>
                Primary
              </Toggle>
            </div>
          </div>

          <div>
            <Label htmlFor='secondary-variant'>Secondary</Label>
            <div className='mt-2'>
              <Toggle
                id='secondary-variant'
                variant='secondary'>
                Secondary
              </Toggle>
            </div>
          </div>

          <div>
            <Label htmlFor='ghost-variant'>Ghost</Label>
            <div className='mt-2'>
              <Toggle
                id='ghost-variant'
                variant='ghost'>
                Ghost
              </Toggle>
            </div>
          </div>

          <div>
            <Label htmlFor='accent-variant'>Accent</Label>
            <div className='mt-2'>
              <Toggle
                id='accent-variant'
                variant='accent'>
                Accent
              </Toggle>
            </div>
          </div>

          <div>
            <Label htmlFor='destructive-variant'>Destructive</Label>
            <div className='mt-2'>
              <Toggle
                id='destructive-variant'
                variant='destructive'>
                Destructive
              </Toggle>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <Text
          variant='heading-small'
          weight='semibold'>
          Icon Variants
        </Text>

        <div className='flex flex-wrap gap-2'>
          <Toggle
            variant='icon-default'
            aria-label='Default icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M12 5v14'></path>
              <path d='M5 12h14'></path>
            </svg>
          </Toggle>

          <Toggle
            variant='icon-outline'
            aria-label='Outline icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M12 5v14'></path>
              <path d='M5 12h14'></path>
            </svg>
          </Toggle>

          <Toggle
            variant='icon-primary'
            aria-label='Primary icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M12 5v14'></path>
              <path d='M5 12h14'></path>
            </svg>
          </Toggle>

          <Toggle
            variant='icon-secondary'
            aria-label='Secondary icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M12 5v14'></path>
              <path d='M5 12h14'></path>
            </svg>
          </Toggle>

          <Toggle
            variant='icon-ghost'
            aria-label='Ghost icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M12 5v14'></path>
              <path d='M5 12h14'></path>
            </svg>
          </Toggle>

          <Toggle
            variant='icon-accent'
            aria-label='Accent icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M12 5v14'></path>
              <path d='M5 12h14'></path>
            </svg>
          </Toggle>

          <Toggle
            variant='icon-destructive'
            aria-label='Destructive icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M12 5v14'></path>
              <path d='M5 12h14'></path>
            </svg>
          </Toggle>
        </div>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label
          htmlFor='toggle-sm'
          size='sm'>
          Small Toggle
        </Label>
        <div className='mt-2'>
          <Toggle
            id='toggle-sm'
            size='sm'>
            Small
          </Toggle>
        </div>
      </div>

      <div>
        <Label htmlFor='toggle-md'>Medium Toggle</Label>
        <div className='mt-2'>
          <Toggle id='toggle-md'>Medium</Toggle>
        </div>
      </div>

      <div>
        <Label
          htmlFor='toggle-lg'
          size='lg'>
          Large Toggle
        </Label>
        <div className='mt-2'>
          <Toggle
            id='toggle-lg'
            size='lg'>
            Large
          </Toggle>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='unpressed'>Unpressed</Label>
        <div className='mt-2'>
          <Toggle
            id='unpressed'
            pressed={false}>
            Not Active
          </Toggle>
        </div>
      </div>

      <div>
        <Label htmlFor='pressed'>Pressed</Label>
        <div className='mt-2'>
          <Toggle
            id='pressed'
            pressed={true}>
            Active
          </Toggle>
        </div>
      </div>

      <div>
        <Label htmlFor='disabled'>Disabled</Label>
        <div className='mt-2'>
          <Toggle
            id='disabled'
            disabled>
            Disabled
          </Toggle>
        </div>
      </div>

      <div>
        <Label htmlFor='disabled-pressed'>Disabled & Pressed</Label>
        <div className='mt-2'>
          <Toggle
            id='disabled-pressed'
            disabled
            pressed={true}>
            Disabled Active
          </Toggle>
        </div>
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <Label>Icon Variants</Label>
        <div className='mt-2 flex gap-2'>
          <Toggle
            variant='icon-default'
            aria-label='Toggle italic'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
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
          </Toggle>

          <Toggle
            variant='icon-outline'
            aria-label='Toggle bold'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M14 12a4 4 0 0 0 0-8H6v8'></path>
              <path d='M15 20a4 4 0 0 0 0-8H6v8Z'></path>
            </svg>
          </Toggle>

          <Toggle
            variant='icon-primary'
            aria-label='Toggle underline'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
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
          </Toggle>
        </div>
      </div>

      <div>
        <Label>Icon Sizes</Label>
        <div className='mt-2 flex items-center gap-2'>
          <Toggle
            variant='icon-outline'
            size='sm'
            aria-label='Small'>
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
          </Toggle>

          <Toggle
            variant='icon-outline'
            size='md'
            aria-label='Medium'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M14 12a4 4 0 0 0 0-8H6v8'></path>
              <path d='M15 20a4 4 0 0 0 0-8H6v8Z'></path>
            </svg>
          </Toggle>

          <Toggle
            variant='icon-outline'
            size='lg'
            aria-label='Large'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M14 12a4 4 0 0 0 0-8H6v8'></path>
              <path d='M15 20a4 4 0 0 0 0-8H6v8Z'></path>
            </svg>
          </Toggle>
        </div>
      </div>
    </div>
  ),
}

export const ControlledState: Story = {
  render: () => {
    const [isPressed, setIsPressed] = React.useState(false)

    return (
      <div className='space-y-4'>
        <div className='flex gap-2'>
          <button
            onClick={() => setIsPressed(false)}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Set Off
          </button>
          <button
            onClick={() => setIsPressed(true)}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Set On
          </button>
          <button
            onClick={() => setIsPressed((prev) => !prev)}
            className='hover:bg-base-50 rounded border px-3 py-1 text-sm'>
            Toggle
          </button>
        </div>

        <div>
          <Label htmlFor='controlled'>Controlled Toggle</Label>
          <div className='mt-2'>
            <Toggle
              id='controlled'
              pressed={isPressed}
              onPressedChange={setIsPressed}
              variant='outline'>
              {isPressed ? 'ON' : 'OFF'}
            </Toggle>
          </div>
          <Text
            variant='caption'
            color='secondary'
            className='mt-1'>
            State: {isPressed ? 'Pressed' : 'Not Pressed'}
          </Text>
        </div>
      </div>
    )
  },
}

export const TextFormattingToolbar: Story = {
  render: () => {
    const [formatting, setFormatting] = React.useState({
      bold: false,
      italic: false,
      underline: false,
      strikethrough: false,
    })

    return (
      <div className='space-y-4'>
        <div className='flex gap-1 rounded-lg border p-1'>
          <Toggle
            pressed={formatting.bold}
            onPressedChange={(pressed) =>
              setFormatting((prev) => ({ ...prev, bold: pressed }))
            }
            variant='icon-outline'
            size='sm'
            aria-label='Toggle bold'>
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
          </Toggle>

          <Toggle
            pressed={formatting.italic}
            onPressedChange={(pressed) =>
              setFormatting((prev) => ({ ...prev, italic: pressed }))
            }
            variant='icon-outline'
            size='sm'
            aria-label='Toggle italic'>
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
          </Toggle>

          <Toggle
            pressed={formatting.underline}
            onPressedChange={(pressed) =>
              setFormatting((prev) => ({ ...prev, underline: pressed }))
            }
            variant='icon-outline'
            size='sm'
            aria-label='Toggle underline'>
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
          </Toggle>

          <Toggle
            pressed={formatting.strikethrough}
            onPressedChange={(pressed) =>
              setFormatting((prev) => ({ ...prev, strikethrough: pressed }))
            }
            variant='icon-outline'
            size='sm'
            aria-label='Toggle strikethrough'>
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
              <path d='M16 4H9a3 3 0 0 0-2.83 4'></path>
              <path d='M14 12a4 4 0 0 1 0 8H6'></path>
              <line
                x1='4'
                y1='12'
                x2='20'
                y2='12'></line>
            </svg>
          </Toggle>
        </div>

        <div className='rounded-lg border p-4'>
          <Text
            variant='body-medium'
            className={` ${formatting.bold ? 'font-bold' : ''} ${formatting.italic ? 'italic' : ''} ${formatting.underline ? 'underline' : ''} ${formatting.strikethrough ? 'line-through' : ''} `}>
            Sample text with formatting applied
          </Text>
        </div>

        <div className='bg-base-50 dark:bg-base-900 rounded-lg p-4'>
          <Text
            variant='caption'
            weight='semibold'
            className='mb-2'>
            Active Formatting:
          </Text>
          <Text
            variant='caption'
            color='secondary'>
            {Object.entries(formatting)
              .filter(([, value]) => value)
              .map(([key]) => key)
              .join(', ') || 'None'}
          </Text>
        </div>
      </div>
    )
  },
}

export const WithTextAndIcon: Story = {
  render: () => (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <Text
          variant='body-large'
          weight='semibold'>
          Icon Position Start (Default)
        </Text>
        <div className='flex flex-wrap gap-4'>
          <Toggle
            variant='default'
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
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
            }>
            With Icon
          </Toggle>

          <Toggle
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
                <path d='M5 12h14'></path>
                <path d='m12 5 7 7-7 7'></path>
              </svg>
            }>
            Next
          </Toggle>

          <Toggle
            variant='primary'
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
          </Toggle>
        </div>
      </div>

      <div className='space-y-4'>
        <Text
          variant='body-large'
          weight='semibold'>
          Icon Position End
        </Text>
        <div className='flex flex-wrap gap-4'>
          <Toggle
            variant='default'
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
                <path d='M9 18l6-6-6-6'></path>
              </svg>
            }>
            Next
          </Toggle>

          <Toggle
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
                <polyline points='6 9 12 15 18 9'></polyline>
              </svg>
            }>
            Expand
          </Toggle>

          <Toggle
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
                <path d='m6 9 6 6 6-6'></path>
              </svg>
            }>
            Options
          </Toggle>
        </div>
      </div>

      <div className='space-y-4'>
        <Text
          variant='body-large'
          weight='semibold'>
          Different Sizes with Icons
        </Text>
        <div className='flex flex-wrap items-center gap-4'>
          <Toggle
            variant='primary'
            size='sm'
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
                <path d='M12 5v14'></path>
                <path d='M5 12h14'></path>
              </svg>
            }>
            Small
          </Toggle>

          <Toggle
            variant='primary'
            size='md'
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
                <path d='M12 5v14'></path>
                <path d='M5 12h14'></path>
              </svg>
            }>
            Medium
          </Toggle>

          <Toggle
            variant='primary'
            size='lg'
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
                <path d='M12 5v14'></path>
                <path d='M5 12h14'></path>
              </svg>
            }>
            Large
          </Toggle>
        </div>
      </div>
    </div>
  ),
}
