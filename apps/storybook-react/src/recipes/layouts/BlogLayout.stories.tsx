import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Badge,
  Button,
  Divider,
  Input,
  InputSearch,
  Pagination,
  Tabs,
  Text,
} from '@myorg/ui'

const BlogLayout = () => {
  const posts = [
    {
      title: 'Getting Started with React 19',
      excerpt:
        'Learn about the latest features in React 19 including automatic batching, transitions, and more...',
      author: 'Sarah Johnson',
      date: 'Nov 15, 2025',
      readTime: '5 min read',
      category: 'React',
      tags: ['React', 'JavaScript', 'Frontend'],
      image: '🎨',
    },
    {
      title: 'Building Accessible Web Applications',
      excerpt:
        'A comprehensive guide to making your web applications accessible to everyone, following WCAG guidelines...',
      author: 'Michael Chen',
      date: 'Nov 12, 2025',
      readTime: '8 min read',
      category: 'Accessibility',
      tags: ['A11y', 'Web', 'UX'],
      image: '♿',
    },
    {
      title: 'Mastering TypeScript Generics',
      excerpt:
        'Deep dive into TypeScript generics and how they can make your code more reusable and type-safe...',
      author: 'David Kumar',
      date: 'Nov 10, 2025',
      readTime: '12 min read',
      category: 'TypeScript',
      tags: ['TypeScript', 'Programming'],
      image: '📘',
    },
  ]

  const categories = [
    { name: 'All Posts', count: 156 },
    { name: 'React', count: 42 },
    { name: 'TypeScript', count: 38 },
    { name: 'Accessibility', count: 24 },
    { name: 'Design', count: 31 },
    { name: 'Performance', count: 21 },
  ]

  const popularPosts = [
    { title: 'Introduction to Web Components', views: '12.5K' },
    { title: 'CSS Grid vs Flexbox', views: '10.2K' },
    { title: 'State Management in 2025', views: '9.8K' },
    { title: 'API Design Best Practices', views: '8.4K' },
  ]

  return (
    <div className='bg-base-50 dark:bg-base-950 min-h-screen'>
      {/* Header */}
      <header className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900/95 sticky top-0 z-50 border-b backdrop-blur-sm'>
        <div className='mx-auto max-w-7xl px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-8'>
              <Text
                as='div'
                variant='heading-medium'
                weight='bold'
                className='text-accent-600 dark:text-accent-400'>
                DevBlog
              </Text>

              <nav className='hidden items-center gap-6 md:flex'>
                {['Home', 'Articles', 'Tutorials', 'About'].map((item) => (
                  <Text
                    key={item}
                    as='a'
                    href='#'
                    variant='body-medium'
                    weight='medium'
                    className='text-base-700 hover:text-accent-600 dark:text-base-300 dark:hover:text-accent-400 transition-colors'>
                    {item}
                  </Text>
                ))}
              </nav>
            </div>

            <div className='flex items-center gap-4'>
              <InputSearch
                placeholder='Search articles...'
                className='hidden w-64 md:block'
              />
              <Button
                variant='primary'
                size='sm'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='from-accent-50 to-base-50 dark:from-accent-950 dark:to-base-950 bg-gradient-to-b py-16'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='text-center'>
            <Text
              as='h1'
              variant='display-large'
              weight='bold'
              className='mb-4'>
              Welcome to DevBlog
            </Text>
            <Text
              as='p'
              variant='heading-small'
              color='secondary'
              className='mb-8'>
              Insights, tutorials, and best practices for modern web development
            </Text>

            <div className='flex flex-wrap justify-center gap-2'>
              {['React', 'TypeScript', 'Design', 'Performance'].map((tag) => (
                <Badge
                  key={tag}
                  variant='primary'
                  size='lg'>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='mx-auto max-w-7xl px-6 py-12'>
        <div className='grid gap-8 lg:grid-cols-3'>
          {/* Articles */}
          <div className='lg:col-span-2'>
            <div className='mb-6 flex items-center justify-between'>
              <Text
                as='h2'
                variant='heading-large'
                weight='bold'>
                Latest Articles
              </Text>

              <Tabs.Root defaultValue='recent'>
                <Tabs.List>
                  <Tabs.Trigger value='recent'>Recent</Tabs.Trigger>
                  <Tabs.Trigger value='popular'>Popular</Tabs.Trigger>
                  <Tabs.Trigger value='trending'>Trending</Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>
            </div>

            <div className='space-y-6'>
              {posts.map((post, i) => (
                <article
                  key={i}
                  className='border-base-300 dark:border-base-700 group bg-base-100 dark:bg-base-900 overflow-hidden rounded-xl border transition-all hover:shadow-lg'>
                  <div className='p-6'>
                    <div className='mb-4 flex items-start gap-4'>
                      <div className='bg-accent-100 dark:bg-accent-900 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg text-4xl'>
                        {post.image}
                      </div>

                      <div className='flex-1'>
                        <div className='mb-2 flex items-center gap-2'>
                          <Badge
                            variant='secondary'
                            size='sm'>
                            {post.category}
                          </Badge>
                          <Text
                            variant='caption'
                            color='secondary'>
                            {post.date} · {post.readTime}
                          </Text>
                        </div>

                        <Text
                          as='h3'
                          variant='heading-medium'
                          weight='bold'
                          className='group-hover:text-accent-600 dark:group-hover:text-accent-400 mb-2 transition-colors'>
                          {post.title}
                        </Text>

                        <Text
                          variant='body-medium'
                          color='secondary'
                          className='mb-4'>
                          {post.excerpt}
                        </Text>

                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-2'>
                            <div className='bg-accent-500 flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white'>
                              {post.author
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </div>
                            <Text
                              variant='body-small'
                              weight='medium'>
                              {post.author}
                            </Text>
                          </div>

                          <Button
                            variant='ghost'
                            size='sm'>
                            Read More →
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant='secondary'
                          size='sm'>
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className='mt-8 flex justify-center'>
              <Pagination
                currentPage={1}
                totalPages={12}
                onPageChange={() => {}}
              />
            </div>
          </div>

          {/* Sidebar */}
          <aside className='space-y-6'>
            {/* Newsletter */}
            <div className='border-base-300 bg-accent-50 dark:border-base-700 dark:bg-accent-950 rounded-xl border p-6'>
              <Text
                as='h3'
                variant='heading-small'
                weight='bold'
                className='mb-2'>
                Subscribe to Newsletter
              </Text>
              <Text
                variant='body-small'
                color='secondary'
                className='mb-4'>
                Get the latest articles delivered to your inbox
              </Text>
              <div className='space-y-3'>
                <Input
                  type='email'
                  placeholder='your@email.com'
                />
                <Button
                  variant='primary'
                  className='w-full'>
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900 rounded-xl border p-6'>
              <Text
                as='h3'
                variant='heading-small'
                weight='bold'
                className='mb-4'>
                Categories
              </Text>
              <div className='space-y-2'>
                {categories.map((category, i) => (
                  <button
                    key={i}
                    className='text-base-700 hover:text-accent-600 dark:text-base-300 dark:hover:text-accent-400 hover:bg-base-50 dark:hover:bg-base-800 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors'>
                    <Text
                      variant='body-medium'
                      weight='medium'>
                      {category.name}
                    </Text>
                    <Badge
                      variant='secondary'
                      size='sm'>
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900 rounded-xl border p-6'>
              <Text
                as='h3'
                variant='heading-small'
                weight='bold'
                className='mb-4'>
                Popular Posts
              </Text>
              <div className='space-y-4'>
                {popularPosts.map((post, i) => (
                  <div key={i}>
                    <Text
                      as='a'
                      href='#'
                      variant='body-small'
                      weight='medium'
                      className='hover:text-accent-600 dark:hover:text-accent-400 mb-1 block transition-colors'>
                      {post.title}
                    </Text>
                    <Text
                      variant='caption'
                      color='secondary'>
                      {post.views} views
                    </Text>
                    {i < popularPosts.length - 1 && (
                      <Divider className='mt-4' />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Cloud */}
            <div className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900 rounded-xl border p-6'>
              <Text
                as='h3'
                variant='heading-small'
                weight='bold'
                className='mb-4'>
                Popular Tags
              </Text>
              <div className='flex flex-wrap gap-2'>
                {[
                  'React',
                  'TypeScript',
                  'CSS',
                  'JavaScript',
                  'Performance',
                  'Testing',
                  'Design',
                  'A11y',
                  'SEO',
                  'Web',
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant='secondary'
                    size='sm'
                    className='hover:bg-accent-100 dark:hover:bg-accent-900 cursor-pointer'>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900 mt-12 border-t py-12'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid gap-8 md:grid-cols-4'>
            <div>
              <Text
                as='div'
                variant='heading-small'
                weight='bold'
                className='text-accent-600 dark:text-accent-400 mb-4'>
                DevBlog
              </Text>
              <Text
                variant='body-small'
                color='secondary'>
                Sharing knowledge and insights about modern web development.
              </Text>
            </div>

            {['Content', 'Company', 'Connect'].map((section) => (
              <div key={section}>
                <Text
                  as='h4'
                  variant='body-medium'
                  weight='bold'
                  className='mb-4'>
                  {section}
                </Text>
                <div className='space-y-2'>
                  {['Link 1', 'Link 2', 'Link 3', 'Link 4'].map((link) => (
                    <Text
                      key={link}
                      as='a'
                      href='#'
                      variant='body-small'
                      color='secondary'
                      className='hover:text-accent-600 dark:hover:text-accent-400 block transition-colors'>
                      {link}
                    </Text>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Divider className='my-8' />

          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <Text
              variant='body-small'
              color='secondary'>
              © 2025 DevBlog. All rights reserved.
            </Text>
            <div className='flex gap-4'>
              {['Privacy', 'Terms', 'Contact'].map((link) => (
                <Text
                  key={link}
                  as='a'
                  href='#'
                  variant='body-small'
                  color='secondary'
                  className='hover:text-accent-600 dark:hover:text-accent-400 transition-colors'>
                  {link}
                </Text>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const meta = {
  title: 'Recipes/Layouts/Blog',
  component: BlogLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A modern blog layout with sticky header, hero section, article cards, sidebar with categories and popular posts, newsletter signup, and footer. Perfect for content-heavy websites.',
      },
    },
  },
} satisfies Meta<typeof BlogLayout>

export default meta

type Story = StoryObj<typeof BlogLayout>

export const Default: Story = {}
