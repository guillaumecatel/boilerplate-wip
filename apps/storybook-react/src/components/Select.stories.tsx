import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select } from '@myorg/ui'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof Select>

export const Playground: Story = {}
