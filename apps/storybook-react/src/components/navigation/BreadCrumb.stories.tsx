import type { Meta, StoryObj } from '@storybook/react-vite'

import { BreadCrumb } from '@myorg/ui'

const meta = {
  title: 'Components/Navigation/BreadCrumb',
  component: BreadCrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A navigation breadcrumb component that displays the current page location within a site hierarchy. Supports custom separators, polymorphic links, and responsive sizing.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof BreadCrumb>

export default meta

type Story = StoryObj<typeof BreadCrumb>

export const Playground: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Laptops' },
    ],
  },
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Small
        </p>
        <BreadCrumb
          size='sm'
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Laptops' },
          ]}
        />
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Medium (Default)
        </p>
        <BreadCrumb
          size='md'
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Laptops' },
          ]}
        />
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Large
        </p>
        <BreadCrumb
          size='lg'
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Laptops' },
          ]}
        />
      </div>
    </div>
  ),
}

export const CustomSeparator: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Slash Separator
        </p>
        <BreadCrumb
          separator='/'
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Article Title' },
          ]}
        />
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Dash Separator
        </p>
        <BreadCrumb
          separator='-'
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Article Title' },
          ]}
        />
      </div>
      <div>
        <p className='text-base-600 dark:text-base-400 mb-2 text-sm font-medium'>
          Dot Separator
        </p>
        <BreadCrumb
          separator='•'
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Article Title' },
          ]}
        />
      </div>
    </div>
  ),
}

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
      {
        label: 'Gaming Laptops',
        href: '/products/electronics/computers/laptops/gaming',
      },
      { label: 'High Performance Gaming Laptop' },
    ],
  },
}

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Current Page' }],
  },
}

export const TwoItems: Story = {
  args: {
    items: [{ label: 'Home', href: '/' }, { label: 'About' }],
  },
}

export const WithCustomAriaLabel: Story = {
  args: {
    ariaLabel: 'Page navigation',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Settings', href: '/settings' },
      { label: 'Profile' },
    ],
  },
}
