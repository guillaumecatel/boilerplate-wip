import reactRenderer from '@astrojs/react/server.js'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { beforeAll, describe, expect, it } from 'vitest'

import { overwriteGetLocale } from '@/i18n/runtime.js'

import Index from '@/pages/index.astro'

describe('Index page', async () => {
  let container: AstroContainer

  beforeAll(async () => {
    overwriteGetLocale(() => 'en')
    container = await AstroContainer.create()
    container.addServerRenderer({ renderer: reactRenderer })
  })

  it('should render the index page', async () => {
    const result = await container.renderToString(Index)
    expect(result).toContain('Simple Website')
  })
})
