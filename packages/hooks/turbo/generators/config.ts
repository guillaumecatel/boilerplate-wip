import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('@myorg/hooks create hook', {
    description: '⚛️🧪 Create a new hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the hook?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{camelCase name}}.tsx',
        templateFile: 'templates/react-hook/hook.hbs',
      },
      {
        type: 'add',
        path: 'tests/{{camelCase name}}.test.tsx',
        templateFile: 'templates/react-hook/test.hbs',
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
            "import": "./dist/{{camelCase name}}.js",
            "require": "./dist/{{camelCase name}}.cjs",
            "types": "./dist/{{camelCase name}}.d.ts"
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
        template: `export * from './{{camelCase name}}'\n`,
      },
    ],
  })
}
