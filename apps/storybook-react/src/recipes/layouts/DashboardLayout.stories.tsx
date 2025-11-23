import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Badge,
  BreadCrumb,
  Button,
  InputSearch,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Tabs,
  Text,
} from '@myorg/ui'
import { useState } from 'react'

const DashboardLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const navItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📈', label: 'Analytics', active: false },
    { icon: '👥', label: 'Users', active: false },
    { icon: '📦', label: 'Products', active: false },
    { icon: '💬', label: 'Messages', badge: '12', active: false },
    { icon: '⚙️', label: 'Settings', active: false },
  ]

  const recentActivity = [
    { user: 'John Doe', action: 'created a new project', time: '2 min ago' },
    { user: 'Jane Smith', action: 'uploaded 5 files', time: '15 min ago' },
    { user: 'Bob Wilson', action: 'commented on task', time: '1 hour ago' },
    { user: 'Alice Brown', action: 'completed milestone', time: '2 hours ago' },
  ]

  return (
    <div className='bg-base-50 dark:bg-base-950 flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <aside
        className={`border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900 flex flex-col border-r transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        }`}>
        {/* Logo */}
        <div className='border-base-300 dark:border-base-700 flex h-16 items-center border-b px-4'>
          <Text
            as='div'
            variant='heading-small'
            weight='bold'
            className='text-accent-600 dark:text-accent-400'>
            {sidebarCollapsed ? 'A' : 'Acme Inc'}
          </Text>
        </div>

        {/* Navigation */}
        <nav className='flex-1 space-y-1 overflow-y-auto p-3'>
          {navItems.map((item, i) => (
            <button
              key={i}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                item.active
                  ? 'bg-accent-100 text-accent-900 dark:bg-accent-900 dark:text-accent-100'
                  : 'text-base-600 hover:bg-base-200 dark:text-base-400 dark:hover:bg-base-800'
              }`}>
              <span className='text-xl'>{item.icon}</span>
              {!sidebarCollapsed && (
                <>
                  <Text
                    variant='body-medium'
                    weight='medium'
                    className='flex-1'>
                    {item.label}
                  </Text>
                  {item.badge && (
                    <Badge
                      variant='primary'
                      size='sm'>
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        {/* Collapse Button */}
        <div className='border-base-300 dark:border-base-700 border-t p-3'>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className='w-full justify-center'>
            {sidebarCollapsed ? '→' : '←'}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Header */}
        <header className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900 flex h-16 items-center justify-between border-b px-6'>
          <div className='flex items-center gap-4'>
            <BreadCrumb
              items={[
                { label: 'Home', href: '#' },
                { label: 'Dashboard', href: '#' },
              ]}
            />
          </div>

          <div className='flex items-center gap-4'>
            <InputSearch
              placeholder='Search...'
              className='w-64'
            />

            <Button
              variant='ghost'
              size='sm'>
              🔔
            </Button>

            <div className='flex items-center gap-2'>
              <div className='bg-accent-500 flex h-8 w-8 items-center justify-center rounded-full text-white'>
                JD
              </div>
              <Select.Root defaultValue='profile'>
                <Select.Trigger size='sm'>
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value='profile'>Profile</Select.Item>
                  <Select.Item value='settings'>Settings</Select.Item>
                  <Select.Item value='logout'>Logout</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className='flex-1 overflow-y-auto p-6'>
          <div className='mx-auto max-w-7xl'>
            {/* Page Title */}
            <div className='mb-6'>
              <Text
                as='h1'
                variant='display-small'
                weight='bold'
                className='mb-2'>
                Dashboard Overview
              </Text>
              <Text
                variant='body-large'
                color='secondary'>
                Welcome back, John! Here's what's happening today.
              </Text>
            </div>

            {/* Stats Cards */}
            <div className='mb-6 grid gap-6 md:grid-cols-4'>
              {[
                {
                  label: 'Total Revenue',
                  value: '$45,231',
                  change: '+20.1%',
                  positive: true,
                },
                {
                  label: 'Active Users',
                  value: '2,345',
                  change: '+15.3%',
                  positive: true,
                },
                {
                  label: 'New Orders',
                  value: '147',
                  change: '-5.2%',
                  positive: false,
                },
                {
                  label: 'Conversion',
                  value: '3.24%',
                  change: '+2.5%',
                  positive: true,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className='border-base-300 bg-base-100 dark:border-base-700 dark:bg-base-900 rounded-xl border p-6'>
                  <Text
                    variant='body-small'
                    color='secondary'
                    className='mb-2'>
                    {stat.label}
                  </Text>
                  <Text
                    variant='heading-large'
                    weight='bold'
                    className='mb-1'>
                    {stat.value}
                  </Text>
                  <Text
                    variant='body-small'
                    color={stat.positive ? 'success' : 'error'}>
                    {stat.change} from last month
                  </Text>
                </div>
              ))}
            </div>

            {/* Tabs Content */}
            <Tabs.Root defaultValue='overview'>
              <Tabs.List>
                <Tabs.Trigger value='overview'>Overview</Tabs.Trigger>
                <Tabs.Trigger value='analytics'>Analytics</Tabs.Trigger>
                <Tabs.Trigger value='reports'>Reports</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value='overview'>
                <div className='grid gap-6 lg:grid-cols-3'>
                  {/* Recent Orders Table */}
                  <div className='lg:col-span-2'>
                    <div className='border-base-300 bg-base-100 dark:border-base-700 dark:bg-base-900 rounded-xl border p-6'>
                      <div className='mb-4 flex items-center justify-between'>
                        <Text
                          as='h2'
                          variant='heading-small'
                          weight='bold'>
                          Recent Orders
                        </Text>
                        <Button
                          variant='ghost'
                          size='sm'>
                          View All
                        </Button>
                      </div>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHeaderCell>Order ID</TableHeaderCell>
                            <TableHeaderCell>Customer</TableHeaderCell>
                            <TableHeaderCell>Status</TableHeaderCell>
                            <TableHeaderCell>Amount</TableHeaderCell>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            {
                              id: '#3210',
                              customer: 'John Doe',
                              status: 'completed',
                              amount: '$299.00',
                            },
                            {
                              id: '#3209',
                              customer: 'Jane Smith',
                              status: 'pending',
                              amount: '$149.00',
                            },
                            {
                              id: '#3208',
                              customer: 'Bob Wilson',
                              status: 'completed',
                              amount: '$549.00',
                            },
                            {
                              id: '#3207',
                              customer: 'Alice Brown',
                              status: 'cancelled',
                              amount: '$89.00',
                            },
                          ].map((order, i) => (
                            <TableRow key={i}>
                              <TableCell>
                                <Text
                                  variant='body-small'
                                  weight='medium'>
                                  {order.id}
                                </Text>
                              </TableCell>
                              <TableCell>{order.customer}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    order.status === 'completed'
                                      ? 'success'
                                      : order.status === 'pending'
                                        ? 'warning'
                                        : 'destructive'
                                  }
                                  size='sm'>
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Text
                                  variant='body-small'
                                  weight='medium'>
                                  {order.amount}
                                </Text>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>

                      <div className='mt-4 flex justify-center'>
                        <Pagination
                          currentPage={1}
                          totalPages={5}
                          onPageChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className='border-base-300 bg-base-100 dark:border-base-700 dark:bg-base-900 rounded-xl border p-6'>
                    <Text
                      as='h2'
                      variant='heading-small'
                      weight='bold'
                      className='mb-4'>
                      Recent Activity
                    </Text>

                    <div className='space-y-4'>
                      {recentActivity.map((activity, i) => (
                        <div
                          key={i}
                          className='flex gap-3'>
                          <div className='bg-accent-100 dark:bg-accent-900 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full'>
                            👤
                          </div>
                          <div className='flex-1'>
                            <Text
                              variant='body-small'
                              weight='medium'>
                              {activity.user}
                            </Text>
                            <Text
                              variant='body-small'
                              color='secondary'>
                              {activity.action}
                            </Text>
                            <Text
                              variant='caption'
                              color='secondary'>
                              {activity.time}
                            </Text>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tabs.Content>

              <Tabs.Content value='analytics'>
                <div className='border-base-300 bg-base-100 dark:border-base-700 dark:bg-base-900 rounded-xl border p-6'>
                  <Text
                    variant='heading-small'
                    weight='bold'>
                    Analytics content coming soon...
                  </Text>
                </div>
              </Tabs.Content>

              <Tabs.Content value='reports'>
                <div className='border-base-300 bg-base-100 dark:border-base-700 dark:bg-base-900 rounded-xl border p-6'>
                  <Text
                    variant='heading-small'
                    weight='bold'>
                    Reports content coming soon...
                  </Text>
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </main>
      </div>
    </div>
  )
}

const meta = {
  title: 'Recipes/Layouts/Dashboard',
  component: DashboardLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete dashboard layout featuring collapsible sidebar, header with search and user menu, stats cards, data tables, and activity feed. Demonstrates a typical admin panel structure.',
      },
    },
  },
} satisfies Meta<typeof DashboardLayout>

export default meta

type Story = StoryObj<typeof DashboardLayout>

export const Default: Story = {}
