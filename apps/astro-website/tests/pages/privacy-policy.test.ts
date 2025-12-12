import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, it } from 'vitest'

import PrivacyPolicy from '@/pages/privacy-policy.astro'

describe('Privacy Policy page', async () => {
  it('should render the privacy policy page', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(PrivacyPolicy)

    expect(result).toContain('Privacy Policy')
  })
})
