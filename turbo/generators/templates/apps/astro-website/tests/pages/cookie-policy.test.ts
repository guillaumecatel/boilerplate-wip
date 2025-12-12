import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, it } from 'vitest'

import CookiePolicy from '@/pages/cookie-policy.astro'

describe('Cookie Policy page', async () => {
  it('should render the cookie policy page', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(CookiePolicy)

    expect(result).toContain('Cookie Policy')
  })
})
