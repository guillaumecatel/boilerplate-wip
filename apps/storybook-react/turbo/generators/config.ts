import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('@myorg/storybook-react create stories', {
    description: '📖 Create a new stories file',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the stories file?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{pascalCase name}}.stories.tsx',
        templateFile: './templates/stories.hbs',
      },
    ],
  })
}
