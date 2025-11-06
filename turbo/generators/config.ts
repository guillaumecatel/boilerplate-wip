import type { PlopTypes } from '@turbo/gen'

import fs from 'node:fs'

import initActions from './actions'
import { APP_TEMPLATES, PACKAGE_TEMPLATES } from './constants'
import initHelpers from './helpers'
import type {
  AppTemplate,
  InstallDepsActionData,
  PackageTemplate,
  PromptData,
} from './types'
import { validateName } from './validators'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  initHelpers(plop)
  initActions(plop)

  plop.setGenerator('app', {
    description: '💻 Create a new application inside project',
    prompts: [
      {
        type: 'list',
        name: 'template',
        message: 'Choose an app template',
        choices: APP_TEMPLATES,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Choose an app name',
        validate: (input) => validateName(input, 'Name'),
      },
      {
        type: 'checkbox',
        name: 'packages',
        message: 'Wich packages do you want to include?',
        choices: fs
          .readdirSync('packages')
          .filter((name) => {
            const stat = fs.statSync(`packages/${name}`)
            return stat.isDirectory()
          })
          .map(
            (name) => `@${plop.getHelper('organizationScopeName')()}/${name}`,
          ),
        when: () => {
          return fs.readdirSync('packages').length > 0
        },
      },
    ],

    actions: (answers) => {
      const actions: PlopTypes.ActionType[] = []
      const { name, template, packages } = answers as PromptData<AppTemplate>

      // copy template files
      actions.push({
        type: 'addMany',
        base: `templates/apps/${template}`,
        destination: `apps/${plop.getHelper('kebabCase')(name)}`,
        templateFiles: [`templates/apps/${template}/**`],
      })

      actions.push({
        type: 'installDeps',
        data: {
          packagePath: `apps/${plop.getHelper('kebabCase')(name)}`,
          packages: packages || [],
        } as InstallDepsActionData,
      })

      return actions
    },
  })

  plop.setGenerator('package', {
    description: '📦 Create a new package',
    prompts: [
      {
        type: 'list',
        name: 'template',
        message: 'Choose a package template',
        choices: PACKAGE_TEMPLATES,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Choose a package name',
        validate: (input) => validateName(input, 'Name'),
      },
      {
        type: 'input',
        name: 'description',
        message: 'Set a description (optional)',
      },
      {
        type: 'checkbox',
        name: 'packages',
        message: 'Wich packages do you want to include? (optional)',
        choices: fs
          .readdirSync('packages')
          .filter((name) => {
            const stat = fs.statSync(`packages/${name}`)
            return stat.isDirectory()
          })
          .map(
            (name) => `@${plop.getHelper('organizationScopeName')()}/${name}`,
          ),
        when: () => {
          return fs.readdirSync('packages').some((name) => {
            const stat = fs.statSync(`packages/${name}`)
            return stat.isDirectory()
          })
        },
      },
    ],

    actions: (answers) => {
      const actions: PlopTypes.ActionType[] = []
      const { name, template, packages } =
        answers as PromptData<PackageTemplate>

      // copy common files
      actions.push({
        type: 'addMany',
        base: `templates/shared/base`,
        destination: `packages/${plop.getHelper('kebabCase')(name)}`,
        templateFiles: [`templates/shared/base/**`],
        data: { dir: 'packages' },
      })

      // copy templates files
      actions.push({
        type: 'addMany',
        base: `templates/packages/${template}`,
        destination: `packages/${plop.getHelper('kebabCase')(name)}`,
        templateFiles: [`templates/packages/${template}/**`],
      })

      if (
        template === 'typescript-library' ||
        template === 'typescript-utilities'
      ) {
        actions.push({
          type: 'addMany',
          base: `templates/shared/ts-file`,
          destination: `packages/${plop.getHelper('kebabCase')(name)}/turbo/generators/templates/ts-file`,
          templateFiles: [`templates/shared/ts-file/**`],
        })
      }

      // add
      if (template === 'react-library') {
        actions.push({
          type: 'addMany',
          base: `templates/shared/react-component`,
          destination: `packages/${plop.getHelper('kebabCase')(name)}/turbo/generators/templates/react-component`,
          templateFiles: [`templates/shared/react-component/**`],
        })
      }

      actions.push({
        type: 'installDeps',
        data: {
          packagePath: `packages/${plop.getHelper('kebabCase')(name)}`,
          packages: packages || [],
        } as InstallDepsActionData,
      })

      return actions
    },
  })
}
