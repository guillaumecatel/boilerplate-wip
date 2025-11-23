import type { Meta, StoryObj } from '@storybook/react-vite'

import { SplitPanes, Text } from '@myorg/ui'

const meta = {
  title: 'Components/Layout/SplitPanes',
  component: SplitPanes,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A resizable split panes component that divides the screen into two adjustable panels. Supports both vertical and horizontal splits, keyboard navigation, and full accessibility features. Perfect for file explorers, code editors, or any interface requiring adjustable workspace.',
      },
    },
  },
  argTypes: {
    split: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the split',
    },
    defaultSize: {
      control: 'text',
      description: 'Initial size of the first pane (px or %)',
    },
    minSize: {
      control: 'number',
      description: 'Minimum size in pixels',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum size in pixels',
    },
    resizable: {
      control: 'boolean',
      description: 'Whether panes can be resized',
    },
  },
} satisfies Meta<typeof SplitPanes>

export default meta

type Story = StoryObj<typeof SplitPanes>

const PaneContent = ({ title, color }: { title: string; color: string }) => (
  <div
    className='flex h-full items-center justify-center p-8'
    style={{ backgroundColor: color }}>
    <div className='text-center'>
      <Text
        as='h2'
        variant='heading-large'
        weight='bold'
        className='mb-2'>
        {title}
      </Text>
      <Text
        variant='body-medium'
        color='secondary'>
        Resize the panels by dragging the divider
      </Text>
      <Text
        variant='body-small'
        color='secondary'
        className='mt-2'>
        Use arrow keys for keyboard navigation
      </Text>
    </div>
  </div>
)

export const Playground: Story = {
  args: {
    split: 'vertical',
    defaultSize: '50%',
    minSize: 100,
    resizable: true,
    resizerAriaLabel: 'Resize panels',
  },
  render: (args) => (
    <div style={{ height: '600px' }}>
      <SplitPanes {...args}>
        <PaneContent
          title='Left Panel'
          color='rgb(var(--color-accent-50))'
        />
        <PaneContent
          title='Right Panel'
          color='rgb(var(--color-base-50))'
        />
      </SplitPanes>
    </div>
  ),
}

export const VerticalSplit: Story = {
  render: () => (
    <div style={{ height: '600px' }}>
      <SplitPanes
        split='vertical'
        defaultSize='40%'>
        <div className='bg-accent-50 dark:bg-accent-950 flex h-full flex-col p-6'>
          <Text
            as='h2'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Sidebar
          </Text>
          <Text
            variant='body-medium'
            className='mb-4'>
            This is a vertical split. The left pane starts at 40% width.
          </Text>
          <Text
            variant='body-small'
            color='secondary'>
            Drag the divider to resize, or use keyboard arrows when focused.
          </Text>
        </div>
        <div className='bg-base-50 dark:bg-base-950 flex h-full flex-col p-6'>
          <Text
            as='h2'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Main Content
          </Text>
          <Text
            variant='body-medium'
            className='mb-2'>
            This pane takes up the remaining space.
          </Text>
        </div>
      </SplitPanes>
    </div>
  ),
}

export const HorizontalSplit: Story = {
  render: () => (
    <div style={{ height: '600px' }}>
      <SplitPanes
        split='horizontal'
        defaultSize={200}>
        <div className='bg-accent-50 dark:bg-accent-950 flex h-full flex-col p-6'>
          <Text
            as='h2'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Header Panel
          </Text>
          <Text variant='body-medium'>
            This is a horizontal split with a fixed initial height of 200px.
          </Text>
        </div>
        <div className='bg-base-50 dark:bg-base-950 flex h-full flex-col p-6'>
          <Text
            as='h2'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Content Panel
          </Text>
          <Text variant='body-medium'>
            The bottom pane expands to fill remaining space.
          </Text>
        </div>
      </SplitPanes>
    </div>
  ),
}

