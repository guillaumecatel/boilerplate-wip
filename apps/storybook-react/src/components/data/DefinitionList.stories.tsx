import type { Meta, StoryObj } from '@storybook/react-vite'

import { DefinitionList } from '@myorg/ui'

const meta = {
  title: 'Components/Data/DefinitionList',
  component: DefinitionList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A definition list component for displaying key-value pairs. Supports horizontal and vertical layouts with responsive grid behavior.',
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The layout style of the definition list',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the definition list',
    },
  },
} satisfies Meta<typeof DefinitionList>

export default meta

type Story = StoryObj<typeof DefinitionList>

const sampleItems = [
  { term: 'Name', description: 'John Doe' },
  { term: 'Email', description: 'john.doe@example.com' },
  { term: 'Phone', description: '+1 (555) 123-4567' },
  { term: 'Location', description: 'San Francisco, CA' },
]

export const Playground: Story = {
  args: {
    items: sampleItems,
  },
}

export const Layouts: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-8'>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-4 text-sm font-medium'>
          Horizontal Layout (Default)
        </p>
        <DefinitionList
          layout='horizontal'
          items={sampleItems}
        />
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-4 text-sm font-medium'>
          Vertical Layout
        </p>
        <DefinitionList
          layout='vertical'
          items={sampleItems}
        />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div className='flex flex-col gap-8'>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-4 text-sm font-medium'>
          Small
        </p>
        <DefinitionList
          size='sm'
          items={sampleItems}
        />
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-4 text-sm font-medium'>
          Medium (Default)
        </p>
        <DefinitionList
          size='md'
          items={sampleItems}
        />
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-4 text-sm font-medium'>
          Large
        </p>
        <DefinitionList
          size='lg'
          items={sampleItems}
        />
      </div>
    </div>
  ),
}

export const UserProfile: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  args: {
    items: [
      { term: 'Full Name', description: 'John Frusciante' },
      { term: 'Title', description: 'Lead Guitarist' },
      { term: 'Band', description: 'Red Hot Chili Peppers' },
      { term: 'Years Active', description: '1988 - Present' },
      {
        term: 'Known For',
        description: 'Innovative guitar work and solo albums',
      },
      {
        term: 'Biography',
        description:
          'An American guitarist, best known as a former and current member of the Red Hot Chili Peppers. He is known for his innovative guitar work and has released several acclaimed solo albums.',
      },
    ],
  },
}

export const ProductDetails: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  args: {
    layout: 'vertical',
    items: [
      { term: 'Product Name', description: 'Wireless Headphones Pro' },
      { term: 'Price', description: '$299.99' },
      { term: 'Availability', description: 'In Stock' },
      { term: 'SKU', description: 'WHP-2024-BLK' },
      { term: 'Brand', description: 'AudioTech' },
      { term: 'Color', description: 'Matte Black' },
      { term: 'Warranty', description: '2 Years Limited' },
    ],
  },
}

export const CompactInfo: Story = {
  args: {
    size: 'sm',
    layout: 'vertical',
    items: [
      { term: 'Status', description: 'Active' },
      { term: 'Created', description: '2024-01-15' },
      { term: 'Updated', description: '2024-11-20' },
    ],
  },
}
