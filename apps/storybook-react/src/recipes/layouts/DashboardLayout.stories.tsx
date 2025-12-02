import { Grid, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Recipes/Layouts/Dashboard Layout',
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
    <Grid
      cols={12}
      gap='md'
      className='bg-base-50 dark:bg-base-950 min-h-screen p-6'>
      <Grid.Item colSpan={12}>
        <div className='bg-primary-600 rounded-lg p-6 text-white'>
          <Text
            as='h2'
            variant='heading-large'
            weight='bold'
            className='mb-2'>
            Application Header
          </Text>
          <Text
            as='p'
            variant='body-medium'
            className='text-primary-100'>
            Logo, navigation principale, et actions utilisateur
          </Text>
        </div>
      </Grid.Item>

      <Grid.Item
        colSpan={3}
        rowSpan={2}>
        <div className='dark:bg-base-900 border-base-200 dark:border-base-800 h-full rounded-lg border bg-white p-6'>
          <Text
            as='h3'
            variant='heading-small'
            weight='semibold'
            className='mb-4'>
            Navigation
          </Text>
          <ul className='space-y-2'>
            <li className='hover:bg-base-100 dark:hover:bg-base-800 cursor-pointer rounded p-2'>
              <Text
                as='span'
                variant='body-medium'>
                Dashboard
              </Text>
            </li>
            <li className='hover:bg-base-100 dark:hover:bg-base-800 cursor-pointer rounded p-2'>
              <Text
                as='span'
                variant='body-medium'>
                Analytics
              </Text>
            </li>
            <li className='hover:bg-base-100 dark:hover:bg-base-800 cursor-pointer rounded p-2'>
              <Text
                as='span'
                variant='body-medium'>
                Reports
              </Text>
            </li>
            <li className='hover:bg-base-100 dark:hover:bg-base-800 cursor-pointer rounded p-2'>
              <Text
                as='span'
                variant='body-medium'>
                Settings
              </Text>
            </li>
          </ul>
        </div>
      </Grid.Item>

      <Grid.Item colSpan={9}>
        <div className='dark:bg-base-900 border-base-200 dark:border-base-800 rounded-lg border bg-white p-6'>
          <Text
            as='h3'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Main Content Area
          </Text>
          <Text
            as='p'
            variant='body-medium'
            color='secondary'
            className='mb-4'>
            Zone principale pour afficher le contenu de l'application :
            tableaux, graphiques, formulaires, etc.
          </Text>
          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-base-50 dark:bg-base-800 rounded-lg p-4 shadow-sm'>
              <Text
                as='div'
                variant='heading-large'
                weight='bold'
                className='text-accent-600 mb-1'>
                1,234
              </Text>
              <Text
                as='div'
                variant='body-small'
                color='secondary'>
                Total Users
              </Text>
            </div>
            <div className='bg-base-50 dark:bg-base-800 rounded-lg p-4 shadow-sm'>
              <Text
                as='div'
                variant='heading-large'
                weight='bold'
                color='success'
                className='mb-1'>
                +12%
              </Text>
              <Text
                as='div'
                variant='body-small'
                color='secondary'>
                Growth
              </Text>
            </div>
            <div className='bg-base-50 dark:bg-base-800 rounded-lg p-4 shadow-sm'>
              <Text
                as='div'
                variant='heading-large'
                weight='bold'
                color='info'
                className='mb-1'>
                89%
              </Text>
              <Text
                as='div'
                variant='body-small'
                color='secondary'>
                Satisfaction
              </Text>
            </div>
          </div>
        </div>
      </Grid.Item>

      <Grid.Item colSpan={9}>
        <div className='dark:bg-base-900 border-base-200 dark:border-base-800 rounded-lg border bg-white p-6'>
          <Text
            as='h3'
            variant='heading-medium'
            weight='bold'
            className='mb-4'>
            Secondary Content
          </Text>
          <Text
            as='p'
            variant='body-medium'
            color='secondary'>
            Section supplémentaire pour des tableaux détaillés, listes
            d'activités récentes, etc.
          </Text>
        </div>
      </Grid.Item>
    </Grid>
  ),
}
