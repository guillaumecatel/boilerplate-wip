import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setup-test.ts',
    typecheck: {
      tsconfig: 'tsconfig.test.json',
    },
    coverage: {
      include: ['src/**/*.tsx'],
      exclude: [
        'src/useOnce.tsx',
        'src/useLocalStorage.tsx',
        'src/useDebounce.tsx',
        'src/useMultiSelect.tsx',
        'src/useControlledState.tsx',
      ],
    },
  },
})
