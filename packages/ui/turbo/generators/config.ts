import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('@myorg/ui create component', {
    description: '⚛️ Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: '../../apps/storybook-react/src/components/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.hbs',
      },
      {
        type: 'add',
        path: 'tests/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.hbs',
      },
      {
        type: 'append',
        path: 'package.json',
        pattern: /"exports": {(?<insertion>)/,
        template: `    "./{{kebabCase name}}": "./src/{{pascalCase name}}.tsx",`,
      },
      {
        type: 'append',
        path: 'package.json',
        pattern: /"publishConfig": {\s*"exports": {(?<insertion>)/,
        template: `      "./{{kebabCase name}}": {
            "import": "./dist/{{pascalCase name}}.js",
            "require": "./dist/{{pascalCase name}}.cjs",
            "types": "./dist/{{pascalCase name}}.d.ts"
          },`,
      },
      {
        type: 'modify',
        path: 'package.json',
        transform: (content) =>
          JSON.stringify(JSON.parse(content), null, 2) + '\n',
      },
      {
        type: 'append',
        path: 'src/index.ts',
        template: `export * from './{{pascalCase name}}'\n`,
      },
    ],
  })
}
