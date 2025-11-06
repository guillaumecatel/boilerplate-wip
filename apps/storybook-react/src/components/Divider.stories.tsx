import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from '@myorg/ui'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  args: { children: 'Divider' },
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof Divider>

export const Playground: Story = {}
