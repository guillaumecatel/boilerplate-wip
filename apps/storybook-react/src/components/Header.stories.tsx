import type { Meta, StoryObj } from '@storybook/react-vite'

import { Header } from '@myorg/ui'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    fixed: true,
  },
  argTypes: {
    fixed: { control: 'boolean' },
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const Playground: Story = {}
