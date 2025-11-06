import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@myorg/react-ui'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof Table>

export const Playground: Story = {}
