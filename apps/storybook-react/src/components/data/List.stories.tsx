import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge, List, ListItem, Text } from '@myorg/ui'
import { useState } from 'react'

const meta = {
  title: 'Components/Data/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    divider: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof List>

export const Playground: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ),
  args: {
    orientation: 'vertical',
    spacing: 'none',
    divider: false,
  },
}

export const WithDivider: Story = {
  render: () => (
    <List
      divider
      className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
      <ListItem>Fourth item</ListItem>
    </List>
  ),
}

export const WithSpacing: Story = {
  render: () => (
    <List
      spacing='md'
      className='w-full max-w-md'>
      <ListItem className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Item with spacing 1
      </ListItem>
      <ListItem className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Item with spacing 2
      </ListItem>
      <ListItem className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Item with spacing 3
      </ListItem>
    </List>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <List
      divider
      className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
      <ListItem icon={<span className='text-xl'>🏠</span>}>Home</ListItem>
      <ListItem icon={<span className='text-xl'>⚙️</span>}>Settings</ListItem>
      <ListItem icon={<span className='text-xl'>👤</span>}>Profile</ListItem>
      <ListItem icon={<span className='text-xl'>📊</span>}>Analytics</ListItem>
    </List>
  ),
}

export const WithIconEnd: Story = {
  render: () => (
    <List
      divider
      className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
      <ListItem
        icon={<span className='text-xl'>→</span>}
        iconPosition='end'>
        Go to Dashboard
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>→</span>}
        iconPosition='end'>
        Go to Settings
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>→</span>}
        iconPosition='end'>
        Go to Profile
      </ListItem>
    </List>
  ),
}

export const WithSubtitles: Story = {
  render: () => (
    <List
      divider
      className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
      <ListItem
        icon={<span className='text-xl'>📧</span>}
        subtitle='john@example.com'>
        John Doe
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>📧</span>}
        subtitle='jane@example.com'>
        Jane Smith
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>📧</span>}
        subtitle='bob@example.com'>
        Bob Johnson
      </ListItem>
    </List>
  ),
}

export const WithBadges: Story = {
  render: () => (
    <List
      divider
      className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
      <ListItem
        icon={<span className='text-xl'>📬</span>}
        badge={
          <Badge
            variant='primary'
            size='sm'>
            3
          </Badge>
        }>
        Inbox
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>⭐</span>}
        badge={
          <Badge
            variant='warning'
            size='sm'>
            12
          </Badge>
        }>
        Starred
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>🗑️</span>}
        badge={
          <Badge
            variant='destructive'
            size='sm'>
            2
          </Badge>
        }>
        Trash
      </ListItem>
    </List>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [clicked, setClicked] = useState<string | null>(null)

    return (
      <div className='space-y-4'>
        <List
          divider
          className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
          <ListItem
            icon={<span className='text-xl'>🏠</span>}
            onClick={() => setClicked('home')}>
            Home
          </ListItem>
          <ListItem
            icon={<span className='text-xl'>📊</span>}
            onClick={() => setClicked('dashboard')}>
            Dashboard
          </ListItem>
          <ListItem
            icon={<span className='text-xl'>⚙️</span>}
            onClick={() => setClicked('settings')}>
            Settings
          </ListItem>
          <ListItem
            icon={<span className='text-xl'>👤</span>}
            onClick={() => setClicked('profile')}>
            Profile
          </ListItem>
        </List>
        {clicked && (
          <Text
            variant='body-small'
            color='secondary'>
            Last clicked: {clicked}
          </Text>
        )}
      </div>
    )
  },
}

export const WithSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('home')

    return (
      <List
        divider
        className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
        <ListItem
          icon={<span className='text-xl'>🏠</span>}
          selected={selected === 'home'}
          onClick={() => setSelected('home')}>
          Home
        </ListItem>
        <ListItem
          icon={<span className='text-xl'>📊</span>}
          selected={selected === 'dashboard'}
          onClick={() => setSelected('dashboard')}>
          Dashboard
        </ListItem>
        <ListItem
          icon={<span className='text-xl'>⚙️</span>}
          selected={selected === 'settings'}
          onClick={() => setSelected('settings')}>
          Settings
        </ListItem>
        <ListItem
          icon={<span className='text-xl'>👤</span>}
          selected={selected === 'profile'}
          onClick={() => setSelected('profile')}>
          Profile
        </ListItem>
      </List>
    )
  },
}

