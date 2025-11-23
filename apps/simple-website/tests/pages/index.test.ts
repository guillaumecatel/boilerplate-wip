import mdxRenderer from '@astrojs/mdx/server.js'
import reactRenderer from '@astrojs/react/server.js'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, it } from 'vitest'

import { overwriteGetLocale } from '@/i18n/runtime.js'

import Index from '@/pages/index.astro'

describe('Index page', async () => {
  it('should render the index page', async () => {
    overwriteGetLocale(() => 'en')
    const container = await AstroContainer.create()
    container.addServerRenderer({ renderer: reactRenderer })
    container.addServerRenderer({ renderer: mdxRenderer })
    const result = await container.renderToString(Index)
    expect(result).toContain('Simple Website')
  })
})