export const WithConstraints: Story = {
  render: () => (
    <div style={{ height: '600px' }}>
      <SplitPanes
        split='vertical'
        defaultSize={300}
        minSize={200}
        maxSize={500}>
        <div className='bg-accent-50 dark:bg-accent-950 flex h-full flex-col p-6'>
          <Text
            as='h2'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Constrained Panel
          </Text>
          <Text
            variant='body-medium'
            className='mb-2'>
            This panel has size constraints:
          </Text>
          <ul className='list-disc space-y-1 pl-6'>
            <Text
              as='li'
              variant='body-small'
              color='secondary'>
              Minimum width: 200px
            </Text>
            <Text
              as='li'
              variant='body-small'
              color='secondary'>
              Maximum width: 500px
            </Text>
            <Text
              as='li'
              variant='body-small'
              color='secondary'>
              Initial width: 300px
            </Text>
          </ul>
        </div>
        <div className='bg-base-50 dark:bg-base-950 flex h-full flex-col p-6'>
          <Text
            as='h2'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Flexible Panel
          </Text>
          <Text variant='body-medium'>
            Try resizing - the left panel won't go below 200px or above 500px.
          </Text>
        </div>
      </SplitPanes>
    </div>
  ),
}

export const NonResizable: Story = {
  render: () => (
    <div style={{ height: '600px' }}>
      <SplitPanes
        split='vertical'
        defaultSize='30%'
        resizable={false}>
        <div className='bg-accent-50 dark:bg-accent-950 flex h-full flex-col p-6'>
          <Text
            as='h2'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Fixed Sidebar
          </Text>
          <Text variant='body-medium'>
            This split is not resizable. The panels maintain their fixed sizes.
          </Text>
        </div>
        <div className='bg-base-50 dark:bg-base-950 flex h-full flex-col p-6'>
          <Text
            as='h2'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Main Content
          </Text>
          <Text variant='body-medium'>
            No divider to drag here - the layout is locked.
          </Text>
        </div>
      </SplitPanes>
    </div>
  ),
}

export const CodeEditor: Story = {
  name: 'Code Editor Layout',
  render: () => (
    <div style={{ height: '600px' }}>
      <SplitPanes
        split='vertical'
        defaultSize={250}
        minSize={200}>
        <div className='bg-base-900 flex h-full flex-col p-4'>
          <Text
            as='h3'
            variant='body-large'
            weight='bold'
            className='text-base-100 mb-4'>
            File Explorer
          </Text>
          <div className='space-y-2'>
            {['src/', '├── components/', '├── utils/', '└── index.tsx'].map(
              (item, i) => (
                <Text
                  key={i}
                  as='div'
                  variant='body-small'
                  className='text-base-300 font-mono'>
                  {item}
                </Text>
              ),
            )}
          </div>
        </div>
        <SplitPanes
          split='horizontal'
          defaultSize='70%'
          minSize={150}>
          <div className='bg-base-950 flex h-full flex-col p-6'>
            <Text
              as='h3'
              variant='body-large'
              weight='bold'
              className='text-base-100 mb-4'>
              Editor
            </Text>
            <div className='text-base-300 font-mono text-sm'>
              <div>
                <span className='text-accent-400'>import</span> React{' '}
                <span className='text-accent-400'>from</span>{' '}
                <span className='text-success-400'>'react'</span>
              </div>
              <div className='mt-2'>
                <span className='text-accent-400'>export const</span> App = ()
                =&gt; {'{'}
              </div>
              <div className='ml-4'>
                <span className='text-accent-400'>return</span> &lt;div&gt;Hello
                World&lt;/div&gt;
              </div>
              <div>{'}'}</div>
            </div>
          </div>
          <div className='bg-base-900 flex h-full flex-col p-6'>
            <Text
              as='h3'
              variant='body-large'
              weight='bold'
              className='text-base-100 mb-4'>
              Terminal
            </Text>
            <div className='text-success-400 font-mono text-sm'>
              <div>$ npm run dev</div>
              <div className='text-base-400 mt-2'>
                Server running on http://localhost:3000
              </div>
            </div>
          </div>
        </SplitPanes>
      </SplitPanes>
    </div>
  ),
}
