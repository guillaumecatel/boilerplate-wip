import { Button, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const ContentHierarchy = () => {
  return (
    <div className='bg-base-50 dark:bg-base-950 min-h-screen'>
      {/* Hero Section */}
      <section className='border-base-200 from-accent-50 to-base-50 dark:border-base-800 dark:from-accent-950 dark:to-base-950 border-b bg-linear-to-b py-20'>
        <div className='mx-auto max-w-4xl px-6 text-center'>
          <Text
            variant='caption'
            weight='semibold'
            color='primary'
            className='mb-4 tracking-wider uppercase'>
            Introducing Our Platform
          </Text>
          <Text
            as='h1'
            variant='display-large'
            weight='bold'
            color='primary'
            className='mb-6'>
            Design Systems That Scale
          </Text>
          <Text
            as='p'
            variant='body-large'
            color='secondary'
            className='mx-auto mb-8 max-w-2xl'>
            Build beautiful, consistent interfaces with a comprehensive design
            system built for modern product teams. From typography to
            components, everything you need is here.
          </Text>
          <div className='flex items-center justify-center gap-4'>
            <Button
              variant='primary'
              size='lg'>
              Get Started
            </Button>
            <Button
              variant='secondary'
              size='lg'>
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='mb-12 text-center'>
            <Text
              as='h2'
              variant='display-small'
              weight='bold'
              color='primary'
              className='mb-4'>
              Why Choose Our System?
            </Text>
            <Text
              as='p'
              variant='body-large'
              color='secondary'
              className='mx-auto max-w-2xl'>
              Everything you need to build professional interfaces, backed by
              best practices and real-world experience.
            </Text>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {[
              {
                title: 'Comprehensive',
                description:
                  'From atoms to organisms, every component you need with thoughtful variants and states.',
              },
              {
                title: 'Accessible',
                description:
                  'Built with WCAG 2.1 AA compliance in mind, ensuring everyone can use your products.',
              },
              {
                title: 'Developer-Friendly',
                description:
                  'TypeScript-first with excellent DX, documentation, and examples for every use case.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className='border-base-200 bg-base-100 dark:border-base-800 dark:bg-base-900 rounded-xl border p-6'>
                <Text
                  as='h3'
                  variant='heading-medium'
                  weight='semibold'
                  color='primary'
                  className='mb-3'>
                  {feature.title}
                </Text>
                <Text
                  as='p'
                  variant='body-medium'
                  color='secondary'>
                  {feature.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section with Hierarchy */}
      <section className='bg-base-100 dark:bg-base-900 py-16'>
        <div className='mx-auto max-w-4xl px-6'>
          <article className='space-y-8'>
            <header>
              <Text
                as='h2'
                variant='heading-large'
                weight='bold'
                color='primary'
                className='mb-4'>
                Understanding Visual Hierarchy
              </Text>
              <Text
                as='p'
                variant='body-large'
                color='primary'>
                Visual hierarchy is the principle of arranging elements to show
                their order of importance. It guides users through content,
                helping them understand what to read first, second, and so on.
              </Text>
            </header>

            <section>
              <Text
                as='h3'
                variant='heading-medium'
                weight='semibold'
                color='primary'
                className='mb-3'>
                The Role of Size
              </Text>
              <Text
                as='p'
                variant='body-medium'
                color='primary'
                className='mb-4'>
                Size is perhaps the most obvious tool for creating hierarchy.
                Larger elements naturally draw more attention, making them ideal
                for headlines, important calls-to-action, and key messages.
              </Text>
              <Text
                as='p'
                variant='body-medium'
                color='primary'>
                But size alone isn't enough. You need to consider the
                relationship between different sized elements, ensuring each
                level has enough contrast to be distinguishable while
                maintaining overall harmony.
              </Text>
            </section>

            <section>
              <Text
                as='h3'
                variant='heading-medium'
                weight='semibold'
                color='primary'
                className='mb-3'>
                Weight and Emphasis
              </Text>
              <div className='space-y-3'>
                <Text
                  as='div'
                  variant='body-medium'
                  color='primary'>
                  <Text
                    as='strong'
                    variant='body-medium'
                    weight='bold'
                    color='primary'
                    className='inline'>
                    Bold text
                  </Text>{' '}
                  commands attention and is perfect for emphasizing key points
                  within body copy.
                </Text>
                <Text
                  as='div'
                  variant='body-medium'
                  color='primary'>
                  <Text
                    as='strong'
                    variant='body-medium'
                    weight='semibold'
                    color='primary'
                    className='inline'>
                    Semibold
                  </Text>{' '}
                  provides a middle ground, offering emphasis without being too
                  heavy.
                </Text>
                <Text
                  as='div'
                  variant='body-medium'
                  color='primary'>
                  <Text
                    as='strong'
                    variant='body-medium'
                    weight='medium'
                    color='primary'
                    className='inline'>
                    Medium weight
                  </Text>{' '}
                  is subtle but effective for labels and secondary headings.
                </Text>
                <Text
                  as='p'
                  variant='body-medium'
                  color='primary'>
                  Regular weight serves as the baseline, providing excellent
                  readability for long-form content.
                </Text>
              </div>
            </section>

            <section>
              <Text
                as='h3'
                variant='heading-medium'
                weight='semibold'
                color='primary'
                className='mb-3'>
                Color for Hierarchy
              </Text>
              <div className='space-y-3'>
                <Text
                  as='p'
                  variant='body-medium'
                  color='primary'>
                  Primary color draws the most attention and is used for main
                  content and headings.
                </Text>
                <Text
                  variant='body-medium'
                  color='secondary'>
                  Secondary color provides context and supporting information
                  without competing with primary content.
                </Text>
                <Text
                  as='p'
                  variant='body-medium'
                  color='disabled'>
                  Disabled or tertiary text recedes into the background, useful
                  for metadata and less important details.
                </Text>
              </div>
            </section>

            <div className='border-accent-500 bg-accent-50 dark:border-accent-500 dark:bg-accent-950 my-8 rounded-xl border-l-4 p-6'>
              <Text
                as='strong'
                variant='body-medium'
                weight='semibold'
                color='primary'
                className='mb-2'>
                Remember
              </Text>
              <Text
                as='p'
                variant='body-medium'
                color='primary'>
                Good hierarchy isn't about making everything big or bold. It's
                about creating clear relationships between elements so users can
                navigate your content effortlessly.
              </Text>
            </div>

            <section>
              <Text
                as='h3'
                variant='heading-small'
                weight='semibold'
                color='primary'
                className='mb-3'>
                Practical Application
              </Text>
              <Text
                as='p'
                variant='body-medium'
                color='primary'
                className='mb-4'>
                When building interfaces, start with your content and identify
                the natural levels of hierarchy. What needs to stand out? What
                provides context? What can recede?
              </Text>
              <ul className='ml-6 space-y-2'>
                <li>
                  <Text variant='body-medium'>
                    Use display sizes sparingly for maximum impact
                  </Text>
                </li>
                <li>
                  <Text variant='body-medium'>
                    Maintain consistent spacing between hierarchy levels
                  </Text>
                </li>
                <li>
                  <Text variant='body-medium'>
                    Don't skip levels—move from H1 to H2 to H3 sequentially
                  </Text>
                </li>
                <li>
                  <Text variant='body-medium'>
                    Test your hierarchy by squinting—important elements should
                    still be visible
                  </Text>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className='border-base-200 dark:border-base-800 border-t py-16'>
        <div className='mx-auto max-w-3xl px-6 text-center'>
          <Text
            as='h2'
            variant='display-medium'
            weight='bold'
            color='primary'
            className='mb-4'>
            Ready to Build Better?
          </Text>
          <Text
            as='p'
            variant='body-large'
            color='secondary'
            className='mb-8'>
            Start using our design system today and create interfaces that users
            love.
          </Text>
          <Button
            variant='primary'
            size='lg'>
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: 'Recipes/Typography/Content Hierarchy',
  component: ContentHierarchy,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete page layout demonstrating proper content hierarchy using typography. Shows how to combine different text sizes, weights, and colors to guide users through content effectively.',
      },
    },
  },
} satisfies Meta<typeof ContentHierarchy>

export default meta

type Story = StoryObj<typeof ContentHierarchy>

export const Default: Story = {}
