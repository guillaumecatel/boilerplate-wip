import { Pagination } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Current active page (1-indexed)',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of pagination',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the pagination container',
    },
    itemSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of individual pagination items',
    },
    itemShape: {
      control: 'select',
      options: ['default', 'circle'],
      description: 'Shape of pagination items',
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last page buttons',
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show previous/next buttons',
    },
    siblingCount: {
      control: 'number',
      description: 'Number of pages to show on each side of current page',
    },
    boundaryCount: {
      control: 'number',
      description: 'Number of pages to show at start and end',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all interactions',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof Pagination>

export const Playground: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    align: 'center',
    size: 'md',
    showFirstLast: false,
    showPrevNext: true,
    siblingCount: 1,
    boundaryCount: 1,
    disabled: false,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const WithFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: true,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const NoPrevNext: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showPrevNext: false,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const ManyPages: Story = {
  args: {
    currentPage: 50,
    totalPages: 100,
    siblingCount: 2,
    boundaryCount: 2,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5)
    return (
      <div className='space-y-8'>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            Small
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            size='sm'
            onPageChange={setCurrentPage}
          />
        </div>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            Medium (Default)
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            size='md'
            onPageChange={setCurrentPage}
          />
        </div>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            Large
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            size='lg'
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    )
  },
}

export const Shapes: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5)
    return (
      <div className='space-y-8'>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            Default Shape
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            itemShape='default'
            onPageChange={setCurrentPage}
          />
        </div>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            Circle Shape
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            itemShape='circle'
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    )
  },
}

export const Alignment: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5)
    return (
      <div className='space-y-8'>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            Left Aligned
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            align='left'
            onPageChange={setCurrentPage}
          />
        </div>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            Center Aligned (Default)
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            align='center'
            onPageChange={setCurrentPage}
          />
        </div>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            Right Aligned
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            align='right'
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    disabled: true,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const CustomSiblingAndBoundary: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(10)
    return (
      <div className='space-y-8'>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            Default (siblingCount: 1, boundaryCount: 1)
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={20}
            siblingCount={1}
            boundaryCount={1}
            onPageChange={setCurrentPage}
          />
        </div>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            More Siblings (siblingCount: 2, boundaryCount: 1)
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={20}
            siblingCount={2}
            boundaryCount={1}
            onPageChange={setCurrentPage}
          />
        </div>
        <div>
          <div className='text-base-700 dark:text-base-300 mb-2 text-sm font-medium'>
            More Boundaries (siblingCount: 1, boundaryCount: 2)
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={20}
            siblingCount={1}
            boundaryCount={2}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    )
  },
}
