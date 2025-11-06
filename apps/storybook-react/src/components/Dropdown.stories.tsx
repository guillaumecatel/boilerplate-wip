import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dropdown } from '@myorg/ui'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof Dropdown>

export const Playground: Story = {}
