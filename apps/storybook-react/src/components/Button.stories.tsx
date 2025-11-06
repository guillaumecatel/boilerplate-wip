import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@myorg/ui'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Button' },
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Playground: Story = {}
