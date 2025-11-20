import { Button, ButtonGroup } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Copy,
  Download,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  Redo,
  Share2,
  Underline,
  Undo,
} from 'lucide-react'

const meta = {
  title: 'Components/Form/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal',
    attached: true,
    role: 'group',
    label: 'Button group example',
  },
  argTypes: {
    role: {
      control: 'select',
      options: ['group', 'toolbar', 'radiogroup'],
      description: 'Role of the button group.',
      table: {
        type: { summary: "'group' | 'toolbar' | 'radiogroup'" },
        defaultValue: { summary: "'group'" },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the button group.',
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "'horizontal'" },
      },
    },
    attached: {
      control: 'boolean',
      description:
        'Whether buttons are attached (stacked) or separated with gap.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    children: {
      control: false,
      description: 'Button components to group together.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof ButtonGroup>

export const Playground: Story = {
  args: {
    label: 'Document actions',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant='outline'>View</Button>
      <Button variant='outline'>Edit</Button>
      <Button variant='outline'>Delete</Button>
    </ButtonGroup>
  ),
}

export const AttachedHorizontal: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <ButtonGroup
        orientation='horizontal'
        attached
        label='Document actions'>
        <Button variant='outline'>View</Button>
        <Button variant='outline'>Edit</Button>
        <Button variant='outline'>Delete</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='horizontal'
        attached
        label='Save options'>
        <Button variant='primary'>Save</Button>
        <Button variant='primary'>Save & Close</Button>
        <Button variant='primary'>Save & New</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='horizontal'
        attached
        role='toolbar'
        label='Sharing tools'>
        <Button
          variant='secondary'
          icon={<Copy />}>
          Copy
        </Button>
        <Button
          variant='secondary'
          icon={<Download />}>
          Download
        </Button>
        <Button
          variant='secondary'
          icon={<Share2 />}>
          Share
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const AttachedVertical: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex gap-6'>
      <ButtonGroup
        orientation='vertical'
        attached
        label='Document actions'>
        <Button variant='outline'>View</Button>
        <Button variant='outline'>Edit</Button>
        <Button variant='outline'>Delete</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='vertical'
        attached
        label='Save options'>
        <Button variant='primary'>Save</Button>
        <Button variant='primary'>Save & Close</Button>
        <Button variant='primary'>Save & New</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='vertical'
        attached
        label='Sharing tools'>
        <Button
          variant='secondary'
          icon={<Copy />}>
          Copy
        </Button>
        <Button
          variant='secondary'
          icon={<Download />}>
          Download
        </Button>
        <Button
          variant='secondary'
          icon={<Share2 />}>
          Share
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const SeparatedHorizontal: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <ButtonGroup
        orientation='horizontal'
        attached={false}
        label='Document actions'>
        <Button variant='outline'>View</Button>
        <Button variant='outline'>Edit</Button>
        <Button variant='outline'>Delete</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='horizontal'
        attached={false}
        label='Action buttons'>
        <Button variant='primary'>Save</Button>
        <Button variant='secondary'>Cancel</Button>
        <Button variant='destructive'>Delete</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='horizontal'
        attached={false}
        label='Sharing tools'>
        <Button
          variant='secondary'
          icon={<Copy />}>
          Copy
        </Button>
        <Button
          variant='secondary'
          icon={<Download />}>
          Download
        </Button>
        <Button
          variant='secondary'
          icon={<Share2 />}>
          Share
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const SeparatedVertical: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex gap-6'>
      <ButtonGroup
        orientation='vertical'
        attached={false}
        label='Document actions'>
        <Button variant='outline'>View</Button>
        <Button variant='outline'>Edit</Button>
        <Button variant='outline'>Delete</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='vertical'
        attached={false}
        label='Action buttons'>
        <Button variant='primary'>Save</Button>
        <Button variant='secondary'>Cancel</Button>
        <Button variant='destructive'>Delete</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='vertical'
        attached={false}
        label='Sharing tools'>
        <Button
          variant='secondary'
          icon={<Copy />}>
          Copy
        </Button>
        <Button
          variant='secondary'
          icon={<Download />}>
          Download
        </Button>
        <Button
          variant='secondary'
          icon={<Share2 />}>
          Share
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const WithIcons: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <ButtonGroup
        orientation='horizontal'
        attached
        label='Sharing tools'>
        <Button
          variant='outline'
          icon={<Copy />}
          iconPosition='start'>
          Copy
        </Button>
        <Button
          variant='outline'
          icon={<Download />}
          iconPosition='start'>
          Download
        </Button>
        <Button
          variant='outline'
          icon={<Share2 />}
          iconPosition='start'>
          Share
        </Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='horizontal'
        attached
        label='Icon actions'>
        <Button
          variant='icon-outline'
          icon={<Copy />}>
          Copy
        </Button>
        <Button
          variant='icon-outline'
          icon={<Download />}>
          Download
        </Button>
        <Button
          variant='icon-outline'
          icon={<Share2 />}>
          Share
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-6'>
      <ButtonGroup
        orientation='horizontal'
        attached
        label='Small button group'>
        <Button
          variant='outline'
          size='sm'>
          Small
        </Button>
        <Button
          variant='outline'
          size='sm'>
          Button
        </Button>
        <Button
          variant='outline'
          size='sm'>
          Group
        </Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='horizontal'
        attached
        label='Medium button group'>
        <Button
          variant='outline'
          size='md'>
          Medium
        </Button>
        <Button
          variant='outline'
          size='md'>
          Button
        </Button>
        <Button
          variant='outline'
          size='md'>
          Group
        </Button>
      </ButtonGroup>

      <ButtonGroup
        orientation='horizontal'
        attached
        label='Large button group'>
        <Button
          variant='outline'
          size='lg'>
          Large
        </Button>
        <Button
          variant='outline'
          size='lg'>
          Button
        </Button>
        <Button
          variant='outline'
          size='lg'>
          Group
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const Multiple: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    return (
      <div className='flex flex-col gap-6'>
        {/* Complete WYSIWYG toolbar */}
        <div className='flex flex-wrap items-center gap-2 rounded-lg border border-[var(--color-base-300)] bg-[var(--color-base-50)] p-2 dark:border-[var(--color-base-700)] dark:bg-[var(--color-base-900)]'>
          {/* Text formatting */}
          <ButtonGroup
            role='toolbar'
            label='Text formatting'
            orientation='horizontal'
            attached>
            <Button
              variant='icon-ghost'
              icon={<Bold />}>
              Bold
            </Button>
            <Button
              variant='icon-ghost'
              icon={<Italic />}>
              Italic
            </Button>
            <Button
              variant='icon-ghost'
              icon={<Underline />}>
              Underline
            </Button>
          </ButtonGroup>

          <div className='h-6 w-px bg-[var(--color-base-300)] dark:bg-[var(--color-base-700)]' />

          {/* Alignment */}
          <ButtonGroup
            role='toolbar'
            label='Text alignment'
            orientation='horizontal'
            attached>
            <Button
              variant='icon-ghost'
              icon={<AlignLeft />}>
              Align left
            </Button>
            <Button
              variant='icon-ghost'
              icon={<AlignCenter />}>
              Align center
            </Button>
            <Button
              variant='icon-ghost'
              icon={<AlignRight />}>
              Align right
            </Button>
          </ButtonGroup>

          <div className='h-6 w-px bg-[var(--color-base-300)] dark:bg-[var(--color-base-700)]' />

          {/* Lists */}
          <ButtonGroup
            role='toolbar'
            label='Lists'
            orientation='horizontal'
            attached>
            <Button
              variant='icon-ghost'
              icon={<List />}>
              Bullet list
            </Button>
            <Button
              variant='icon-ghost'
              icon={<ListOrdered />}>
              Numbered list
            </Button>
          </ButtonGroup>

          <div className='h-6 w-px bg-[var(--color-base-300)] dark:bg-[var(--color-base-700)]' />

          {/* Insert */}
          <ButtonGroup
            role='toolbar'
            label='Insert'
            orientation='horizontal'
            attached>
            <Button
              variant='icon-ghost'
              icon={<Link />}>
              Insert link
            </Button>
            <Button
              variant='icon-ghost'
              icon={<Image />}>
              Insert image
            </Button>
          </ButtonGroup>

          <div className='h-6 w-px bg-[var(--color-base-300)] dark:bg-[var(--color-base-700)]' />

          {/* History */}
          <ButtonGroup
            role='toolbar'
            label='History'
            orientation='horizontal'
            attached>
            <Button
              variant='icon-ghost'
              icon={<Undo />}>
              Undo
            </Button>
            <Button
              variant='icon-ghost'
              icon={<Redo />}>
              Redo
            </Button>
          </ButtonGroup>

          {/* Actions */}
          <ButtonGroup
            role='group'
            label='Actions'
            className='ml-auto'
            attached={false}
            orientation='horizontal'>
            <Button variant='ghost'>Draft</Button>
            <Button variant='accent'>Publish</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  },
}
