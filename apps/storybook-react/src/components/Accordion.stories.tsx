import { Accordion } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BellRing, Link, Plus, ShieldAlert } from 'lucide-react'

import { m } from './../../.storybook/i18n/messages'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs', 'native'],
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
  render: (args) => {
    const items = [
      {
        id: 'item-0',
        title: m.say_hi({ username: 'User' }),
        subtitle: m.say_hi({ username: 'User' }),
        content: m.say_hi({ username: 'User' }),
        icon: <Link size='14' />,
      },
      {
        id: 'item-1',
        title: m.say_hi({ username: 'User' }),
        content: m.say_hi({ username: 'User' }),
        icon: <BellRing size='14' />,
      },
      {
        id: 'item-2',
        title: m.say_hi({ username: 'User' }),
        subtitle: m.say_hi({ username: 'User' }),
        content: m.say_hi({ username: 'User' }),
        icon: <ShieldAlert size='14' />,
      },
    ]
    return (
      <Accordion
        {...args}
        renderChevronIcon={(isOpen) => (
          <Plus
            size={18}
            className={isOpen ? 'rotate-45' : ''}
          />
        )}
        items={items}
      />
    )
  },
}

// export const Compound: Story = {
//   render: (args, { globals: { locale } }) => {
//     const items = defaultItems(locale as LocaleKey)
//     return (
//       <Accordion.Root type='single' collapsible>
//         {items.map((item) => (
//           <Accordion.Item key={item.id} value={item.id}>
//             <Accordion.Header>
//               <Accordion.Trigger>{item.title}</Accordion.Trigger>
//             </Accordion.Header>
//             <Accordion.Content>{item.content}</Accordion.Content>
//           </Accordion.Item>
//         ))}
//       </Accordion.Root>
//     )
//   },
//   parameters: {
//     docs: {
//       description: {
//         story:
//           'Using the compound component API for more granular control over the accordion structure.',
//       },
//     },
//   },
// }

// export const Native: Story = {
//   render: (args, { globals: { locale } }) => {
//     const items = defaultItems(locale as LocaleKey)
//     return <Accordion items={items}></Accordion>
//   },
//   parameters: {
//     docs: {
//       description: {
//         story:
//           'Using the compound component API for more granular control over the accordion structure.',
//       },
//     },
//   },
// }
