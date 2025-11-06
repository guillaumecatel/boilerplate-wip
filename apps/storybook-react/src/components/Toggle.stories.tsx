import type { Meta, StoryObj } from '@storybook/react-vite'

import { Toggle } from '@myorg/ui'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof Toggle>

export const Playground: Story = {}
