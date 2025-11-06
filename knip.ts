import { type KnipConfig } from 'knip'

const config: KnipConfig = {
  astro: {
    config: ['astro.config.{js,cjs,mjs,ts,mts}'],
    entry: [
      'src/content/config.ts',
      'src/content.config.ts',
      'src/pages/**/*.{astro,mdx,js,ts}',
      '!src/pages/**/_*',
      '!src/pages/**/_*/**',
      'src/content/**/*.mdx',
      'src/middleware.{js,ts}',
      'src/middleware/**/*.{js,ts}',
      'src/actions/index.{js,ts}',
    ],
    project: ['src/**/*'],
  },
  ignore: [
    'build/**',
    'dist/**',
    '**/i18n/**',
    '**/turbo/**',
    '**/vitest.shims.d.ts',
  ],
  ignoreDependencies: [
    /@types\/.*/,
    'eslint-plugin-jsx-a11y',
    '@typescript-eslint/parser',
    '@turbo/gen',
  ],
}

export default config
