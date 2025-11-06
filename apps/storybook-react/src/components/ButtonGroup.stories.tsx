import type { Meta, StoryObj } from '@storybook/react-vite'

import { ButtonGroup } from '@myorg/react-ui'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof ButtonGroup>

export const Playground: Story = {}
