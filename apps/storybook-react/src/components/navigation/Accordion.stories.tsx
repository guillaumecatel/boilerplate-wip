import { Accordion } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { m } from '~/.storybook/i18n/messages'

const meta = {
  title: 'Components/Navigation/Accordion',
  tags: ['autodocs', 'radix-ui'],
  parameters: {
    docs: {
      description: {
        component:
          'A modern, accessible accordion component that works both as a controlled React component and as native HTML (compatible with Astro). Supports single and multiple open items.',
      },
    },
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof Accordion>

export const Defaut: Story = {
  render: () => (
    <Accordion.Root
      type='single'
      collapsible>
      <Accordion.Item value='item-1'>
        <Accordion.Header asChild>
          <h1>
            <Accordion.Trigger subtitle={m.read_more()}>
              {m.about()}
            </Accordion.Trigger>
          </h1>
        </Accordion.Header>
        <Accordion.Content>{m.sample_text()}</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value='item-2'>
        <Accordion.Header>
          <Accordion.Trigger subtitle={m.read_more()}>
            {m.privacy_policy()}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{m.sample_text()}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}
