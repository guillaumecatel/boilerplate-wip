import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileUploader } from '@myorg/react-ui'

const meta = {
  title: 'Components/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  args: { children: 'Upload your file(s)' },
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof FileUploader>

export default meta

type Story = StoryObj<typeof FileUploader>

export const Playground: Story = {}
