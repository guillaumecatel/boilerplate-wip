import type { Meta, StoryObj } from '@storybook/react-vite'

import { BreadCrumb } from '@myorg/ui'

const meta = {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumb>

export default meta

type Story = StoryObj<typeof BreadCrumb>

export const Playground: Story = {}
