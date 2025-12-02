import { Grid, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Recipes/Layouts/Blog Layout',
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
        gap='lg'
        className='mx-auto max-w-7xl'>
        <Grid.Item colSpan={12}>
          <div className='from-accent-600 to-accent-800 rounded-lg bg-gradient-to-r p-12 text-white'>
            <Text
              as='h1'
              variant='display-large'
              weight='bold'
              className='mb-4'>
              Titre de l'article principal
            </Text>
            <Text
              as='p'
              variant='heading-medium'
              className='text-accent-100 mb-4'>
              Un sous-titre accrocheur qui donne envie de lire la suite
            </Text>
            <div className='flex items-center gap-4'>
              <Text
                as='span'
                variant='body-small'>
                Par John Doe
              </Text>
              <Text
                as='span'
                variant='body-small'>
                •
              </Text>
              <Text
                as='span'
                variant='body-small'>
                15 minutes de lecture
              </Text>
              <Text
                as='span'
                variant='body-small'>
                •
              </Text>
              <Text
                as='span'
                variant='body-small'>
                2 décembre 2025
              </Text>
            </div>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={8}>
          <div className='dark:bg-base-900 border-base-200 dark:border-base-800 rounded-lg border bg-white p-8'>
            <div className='prose dark:prose-invert max-w-none'>
              <Text
                as='p'
                variant='body-large'
                className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Text
                as='h2'
                variant='heading-large'
                weight='bold'
                className='mt-8 mb-4'>
                Section principale
              </Text>
              <Text
                as='p'
                variant='body-medium'
                className='mb-4'>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </Text>
              <Text
                as='p'
                variant='body-medium'
                className='mb-4'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </div>
          </div>
        </Grid.Item>

        <Grid.Item colSpan={4}>
          <div className='space-y-6'>
            <div className='dark:bg-base-900 border-base-200 dark:border-base-800 rounded-lg border bg-white p-6'>
              <Text
                as='h3'
                variant='heading-small'
                weight='bold'
                className='mb-4'>
                À propos de l'auteur
              </Text>
              <div className='mb-3 flex items-center gap-3'>
                <div className='bg-accent-600 flex h-12 w-12 items-center justify-center rounded-full font-bold text-white'>
                  JD
                </div>
                <div>
                  <Text
                    as='div'
                    variant='body-medium'
                    weight='semibold'>
                    John Doe
                  </Text>
                  <Text
                    as='div'
                    variant='body-small'
                    color='secondary'>
                    Web Developer
                  </Text>
                </div>
              </div>
              <Text
                as='p'
                variant='body-small'
                color='secondary'>
                Développeur passionné par les technologies web et le design
                system.
              </Text>
            </div>

            <div className='dark:bg-base-900 border-base-200 dark:border-base-800 rounded-lg border bg-white p-6'>
              <Text
                as='h3'
                variant='heading-small'
                weight='bold'
                className='mb-4'>
                Articles populaires
              </Text>
              <ul className='space-y-3'>
                <li className='border-base-200 dark:border-base-800 border-b pb-3'>
                  <a
                    href='#'
                    className='hover:text-accent-600 dark:hover:text-accent-400'>
                    <Text
                      as='span'
                      variant='body-small'
                      weight='medium'>
                      Introduction aux Design Systems
                    </Text>
                  </a>
                  <Text
                    as='div'
                    variant='caption'
                    color='secondary'
                    className='mt-1'>
                    5 min de lecture
                  </Text>
                </li>
                <li className='border-base-200 dark:border-base-800 border-b pb-3'>
                  <a
                    href='#'
                    className='hover:text-accent-600 dark:hover:text-accent-400'>
                    <Text
                      as='span'
                      variant='body-small'
                      weight='medium'>
                      CSS Grid vs Flexbox
                    </Text>
                  </a>
                  <Text
                    as='div'
                    variant='caption'
                    color='secondary'
                    className='mt-1'>
                    8 min de lecture
                  </Text>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-accent-600 dark:hover:text-accent-400'>
                    <Text
                      as='span'
                      variant='body-small'
                      weight='medium'>
                      Tailwind CSS Tips
                    </Text>
                  </a>
                  <Text
                    as='div'
                    variant='caption'
                    color='secondary'
                    className='mt-1'>
                    6 min de lecture
                  </Text>
                </li>
              </ul>
            </div>

            <div className='bg-accent-50 dark:bg-accent-900/20 border-accent-200 dark:border-accent-800 rounded-lg border p-6'>
              <Text
                as='h3'
                variant='heading-small'
                weight='bold'
                className='mb-2'>
                Newsletter
              </Text>
              <Text
                as='p'
                variant='body-small'
                color='secondary'
                className='mb-4'>
                Recevez les derniers articles directement dans votre boîte mail.
              </Text>
              <input
                type='email'
                placeholder='votre@email.com'
                className='border-base-300 dark:border-base-700 dark:bg-base-900 mb-2 w-full rounded border bg-white px-3 py-2'
              />
              <button className='bg-accent-600 hover:bg-accent-700 w-full rounded py-2 font-medium text-white'>
                S'abonner
              </button>
            </div>
          </div>
        </Grid.Item>
      </Grid>
    </div>
  ),
}
