import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tooltip } from '@myorg/ui'

const meta = {
  title: 'Components/Overlay/Tooltip',
  component: Tooltip.Content,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'inverse', 'accent'],
      description: 'Visual variant of the tooltip',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Preferred side of the trigger to render against',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Preferred alignment against the trigger',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
      },
    },
    showArrow: {
      control: 'boolean',
      description: 'Whether to show the arrow',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  decorators: [
    (Story) => (
      <Tooltip.Provider delayDuration={200}>
        <div className='flex min-h-[300px] items-center justify-center'>
          <Story />
        </div>
      </Tooltip.Provider>
    ),
  ],
} satisfies Meta<typeof Tooltip.Content>

export default meta

type Story = StoryObj<typeof Tooltip.Content>

export const Playground: Story = {
  render: (args) => (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button className='bg-accent-500 text-base-0 hover:bg-accent-600 rounded-md px-4 py-2 text-sm font-medium'>
          Hover me
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content {...args}>Add to library</Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  ),
}

export const Default: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button className='bg-base-900 text-base-0 hover:bg-base-800 dark:bg-base-100 dark:hover:bg-base-200 rounded-md px-4 py-2 text-sm font-medium'>
          Hover for info
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content>
          This is a default tooltip with helpful information
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-8'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-base-600 dark:text-base-400 text-xs'>Default</p>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
              Hover me
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content variant='default'>
              Default dark tooltip
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <p className='text-base-600 dark:text-base-400 text-xs'>Inverse</p>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
              Hover me
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content variant='inverse'>
              Inverse light tooltip
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <p className='text-base-600 dark:text-base-400 text-xs'>Accent</p>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
              Hover me
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content variant='accent'>
              Accent brand tooltip
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </div>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-8'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-base-600 dark:text-base-400 text-xs'>Top</p>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
              Top
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content side='top'>Tooltip on top</Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <p className='text-base-600 dark:text-base-400 text-xs'>Right</p>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
              Right
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content side='right'>Tooltip on right</Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <p className='text-base-600 dark:text-base-400 text-xs'>Bottom</p>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
              Bottom
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content side='bottom'>Tooltip on bottom</Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <p className='text-base-600 dark:text-base-400 text-xs'>Left</p>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
              Left
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content side='left'>Tooltip on left</Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </div>
  ),
}

export const WithoutArrow: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-8'>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
            With arrow (default)
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content showArrow={true}>
            This tooltip has an arrow
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
            Without arrow
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content showArrow={false}>
            This tooltip has no arrow
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </div>
  ),
}

