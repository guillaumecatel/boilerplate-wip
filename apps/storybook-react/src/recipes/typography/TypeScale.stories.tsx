import { Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const TypeScale = () => {
  const scales = [
    {
      variant: 'display-large' as const,
      label: 'Display Large',
      usage: 'Hero sections, landing pages',
    },
    {
      variant: 'display-medium' as const,
      label: 'Display Medium',
      usage: 'Feature highlights, major sections',
    },
    {
      variant: 'display-small' as const,
      label: 'Display Small',
      usage: 'Page titles, section headers',
    },
    {
      variant: 'heading-large' as const,
      label: 'Heading Large',
      usage: 'Main content headings (H1)',
    },
    {
      variant: 'heading-medium' as const,
      label: 'Heading Medium',
      usage: 'Section headings (H2)',
    },
    {
      variant: 'heading-small' as const,
      label: 'Heading Small',
      usage: 'Subsection headings (H3)',
    },
    {
      variant: 'body-large' as const,
      label: 'Body Large',
      usage: 'Lead paragraphs, important text',
    },
    {
      variant: 'body-medium' as const,
      label: 'Body Medium',
      usage: 'Default body text',
    },
    {
      variant: 'body-small' as const,
      label: 'Body Small',
      usage: 'Captions, helper text, metadata',
    },
    {
      variant: 'caption' as const,
      label: 'Caption',
      usage: 'Labels, timestamps, small UI text',
    },
  ]

  return (
    <div className='bg-base-50 dark:bg-base-950 min-h-screen py-12'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='mb-12'>
          <Text
            as='h1'
            variant='display-small'
            weight='bold'
            color='primary'
            className='mb-4'>
            Typography Scale
          </Text>
          <Text
            as='p'
            variant='body-large'
            color='secondary'>
            A comprehensive type scale using a 1.2 ratio (Minor Third) for
            harmonious progression. Each level serves a specific purpose in the
            content hierarchy.
          </Text>
        </div>

        <div className='space-y-8'>
          {scales.map((scale) => (
            <div
              key={scale.variant}
              className='group border-base-200 bg-base-100 hover:border-accent-300 dark:border-base-800 dark:bg-base-900 dark:hover:border-accent-700 rounded-xl border p-8 transition-all hover:shadow-lg'>
              <div className='mb-6 flex items-start justify-between'>
                <div>
                  <Text
                    variant='body-medium'
                    weight='semibold'
                    className='mb-1'>
                    {scale.label}
                  </Text>
                  <Text
                    variant='body-small'
                    color='secondary'>
                    {scale.usage}
                  </Text>
                </div>
                <code className='bg-base-200 text-caption text-base-700 dark:bg-base-800 dark:text-base-300 rounded px-2 py-1 font-mono'>
                  {scale.variant}
                </code>
              </div>

              <Text
                variant={scale.variant}
                className='wrap-break-word'>
                The quick brown fox jumps over the lazy dog
              </Text>

              <div className='border-base-200 dark:border-base-800 mt-4 flex items-center gap-6 border-t pt-4'>
                <Text
                  variant='caption'
                  color='secondary'
                  className='font-mono'>
                  Regular
                </Text>
                <Text
                  variant='caption'
                  color='secondary'
                  className='font-mono'>
                  <Text
                    variant={scale.variant}
                    weight='medium'
                    className='inline'>
                    Medium
                  </Text>
                </Text>
                <Text
                  variant='caption'
                  color='secondary'
                  className='font-mono'>
                  <Text
                    variant={scale.variant}
                    weight='semibold'
                    className='inline'>
                    Semibold
                  </Text>
                </Text>
                <Text
                  variant='caption'
                  color='secondary'
                  className='font-mono'>
                  <Text
                    variant={scale.variant}
                    weight='bold'
                    className='inline'>
                    Bold
                  </Text>
                </Text>
              </div>
            </div>
          ))}
        </div>

        <div className='border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-950 mt-12 rounded-xl border p-8'>
          <Text
            as='h2'
            variant='heading-medium'
            weight='bold'
            color='primary'
            className='mb-4'>
            About This Scale
          </Text>
          <Text
            as='p'
            variant='body-medium'
            color='primary'>
            This type scale uses a 1.2 (Minor Third) ratio, providing a balanced
            progression that works well across various contexts. The scale
            includes display sizes for marketing content, heading sizes for
            structured content, and body sizes for readable text at different
            emphasis levels.
          </Text>
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Recipes/Typography/Type Scale',
  component: TypeScale,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Visual demonstration of the complete typography scale with all variants, weights, and their recommended use cases. Shows the mathematical progression and hierarchy of the type system.',
      },
    },
  },
} satisfies Meta<typeof TypeScale>

export default meta

type Story = StoryObj<typeof TypeScale>

export const Default: Story = {}
