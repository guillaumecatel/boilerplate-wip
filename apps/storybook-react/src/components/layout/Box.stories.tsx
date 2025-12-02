import type { Meta, StoryObj } from '@storybook/react-vite'

import { Box } from '@myorg/ui'

const meta = {
  title: 'Components/Layout/Box',
  component: Box,
  tags: ['autodocs'],
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof Box>

export const Playground: Story = {}
