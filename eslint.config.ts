import { includeIgnoreFile } from '@eslint/compat'
import { ConfigWithExtendsArray } from '@eslint/config-helpers'
import css from '@eslint/css'
import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import pluginAstro from 'eslint-plugin-astro'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

export type Config = Partial<
  Record<'astro' | 'react' | 'json' | 'markdown' | 'css' | 'prettier', boolean>
>

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url))

const config = (config: Config) => {
  const defaultConfig: ConfigWithExtendsArray = [
    globalIgnores(['.husky', 'pnpm-lock.yaml']),
    includeIgnoreFile(gitignorePath),

    tseslint.configs.recommended,

    {
      files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      plugins: { js },
      extends: ['js/recommended'],
      languageOptions: {
        globals: { ...globals.browser, ...globals.node, ...globals.vitest },
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-empty-object-type': [
          'error',
          { allowInterfaces: 'with-single-extends' },
        ],
      },
    },
  ]

  if (config.react) {
    defaultConfig.push({
      files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      plugins: { react: pluginReact },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
    })
  }

  if (config.astro) {
    defaultConfig.push({
      files: ['**/*.astro'],
      plugins: { astro: pluginAstro },
      extends: ['astro/recommended', 'astro/jsx-a11y-recommended'],
    })
  }

  if (config.json) {
    defaultConfig.push({
      files: ['**/*.json'],
      plugins: { json },
      language: 'json/json',
      extends: ['json/recommended'],
    })

    defaultConfig.push({
      files: ['**/*.jsonc'],
      plugins: { json },
      language: 'json/jsonc',
      extends: ['json/recommended'],
    })
    defaultConfig.push({
      files: ['**/*.json5'],
      plugins: { json },
      language: 'json/json5',
      extends: ['json/recommended'],
    })
  }

  if (config.markdown) {
    defaultConfig.push({
      files: ['**/*.md'],
      plugins: { markdown },
      language: 'markdown/commonmark',
      extends: ['markdown/recommended'],
    })
  }

  if (config.css) {
    defaultConfig.push({
      files: ['**/*.css'],
      plugins: { css },
      language: 'css/css',
      extends: ['css/recommended'],
    })
  }

  if (config.prettier) {
    defaultConfig.push({
      plugins: { prettier: pluginPrettier },
      rules: { 'prettier/prettier': 'off' },
    })
  }

  return defineConfig(defaultConfig)
}

export default config({
  react: true,
  astro: true,
  json: true,
  markdown: true,
  css: true,
  prettier: true,
})
