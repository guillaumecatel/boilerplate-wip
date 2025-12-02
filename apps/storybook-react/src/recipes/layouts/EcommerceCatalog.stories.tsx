import { Grid, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Recipes/Layouts/E-commerce Catalog',
  parameters: {
    layout: 'fullscreen',
    docs: {
      disable: true,
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className='bg-base-50 dark:bg-base-950 min-h-screen p-6'>
      <Grid
        cols={12}
        gap='md'>
        <Grid.Item colSpan={12}>
          <div className='dark:bg-base-900 border-base-200 dark:border-base-800 rounded-lg border bg-white p-6'>
            <Text
              as='h1'
              variant='display-medium'
              weight='bold'
              className='mb-2'>
              Catalogue Produits
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='secondary'>
              1,234 produits disponibles
            </Text>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={3}>
          <div className='dark:bg-base-900 border-base-200 dark:border-base-800 sticky top-6 rounded-lg border bg-white p-6'>
            <Text
              as='h3'
              variant='heading-small'
              weight='bold'
              className='mb-4'>
              Filtres
            </Text>

            <div className='mb-6'>
              <Text
                as='h4'
                variant='body-medium'
                weight='semibold'
                className='mb-2'>
                Catégorie
              </Text>
              <div className='space-y-2'>
                <label className='flex cursor-pointer items-center gap-2'>
                  <input
                    type='checkbox'
                    className='rounded'
                  />
                  <Text
                    as='span'
                    variant='body-small'>
                    Électronique (234)
                  </Text>
                </label>
                <label className='flex cursor-pointer items-center gap-2'>
                  <input
                    type='checkbox'
                    className='rounded'
                  />
                  <Text
                    as='span'
                    variant='body-small'>
                    Vêtements (567)
                  </Text>
                </label>
                <label className='flex cursor-pointer items-center gap-2'>
                  <input
                    type='checkbox'
                    className='rounded'
                  />
                  <Text
                    as='span'
                    variant='body-small'>
                    Maison (123)
                  </Text>
                </label>
              </div>
            </div>

            <div className='mb-6'>
              <Text
                as='h4'
                variant='body-medium'
                weight='semibold'
                className='mb-2'>
                Prix
              </Text>
              <div className='space-y-2'>
                <label className='flex cursor-pointer items-center gap-2'>
                  <input
                    type='radio'
                    name='price'
                    className='rounded-full'
                  />
                  <Text
                    as='span'
                    variant='body-small'>
                    Moins de 50€
                  </Text>
                </label>
                <label className='flex cursor-pointer items-center gap-2'>
                  <input
                    type='radio'
                    name='price'
                    className='rounded-full'
                  />
                  <Text
                    as='span'
                    variant='body-small'>
                    50€ - 100€
                  </Text>
                </label>
                <label className='flex cursor-pointer items-center gap-2'>
                  <input
                    type='radio'
                    name='price'
                    className='rounded-full'
                  />
                  <Text
                    as='span'
                    variant='body-small'>
                    Plus de 100€
                  </Text>
                </label>
              </div>
            </div>

            <div className='mb-6'>
              <Text
                as='h4'
                variant='body-medium'
                weight='semibold'
                className='mb-2'>
                Note
              </Text>
              <div className='space-y-2'>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <label
                    key={stars}
                    className='flex cursor-pointer items-center gap-2'>
                    <input
                      type='checkbox'
                      className='rounded'
                    />
                    <Text
                      as='span'
                      variant='body-small'>
                      {'⭐'.repeat(stars)} et plus
                    </Text>
                  </label>
                ))}
              </div>
            </div>

            <button className='bg-accent-600 hover:bg-accent-700 w-full rounded py-2 font-medium text-white'>
              Appliquer les filtres
            </button>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={9}>
          <Grid
            cols={3}
            gap='md'>
            {Array.from({ length: 9 }, (_, i) => (
              <Grid.Item key={i}>
                <div className='dark:bg-base-900 border-base-200 dark:border-base-800 cursor-pointer overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-lg'>
                  <div className='bg-base-100 dark:bg-base-800 flex h-48 items-center justify-center'>
                    <span className='text-4xl'>📦</span>
                  </div>
                  <div className='p-4'>
                    <Text
                      as='h4'
                      variant='body-medium'
                      weight='semibold'
                      className='mb-1'>
                      Produit {i + 1}
                    </Text>
                    <Text
                      as='p'
                      variant='body-small'
                      color='secondary'
                      className='mb-2'>
                      Description courte du produit
                    </Text>
                    <div className='flex items-center justify-between'>
                      <Text
                        as='span'
                        variant='heading-small'
                        weight='bold'
                        className='text-accent-600'>
                        {(i + 1) * 10}€
                      </Text>
                      <div className='flex items-center gap-1'>
                        <Text
                          as='span'
                          variant='body-small'>
                          ⭐
                        </Text>
                        <Text
                          as='span'
                          variant='body-small'
                          weight='medium'>
                          4.{i}
                        </Text>
                        <Text
                          as='span'
                          variant='body-small'
                          className='text-base-500'>
                          ({(i + 1) * 10})
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid.Item>
            ))}
          </Grid>
        </Grid.Item>
      </Grid>
    </div>
  ),
}
