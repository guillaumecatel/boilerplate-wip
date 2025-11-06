import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'

import { overwriteGetLocale } from '@/i18n/runtime.js'

import Index from '@/pages/index.astro'

test('Index page', async () => {
  overwriteGetLocale(() => 'en')
  const container = await AstroContainer.create()
  const result = await container.renderToString(Index)
  console.log(result)
  expect(result).toContain('Simple website')
})
