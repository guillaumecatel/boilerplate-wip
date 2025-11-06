import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from '@myorg/ui'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof Pagination>

export const Playground: Story = {}
