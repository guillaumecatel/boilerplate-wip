import { Button, Popover, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Overlay/Popover',
  component: Popover.Root,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the popover',
    },
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the popover when it is initially rendered',
    },
    onOpenChange: {
      action: 'openChanged',
      description: 'Event handler called when the open state changes',
    },
    modal: {
      control: 'boolean',
      description: 'Whether the popover should be modal',
    },
  },
  subcomponents: {
    'Popover.Content': Popover.Content as never,
  },
} satisfies Meta<typeof Popover.Root>

export default meta

type Story = StoryObj<typeof Popover.Root>

export const Playground: Story = {
  args: {
    defaultOpen: false,
    modal: false,
  },
  render: (args) => (
    <Popover.Root {...args}>
      <Popover.Trigger asChild>
        <Button variant='outline'>Open popover</Button>
      </Popover.Trigger>
      <Popover.Content
        size='md'
        side='bottom'
        align='center'
        sideOffset={4}>
        <div className='space-y-2'>
          <Text
            variant='body-medium'
            weight='semibold'>
            Dimensions
          </Text>
          <Text
            variant='body-small'
            color='secondary'>
            Set the dimensions for the layer.
          </Text>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Text
                variant='caption'
                weight='medium'>
                Width
              </Text>
              <input
                type='text'
                className='col-span-2 h-8 rounded border px-2 text-sm'
                defaultValue='100%'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Text
                variant='caption'
                weight='medium'>
                Height
              </Text>
              <input
                type='text'
                className='col-span-2 h-8 rounded border px-2 text-sm'
                defaultValue='25px'
              />
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button
            variant='outline'
            size='sm'>
            Small
          </Button>
        </Popover.Trigger>
        <Popover.Content size='sm'>
          <Text
            variant='body-small'
            color='secondary'>
            This is a small popover with limited width.
          </Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant='outline'>Medium</Button>
        </Popover.Trigger>
        <Popover.Content size='md'>
          <div className='space-y-2'>
            <Text
              variant='body-medium'
              weight='semibold'>
              Medium Popover
            </Text>
            <Text
              variant='body-small'
              color='secondary'>
              This is a medium-sized popover with more space for content.
            </Text>
          </div>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger asChild>
          <Button
            variant='outline'
            size='lg'>
            Large
          </Button>
        </Popover.Trigger>
        <Popover.Content size='lg'>
          <div className='space-y-3'>
            <Text
              variant='body-large'
              weight='semibold'>
              Large Popover
            </Text>
            <Text
              variant='body-small'
              color='secondary'>
              This is a large popover with plenty of space for detailed content
              and complex interactions.
            </Text>
            <div className='flex gap-2 pt-2'>
              <Button size='sm'>Action</Button>
              <Popover.Close asChild>
                <Button
                  variant='outline'
                  size='sm'>
                  Cancel
                </Button>
              </Popover.Close>
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className='flex min-h-96 items-center justify-center gap-4'>
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant='outline'>Top</Button>
        </Popover.Trigger>
        <Popover.Content side='top'>
          <Text variant='body-small'>Positioned at the top</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant='outline'>Right</Button>
        </Popover.Trigger>
        <Popover.Content side='right'>
          <Text variant='body-small'>Positioned to the right</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant='outline'>Bottom</Button>
        </Popover.Trigger>
        <Popover.Content side='bottom'>
          <Text variant='body-small'>Positioned at the bottom</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant='outline'>Left</Button>
        </Popover.Trigger>
        <Popover.Content side='left'>
          <Text variant='body-small'>Positioned to the left</Text>
        </Popover.Content>
      </Popover.Root>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant='outline'>Update profile</Button>
      </Popover.Trigger>
      <Popover.Content size='lg'>
        <form className='space-y-4'>
          <div className='space-y-2'>
            <Text
              variant='body-medium'
              weight='semibold'>
              Update Profile
            </Text>
            <Text
              variant='body-small'
              color='secondary'>
              Make changes to your profile here.
            </Text>
          </div>
          <div className='space-y-3'>
            <div className='space-y-1'>
              <Text
                variant='caption'
                weight='medium'>
                Name
              </Text>
              <input
                type='text'
                className='w-full rounded border px-3 py-2 text-sm'
                placeholder='Enter your name'
              />
            </div>
            <div className='space-y-1'>
              <Text
                variant='caption'
                weight='medium'>
                Email
              </Text>
              <input
                type='email'
                className='w-full rounded border px-3 py-2 text-sm'
                placeholder='Enter your email'
              />
            </div>
          </div>
          <div className='flex justify-end gap-2'>
            <Popover.Close asChild>
              <Button
                variant='outline'
                size='sm'>
                Cancel
              </Button>
            </Popover.Close>
            <Button
              type='submit'
              size='sm'>
              Save changes
            </Button>
          </div>
        </form>
      </Popover.Content>
    </Popover.Root>
  ),
}

export const WithCloseButton: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant='outline'>Open with close</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className='space-y-2'>
          <div className='flex items-start justify-between'>
            <Text
              variant='body-medium'
              weight='semibold'>
              Notifications
            </Text>
            <Popover.Close asChild>
              <Button
                variant='icon-ghost'
                aria-label='Close'>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  />
                </svg>
              </Button>
            </Popover.Close>
          </div>
          <Text
            variant='body-small'
            color='secondary'>
            You have 3 unread messages.
          </Text>
        </div>
      </Popover.Content>
    </Popover.Root>
  ),
}

export const ControlledState: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className='space-y-4'>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setOpen(true)}>
            Open from outside
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setOpen(false)}>
            Close from outside
          </Button>
        </div>

        <Popover.Root
          open={open}
          onOpenChange={setOpen}>
          <Popover.Trigger asChild>
            <Button variant='outline'>Toggle popover</Button>
          </Popover.Trigger>
          <Popover.Content>
            <div className='space-y-2'>
              <Text
                variant='body-medium'
                weight='semibold'>
                Controlled Popover
              </Text>
              <Text
                variant='body-small'
                color='secondary'>
                This popover's state is controlled externally.
              </Text>
              <Text
                variant='caption'
                color='secondary'>
                Current state: {open ? 'Open' : 'Closed'}
              </Text>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    )
  },
}

// Import React for the ControlledState story
import React from 'react'
