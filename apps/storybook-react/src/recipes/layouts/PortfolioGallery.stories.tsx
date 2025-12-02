import { Grid, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Recipes/Layouts/Portfolio Gallery',
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
        gap='md'
        className='mx-auto max-w-7xl'>
        <Grid.Item colSpan={12}>
          <div className='p-8 text-center'>
            <Text
              as='h1'
              variant='display-large'
              weight='bold'
              className='mb-4'>
              Portfolio Créatif
            </Text>
            <Text
              as='p'
              variant='heading-medium'
              color='secondary'>
              Une sélection de mes meilleurs projets
            </Text>
          </div>
        </Grid.Item>

        {/* Layout asymétrique pour plus d'intérêt visuel */}
        <Grid.Item
          colSpan={8}
          rowSpan={2}>
          <div className='from-accent-500 to-accent-700 group relative flex h-full min-h-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br text-white'>
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40'>
              <div className='text-center opacity-0 transition-opacity group-hover:opacity-100'>
                <Text
                  as='h3'
                  variant='heading-large'
                  weight='bold'
                  className='mb-2'>
                  Projet Principal
                </Text>
                <Text
                  as='p'
                  variant='body-large'
                  className='text-accent-100'>
                  Design & Développement
                </Text>
              </div>
            </div>
            <span className='text-8xl'>🎨</span>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={4}>
          <div className='bg-base-200 dark:bg-base-800 group relative flex h-full min-h-[190px] cursor-pointer items-center justify-center overflow-hidden rounded-lg'>
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40'>
              <div className='text-center text-white opacity-0 transition-opacity group-hover:opacity-100'>
                <Text
                  as='h3'
                  variant='heading-small'
                  weight='bold'
                  className='mb-1'>
                  Projet 2
                </Text>
                <Text
                  as='p'
                  variant='body-small'>
                  UI Design
                </Text>
              </div>
            </div>
            <span className='text-6xl'>📱</span>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={4}>
          <div className='bg-base-200 dark:bg-base-800 group relative flex h-full min-h-[190px] cursor-pointer items-center justify-center overflow-hidden rounded-lg'>
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40'>
              <div className='text-center text-white opacity-0 transition-opacity group-hover:opacity-100'>
                <Text
                  as='h3'
                  variant='heading-small'
                  weight='bold'
                  className='mb-1'>
                  Projet 3
                </Text>
                <Text
                  as='p'
                  variant='body-small'>
                  Branding
                </Text>
              </div>
            </div>
            <span className='text-6xl'>💼</span>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={4}>
          <div className='bg-base-200 dark:bg-base-800 group relative flex h-full min-h-[190px] cursor-pointer items-center justify-center overflow-hidden rounded-lg'>
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40'>
              <div className='text-center text-white opacity-0 transition-opacity group-hover:opacity-100'>
                <Text
                  as='h3'
                  variant='heading-small'
                  weight='bold'
                  className='mb-1'>
                  Projet 4
                </Text>
                <Text
                  as='p'
                  variant='body-small'>
                  Web App
                </Text>
              </div>
            </div>
            <span className='text-6xl'>💻</span>
          </div>
        </Grid.Item>

        <Grid.Item
          colSpan={4}
          rowSpan={2}>
          <div className='group relative flex h-full min-h-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-600'>
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40'>
              <div className='text-center text-white opacity-0 transition-opacity group-hover:opacity-100'>
                <Text
                  as='h3'
                  variant='heading-large'
                  weight='bold'
                  className='mb-2'>
                  Projet 5
                </Text>
                <Text
                  as='p'
                  variant='body-large'>
                  Illustration & Motion
                </Text>
              </div>
            </div>
            <span className='text-8xl'>✨</span>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={4}>
          <div className='bg-base-200 dark:bg-base-800 group relative flex h-full min-h-[190px] cursor-pointer items-center justify-center overflow-hidden rounded-lg'>
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40'>
              <div className='text-center text-white opacity-0 transition-opacity group-hover:opacity-100'>
                <Text
                  as='h3'
                  variant='heading-small'
                  weight='bold'
                  className='mb-1'>
                  Projet 6
                </Text>
                <Text
                  as='p'
                  variant='body-small'>
                  Photography
                </Text>
              </div>
            </div>
            <span className='text-6xl'>📷</span>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={4}>
          <div className='bg-base-200 dark:bg-base-800 group relative flex h-full min-h-[190px] cursor-pointer items-center justify-center overflow-hidden rounded-lg'>
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40'>
              <div className='text-center text-white opacity-0 transition-opacity group-hover:opacity-100'>
                <Text
                  as='h3'
                  variant='heading-small'
                  weight='bold'
                  className='mb-1'>
                  Projet 7
                </Text>
                <Text
                  as='p'
                  variant='body-small'>
                  3D Design
                </Text>
              </div>
            </div>
            <span className='text-6xl'>🎭</span>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={6}>
          <div className='group relative flex h-full min-h-[190px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600'>
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40'>
              <div className='text-center text-white opacity-0 transition-opacity group-hover:opacity-100'>
                <Text
                  as='h3'
                  variant='heading-medium'
                  weight='bold'
                  className='mb-2'>
                  Projet 8
                </Text>
                <Text
                  as='p'
                  variant='body-medium'>
                  Dashboard Design
                </Text>
              </div>
            </div>
            <span className='text-7xl'>📊</span>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={6}>
          <div className='group relative flex h-full min-h-[190px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-red-600'>
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40'>
              <div className='text-center text-white opacity-0 transition-opacity group-hover:opacity-100'>
                <Text
                  as='h3'
                  variant='heading-medium'
                  weight='bold'
                  className='mb-2'>
                  Projet 9
                </Text>
                <Text
                  as='p'
                  variant='body-medium'>
                  E-commerce
                </Text>
              </div>
            </div>
            <span className='text-7xl'>🛍️</span>
          </div>
        </Grid.Item>
      </Grid>
    </div>
  ),
}
