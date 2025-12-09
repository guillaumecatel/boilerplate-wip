/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'

export default getViteConfig({
  // @ts-expect-error: Missing types for Vitest config in Astro's getViteConfig
  test: {
    typecheck: {
      tsconfig: 'tsconfig.test.json',
    },
    coverage: {
      include: ['src/**/*.ts', 'src/**/*.astro'],
    },
  },
})
