import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert } from '@myorg/ui'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof Alert>

export const Playground: Story = {}
