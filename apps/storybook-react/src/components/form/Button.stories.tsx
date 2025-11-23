import { Button } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Magnet } from 'lucide-react'

import { m } from '~/.storybook/i18n/messages'

const meta = {
  title: 'Components/Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: m.say_hi({ username: 'Button' }),
    variant: 'primary',
    size: 'md',
    as: 'button',
    disabled: false,
    icon: undefined,
    iconPosition: 'start',
  },
  argTypes: {
    as: {
      control: false,
      description:
        'Allows you to render the Button component as a different HTML element or custom component.',
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'button' },
      },
    },
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'accent',
        'destructive',
        'icon-primary',
        'icon-secondary',
        'icon-outline',
        'icon-ghost',
        'icon-accent',
        'icon-destructive',
      ],
      description: 'Defines the button style variant.',
      table: {
        type: {
          summary:
            'primary | secondary | outline | ghost | accent | destructive | icon-primary | icon-secondary | icon-outline | icon-ghost | icon-accent | icon-destructive',
        },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Defines the button size.',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if set to true.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: false,
      description: 'Optional icon to display in the button.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the icon relative to the text.',
      table: {
        type: { summary: "'start' | 'end'" },
        defaultValue: { summary: "'start'" },
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Playground: Story = {}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-wrap gap-4'>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='accent'>Accent</Button>
        <Button variant='destructive'>Destructive</Button>
      </div>
      <div className='flex flex-wrap gap-4'>
        <Button
          variant='icon-primary'
          icon={<Magnet />}>
          Primary Icon
        </Button>
        <Button
          variant='icon-secondary'
          icon={<Magnet />}>
          Secondary Icon
        </Button>
        <Button
          variant='icon-outline'
          icon={<Magnet />}>
          Outline Icon
        </Button>
        <Button
          variant='icon-ghost'
          icon={<Magnet />}>
          Ghost Icon
        </Button>
        <Button
          variant='icon-accent'
          icon={<Magnet />}>
          Accent Icon
        </Button>
        <Button
          variant='icon-destructive'
          icon={<Magnet />}>
          Destructive Icon
        </Button>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
}

export const Link: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  args: {
    as: 'a',
    target: '_blank',
    href: 'https://www.google.com',
    children: m.say_hi({ username: 'Google' }),
  },
  argTypes: {
    href: {
      control: false,
      description: 'The URL that the link points to.',
      table: {
        controls: { disable: true },
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    target: {
      control: false,
      description:
        'Specifies where to open the linked document. Common values are "_self" and "_blank".',
      table: {
        controls: { disable: true },
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
  },
  render: () => (
    <div className='flex items-center gap-4'>
      <Button disabled>Disabled Button</Button>
      <Button
        as='a'
        href='https://www.google.com'
        disabled>
        Disabled Link
      </Button>
    </div>
  ),
}

export const WithIcon: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button
          size='sm'
          icon={<Magnet />}
          iconPosition='start'>
          Icon start (sm)
        </Button>
        <Button
          size='md'
          icon={<Magnet />}
          iconPosition='start'>
          Icon start (md)
        </Button>
        <Button
          size='lg'
          icon={<Magnet />}
          iconPosition='start'>
          Icon start (lg)
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button
          size='sm'
          icon={<Magnet />}
          iconPosition='end'>
          Icon end (sm)
        </Button>
        <Button
          size='md'
          icon={<Magnet />}
          iconPosition='end'>
          Icon end (md)
        </Button>
        <Button
          size='lg'
          icon={<Magnet />}
          iconPosition='end'>
          Icon end (lg)
        </Button>
      </div>
    </div>
  ),
}

export const IconButtons: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-4'>
        <Button
          variant='icon-primary'
          size='sm'
          icon={<Magnet />}>
          Primary Small
        </Button>
        <Button
          variant='icon-primary'
          size='md'
          icon={<Magnet />}>
          Primary Medium
        </Button>
        <Button
          variant='icon-primary'
          size='lg'
          icon={<Magnet />}>
          Primary Large
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button
          variant='icon-secondary'
          size='sm'
          icon={<Magnet />}>
          Secondary Small
        </Button>
        <Button
          variant='icon-secondary'
          size='md'
          icon={<Magnet />}>
          Secondary Medium
        </Button>
        <Button
          variant='icon-secondary'
          size='lg'
          icon={<Magnet />}>
          Secondary Large
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button
          variant='icon-outline'
          size='sm'
          icon={<Magnet />}>
          Outline Small
        </Button>
        <Button
          variant='icon-outline'
          size='md'
          icon={<Magnet />}>
          Outline Medium
        </Button>
        <Button
          variant='icon-outline'
          size='lg'
          icon={<Magnet />}>
          Outline Large
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button
          variant='icon-ghost'
          size='sm'
          icon={<Magnet />}>
          Ghost Small
        </Button>
        <Button
          variant='icon-ghost'
          size='md'
          icon={<Magnet />}>
          Ghost Medium
        </Button>
        <Button
          variant='icon-ghost'
          size='lg'
          icon={<Magnet />}>
          Ghost Large
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button
          variant='icon-accent'
          size='sm'
          icon={<Magnet />}>
          Accent Small
        </Button>
        <Button
          variant='icon-accent'
          size='md'
          icon={<Magnet />}>
          Accent Medium
        </Button>
        <Button
          variant='icon-accent'
          size='lg'
          icon={<Magnet />}>
          Accent Large
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button
          variant='icon-destructive'
          size='sm'
          icon={<Magnet />}>
          Destructive Small
        </Button>
        <Button
          variant='icon-destructive'
          size='md'
          icon={<Magnet />}>
          Destructive Medium
        </Button>
        <Button
          variant='icon-destructive'
          size='lg'
          icon={<Magnet />}>
          Destructive Large
        </Button>
      </div>
    </div>
  ),
}
