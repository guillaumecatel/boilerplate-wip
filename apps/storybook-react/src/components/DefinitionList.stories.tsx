import type { Meta, StoryObj } from '@storybook/react-vite'

import { DefinitionList } from '@myorg/ui'

const meta = {
  title: 'Components/DefinitionList',
  component: DefinitionList,
  tags: ['autodocs'],
} satisfies Meta<typeof DefinitionList>

export default meta

type Story = StoryObj<typeof DefinitionList>

export const Playground: Story = {}
