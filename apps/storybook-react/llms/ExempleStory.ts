import { Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

// si besoin d'internationalisation
import { m } from '~/.storybook/i18n/messages'

const meta = {
  title: 'Components/Typography/Text', // il faut deduire le "type" de composant ici Typography
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        // il faut décrire le composant
        component:
          'The Text component is used to display text with various styles and formatting options. It supports different variants, font weights, and additional styling features to enhance the appearance of the text content.',
      },
    },
  },
  argTypes: {
    // ici toute la documentation des args
    as: {
      control: false,
      description:
        'Allows you to render the Text component as a different HTML element or custom component.',
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'span' },
      },
    },
    italic: {
      control: 'select',
      options: ['none', true, false],
      description: 'Defines the italic style.',
      table: {
        type: { summary: 'none | true | false' },
        defaultValue: { summary: 'none' },
      },
    },
    weight: {
      control: 'select',
      options: [
        'none',
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
      description: 'Defines the font weight.',
      table: {
        type: {
          summary:
            'none | thin | extralight | light | normal | medium | semibold | bold | extrabold | black',
        },
        defaultValue: { summary: 'none' },
      },
    },
    overflow: {
      control: 'select',
      options: ['none', 'truncate', 'ellipsis', 'clip'],
      description: 'Defines the text overflow style.',
      table: {
        type: { summary: 'none | truncate | ellipsis | clip' },
        defaultValue: { summary: 'none' },
      },
    },
    breakKeep: {
      control: 'boolean',
      description: 'If true, prevents line breaks within words.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
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
    clamp: {
      control: 'select',
      options: ['none', 1, 2, 3, 4, 5, 6],
      description:
        'Limits the text to a specified number of lines and adds an ellipsis if the text exceeds that limit.',
      table: {
        type: { summary: 'none | 1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: 'none' },
      },
    },
    hyphen: {
      control: 'select',
      options: ['none', true],
      description: 'Enables automatic hyphenation for the text content.',
      table: {
        type: { summary: 'none | true' },
        defaultValue: { summary: 'none' },
      },
    },
    decoration: {
      control: 'select',
      options: ['none', 'underline', 'overline', 'line-through'],
      description: 'Defines the text decoration style.',
      table: {
        type: {
          summary: 'none | underline | overline | line-through',
        },
        defaultValue: { summary: 'none' },
      },
    },
    wrap: {
      control: 'select',
      options: ['none', 'nowrap', 'pretty', 'balance'],
      description: 'Defines the text wrapping style.',
      table: {
        type: { summary: 'none | nowrap | pretty | balance' },
        defaultValue: { summary: 'none' },
      },
    },
    transform: {
      control: 'select',
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
      description: 'Defines the text transformation style.',
      table: {
        type: {
          summary: 'none | uppercase | lowercase | capitalize',
        },
        defaultValue: { summary: 'none' },
      },
    },
    color: {
      control: 'select',
      options: [
        'none',
        'inherit',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
      ],
      description: 'Defines the text color.',
      table: {
        type: {
          summary:
            'none | inherit | primary | secondary | success | warning | error | info',
        },
        defaultValue: { summary: 'none' },
      },
    },
    children: {
      description: 'The content to be displayed within the Text component.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    // ici il faut spécifier les args par default
    children: m.sample_text(),
    as: 'div',
    color: 'none',
    clamp: 'none',
    variant: 'body-medium',
    weight: 'none',
    italic: 'none',
    decoration: 'none',
    transform: 'none',
    wrap: 'none',
    overflow: 'none',
    breakKeep: false,
    hyphen: 'none',
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof Text>

// la premiere story est toujours le playground
export const Playground: Story = {}

// ensuite les autres stories
