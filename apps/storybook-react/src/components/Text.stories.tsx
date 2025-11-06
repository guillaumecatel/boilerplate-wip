import { Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { m } from '../../.storybook/i18n/messages'

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A modern, accessible accordion component that works both as a controlled React component and as native HTML (compatible with Astro). Supports single and multiple open items.',
      },
    },
  },
  argTypes: {
    asChild: {
      control: 'boolean',
      description:
        'If true, the Text component will render its children directly, allowing you to use any HTML element as the wrapper.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: [
        'display-large',
        'display-medium',
        'display-small',
        'heading-large',
        'heading-medium',
        'heading-small',
        'body-large',
        'body-medium',
        'body-small',
        'caption',
      ],
      description: 'Defines the text style variant.',
      table: {
        type: {
          summary:
            'display-large | display-medium | display-small | heading-large | heading-medium | heading-small | body-large | body-medium | body-small | caption',
        },
        defaultValue: { summary: 'body-medium' },
      },
    },
    pretty: {
      control: 'boolean',
      description:
        'If true, applies additional styling for a more visually appealing text appearance.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    children: {
      description: 'The content to be displayed within the Text component.',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof Text>

export const Defaut: Story = {
  args: {
    type: 'body-medium',
    asChild: false,
  },
  argTypes: {
    asChild: {
      control: false,
    },
  },
  render: (args) => {
    return <Text {...args}>{m.say_hi({ username: 'User' })}</Text>
  },
}

export const AsChild: Story = {
  args: {
    type: 'body-medium',
    asChild: true,
  },
  render: (args) => {
    return (
      <>
        <Text {...args}>
          <h1>{m.say_hi({ username: 'User' })}</h1>
        </Text>
        <div>HTML tag is: {args.asChild ? 'h1' : 'span'}</div>
      </>
    )
  },
}