export const WithDisabled: Story = {
  render: () => (
    <List
      divider
      className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
      <ListItem
        icon={<span className='text-xl'>🏠</span>}
        onClick={() => alert('Home')}>
        Home
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>📊</span>}
        onClick={() => alert('Dashboard')}
        disabled>
        Dashboard (Disabled)
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>⚙️</span>}
        onClick={() => alert('Settings')}>
        Settings
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>👤</span>}
        onClick={() => alert('Profile')}
        disabled>
        Profile (Disabled)
      </ListItem>
    </List>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <Text
          variant='body-small'
          weight='semibold'
          className='mb-2'>
          Small
        </Text>
        <List
          divider
          className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
          <ListItem
            size='sm'
            icon={<span className='text-sm'>🏠</span>}>
            Home
          </ListItem>
          <ListItem
            size='sm'
            icon={<span className='text-sm'>⚙️</span>}>
            Settings
          </ListItem>
        </List>
      </div>

      <div>
        <Text
          variant='body-small'
          weight='semibold'
          className='mb-2'>
          Medium
        </Text>
        <List
          divider
          className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
          <ListItem
            size='md'
            icon={<span className='text-xl'>🏠</span>}>
            Home
          </ListItem>
          <ListItem
            size='md'
            icon={<span className='text-xl'>⚙️</span>}>
            Settings
          </ListItem>
        </List>
      </div>

      <div>
        <Text
          variant='body-small'
          weight='semibold'
          className='mb-2'>
          Large
        </Text>
        <List
          divider
          className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
          <ListItem
            size='lg'
            icon={<span className='text-2xl'>🏠</span>}>
            Home
          </ListItem>
          <ListItem
            size='lg'
            icon={<span className='text-2xl'>⚙️</span>}>
            Settings
          </ListItem>
        </List>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <List
      orientation='horizontal'
      spacing='md'
      className='w-full'>
      <ListItem className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Item 1
      </ListItem>
      <ListItem className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Item 2
      </ListItem>
      <ListItem className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Item 3
      </ListItem>
      <ListItem className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Item 4
      </ListItem>
    </List>
  ),
}

export const HorizontalWithDivider: Story = {
  render: () => (
    <List
      orientation='horizontal'
      divider
      className='rounded-lg border border-gray-200 dark:border-gray-800'>
      <ListItem>First</ListItem>
      <ListItem>Second</ListItem>
      <ListItem>Third</ListItem>
      <ListItem>Fourth</ListItem>
    </List>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <List
      divider
      className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
      <ListItem
        icon={<span className='text-xl'>🏠</span>}
        iconOnly
        onClick={() => alert('Home')}>
        Home
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>📊</span>}
        iconOnly
        tooltip='View your analytics dashboard'
        onClick={() => alert('Dashboard')}>
        Dashboard
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>⚙️</span>}
        iconOnly
        onClick={() => alert('Settings')}>
        Settings
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>👤</span>}
        iconOnly
        tooltip='Manage your profile'
        onClick={() => alert('Profile')}>
        Profile
      </ListItem>
    </List>
  ),
}

export const IconOnlyHorizontal: Story = {
  render: () => (
    <List
      orientation='horizontal'
      spacing='sm'
      className='w-full'>
      <ListItem
        icon={<span className='text-xl'>🏠</span>}
        iconOnly
        tooltipSide='bottom'
        onClick={() => alert('Home')}
        className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Home
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>📊</span>}
        iconOnly
        tooltipSide='bottom'
        onClick={() => alert('Dashboard')}
        className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Dashboard
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>⚙️</span>}
        iconOnly
        tooltipSide='bottom'
        onClick={() => alert('Settings')}
        className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Settings
      </ListItem>
      <ListItem
        icon={<span className='text-xl'>👤</span>}
        iconOnly
        tooltipSide='bottom'
        onClick={() => alert('Profile')}
        className='rounded-lg border border-gray-200 dark:border-gray-800'>
        Profile
      </ListItem>
    </List>
  ),
}

export const IconOnlySelected: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('home')

    return (
      <List
        divider
        className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
        <ListItem
          icon={<span className='text-xl'>🏠</span>}
          iconOnly
          selected={selected === 'home'}
          onClick={() => setSelected('home')}>
          Home
        </ListItem>
        <ListItem
          icon={<span className='text-xl'>📊</span>}
          iconOnly
          selected={selected === 'dashboard'}
          onClick={() => setSelected('dashboard')}>
          Dashboard
        </ListItem>
        <ListItem
          icon={<span className='text-xl'>⚙️</span>}
          iconOnly
          selected={selected === 'settings'}
          onClick={() => setSelected('settings')}>
          Settings
        </ListItem>
        <ListItem
          icon={<span className='text-xl'>👤</span>}
          iconOnly
          selected={selected === 'profile'}
          onClick={() => setSelected('profile')}>
          Profile
        </ListItem>
      </List>
    )
  },
}

export const ComplexExample: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('inbox')

    const items = [
      {
        id: 'inbox',
        icon: '📬',
        label: 'Inbox',
        subtitle: 'Recent messages',
        count: 5,
      },
      {
        id: 'starred',
        icon: '⭐',
        label: 'Starred',
        subtitle: 'Important items',
        count: 12,
      },
      {
        id: 'drafts',
        icon: '📝',
        label: 'Drafts',
        subtitle: 'Unfinished messages',
        count: 3,
      },
      {
        id: 'sent',
        icon: '📤',
        label: 'Sent',
        subtitle: 'Outgoing messages',
        count: 0,
      },
      {
        id: 'trash',
        icon: '🗑️',
        label: 'Trash',
        subtitle: 'Deleted items',
        count: 2,
        disabled: false,
      },
    ]

    return (
      <List
        divider
        className='w-full max-w-md rounded-lg border border-gray-200 dark:border-gray-800'>
        {items.map((item) => (
          <ListItem
            key={item.id}
            icon={<span className='text-xl'>{item.icon}</span>}
            subtitle={item.subtitle}
            badge={
              item.count > 0 ? (
                <Badge
                  variant={item.id === 'trash' ? 'destructive' : 'primary'}
                  size='sm'>
                  {item.count}
                </Badge>
              ) : null
            }
            selected={selected === item.id}
            disabled={item.disabled}
            onClick={() => !item.disabled && setSelected(item.id)}>
            {item.label}
          </ListItem>
        ))}
      </List>
    )
  },
}
