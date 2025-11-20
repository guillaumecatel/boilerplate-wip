import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@myorg/ui'

const meta = {
  title: 'Components/Data/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'striped', 'bordered'],
      description: 'Visual variant of the table',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof Table>

const sampleData = [
  {
    id: 1,
    name: 'Nandor the Relentless',
    dob: '04/06/1262',
    role: 'Vampire Warrior',
    salary: '$0',
  },
  {
    id: 2,
    name: 'Laszlo Cravensworth',
    dob: '19/10/1678',
    role: 'Vampire Gentleman',
    salary: '$0',
  },
  {
    id: 3,
    name: 'Nadja',
    dob: '15/03/1593',
    role: 'Vampire Seductress',
    salary: '$0',
  },
  {
    id: 4,
    name: 'Colin Robinson',
    dob: '01/09/1971',
    role: 'Energy Vampire',
    salary: '$53,000',
  },
  {
    id: 5,
    name: 'Guillermo de la Cruz',
    dob: '18/11/1991',
    role: 'Familiar/Vampire Hunter',
    salary: '$0',
  },
]

export const Playground: Story = {
  render: (args) => (
    <TableContainer>
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date of Birth</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Salary</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Default: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date of Birth</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Salary</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Striped: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date of Birth</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Salary</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow
              key={row.id}
              striped>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Bordered: Story = {
  render: () => (
    <TableContainer variant='bordered'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date of Birth</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Salary</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
          Small
        </h3>
        <TableContainer size='sm'>
          <Table>
            <TableHeader size='sm'>
              <TableRow>
                <TableHeaderCell size='sm'>Name</TableHeaderCell>
                <TableHeaderCell size='sm'>Role</TableHeaderCell>
                <TableHeaderCell size='sm'>Salary</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.slice(0, 3).map((row) => (
                <TableRow key={row.id}>
                  <TableCell size='sm'>{row.name}</TableCell>
                  <TableCell size='sm'>{row.role}</TableCell>
                  <TableCell size='sm'>{row.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
          Medium (Default)
        </h3>
        <TableContainer size='md'>
          <Table>
            <TableHeader size='md'>
              <TableRow>
                <TableHeaderCell size='md'>Name</TableHeaderCell>
                <TableHeaderCell size='md'>Role</TableHeaderCell>
                <TableHeaderCell size='md'>Salary</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.slice(0, 3).map((row) => (
                <TableRow key={row.id}>
                  <TableCell size='md'>{row.name}</TableCell>
                  <TableCell size='md'>{row.role}</TableCell>
                  <TableCell size='md'>{row.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
          Large
        </h3>
        <TableContainer size='lg'>
          <Table>
            <TableHeader size='lg'>
              <TableRow>
                <TableHeaderCell size='lg'>Name</TableHeaderCell>
                <TableHeaderCell size='lg'>Role</TableHeaderCell>
                <TableHeaderCell size='lg'>Salary</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.slice(0, 3).map((row) => (
                <TableRow key={row.id}>
                  <TableCell size='lg'>{row.name}</TableCell>
                  <TableCell size='lg'>{row.role}</TableCell>
                  <TableCell size='lg'>{row.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  ),
}

export const ClickableRows: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date of Birth</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Salary</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow
              key={row.id}
              variant='clickable'
              onClick={() => alert(`Clicked on ${row.name}`)}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className='text-base-900 dark:text-base-100 font-semibold'>
                John Doe
              </div>
              <div className='text-base-600 dark:text-base-400 text-xs'>
                john@example.com
              </div>
            </TableCell>
            <TableCell>
              <span className='inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200'>
                Active
              </span>
            </TableCell>
            <TableCell className='font-mono font-semibold'>$1,234.56</TableCell>
            <TableCell>
              <button className='text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300'>
                Edit
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className='text-base-900 dark:text-base-100 font-semibold'>
                Jane Smith
              </div>
              <div className='text-base-600 dark:text-base-400 text-xs'>
                jane@example.com
              </div>
            </TableCell>
            <TableCell>
              <span className='inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'>
                Pending
              </span>
            </TableCell>
            <TableCell className='font-mono font-semibold'>$567.89</TableCell>
            <TableCell>
              <button className='text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300'>
                Edit
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className='text-base-900 dark:text-base-100 font-semibold'>
                Bob Johnson
              </div>
              <div className='text-base-600 dark:text-base-400 text-xs'>
                bob@example.com
              </div>
            </TableCell>
            <TableCell>
              <span className='inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-200'>
                Inactive
              </span>
            </TableCell>
            <TableCell className='font-mono font-semibold'>$0.00</TableCell>
            <TableCell>
              <button className='text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300'>
                Edit
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Empty: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date of Birth</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Salary</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell
              colSpan={4}
              className='text-base-600 dark:text-base-400 text-center'>
              No data available
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const WithCaption: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableCaption>
          A list of supernatural beings and their roles
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date of Birth</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.slice(0, 3).map((row) => (
            <TableRow
              key={row.id}
              striped>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell textAlign='right'>Amount</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow striped>
            <TableCell>John Doe</TableCell>
            <TableCell>Active</TableCell>
            <TableCell textAlign='right'>$1,234.56</TableCell>
          </TableRow>
          <TableRow striped>
            <TableCell>Jane Smith</TableCell>
            <TableCell>Active</TableCell>
            <TableCell textAlign='right'>$567.89</TableCell>
          </TableRow>
          <TableRow striped>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>Active</TableCell>
            <TableCell textAlign='right'>$890.12</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell />
            <TableCell textAlign='right'>$2,692.57</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  ),
}

export const WithTextAlignment: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Product</TableHeaderCell>
            <TableHeaderCell textAlign='center'>Status</TableHeaderCell>
            <TableHeaderCell textAlign='right'>Price</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { id: 1, product: 'Widget A', status: 'In Stock', price: '$19.99' },
            {
              id: 2,
              product: 'Widget B',
              status: 'Low Stock',
              price: '$29.99',
            },
            {
              id: 3,
              product: 'Widget C',
              status: 'Out of Stock',
              price: '$39.99',
            },
          ].map((row) => (
            <TableRow
              key={row.id}
              striped>
              <TableCell>{row.product}</TableCell>
              <TableCell textAlign='center'>{row.status}</TableCell>
              <TableCell textAlign='right'>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const WithWrappingText: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow striped>
            <TableCell>Short Name</TableCell>
            <TableCell wrap>
              This is a very long description that will wrap to multiple lines
              when the container is too narrow. Text wrapping is enabled for
              this cell.
            </TableCell>
          </TableRow>
          <TableRow striped>
            <TableCell>Another Item</TableCell>
            <TableCell wrap>
              Another long text that demonstrates the wrapping functionality
              with multiple lines of content in a table cell.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const NoHover: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Salary</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.slice(0, 3).map((row) => (
            <TableRow
              key={row.id}
              hoverable={false}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}
