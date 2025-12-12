# Storybook React

Une application Storybook pour développer et documenter des composants React avec support de l'internationalisation.

[English version](./README.md)

## Fonctionnalités

- 📖 Storybook 10 avec React
- 🌍 Support i18n avec Paraglide.js (Français/Anglais)
- 🎨 Intégration Tailwind CSS 4
- ♿ Tests d'accessibilité avec @storybook/addon-a11y
- 🧪 Tests de composants avec Vitest et Playwright
- 📝 Génération automatique de documentation
- 🔄 Rechargement de module à chaud

## Prérequis

- **Node.js** >= 24.0.0
- **pnpm** >= 10.0.0 (gestionnaire de paquets)
- **nvm** (Node Version Manager) - recommandé

```bash
# Installer la bonne version de Node.js
nvm use

# Installer les dépendances
pnpm install
```

## Scripts Disponibles

### Développement

```bash
# Démarrer le serveur de développement Storybook sur le port 9009
pnpm dev

# Vérification des types
pnpm typecheck
```

### Build

```bash
# Build Storybook statique
pnpm build
```

### Tests

```bash
# Lancer les tests de composants avec Vitest
pnpm test

# Lancer les tests en mode watch
pnpm test --watch
```

### Maintenance

```bash
# Nettoyer les fichiers générés
pnpm clean
```

## Commandes de Génération

Cette application inclut un générateur Turbo pour créer de nouvelles stories :

### Créer une Story

```bash
# Depuis la racine du workspace
pnpm turbo gen storybook-react create stories

# Ou depuis le dossier de l'app
pnpm gen
```

Cela va :

- Créer `src/VotreComposant.stories.tsx` avec la configuration i18n
- Inclure le template de story par défaut avec les decorators

## Structure du Projet

```text
storybook-react/
├── .storybook/
│   ├── main.ts             # Configuration Storybook
│   ├── preview.tsx         # Decorators et paramètres globaux
│   ├── style.css           # Styles globaux
│   ├── vitest.setup.ts     # Configuration Vitest
│   ├── i18n/               # Fichiers i18n auto-générés (Paraglide)
│   └── decorators/
│       └── withTranslations.tsx  # Decorator i18n
├── src/
│   └── Welcome.stories.tsx # Story exemple
├── public/                 # Assets statiques
├── turbo/
│   ├── package.json        # Config Turbo
│   └── generators/
│       ├── config.ts       # Définitions des générateurs
│       └── templates/      # (Utilise les templates partagés du monorepo)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.shims.d.ts
```

## Internationalisation

Les stories supportent plusieurs langues avec Paraglide.js :

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import * as m from '../.storybook/i18n/messages'

const meta = {
  title: 'Example/Welcome',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div>
      <h1>{m.welcome()}</h1>
      <p>{m.description()}</p>
    </div>
  ),
}
```

### Locales Disponibles

- `fr` - Français (par défaut)
- `en` - Anglais

Changez de locale via la toolbar dans Storybook.

## Tailwind CSS

Tailwind CSS 4 est pré-configuré. Utilisez les classes Tailwind directement dans vos stories :

```tsx
export const Styled: Story = {
  render: () => (
    <button className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'>
      Bouton
    </button>
  ),
}
```

La configuration est importée du package workspace `tailwind-config`.

## Tests d'Accessibilité

L'addon a11y est activé par défaut. Visualisez les violations d'accessibilité dans le panneau Storybook :

```tsx
export const AccessibleButton: Story = {
  render: () => <button aria-label='Fermer'>×</button>,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      },
    },
  },
}
```

## Tests de Composants

Écrivez des tests de composants avec Vitest et Playwright :

```tsx
import { test, expect } from '@storybook/experimental-addon-vitest'
import { composeStories } from '@storybook/react'
import * as stories from './Button.stories'

const { Primary } = composeStories(stories)

test('renders primary button', async ({ mount }) => {
  const component = await mount(<Primary />)
  await expect(component.getByRole('button')).toBeVisible()
})
```

Lancer les tests :

```bash
pnpm test
```

## Ajouter des Addons

Pour ajouter des addons Storybook, installez-les et mettez à jour `.storybook/main.ts` :

```bash
pnpm add -D @storybook/addon-controls
```

```typescript
// .storybook/main.ts
export default {
  addons: [
    '@storybook/addon-controls',
    // ... autres addons
  ],
}
```

## Sortie de Build

Exécuter `pnpm build` génère un Storybook statique dans `storybook-static/` qui peut être déployé sur n'importe quel service d'hébergement statique.

## Workflow de Développement

1. **Créer une story** : `pnpm gen` → Choisir "create stories"
2. **Démarrer Storybook** : `pnpm dev`
3. **Écrire des stories de composants** : Ajouter des stories dans le dossier `src/`
4. **Tester les composants** : `pnpm test`
5. **Build pour le déploiement** : `pnpm build`

## Licence

UNLICENSED (application privée)
