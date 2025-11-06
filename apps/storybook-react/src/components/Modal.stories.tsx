import type { Meta, StoryObj } from '@storybook/react-vite'

import { Modal } from '@myorg/react-ui'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof Modal>

export const Playground: Story = {}
