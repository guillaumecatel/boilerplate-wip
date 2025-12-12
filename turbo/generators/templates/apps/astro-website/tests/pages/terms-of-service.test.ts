import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, it } from 'vitest'

import TermsOfService from '@/pages/terms-of-service.astro'

describe('Terms of Service page', async () => {
  it('should render the terms of service page', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(TermsOfService)

    expect(result).toContain('Terms of Service')
  })
})
