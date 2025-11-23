import {
  Button,
  Checkbox,
  Form,
  FormField,
  InputField,
  InputQuantity,
  InputSearch,
  Label,
  MultiSelect,
  Select,
  Text,
} from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

const SearchForm = () => {
  const [results, setResults] = useState<number | null>(null)
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <div className='bg-base-100 dark:bg-base-900 min-h-screen py-12'>
      <div className='mx-auto max-w-5xl'>
        <div className='mb-8'>
          <Text
            as='h1'
            variant='display-small'
            weight='bold'
            className='mb-2'>
            Search Products
          </Text>
          <Text
            as='p'
            variant='body-large'
            color='secondary'>
            Find exactly what you're looking for with advanced filters
          </Text>
        </div>

        <div className='flex flex-col gap-6'>
          <Form
            initialValues={{
              query: '',
              category: '',
              brands: [],
              priceMin: 0,
              priceMax: 1000,
              rating: '',
              inStock: false,
              freeShipping: false,
              sortBy: 'relevance',
            }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              const mockResults = Math.floor(Math.random() * 500) + 1
              setResults(mockResults)
              console.log('Search criteria:', values)
            }}
            spacing='lg'
            className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-950 rounded-xl border p-6 shadow-lg'>
            {({ values, setFieldValue, isSubmitting }) => (
              <>
                <InputField
                  label='Search'
                  htmlFor='search-query'>
                  <div className='flex gap-3'>
                    <div className='flex-1'>
                      <InputSearch
                        id='search-query'
                        value={(values.query as string) || ''}
                        onChange={(e) => {
                          const newQuery = e.target.value
                          setFieldValue('query', newQuery)
                          // Recherche en temps réel
                          if (newQuery.length > 0) {
                            const mockResults =
                              Math.floor(Math.random() * 500) + 1
                            setResults(mockResults)
                          } else {
                            setResults(null)
                          }
                        }}
                        placeholder='Search for products...'
                        disabled={isSubmitting}
                        onClear={() => {
                          setFieldValue('query', '')
                          setResults(null)
                        }}
                      />
                    </div>
                    <Button
                      type='submit'
                      variant='primary'
                      size='lg'
                      disabled={isSubmitting}>
                      {isSubmitting ? 'Searching...' : 'Search'}
                    </Button>
                  </div>
                </InputField>

                <div className='flex flex-wrap gap-3'>
                  <div className='flex items-center gap-2'>
                    <Checkbox
                      id='search-instock'
                      checked={values.inStock as boolean}
                      onChange={(e) =>
                        setFieldValue('inStock', e.target.checked)
                      }
                      disabled={isSubmitting}
                    />
                    <Label htmlFor='search-instock'>In Stock Only</Label>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Checkbox
                      id='search-freeship'
                      checked={values.freeShipping as boolean}
                      onChange={(e) =>
                        setFieldValue('freeShipping', e.target.checked)
                      }
                      disabled={isSubmitting}
                    />
                    <Label htmlFor='search-freeship'>Free Shipping</Label>
                  </div>

                  <Button
                    type='button'
                    variant='ghost'
                    size='sm'
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    disabled={isSubmitting}>
                    {showAdvanced ? 'Hide' : 'Show'} Advanced Filters
                  </Button>
                </div>

                {showAdvanced && (
                  <FormField
                    legend='Advanced Filters'
                    description='Refine your search with detailed criteria'
                    variant='muted'>
                    <div className='grid gap-5 md:grid-cols-2'>
                      <InputField
                        label='Category'
                        htmlFor='search-category'>
                        <Select.Root
                          value={(values.category as string) || undefined}
                          onValueChange={(value: string) =>
                            setFieldValue('category', value)
                          }
                          disabled={isSubmitting}>
                          <Select.Trigger id='search-category'>
                            <Select.Value placeholder='All Categories' />
                          </Select.Trigger>
                          <Select.Content>
                            <Select.Item value='electronics'>
                              Electronics
                            </Select.Item>
                            <Select.Item value='clothing'>Clothing</Select.Item>
                            <Select.Item value='home'>
                              Home & Garden
                            </Select.Item>
                            <Select.Item value='sports'>
                              Sports & Outdoors
                            </Select.Item>
                            <Select.Item value='books'>Books</Select.Item>
                            <Select.Item value='toys'>Toys & Games</Select.Item>
                          </Select.Content>
                        </Select.Root>
                      </InputField>

                      <InputField
                        label='Brands'
                        htmlFor='search-brands'>
                        <MultiSelect.Root
                          options={[
                            { value: 'apple', label: 'Apple' },
                            { value: 'samsung', label: 'Samsung' },
                            { value: 'sony', label: 'Sony' },
                            { value: 'nike', label: 'Nike' },
                            { value: 'adidas', label: 'Adidas' },
                            { value: 'amazon', label: 'Amazon Basics' },
                          ]}
                          value={(values.brands as string[]) || []}
                          onValueChange={(value: string[]) =>
                            setFieldValue('brands', value)
                          }
                          placeholder='Select brands...'
                          disabled={isSubmitting}
                        />
                      </InputField>
                    </div>

                    <div className='grid gap-5 md:grid-cols-2'>
                      <InputField
                        label='Minimum Price ($)'
                        htmlFor='search-price-min'>
                        <InputQuantity
                          id='search-price-min'
                          value={values.priceMin as number}
                          onValueChange={(value: number) =>
                            setFieldValue('priceMin', value)
                          }
                          min={0}
                          max={10000}
                          step={10}
                          disabled={isSubmitting}
                        />
                      </InputField>

                      <InputField
                        label='Maximum Price ($)'
                        htmlFor='search-price-max'>
                        <InputQuantity
                          id='search-price-max'
                          value={values.priceMax as number}
                          onValueChange={(value: number) =>
                            setFieldValue('priceMax', value)
                          }
                          min={0}
                          max={10000}
                          step={10}
                          disabled={isSubmitting}
                        />
                      </InputField>
                    </div>

                    <div className='grid gap-5 md:grid-cols-2'>
                      <InputField
                        label='Minimum Rating'
                        htmlFor='search-rating'>
                        <Select.Root
                          value={(values.rating as string) || undefined}
                          onValueChange={(value: string) =>
                            setFieldValue('rating', value)
                          }
                          disabled={isSubmitting}>
                          <Select.Trigger id='search-rating'>
                            <Select.Value placeholder='Any Rating' />
                          </Select.Trigger>
                          <Select.Content>
                            <Select.Item value='4'>4★ & Up</Select.Item>
                            <Select.Item value='3'>3★ & Up</Select.Item>
                            <Select.Item value='2'>2★ & Up</Select.Item>
                            <Select.Item value='1'>1★ & Up</Select.Item>
                          </Select.Content>
                        </Select.Root>
                      </InputField>

                      <InputField
                        label='Sort By'
                        htmlFor='search-sort'>
                        <Select.Root
                          value={(values.sortBy as string) || 'relevance'}
                          onValueChange={(value: string) =>
                            setFieldValue('sortBy', value)
                          }
                          disabled={isSubmitting}>
                          <Select.Trigger id='search-sort'>
                            <Select.Value />
                          </Select.Trigger>
                          <Select.Content>
                            <Select.Item value='relevance'>
                              Most Relevant
                            </Select.Item>
                            <Select.Item value='price-low'>
                              Price: Low to High
                            </Select.Item>
                            <Select.Item value='price-high'>
                              Price: High to Low
                            </Select.Item>
                            <Select.Item value='rating'>
                              Customer Rating
                            </Select.Item>
                            <Select.Item value='newest'>
                              Newest Arrivals
                            </Select.Item>
                          </Select.Content>
                        </Select.Root>
                      </InputField>
                    </div>

                    <div className='flex justify-end gap-3'>
                      <Button
                        type='button'
                        variant='secondary'
                        onClick={() => {
                          setFieldValue('category', '')
                          setFieldValue('brands', [])
                          setFieldValue('priceMin', 0)
                          setFieldValue('priceMax', 1000)
                          setFieldValue('rating', '')
                          setFieldValue('sortBy', 'relevance')
                        }}
                        disabled={isSubmitting}>
                        Reset Filters
                      </Button>
                    </div>
                  </FormField>
                )}
              </>
            )}
          </Form>

          {results !== null && (
            <div className='border-success-300 bg-success-50 dark:border-success-700 dark:bg-success-950 rounded-xl border p-6'>
              <Text
                variant='heading-medium'
                weight='semibold'
                className='mb-2'>
                Search Results
              </Text>
              <Text
                variant='body-large'
                color='secondary'>
                Found {results} products matching your criteria
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Recipes/Forms/Search Form',
  component: SearchForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'An advanced search form demonstrating Form controller with quick filters and collapsible advanced filters. Features InputSearch, checkboxes for quick filters, MultiSelect for brands, InputQuantity for price range, and various Select dropdowns. Shows how to build a powerful filtering interface.',
      },
    },
  },
} satisfies Meta<typeof SearchForm>

export default meta

type Story = StoryObj<typeof SearchForm>

export const Default: Story = {}
