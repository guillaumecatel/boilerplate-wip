import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
  Badge,
  BreadCrumb,
  Button,
  Checkbox,
  Divider,
  InputSearch,
  Label,
  Pagination,
  Select,
  Text,
  ToggleGroup,
  ToggleGroupItem,
} from '@myorg/ui'
import { useState } from 'react'

const EcommerceLayout = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [cartCount] = useState(3)

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.5,
      reviews: 128,
      image: '🎧',
      badge: 'Sale',
      inStock: true,
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 399.99,
      rating: 4.8,
      reviews: 256,
      image: '⌚',
      badge: 'New',
      inStock: true,
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 79.99,
      rating: 4.3,
      reviews: 89,
      image: '💻',
      inStock: true,
    },
    {
      id: 4,
      name: 'Mechanical Keyboard',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 342,
      image: '⌨️',
      badge: 'Sale',
      inStock: false,
    },
    {
      id: 5,
      name: 'USB-C Hub',
      price: 49.99,
      rating: 4.4,
      reviews: 167,
      image: '🔌',
      inStock: true,
    },
    {
      id: 6,
      name: 'Wireless Mouse',
      price: 59.99,
      rating: 4.6,
      reviews: 234,
      image: '🖱️',
      badge: 'Popular',
      inStock: true,
    },
  ]

  const filters = [
    {
      title: 'Price Range',
      options: ['Under $50', '$50 - $100', '$100 - $200', 'Over $200'],
    },
    {
      title: 'Brand',
      options: ['TechCo', 'GadgetPro', 'SmartLife', 'ElectroMax'],
    },
    {
      title: 'Rating',
      options: ['4★ & Up', '3★ & Up', '2★ & Up', '1★ & Up'],
    },
  ]

  return (
    <div className='bg-base-50 dark:bg-base-950 min-h-screen'>
      {/* Top Bar */}
      <div className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900 border-b'>
        <div className='mx-auto max-w-7xl px-6 py-2'>
          <div className='flex items-center justify-between'>
            <Text
              variant='caption'
              color='secondary'>
              Free shipping on orders over $100 🚚
            </Text>
            <div className='flex items-center gap-4'>
              <Text
                as='a'
                href='#'
                variant='caption'
                color='secondary'
                className='hover:text-accent-600 dark:hover:text-accent-400'>
                Help
              </Text>
              <Text
                as='a'
                href='#'
                variant='caption'
                color='secondary'
                className='hover:text-accent-600 dark:hover:text-accent-400'>
                Track Order
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900/95 sticky top-0 z-50 border-b backdrop-blur-sm'>
        <div className='mx-auto max-w-7xl px-6 py-4'>
          <div className='flex items-center justify-between gap-8'>
            <Text
              as='div'
              variant='heading-medium'
              weight='bold'
              className='text-accent-600 dark:text-accent-400'>
              TechShop
            </Text>

            <InputSearch
              placeholder='Search products...'
              className='max-w-xl flex-1'
            />

            <div className='flex items-center gap-4'>
              <Button
                variant='ghost'
                size='sm'>
                ❤️
              </Button>

              <Button
                variant='ghost'
                size='sm'
                className='relative'>
                🛒
                {cartCount > 0 && (
                  <Badge
                    variant='destructive'
                    size='sm'
                    className='absolute -top-1 -right-1'>
                    {cartCount}
                  </Badge>
                )}
              </Button>

              <Button
                variant='ghost'
                size='sm'>
                👤
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className='mt-4 flex items-center gap-6'>
            {[
              'Electronics',
              'Computers',
              'Accessories',
              'Smart Home',
              'Deals',
            ].map((item) => (
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
      </header>

      {/* Main Content */}
      <div className='mx-auto max-w-7xl px-6 py-8'>
        {/* Breadcrumb */}
        <BreadCrumb
          items={[
            { label: 'Home', href: '#' },
            { label: 'Electronics', href: '#' },
            { label: 'Accessories', href: '#' },
          ]}
          className='mb-6'
        />

        {/* Page Header */}
        <div className='mb-6'>
          <Text
            as='h1'
            variant='display-small'
            weight='bold'
            className='mb-2'>
            Tech Accessories
          </Text>
          <Text
            variant='body-large'
            color='secondary'>
            {products.length} products found
          </Text>
        </div>

        <div className='grid gap-8 lg:grid-cols-4'>
          {/* Filters Sidebar */}
          <aside className='space-y-6'>
            <div className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900 rounded-xl border p-6'>
              <div className='mb-4 flex items-center justify-between'>
                <Text
                  as='h2'
                  variant='heading-small'
                  weight='bold'>
                  Filters
                </Text>
                <Button
                  variant='ghost'
                  size='sm'>
                  Clear
                </Button>
              </div>

              <Accordion.Root
                type='multiple'
                defaultValue={['price', 'brand']}>
                {filters.map((filter, i) => (
                  <Accordion.Item
                    key={i}
                    value={filter.title.toLowerCase()}>
                    <Accordion.Trigger>{filter.title}</Accordion.Trigger>
                    <Accordion.Content>
                      <div className='space-y-3 pt-2'>
                        {filter.options.map((option) => (
                          <div
                            key={option}
                            className='flex items-center gap-2'>
                            <Checkbox id={option} />
                            <Label htmlFor={option}>{option}</Label>
                          </div>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>

            {/* Availability */}
            <div className='border-base-300 dark:border-base-700 bg-base-100 dark:bg-base-900 rounded-xl border p-6'>
              <Text
                as='h3'
                variant='body-large'
                weight='bold'
                className='mb-4'>
                Availability
              </Text>
              <div className='space-y-3'>
                <div className='flex items-center gap-2'>
                  <Checkbox
                    id='in-stock'
                    defaultChecked
                  />
                  <Label htmlFor='in-stock'>In Stock</Label>
                </div>
                <div className='flex items-center gap-2'>
                  <Checkbox id='on-sale' />
                  <Label htmlFor='on-sale'>On Sale</Label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className='lg:col-span-3'>
            {/* Toolbar */}
            <div className='mb-6 flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <Text
                  variant='body-medium'
                  color='secondary'>
                  Sort by:
                </Text>
                <Select.Root defaultValue='popular'>
                  <Select.Trigger className='w-48'>
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value='popular'>Most Popular</Select.Item>
                    <Select.Item value='price-low'>
                      Price: Low to High
                    </Select.Item>
                    <Select.Item value='price-high'>
                      Price: High to Low
                    </Select.Item>
                    <Select.Item value='newest'>Newest</Select.Item>
                    <Select.Item value='rating'>Highest Rated</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>

              <ToggleGroup
                type='single'
                value={view}
                onValueChange={(value: string) =>
                  value && setView(value as 'grid' | 'list')
                }>
                <ToggleGroupItem
                  value='grid'
                  aria-label='Grid view'>
                  ▦
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='list'
                  aria-label='List view'>
                  ☰
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Products */}
            <div
              className={
                view === 'grid'
                  ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
                  : 'space-y-4'
              }>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`border-base-300 dark:border-base-700 group bg-base-100 dark:bg-base-900 overflow-hidden rounded-xl border transition-all hover:shadow-lg ${
                    view === 'list' ? 'flex gap-6' : ''
                  }`}>
                  {/* Product Image */}
                  <div
                    className={`bg-accent-50 dark:bg-accent-950 relative flex items-center justify-center ${
                      view === 'list' ? 'w-48' : 'aspect-square'
                    }`}>
                    <span className='text-6xl'>{product.image}</span>
                    {product.badge && (
                      <Badge
                        variant={
                          product.badge === 'Sale'
                            ? 'destructive'
                            : product.badge === 'New'
                              ? 'success'
                              : 'primary'
                        }
                        size='sm'
                        className='absolute top-2 right-2'>
                        {product.badge}
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className='bg-base-900/50 absolute inset-0 flex items-center justify-center'>
                        <Badge
                          variant='secondary'
                          size='lg'>
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className={`p-4 ${view === 'list' ? 'flex-1' : ''}`}>
                    <Text
                      as='h3'
                      variant='body-large'
                      weight='bold'
                      className='group-hover:text-accent-600 dark:group-hover:text-accent-400 mb-2 transition-colors'>
                      {product.name}
                    </Text>

                    <div className='mb-3 flex items-center gap-2'>
                      <div className='flex items-center gap-1'>
                        <span className='text-warning-500'>★</span>
                        <Text
                          variant='body-small'
                          weight='medium'>
                          {product.rating}
                        </Text>
                      </div>
                      <Text
                        variant='caption'
                        color='secondary'>
                        ({product.reviews} reviews)
                      </Text>
                    </div>

                    <div className='mb-4 flex items-center gap-2'>
                      <Text
                        variant='heading-small'
                        weight='bold'
                        color='primary'>
                        ${product.price}
                      </Text>
                      {product.originalPrice && (
                        <Text
                          variant='body-medium'
                          color='secondary'
                          className='line-through'>
                          ${product.originalPrice}
                        </Text>
                      )}
                    </div>

                    <div className='flex w-full gap-2'>
                      <Button
                        variant='primary'
                        size='sm'
                        className='flex-1'
                        disabled={!product.inStock}>
                        Add to Cart
                      </Button>
                      <Button
                        variant='secondary'
                        size='sm'>
                        ❤️
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className='mt-8 flex justify-center'>
              <Pagination
                currentPage={1}
                totalPages={8}
                onPageChange={() => {}}
              />
            </div>
          </div>
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
                TechShop
              </Text>
              <Text
                variant='body-small'
                color='secondary'>
                Your one-stop shop for quality tech products.
              </Text>
            </div>

            {['Shop', 'Support', 'Company'].map((section) => (
              <div key={section}>
                <Text
                  as='h4'
                  variant='body-medium'
                  weight='bold'
                  className='mb-4'>
                  {section}
                </Text>
                <div className='space-y-2'>
                  {['Link 1', 'Link 2', 'Link 3'].map((link) => (
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

          <Text
            variant='body-small'
            color='secondary'
            className='text-center'>
            © 2025 TechShop. All rights reserved.
          </Text>
        </div>
      </footer>
    </div>
  )
}

const meta = {
  title: 'Recipes/Layouts/E-commerce',
  component: EcommerceLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete e-commerce product listing page with filters sidebar, product grid/list views, sorting, cart indicator, and responsive design. Perfect for online stores.',
      },
    },
  },
} satisfies Meta<typeof EcommerceLayout>

export default meta

type Story = StoryObj<typeof EcommerceLayout>

export const Default: Story = {}
