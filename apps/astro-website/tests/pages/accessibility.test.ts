import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, it } from 'vitest'

import Accessibility from '@/pages/accessibility.astro'

describe('Accessibility page', async () => {
  it('should render the accessibility page', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Accessibility)

    expect(result).toContain('Accessibility')
  })
})
