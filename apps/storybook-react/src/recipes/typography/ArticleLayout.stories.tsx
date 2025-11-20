import { Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const ArticleLayout = () => {
  return (
    <div className='bg-base-50 dark:bg-base-950 min-h-screen py-12'>
      <article className='mx-auto max-w-3xl px-6'>
        {/* Header */}
        <header className='border-base-200 dark:border-base-800 mb-12 border-b pb-8'>
          <div className='mb-4 flex items-center gap-3'>
            <span className='bg-accent-100 text-caption text-accent-700 dark:bg-accent-900 dark:text-accent-300 rounded-full px-3 py-1 font-medium'>
              Design System
            </span>
            <Text
              variant='body-small'
              color='secondary'>
              8 min read
            </Text>
          </div>

          <Text
            color='primary'
            as='h1'
            variant='display-small'
            weight='bold'
            className='mb-4'>
            Building a Scalable Design System with Modern Typography
          </Text>

          <Text
            as='p'
            variant='body-large'
            color='secondary'
            className='mb-6'>
            Learn how to create a comprehensive typography system that scales
            across your entire product, ensuring consistency and readability at
            every level.
          </Text>

          <div className='flex items-center gap-4'>
            <div className='bg-accent-200 text-body-large text-accent-900 dark:bg-accent-800 dark:text-accent-100 flex h-12 w-12 items-center justify-center rounded-full font-semibold'>
              JD
            </div>
            <div>
              <Text
                color='primary'
                as='div'
                variant='body-medium'
                weight='semibold'>
                John Doe
              </Text>
              <Text
                as='div'
                variant='body-small'
                color='secondary'>
                November 20, 2025
              </Text>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className='space-y-8'>
          <section>
            <Text
              as='h2'
              variant='heading-large'
              weight='bold'
              color='primary'
              className='mb-4'>
              Introduction
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'
              className='mb-4'>
              Typography is one of the most critical aspects of design systems.
              It's not just about choosing beautiful fonts—it's about creating a
              hierarchy that guides users through your content, establishes
              visual rhythm, and ensures consistency across every touchpoint.
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'>
              In this comprehensive guide, we'll explore the principles and
              practices that go into building a robust typographic system. From
              selecting the right typefaces to establishing a modular scale,
              you'll learn everything you need to create typography that works.
            </Text>
          </section>

          <section>
            <Text
              as='h2'
              variant='heading-large'
              weight='bold'
              color='primary'
              className='mb-4'>
              The Foundation: Type Scale
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'
              className='mb-4'>
              A type scale is a progression of font sizes that creates visual
              hierarchy and rhythm in your designs. Rather than choosing sizes
              arbitrarily, a well-designed scale uses mathematical ratios to
              ensure harmony between different text elements.
            </Text>

            <Text
              as='h3'
              variant='heading-medium'
              weight='semibold'
              color='primary'
              className='mb-3'>
              Common Scale Ratios
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'
              className='mb-2'>
              The most popular ratios include:
            </Text>
            <ul className='ml-6 space-y-2'>
              <li>
                <Text
                  variant='body-medium'
                  color='primary'>
                  <Text
                    as='strong'
                    variant='body-medium'
                    weight='semibold'
                    className='inline'>
                    1.125 (Major Second):
                  </Text>{' '}
                  Subtle and conservative, perfect for body-heavy interfaces
                </Text>
              </li>
              <li>
                <Text
                  color='primary'
                  variant='body-medium'>
                  <Text
                    as='strong'
                    variant='body-medium'
                    weight='semibold'
                    className='inline'>
                    1.2 (Minor Third):
                  </Text>{' '}
                  Balanced and versatile, works well for most applications
                </Text>
              </li>
              <li>
                <Text
                  color='primary'
                  variant='body-medium'>
                  <Text
                    as='strong'
                    variant='body-medium'
                    weight='semibold'
                    className='inline'>
                    1.333 (Perfect Fourth):
                  </Text>{' '}
                  More dramatic, ideal for marketing pages
                </Text>
              </li>
              <li>
                <Text
                  color='primary'
                  variant='body-medium'>
                  <Text
                    as='strong'
                    variant='body-medium'
                    weight='semibold'
                    className='inline'>
                    1.5 (Perfect Fifth):
                  </Text>{' '}
                  Bold and impactful, great for headlines
                </Text>
              </li>
            </ul>
          </section>

          <section className='border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-950 rounded-xl border p-6'>
            <Text
              as='h3'
              variant='heading-small'
              weight='semibold'
              color='primary'
              className='mb-3'>
              💡 Pro Tip
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'>
              Start with a base font size (usually 16px or 18px) and apply your
              chosen ratio consistently. This creates a natural rhythm that
              makes your content feel cohesive and intentional.
            </Text>
          </section>

          <section>
            <Text
              as='h2'
              variant='heading-large'
              weight='bold'
              color='primary'
              className='mb-4'>
              Typography in Practice
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'
              className='mb-4'>
              Implementing a type system requires more than just defining sizes.
              You need to consider line height, letter spacing, font weight, and
              how these elements interact across different screen sizes.
            </Text>

            <Text
              as='h3'
              variant='heading-medium'
              weight='semibold'
              color='primary'
              className='mb-3'>
              Key Considerations
            </Text>

            <div className='space-y-4'>
              <div>
                <Text
                  as='strong'
                  variant='body-medium'
                  weight='semibold'
                  color='primary'
                  className='mb-1'>
                  Line Height (Leading)
                </Text>
                <Text
                  as='p'
                  variant='body-medium'
                  color='primary'>
                  Body text should typically have a line height between 1.5 and
                  1.8 for optimal readability. Headlines can be tighter (1.1 to
                  1.3) to maintain visual impact.
                </Text>
              </div>

              <div>
                <Text
                  as='strong'
                  variant='body-medium'
                  weight='semibold'
                  color='primary'
                  className='mb-1'>
                  Line Length (Measure)
                </Text>
                <Text
                  as='p'
                  variant='body-medium'
                  color='primary'>
                  The ideal line length for body text is 60-75 characters. Too
                  long, and readers lose their place; too short, and the eye
                  tires from constant back-and-forth.
                </Text>
              </div>

              <div>
                <Text
                  as='strong'
                  variant='body-medium'
                  weight='semibold'
                  color='primary'
                  className='mb-1'>
                  Font Pairing
                </Text>
                <Text
                  as='p'
                  variant='body-medium'
                  color='primary'>
                  When pairing fonts, look for contrast but maintain harmony. A
                  serif headline with sans-serif body text is a classic
                  combination that works in most contexts.
                </Text>
              </div>
            </div>
          </section>

          <section className='border-base-300 dark:border-base-700 border-l-4 pl-6'>
            <Text
              as='blockquote'
              variant='body-large'
              weight='medium'
              color='primary'
              className='italic'>
              "Typography is the craft of endowing human language with a durable
              visual form, and thus with an independent existence."
            </Text>
            <Text
              variant='body-medium'
              color='secondary'
              className='mt-2'>
              — Robert Bringhurst, The Elements of Typographic Style
            </Text>
          </section>

          <section>
            <Text
              as='h2'
              variant='heading-large'
              weight='bold'
              color='primary'
              className='mb-4'>
              Responsive Typography
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'
              className='mb-4'>
              In the age of responsive design, your typography needs to adapt
              gracefully across devices. This means considering not just font
              size, but also how line height, spacing, and measure change at
              different breakpoints.
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'>
              Modern CSS features like clamp() and fluid typography techniques
              allow for smoother scaling, but the key is maintaining readability
              and hierarchy at every viewport size. Test your system on actual
              devices to ensure it performs well in real-world conditions.
            </Text>
          </section>

          <section>
            <Text
              as='h2'
              variant='heading-large'
              weight='bold'
              color='primary'
              className='mb-4'>
              Conclusion
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'
              className='mb-4'>
              Building a scalable typography system takes time and iteration,
              but the investment pays dividends in consistency, efficiency, and
              user experience. Start with the fundamentals—a solid type scale,
              clear hierarchy, and thoughtful spacing—then refine as you learn
              how your system performs in practice.
            </Text>
            <Text
              as='p'
              variant='body-medium'
              color='primary'>
              Remember that typography is both an art and a science. While
              principles and best practices provide guidance, the ultimate test
              is whether your system serves your users and supports your content
              effectively.
            </Text>
          </section>
        </div>

        {/* Footer */}
        <footer className='border-base-200 dark:border-base-800 mt-12 border-t pt-8'>
          <div className='flex flex-wrap gap-2'>
            {['Typography', 'Design System', 'UI/UX', 'Web Design'].map(
              (tag) => (
                <span
                  key={tag}
                  className='border-base-300 bg-base-100 text-body-small text-base-700 dark:border-base-700 dark:bg-base-900 dark:text-base-300 rounded-full border px-3 py-1'>
                  {tag}
                </span>
              ),
            )}
          </div>
        </footer>
      </article>
    </div>
  )
}

const meta = {
  title: 'Recipes/Typography/Article Layout',
  component: ArticleLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete article layout demonstrating typography hierarchy, spacing, and readability best practices. Features header with metadata, body content with multiple heading levels, blockquotes, callout boxes, and semantic tags.',
      },
    },
  },
} satisfies Meta<typeof ArticleLayout>

export default meta

type Story = StoryObj<typeof ArticleLayout>

export const Default: Story = {}