export const WithDelay: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-8'>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
            Instant (default)
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>Appears immediately</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root delayDuration={500}>
        <Tooltip.Trigger asChild>
          <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
            500ms delay
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>Appears after 500ms</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root delayDuration={1000}>
        <Tooltip.Trigger asChild>
          <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
            1000ms delay
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>Appears after 1 second</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-6'>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='border-base-300 bg-base-0 text-base-600 hover:bg-base-50 hover:text-base-900 dark:border-base-700 dark:bg-base-900 dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-base-100 flex h-10 w-10 items-center justify-center rounded-md border'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z'
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>More information</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='border-base-300 bg-base-0 text-base-600 hover:bg-base-50 hover:text-base-900 dark:border-base-700 dark:bg-base-900 dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-base-100 flex h-10 w-10 items-center justify-center rounded-md border'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M7.49998 1C7.27906 1 7.09998 1.17909 7.09998 1.4V2.1C7.09998 2.32091 7.27906 2.5 7.49998 2.5C7.72089 2.5 7.89998 2.32091 7.89998 2.1V1.4C7.89998 1.17909 7.72089 1 7.49998 1ZM12.4 7.5C12.4 7.27908 12.2209 7.1 12 7.1H11.3C11.0791 7.1 10.9 7.27908 10.9 7.5C10.9 7.72091 11.0791 7.9 11.3 7.9H12C12.2209 7.9 12.4 7.72091 12.4 7.5ZM4.09998 7.5C4.09998 7.27908 3.92089 7.1 3.69998 7.1H2.99998C2.77906 7.1 2.59998 7.27908 2.59998 7.5C2.59998 7.72091 2.77906 7.9 2.99998 7.9H3.69998C3.92089 7.9 4.09998 7.72091 4.09998 7.5ZM7.49998 10.9C7.27906 10.9 7.09998 11.0791 7.09998 11.3V12C7.09998 12.2209 7.27906 12.4 7.49998 12.4C7.72089 12.4 7.89998 12.2209 7.89998 12V11.3C7.89998 11.0791 7.72089 10.9 7.49998 10.9ZM3.55544 3.55544C3.41019 3.41019 3.17318 3.41019 3.02792 3.55544C2.88267 3.7007 2.88267 3.93771 3.02792 4.08296L3.4933 4.54834C3.63856 4.6936 3.87557 4.6936 4.02083 4.54834C4.16608 4.40309 4.16608 4.16608 4.02083 4.02083L3.55544 3.55544ZM11.4445 11.4445C11.2993 11.2993 11.0623 11.2993 10.917 11.4445L10.4517 11.9099C10.3064 12.0552 10.3064 12.2922 10.4517 12.4374C10.5969 12.5827 10.8339 12.5827 10.9792 12.4374L11.4445 11.9721C11.5898 11.8268 11.5898 11.5898 11.4445 11.4445ZM10.9792 4.54834C11.1245 4.6936 11.3615 4.6936 11.5067 4.54834L11.9721 4.08296C12.1174 3.93771 12.1174 3.7007 11.9721 3.55544C11.8268 3.41019 11.5898 3.41019 11.4445 3.55544L10.9792 4.02083C10.8339 4.16608 10.8339 4.40309 10.9792 4.54834ZM4.02083 11.9099C4.16608 12.0552 4.16608 12.2922 4.02083 12.4374C3.87557 12.5827 3.63856 12.5827 3.4933 12.4374L3.02792 11.9721C2.88267 11.8268 2.88267 11.5898 3.02792 11.4445C3.17318 11.2993 3.41019 11.2993 3.55544 11.4445L4.02083 11.9099ZM9.64998 7.5C9.64998 8.68594 8.68591 9.65 7.49998 9.65C6.31404 9.65 5.34998 8.68594 5.34998 7.5C5.34998 6.31406 6.31404 5.35 7.49998 5.35C8.68591 5.35 9.64998 6.31406 9.64998 7.5ZM8.84998 7.5C8.84998 8.24403 8.24401 8.85 7.49998 8.85C6.75594 8.85 6.14998 8.24403 6.14998 7.5C6.14998 6.75597 6.75594 6.15 7.49998 6.15C8.24401 6.15 8.84998 6.75597 8.84998 7.5Z'
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content variant='accent'>Toggle theme</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='border-base-300 bg-base-0 text-base-600 hover:bg-base-50 hover:text-base-900 dark:border-base-700 dark:bg-base-900 dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-base-100 flex h-10 w-10 items-center justify-center rounded-md border'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z'
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content variant='inverse'>Expand menu</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div className='border-base-200 bg-base-0 dark:border-base-800 dark:bg-base-900 mx-auto max-w-md rounded-lg border p-6 shadow-sm'>
      <h3 className='text-base-900 dark:text-base-100 mb-4 text-lg font-semibold'>
        User Profile
      </h3>
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <span className='text-base-700 dark:text-base-300 text-sm'>
            Email notifications
          </span>
          <div className='flex items-center gap-2'>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className='text-base-600 hover:bg-base-100 hover:text-base-900 dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-base-100 flex h-8 w-8 items-center justify-center rounded'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z'
                      fill='currentColor'
                      fillRule='evenodd'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content>
                  Receive notifications about important updates
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
            <button className='bg-accent-500 focus:ring-accent-500 relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-none'>
              <span className='bg-base-0 inline-block h-5 w-5 translate-x-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out' />
            </button>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-base-700 dark:text-base-300 text-sm'>
            Two-factor authentication
          </span>
          <div className='flex items-center gap-2'>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className='text-base-600 hover:bg-base-100 hover:text-base-900 dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-base-100 flex h-8 w-8 items-center justify-center rounded'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z'
                      fill='currentColor'
                      fillRule='evenodd'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content side='left'>
                  Add an extra layer of security to your account
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
            <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-3 py-1.5 text-sm font-medium'>
              Enable
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const All: Story = {
  render: () => (
    <div className='space-y-12'>
      <div>
        <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
          Variants
        </h2>
        <div className='flex flex-wrap items-center gap-6'>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
                Default
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content variant='default'>
                Default tooltip variant
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
                Inverse
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content variant='inverse'>
                Inverse tooltip variant
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
                Accent
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content variant='accent'>
                Accent tooltip variant
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </div>

      <div>
        <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
          Positions
        </h2>
        <div className='grid grid-cols-2 gap-6'>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
                Top
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content side='top'>Top position</Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className='border-base-300 bg-base-0 text-base-900 hover:bg-base-50 dark:border-base-700 dark:bg-base-900 dark:text-base-100 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
                Bottom
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content side='bottom'>Bottom position</Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </div>

      <div>
        <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
          With Icons
        </h2>
        <div className='flex flex-wrap items-center gap-4'>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className='border-base-300 bg-base-0 text-base-600 hover:bg-base-50 hover:text-base-900 dark:border-base-700 dark:bg-base-900 dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-base-100 flex h-10 w-10 items-center justify-center rounded-md border'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content>Information</Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className='border-base-300 bg-base-0 text-base-600 hover:bg-base-50 hover:text-base-900 dark:border-base-700 dark:bg-base-900 dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-base-100 flex h-10 w-10 items-center justify-center rounded-md border'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content variant='accent'>Expand</Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </div>
    </div>
  ),
}
