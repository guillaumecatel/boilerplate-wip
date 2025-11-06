import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextField } from '@myorg/ui'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: { placeholder: 'Enter text' },
  argTypes: {
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof TextField>

export const Playground: Story = {}
