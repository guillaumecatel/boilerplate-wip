import { Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const LongFormReading = () => {
  return (
    <div className='bg-base-50 dark:bg-base-950 min-h-screen py-12'>
      <div className='mx-auto max-w-prose px-6'>
        <article className='space-y-6'>
          {/* Title */}
          <header className='mb-10'>
            <Text
              as='h1'
              variant='display-medium'
              weight='bold'
              color='primary'
              className='mb-4'>
              The Art of Readable Typography
            </Text>
            <Text
              as='p'
              variant='body-large'
              color='secondary'>
              An exploration of what makes text comfortable to read for extended
              periods, from line length to spacing to color contrast.
            </Text>
          </header>

          {/* Body content optimized for reading */}
          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            Reading on screens is fundamentally different from reading on paper.
            The backlit display, the ability to zoom, the potential for
            distraction—all of these factors influence how we consume written
            content online. Understanding these differences is crucial for
            creating typography that truly works.
          </Text>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            One of the most important considerations is line length, also known
            as measure. The optimal line length for comfortable reading is
            generally considered to be between 45 and 75 characters per line,
            with 66 characters often cited as ideal. This isn't arbitrary—it's
            based on how our eyes move and how we process information.
          </Text>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            When lines are too long, readers can lose their place when moving
            from the end of one line to the beginning of the next. Their eyes
            have to travel too far, and it becomes tiring. Conversely, lines
            that are too short require frequent line breaks, which disrupts the
            reading rhythm and can make text feel choppy and stressful.
          </Text>

          <div className='border-base-300 bg-base-100 dark:border-base-700 dark:bg-base-900 my-8 space-y-4 rounded-xl border p-6'>
            <Text
              as='h2'
              variant='heading-small'
              weight='semibold'
              color='primary'>
              Key Readability Factors
            </Text>
            <div className='space-y-3'>
              <div>
                <Text
                  as='strong'
                  variant='body-medium'
                  weight='semibold'
                  color='primary'
                  className='mb-1'>
                  Line Height
                </Text>
                <Text
                  as='p'
                  variant='body-medium'
                  color='secondary'>
                  For body text, a line height of 1.5 to 1.8 times the font size
                  provides comfortable spacing between lines. This example uses
                  1.625 (26px for 16px text).
                </Text>
              </div>
              <div>
                <Text
                  as='strong'
                  variant='body-medium'
                  weight='semibold'
                  color='primary'
                  className='mb-1'>
                  Paragraph Spacing
                </Text>
                <Text
                  as='p'
                  variant='body-medium'
                  color='secondary'>
                  Space between paragraphs should be larger than line height to
                  clearly delineate thoughts and give readers natural pause
                  points.
                </Text>
              </div>
              <div>
                <Text
                  as='strong'
                  variant='body-medium'
                  weight='semibold'
                  color='primary'
                  className='mb-1'>
                  Color Contrast
                </Text>
                <Text
                  as='p'
                  variant='body-medium'
                  color='secondary'>
                  Pure black on pure white can be harsh on screens. Slightly
                  softened colors (like dark gray on off-white) reduce eye
                  strain while maintaining readability.
                </Text>
              </div>
            </div>
          </div>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            Another crucial factor is leading—the space between lines of text.
            The name comes from the days of metal typesetting when thin strips
            of lead were placed between lines to adjust spacing. Today we call
            it line height, but the principle remains the same: adequate space
            between lines improves readability dramatically.
          </Text>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            For body text, a line height between 1.5 and 1.8 times the font size
            is generally recommended. Shorter line heights make text feel
            cramped and difficult to scan, while excessive line height can make
            paragraphs feel disconnected and require more eye movement.
          </Text>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            Font choice plays a significant role as well. For extended reading,
            you want a typeface that's clear at text sizes, with good letter
            spacing and well-defined characters. While there's ongoing debate
            about serif versus sans-serif for screen reading, research suggests
            that familiarity and rendering quality matter more than the
            classification itself.
          </Text>

          <div className='border-accent-400 dark:border-accent-600 my-8 border-l-4 pl-6'>
            <Text
              as='blockquote'
              variant='body-large'
              weight='medium'
              color='primary'
              className='italic'>
              "Typography is what language looks like. It's the visual dress of
              words, and it has the power to enhance or obscure their meaning."
            </Text>
          </div>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            Color contrast is another vital consideration. While maximum
            contrast (pure black on pure white) might seem ideal, it can
            actually be harsh on screens, especially when reading for extended
            periods. Slightly reducing contrast by using a very dark gray
            instead of pure black, or an off-white background instead of pure
            white, can significantly reduce eye strain.
          </Text>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            However, contrast reduction must be done carefully. You need to
            maintain sufficient contrast to meet accessibility standards and
            ensure text remains easily readable for people with visual
            impairments. The WCAG (Web Content Accessibility Guidelines)
            recommend a minimum contrast ratio of 4.5:1 for normal text and 3:1
            for large text.
          </Text>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            Responsive typography is particularly important for long-form
            content. As viewport sizes change, your text needs to remain
            comfortable to read. This might mean adjusting not just font size,
            but also line height, line length, and paragraph spacing. What works
            on a large desktop monitor might feel cramped on a mobile device, or
            vice versa.
          </Text>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            Modern CSS features like the clamp() function allow for fluid
            typography that scales smoothly across viewport sizes. This can
            create a more seamless reading experience, though it's important to
            set reasonable minimum and maximum values to maintain readability at
            the extremes.
          </Text>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            Finally, consider the reading environment. Where will people be
            reading your content? In bright sunlight on mobile devices? In dimly
            lit rooms on desktop monitors? Late at night on tablets? Each
            scenario has different optimal settings, which is why features like
            dark mode and user-controllable text size are increasingly
            important.
          </Text>

          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            Great typography for reading isn't about following rigid rules—it's
            about understanding principles and applying them thoughtfully to
            create the most comfortable experience for your specific content and
            audience. Test with real users, gather feedback, and be willing to
            iterate. The goal is always the same: to make reading effortless, so
            users can focus on your content rather than fighting with the
            presentation.
          </Text>

          {/* Footer */}
          <footer className='border-base-200 dark:border-base-800 mt-12 border-t pt-8'>
            <Text
              variant='body-small'
              color='secondary'>
              This article demonstrates optimal typography settings for
              long-form reading with comfortable line length (60-75 characters),
              generous line height (1.625), and appropriate paragraph spacing.
            </Text>
          </footer>
        </article>
      </div>
    </div>
  )
}

const meta = {
  title: 'Recipes/Typography/Long-Form Reading',
  component: LongFormReading,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Demonstrates optimal typography settings for comfortable long-form reading. Features proper line length (max-w-prose), line height, paragraph spacing, and color contrast designed to reduce eye strain and improve comprehension.',
      },
    },
  },
} satisfies Meta<typeof LongFormReading>

export default meta

type Story = StoryObj<typeof LongFormReading>

export const Default: Story = {}
