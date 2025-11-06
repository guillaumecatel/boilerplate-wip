import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@myorg/react-ui'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: 'Badge' },
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof Badge>

export const Playground: Story = {}
