import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge, BreadCrumb, SplitPanes, Tabs, Text, Toggle } from '@myorg/ui'
import { useEffect, useState } from 'react'

const CodeEditorLayout = () => {
  const [selectedFile, setSelectedFile] = useState('App.tsx')
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const fileTree = [
    {
      name: 'src',
      type: 'folder',
      expanded: true,
      children: [
        {
          name: 'components',
          type: 'folder',
          expanded: true,
          children: [
            { name: 'Button.tsx', type: 'file', modified: false },
            { name: 'Input.tsx', type: 'file', modified: true },
            { name: 'Modal.tsx', type: 'file', modified: false },
          ],
        },
        {
          name: 'utils',
          type: 'folder',
          expanded: false,
          children: [
            { name: 'helpers.ts', type: 'file', modified: false },
            { name: 'validators.ts', type: 'file', modified: false },
          ],
        },
        { name: 'App.tsx', type: 'file', modified: false },
        { name: 'index.tsx', type: 'file', modified: false },
      ],
    },
    {
      name: 'public',
      type: 'folder',
      expanded: false,
      children: [{ name: 'index.html', type: 'file', modified: false }],
    },
    { name: 'package.json', type: 'file', modified: false },
    { name: 'tsconfig.json', type: 'file', modified: false },
  ]

  const openTabs = [
    { name: 'App.tsx', modified: false },
    { name: 'Input.tsx', modified: true },
    { name: 'Button.tsx', modified: false },
  ]

  const terminalOutput = [
    { type: 'command', text: '$ npm run dev' },
    { type: 'info', text: 'vite v5.0.0 dev server running at:' },
    { type: 'success', text: '  ➜ Local:   http://localhost:5173/' },
    { type: 'info', text: '  ➜ Network: use --host to expose' },
    { type: 'ready', text: '  ✓ ready in 234ms' },
  ]

  const problems = [
    {
      file: 'src/components/Input.tsx',
      line: 45,
      type: 'error',
      message: "Property 'onChange' does not exist on type 'InputProps'",
    },
    {
      file: 'src/utils/helpers.ts',
      line: 12,
      type: 'warning',
      message: "'formatDate' is defined but never used",
    },
  ]

  const renderFileTree = (items: typeof fileTree, level = 0) => {
    return items.map((item, i) => (
      <div key={i}>
        <button
          onClick={() => item.type === 'file' && setSelectedFile(item.name)}
          className={`flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition-colors ${
            item.type === 'file' && selectedFile === item.name
              ? 'text-accent-900 dark:text-accent-100'
              : 'text-gray-700 dark:text-gray-300'
          }`}
          style={{ paddingLeft: `${level * 12 + 12}px` }}>
          <span className='text-xs'>
            {item.type === 'folder'
              ? item.expanded
                ? '📂'
                : '📁'
              : item.name.endsWith('.tsx') || item.name.endsWith('.ts')
                ? '📘'
                : item.name.endsWith('.json')
                  ? '📋'
                  : '📄'}
          </span>
          <Text
            variant='body-small'
            weight='medium'
            className='flex-1'>
            {item.name}
          </Text>
          {item.modified && <div className='h-2 w-2 rounded-full' />}
        </button>
        {item.children &&
          item.expanded &&
          renderFileTree(item.children, level + 1)}
      </div>
    ))
  }

  return (
    <div className='from-accent-50 to-accent-300 flex h-screen flex-col overflow-hidden bg-linear-to-br'>
      {/* Title Bar */}
      <div className='flex h-10 items-center justify-between border-b border-gray-700 px-4 dark:border-gray-300'>
        <div className='flex items-center gap-2'>
          <div className='flex gap-2'>
            <div className='h-3 w-3 rounded-full' />
            <div className='h-3 w-3 rounded-full' />
            <div className='h-3 w-3 rounded-full' />
          </div>
          <Text
            variant='body-small'
            weight='medium'
            className='ml-4 text-gray-100 dark:text-gray-900'>
            VS Code Clone - myproject
          </Text>
        </div>

        <div className='flex items-center gap-4'>
          <Toggle
            pressed={theme === 'dark'}
            onPressedChange={(pressed) => setTheme(pressed ? 'dark' : 'light')}
            aria-label='Toggle theme'>
            {theme === 'dark' ? '🌙' : '☀️'}
          </Toggle>
        </div>
      </div>

      {/* Menu Bar */}
      <div className='flex h-8 items-center gap-6 border-b border-gray-700 px-4 dark:border-gray-300'>
        {['File', 'Edit', 'View', 'Go', 'Run', 'Help'].map((menu) => (
          <Text
            key={menu}
            as='button'
            variant='caption'
            className='text-gray-300 transition-colors hover:text-gray-100 dark:text-gray-700 dark:hover:text-gray-900'>
            {menu}
          </Text>
        ))}
      </div>

      {/* Main Layout */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Activity Bar */}
        <div className='flex w-12 shrink-0 flex-col items-center gap-4 border-r border-gray-700 py-4 dark:border-gray-300'>
          {[
            { icon: '📁', label: 'Explorer' },
            { icon: '🔍', label: 'Search' },
            { icon: '⎇', label: 'Source Control' },
            { icon: '▶️', label: 'Run' },
            { icon: '⚙️', label: 'Settings' },
          ].map((item, i) => (
            <button
              key={i}
              className={`flex h-10 w-10 items-center justify-center rounded transition-colors ${
                i === 0 ? 'border-accent-500 border-l-2' : ''
              }`}
              title={item.label}>
              <span className='text-lg'>{item.icon}</span>
            </button>
          ))}
        </div>

        <SplitPanes
          split='vertical'
          defaultSize={250}
          minSize={200}>
          {/* Sidebar */}
          <div className='bg-base-850 flex h-full flex-col overflow-hidden'>
            <div className='border-b border-gray-700 p-3 dark:border-gray-300'>
              <Text
                variant='caption'
                weight='bold'
                className='text-gray-400 uppercase dark:text-gray-600'>
                Explorer
              </Text>
            </div>

            <div className='flex-1 overflow-y-auto'>
              {renderFileTree(fileTree)}
            </div>

            <div className='border-t border-gray-700 p-3 dark:border-gray-300'>
              <Text
                variant='caption'
                color='secondary'>
                {openTabs.filter((t) => t.modified).length} unsaved files
              </Text>
            </div>
          </div>

          <SplitPanes
            split='horizontal'
            defaultSize='70%'
            minSize={200}>
            {/* Editor Area */}
            <div className='flex h-full flex-col overflow-hidden'>
              {/* Tabs */}
              <div className='flex items-center gap-1 border-b border-gray-700 px-2 dark:border-gray-300'>
                {openTabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedFile(tab.name)}
                    className={`group flex items-center gap-2 border-b-2 px-3 py-2 transition-colors ${
                      selectedFile === tab.name
                        ? 'border-accent-500 text-gray-100 dark:text-gray-900'
                        : 'border-transparent text-gray-400 hover:text-gray-200 dark:text-gray-600 dark:hover:text-gray-800'
                    }`}>
                    <span className='text-xs'>
                      {tab.name.endsWith('.tsx') ? '📘' : '📄'}
                    </span>
                    <Text
                      variant='caption'
                      weight='medium'>
                      {tab.name}
                    </Text>
                    {tab.modified && <div className='h-2 w-2 rounded-full' />}
                    <span className='ml-2 opacity-0 transition-opacity group-hover:opacity-100'>
                      ✕
                    </span>
                  </button>
                ))}
              </div>

              {/* Breadcrumb */}
              <div className='border-b border-gray-700 px-4 py-2 dark:border-gray-300'>
                <BreadCrumb
                  items={[
                    { label: 'src', href: '#' },
                    { label: 'components', href: '#' },
                    { label: selectedFile, href: '#' },
                  ]}
                  className='text-gray-400 dark:text-gray-600'
                />
              </div>

              {/* Editor */}
              <div className='flex-1 overflow-auto p-4 font-mono text-sm'>
                <div className='space-y-1'>
                  {[
                    { line: 1, code: "import React from 'react'" },
                    { line: 2, code: '' },
                    {
                      line: 3,
                      code: 'export const App = () => {',
                      highlight: false,
                    },
                    {
                      line: 4,
                      code: '  return (',
                      highlight: false,
                    },
                    {
                      line: 5,
                      code: "    <div className='app'>",
                      highlight: false,
                    },
                    {
                      line: 6,
                      code: '      <h1>Hello World</h1>',
                      highlight: true,
                    },
                    {
                      line: 7,
                      code: '    </div>',
                      highlight: false,
                    },
                    {
                      line: 8,
                      code: '  )',
                      highlight: false,
                    },
                    {
                      line: 9,
                      code: '}',
                      highlight: false,
                    },
                  ].map((item) => (
                    <div
                      key={item.line}
                      className='flex'>
                      <span className='mr-8 w-8 text-right text-gray-500 select-none dark:text-gray-500'>
                        {item.line}
                      </span>
                      <code className='text-gray-200 dark:text-gray-800'>
                        {item.code}
                      </code>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Bar (Editor) */}
              <div className='flex items-center justify-between border-t border-gray-700 px-4 py-1 dark:border-gray-300'>
                <div className='flex items-center gap-4'>
                  <Text
                    variant='caption'
                    className='text-white'>
                    Ln 6, Col 23
                  </Text>
                  <Text
                    variant='caption'
                    className='text-white'>
                    UTF-8
                  </Text>
                  <Text
                    variant='caption'
                    className='text-white'>
                    TypeScript React
                  </Text>
                </div>
                <div className='flex items-center gap-4'>
                  <Badge
                    variant='destructive'
                    size='sm'>
                    1 Error
                  </Badge>
                  <Badge
                    variant='warning'
                    size='sm'>
                    1 Warning
                  </Badge>
                </div>
              </div>
            </div>

            {/* Bottom Panel */}
            <div className='flex h-full flex-col overflow-hidden'>
              <Tabs.Root defaultValue='terminal'>
                <Tabs.List className='border-b border-gray-700 dark:border-gray-300'>
                  <Tabs.Trigger value='terminal'>Terminal</Tabs.Trigger>
                  <Tabs.Trigger value='problems'>
                    Problems
                    <Badge
                      variant='destructive'
                      size='sm'
                      className='ml-2'>
                      2
                    </Badge>
                  </Tabs.Trigger>
                  <Tabs.Trigger value='output'>Output</Tabs.Trigger>
                  <Tabs.Trigger value='debug'>Debug Console</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content
                  value='terminal'
                  className='flex-1 overflow-auto p-4 font-mono text-sm'>
                  <div className='space-y-1'>
                    {terminalOutput.map((line, i) => (
                      <div
                        key={i}
                        className={
                          line.type === 'command'
                            ? 'text-gray-100 dark:text-gray-900'
                            : line.type === 'success'
                              ? 'text-success-400'
                              : line.type === 'ready'
                                ? 'text-success-400'
                                : 'text-gray-400 dark:text-gray-600'
                        }>
                        {line.text}
                      </div>
                    ))}
                    <div className='flex items-center gap-2'>
                      <span className='text-gray-100 dark:text-gray-900'>
                        $
                      </span>
                      <span className='animate-pulse text-gray-100 dark:text-gray-900'>
                        _
                      </span>
                    </div>
                  </div>
                </Tabs.Content>

                <Tabs.Content
                  value='problems'
                  className='flex-1 overflow-auto'>
                  <div className='divide-y divide-gray-700 dark:divide-gray-300'>
                    {problems.map((problem, i) => (
                      <button
                        key={i}
                        className='flex w-full items-start gap-3 p-3 text-left transition-colors'>
                        <Badge
                          variant={
                            problem.type === 'error' ? 'destructive' : 'warning'
                          }
                          size='sm'
                          className='mt-0.5'>
                          {problem.type}
                        </Badge>
                        <div className='flex-1'>
                          <Text
                            variant='body-small'
                            className='mb-1 text-gray-100 dark:text-gray-900'>
                            {problem.message}
                          </Text>
                          <Text
                            variant='caption'
                            color='secondary'>
                            {problem.file} [Ln {problem.line}]
                          </Text>
                        </div>
                      </button>
                    ))}
                  </div>
                </Tabs.Content>

                <Tabs.Content
                  value='output'
                  className='flex-1 overflow-auto p-4'>
                  <Text
                    variant='body-small'
                    color='secondary'>
                    No output yet...
                  </Text>
                </Tabs.Content>

                <Tabs.Content
                  value='debug'
                  className='flex-1 overflow-auto p-4'>
                  <Text
                    variant='body-small'
                    color='secondary'>
                    Debug console ready
                  </Text>
                </Tabs.Content>
              </Tabs.Root>
            </div>
          </SplitPanes>
        </SplitPanes>
      </div>
    </div>
  )
}

const meta = {
  title: 'Recipes/Layouts/Code Editor',
  component: CodeEditorLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete VS Code-inspired code editor layout featuring activity bar, file explorer, tabbed editor, terminal panel, and problems view. Showcases nested SplitPanes for resizable panels.',
      },
    },
  },
} satisfies Meta<typeof CodeEditorLayout>

export default meta

type Story = StoryObj<typeof CodeEditorLayout>

export const Default: Story = {}
