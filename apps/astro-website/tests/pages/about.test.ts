import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, it } from 'vitest'

import About from '@/pages/about.astro'

describe('About page', async () => {
  it('should render the about page', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(About)

    expect(result).toContain('About')
  })
})
