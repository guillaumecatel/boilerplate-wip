import { Grid, Text } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Recipes/Layouts/Landing Page',
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
        cols={1}
        gap='2xl'
        className='mx-auto max-w-7xl'>
        {/* Hero Section */}
        <Grid.Item>
          <div className='from-accent-600 via-accent-700 to-accent-800 w-full rounded-lg bg-gradient-to-br p-16 text-center text-white'>
            <Text
              as='h1'
              variant='display-large'
              weight='bold'
              className='mb-4'>
              Votre solution parfaite
            </Text>
            <Text
              as='p'
              variant='heading-medium'
              className='text-accent-100 mx-auto mb-8'>
              Découvrez comment notre produit peut transformer votre façon de
              travailler et augmenter votre productivité.
            </Text>
            <div className='flex justify-center gap-4'>
              <button className='text-accent-700 hover:bg-accent-50 rounded-lg bg-white px-8 py-3 font-semibold transition-colors'>
                Commencer gratuitement
              </button>
              <button className='bg-accent-800 hover:bg-accent-900 border-accent-600 rounded-lg border px-8 py-3 font-semibold text-white transition-colors'>
                En savoir plus
              </button>
            </div>
          </div>
        </Grid.Item>

        {/* Features Section */}
        <Grid.Item>
          <div className='mb-12 text-center'>
            <Text
              as='h2'
              variant='display-medium'
              weight='bold'
              className='mb-4'>
              Fonctionnalités principales
            </Text>
            <Text
              as='p'
              variant='body-large'
              color='secondary'
              className='mx-auto'>
              Tout ce dont vous avez besoin pour réussir, dans une seule
              solution complète.
            </Text>
          </div>

          <Grid
            cols={3}
            gap='lg'>
            {[
              {
                icon: '🚀',
                title: 'Rapide',
                desc: 'Performance optimale pour une expérience fluide',
              },
              {
                icon: '🔒',
                title: 'Sécurisé',
                desc: 'Vos données sont protégées avec les meilleurs standards',
              },
              {
                icon: '📊',
                title: 'Analytique',
                desc: 'Suivez vos performances en temps réel',
              },
              {
                icon: '🎨',
                title: 'Personnalisable',
                desc: "Adaptez l'interface à vos besoins",
              },
              {
                icon: '🔧',
                title: 'Simple',
                desc: 'Prise en main rapide et intuitive',
              },
              {
                icon: '💬',
                title: 'Support',
                desc: 'Équipe disponible 24/7 pour vous aider',
              },
            ].map((feature, i) => (
              <Grid.Item key={i}>
                <div className='dark:bg-base-900 border-base-200 dark:border-base-800 rounded-lg border bg-white p-8 text-center transition-shadow hover:shadow-lg'>
                  <div className='mb-4 text-5xl'>{feature.icon}</div>
                  <Text
                    as='h3'
                    variant='heading-medium'
                    weight='bold'
                    className='mb-2'>
                    {feature.title}
                  </Text>
                  <Text
                    as='p'
                    variant='body-medium'
                    color='secondary'>
                    {feature.desc}
                  </Text>
                </div>
              </Grid.Item>
            ))}
          </Grid>
        </Grid.Item>

        {/* Testimonials Section */}
        <Grid.Item>
          <div className='mb-12 text-center'>
            <Text
              as='h2'
              variant='display-medium'
              weight='bold'
              className='mb-4'>
              Ce que disent nos clients
            </Text>
            <Text
              as='p'
              variant='body-large'
              color='secondary'
              className='mx-auto'>
              Rejoignez des milliers d'utilisateurs satisfaits dans le monde
              entier.
            </Text>
          </div>

          <Grid
            cols={3}
            gap='md'>
            {[
              {
                name: 'Marie D.',
                role: 'CEO, StartupCo',
                text: 'Excellent produit qui a transformé notre workflow !',
              },
              {
                name: 'Pierre L.',
                role: 'Designer',
                text: 'Interface intuitive et features puissantes.',
              },
              {
                name: 'Sophie M.',
                role: 'Developer',
                text: "Le meilleur outil que j'ai utilisé cette année.",
              },
            ].map((testimonial, i) => (
              <Grid.Item key={i}>
                <div className='dark:bg-base-900 border-base-200 dark:border-base-800 rounded-lg border bg-white p-6'>
                  <div className='mb-4 flex items-center gap-3'>
                    <div className='bg-accent-600 flex h-12 w-12 items-center justify-center rounded-full font-bold text-white'>
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <Text
                        as='div'
                        variant='body-medium'
                        weight='semibold'>
                        {testimonial.name}
                      </Text>
                      <Text
                        as='div'
                        variant='body-small'
                        color='secondary'>
                        {testimonial.role}
                      </Text>
                    </div>
                  </div>
                  <Text
                    as='p'
                    variant='body-medium'
                    className='text-base-700 dark:text-base-300 italic'>
                    "{testimonial.text}"
                  </Text>
                  <div className='mt-3 text-yellow-500'>⭐⭐⭐⭐⭐</div>
                </div>
              </Grid.Item>
            ))}
          </Grid>
        </Grid.Item>

        {/* CTA Section */}
        <Grid.Item>
          <div className='bg-accent-600 rounded-lg p-12 text-center text-white'>
            <Text
              as='h2'
              variant='display-medium'
              weight='bold'
              className='mb-4'>
              Prêt à commencer ?
            </Text>
            <Text
              as='p'
              variant='heading-medium'
              className='text-accent-100 mx-auto mb-8'>
              Rejoignez-nous dès aujourd'hui et profitez de 30 jours d'essai
              gratuit.
            </Text>
            <button className='text-accent-700 hover:bg-accent-50 rounded-lg bg-white px-10 py-4 text-lg font-semibold transition-colors'>
              Démarrer maintenant
            </button>
            <Text
              as='p'
              variant='body-small'
              className='text-accent-200 mt-4'>
              Aucune carte de crédit requise
            </Text>
          </div>
        </Grid.Item>
      </Grid>
    </div>
  ),
}
