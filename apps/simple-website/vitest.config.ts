import { getViteConfig } from 'astro/config'

export default getViteConfig({
  // @ts-expect-error: Missing types for Vitest config in Astro's getViteConfig
  test: {
    globals: true,
    typecheck: {
      tsconfig: 'tsconfig.test.json',
    },
    coverage: {
      include: ['src/**/*.ts', 'src/**/*.astro'],
    },
    setupFiles: ['tests/setup-tests.ts'],
  },
})
