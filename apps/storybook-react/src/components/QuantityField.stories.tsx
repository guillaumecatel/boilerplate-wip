import type { Meta, StoryObj } from '@storybook/react-vite'

import { QuantityField } from '@myorg/ui'

const meta = {
  title: 'Components/QuantityField',
  component: QuantityField,
  tags: ['autodocs'],
  args: { children: 'Quantity' },
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof QuantityField>

export default meta

type Story = StoryObj<typeof QuantityField>

export const Playground: Story = {}
