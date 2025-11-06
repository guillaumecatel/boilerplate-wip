import type { Meta, StoryObj } from '@storybook/react-vite'

import { Textarea } from '@myorg/ui'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof Textarea>

export const Playground: Story = {}
