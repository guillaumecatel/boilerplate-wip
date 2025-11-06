import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from '@myorg/ui'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof Checkbox>

export const Playground: Story = {}
